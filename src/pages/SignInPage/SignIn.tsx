import React from "react";
import {useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Credentials } from "../../models/credentials";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

import logo from "../../assets/bullsfirst-logo.svg"
import './SignIn.css'

export interface SignInFormProps {
    signInError?: string;
    onSubmit?: (credentials: Credentials) => void;
}

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
}).required();

export const SignIn = (props: SignInFormProps) => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<Credentials>({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data:Credentials) => {
        if(errors) {
           navigate('/account');
           console.log(errors);
           console.log(data); 
        }
    };
    return (
        <div className="signin__container flex flex-col">
            <img className="py-4" src={logo} alt="Logo" width="190" />
            <form className="flex flex-col w-400" onSubmit={handleSubmit(onSubmit)}>
                <label>Email</label>
                <input data-testid="email-input" type="email" className=""{...register("email", {required: true})}/>
                {errors.email && <p data-testid="error-msg-email" className="text-error">email is required field</p>}
                <label className="pass">Password</label>
                <input data-testid="password-input" type="password" {...register("password", {required: true})}/>
                {errors.password && <p data-testid="error-msg-pass" className="text-error">password is required field</p>}
                <input className="mt-5 btn-primary" data-testid="button" type="submit" value="Sign in" />
            </form>
            <p className="py-2 text-primary-500 h5">Sign up</p>
        </div>
    );
} 
