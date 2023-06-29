/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, userEvent } from "../../test/test-utils";
import { SignInForm } from "./SignInForm";
  

describe('<SignInForm />', () => {
    const mockOnSubmit = jest.fn()

    test('calls the onSubmit function', async () => {
        const {getByRole, getByTestId, queryByText } = render(<SignInForm onSubmit={mockOnSubmit} />)
        const email = getByTestId('email-input')
        await userEvent.type(email, "ikeridivine@gmail.com");

        const password = getByTestId('password-input')
        await userEvent.type(password, "12345");

        const submit = getByRole('button', {
            name: /sign in/i
        })
        userEvent.click(submit);

        expect(getByTestId("email-input")).toHaveValue("ikeridivine@gmail.com");
        expect(getByTestId("password-input")).toHaveValue("12345");

        expect(queryByText('email is required field')).not.toBeInTheDocument();
        expect(queryByText('password is required field')).not.toBeInTheDocument();

    })

    test('invalid form submission', async () => {
        const { getByText, findByText } = render(<SignInForm onSubmit={mockOnSubmit} />)
       
        userEvent.click(getByText('Sign in'));

        expect(await findByText('email is required field')).toBeTruthy();
        expect(await findByText('password is required field')).toBeTruthy();
    })
})