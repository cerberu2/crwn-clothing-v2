import { useState } from "react";

import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import FromInput from "../form-input/form-input.component";

import {ButtonsContainer, SignInButton, SignInContainer, SignInContainerForm, SignInTitle } from './sign-in-form.styles.jsx';

import {BUTTON_TYPE_CLASS} from "../button/button.component.jsx";

const formFieldsDefault = {
    email: '',
    password: '',
};

const SignInForm = () => {

    const [formFields, setFormFields] = useState(formFieldsDefault);
    const { email, password } = formFields;


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value });
    }

    const resetDefaultFormFields = () => {
        setFormFields(formFieldsDefault);
    }

    const signInnWithGooglePopup = async () => {
        await signInWithGooglePopup();
    }   

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            resetDefaultFormFields();
        } catch (error) {
            switch (error.code) { 
                case 'auth/wrong-password':
                    alert("Incorrect password for email");
                    break;
                case 'auth/user-not-found':
                    alert("No user associated with this email");
                    break;
                default:
                    console.error("Error signing in user:", error);

            }
        } 
    };

    return (
        <SignInContainer>
            <SignInTitle>Already have an account?</SignInTitle>
            <span>Sign in with your email and password </span>
            <SignInContainerForm onSubmit={handleSubmit}>

                <FromInput  label="Email" type="email" value={email} onChange={handleChange} name="email" required />
                <FromInput  label="Password" type="password" value={password} onChange={handleChange} name="password" required />
                
                <ButtonsContainer>
                    <SignInButton type="submit">Sign In</SignInButton>
                    <SignInButton type="button" buttonType={BUTTON_TYPE_CLASS.google} onClick={signInnWithGooglePopup}>Google Sign In</SignInButton>
                </ButtonsContainer>   
            </SignInContainerForm>
        </SignInContainer>
    )
};

export default SignInForm;