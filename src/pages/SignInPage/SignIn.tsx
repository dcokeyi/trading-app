import React, { useEffect } from "react";
import { useMutation } from '@apollo/client';
import { Credentials, SignInDocument } from '../../graphql';
import { AuthService } from '../../services';
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext"

import logo from "../../assets/bullsfirst-logo.svg"
import './SignIn.css'
import { SignInForm } from "./SignInForm";

export const SignIn = () => {
    const { authState, setAuthState } = useAuthContext();
    const navigate = useNavigate();
    
    //Handles mutation for the signIn page
    const [signIn, {error}] = useMutation(SignInDocument);

    // redirect if user is already logged in
    useEffect(() => {
    if (authState.user) {
      navigate('/accounts');
    }
  }, [authState.user, navigate]);

    const handleSignUpRedirect = () => {
      navigate('/signup')
    }

    // OnSubmit function for form.
    const onSubmit = async (credentials:Credentials) => {
        try {
            const result = await signIn({ variables: { credentials } });
            if (result.data) {
              const { user, accessToken } = result.data.signIn;
              AuthService.setAccessToken(accessToken);
              setAuthState({ ...authState, user });
            }
          } catch (e) {
          // eat error because it is already captured in useMutation result
            console.log(error)
          }

    };
    return (
        <div className="signin__container flex flex-col">
            <img className="py-4" src={logo} alt="Logo" width="190" />
            <SignInForm onSubmit={onSubmit}/>
            <p className="py-2 text-primary-500 h5" onClick={handleSignUpRedirect}>Sign up</p>
        </div>
    );
} 
