import React from "react";
import {useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Credentials } from '../../graphql';
import * as yup from "yup";

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
}).required();

export interface SignInFormProps {
    onSubmit: (credentials: Credentials) => void;
  }

export const SignInForm = (props: SignInFormProps) => {
    const {onSubmit} = props
    const { register, handleSubmit, formState: { errors } } = useForm<Credentials>({
        resolver: yupResolver(schema)
    });

    return(
        <form className="flex flex-col w-400" onSubmit={handleSubmit(onSubmit)}>
            <label>Email</label>
            <input data-testid="email-input" type="email" className=""{...register("email", {required: true})}/>
            {errors.email && <p data-testid="error-msg-email" className="text-error">email is required field</p>}
            <label className="pass">Password</label>
            <input data-testid="password-input" type="password" {...register("password", {required: true})}/>
            {errors.password && <p data-testid="error-msg-pass" className="text-error">password is required field</p>}
            <input className="mt-5 btn-primary" data-testid="button" type="submit" value="Sign in" />
        </form> 
    );
}