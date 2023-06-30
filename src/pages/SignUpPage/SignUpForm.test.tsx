/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, userEvent } from "../../test/test-utils";
import { SignUpForm } from "./SignUpForm";
  

describe('<SignUpForm />', () => {
    const mockOnSubmit = jest.fn()

    test('calls the onSubmit function', async () => {
        const {getByRole, getByTestId, queryByText } = render(<SignUpForm onSubmit={mockOnSubmit} />)
        
        const name = getByTestId('name-input')
        await userEvent.type(name, "Okey-Ikeri Divine");

        const email = getByTestId('email-input')
        await userEvent.type(email, "ikeridivine@gmail.com");

        const password = getByTestId('password-input')
        await userEvent.type(password, "12345");

        const submit = getByRole('button', {
            name: /sign up/i
        })
        userEvent.click(submit);

        expect(getByTestId("name-input")).toHaveValue("Okey-Ikeri Divine");
        expect(getByTestId("email-input")).toHaveValue("ikeridivine@gmail.com");
        expect(getByTestId("password-input")).toHaveValue("12345");

        expect(queryByText('name is required field')).not.toBeInTheDocument();
        expect(queryByText('email is required field')).not.toBeInTheDocument();
        expect(queryByText('password is required field')).not.toBeInTheDocument();

    })

    test('invalid form submission', async () => {
        const { getByText, findByText } = render(<SignUpForm onSubmit={mockOnSubmit} />)
       
        userEvent.click(getByText('Sign Up'));

        expect(await findByText('Fullname is required field')).toBeTruthy();
        expect(await findByText('email is required field')).toBeTruthy();
        expect(await findByText('password is required field')).toBeTruthy();
    })
})