import { useState } from "react";

import { createUserDocumentFromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import FromInput from "../form-input/form-input.component";

import './sign-in-form.styles.scss';
import Button from "../button/button.component";


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
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
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
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password </span>
            <form onSubmit={handleSubmit}>

                <FromInput  label="Email" type="email" value={email} onChange={handleChange} name="email" required />
                <FromInput  label="Password" type="password" value={password} onChange={handleChange} name="password" required />
                
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType='google' onClick={signInnWithGooglePopup}>Google Sign In</Button>
                </div>   
            </form>
        </div>
    )
};

export default SignInForm;