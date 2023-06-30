import React from "react";
import {useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {  SignUpInput } from '../../graphql';
import * as yup from "yup";

const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
}).required();

export interface SignUpFormProps {
    onSubmit: (signUpInput: SignUpInput) => void;
}

export const SignUpForm = (props: SignUpFormProps) => {
    const {onSubmit} = props;

    const { register, handleSubmit, formState: { errors } } = useForm<SignUpInput>({
        resolver: yupResolver(schema)
    });

    return(
        <form className="flex flex-col w-400" onSubmit={handleSubmit(onSubmit)}>
            <label>Full Name</label>
            <input data-testid="name-input" type="text" className=""{...register("name", {required: true})}/>
            {errors.name && <p data-testid="error-msg-email" className="text-error">Fullname is required field</p>}
            <label>Email</label>
            <input data-testid="email-input" type="email" className=""{...register("email", {required: true})}/>
            {errors.email && <p data-testid="error-msg-email" className="text-error">email is required field</p>}
            <label className="pass">Password</label>
            <input data-testid="password-input" type="password" {...register("password", {required: true})}/>
            {errors.password && <p data-testid="error-msg-pass" className="text-error">password is required field</p>}
            <input className="mt-5 btn-primary" data-testid="button" type="submit" value="Sign Up" />
        </form> 
    );
}