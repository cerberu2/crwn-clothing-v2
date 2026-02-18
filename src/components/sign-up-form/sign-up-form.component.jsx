import { useState } from "react";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FromInput from "../form-input/form-input.component";

import {SignUpButton, SignUpContainer,SignUpContainerForm, SignUpTitle} from './sign-up-form.styles.jsx';


const formFieldsDefault = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(formFieldsDefault);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value });
    }

    const resetDefaultFormFields = () => {
        setFormFields(formFieldsDefault);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            resetDefaultFormFields();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert("Cannot create user, email already in use");
            } else {
                console.error("Error creating user:", error);
            }
        } 
    };

    return (
        <SignUpContainer>
            <SignUpTitle>Don't have an account?</SignUpTitle>
            <span>Sign up with your email and password </span>
            <SignUpContainerForm onSubmit={handleSubmit}>

                <FromInput  label="Display Name" type="text" value={displayName} onChange={handleChange} name="displayName" required />
                <FromInput  label="Email" type="email" value={email} onChange={handleChange} name="email" required />
                <FromInput  label="Password" type="password" value={password} onChange={handleChange} name="password" required />
                <FromInput  label="Confirm Password" type="password" value={confirmPassword} onChange={handleChange} name="confirmPassword" required />
                
                <SignUpButton type="submit">Sign Up</SignUpButton>
            </SignUpContainerForm>
        </SignUpContainer>
    )
};

export default SignUpForm;