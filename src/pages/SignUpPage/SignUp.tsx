import React from "react";
import { SignUpDocument, SignUpInput } from "../../graphql";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
// import { useAuthContext } from "../../contexts/AuthContext"
import { SignUpForm } from "./SignUpForm";

import logo from "../../assets/bullsfirst-logo.svg"
import "./SignUp.css"
import { Storage } from "../../utils";



export const SignUp = () => {
    const navigate = useNavigate()

    const handleSignInRedirect = () => {
        navigate('/signin')
    }

    const [signUp, {error}] = useMutation(SignUpDocument)

    const onSubmit = async (signUpInput: SignUpInput) => {
        try {
            const result = await signUp({ variables: {signUpInput} })
            if (result.data) {
                const { user, accessToken } = result.data.signUp; 
                Storage.set(accessToken, user)
            }
        } catch(e) {
            console.log(error)
        }
    }
    return (
        <div className="signup__container flex flex-col">
            <img className="py-4" src={logo} alt="Logo" width="190"/>
            <SignUpForm onSubmit={onSubmit}/>
            <p className="py-2 text-primary-500 h5" onClick={handleSignInRedirect}>Sign in</p>
        </div>
    )

}