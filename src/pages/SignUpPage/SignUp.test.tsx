import React from "react";
import { render, userEvent, screen } from "../../test/test-utils";
import { SignUp } from "./SignUp";
import { AuthContextProvider } from "../../contexts";

describe('<SignUp />', () => {

    test('renders Logo', () => {
        render(<AuthContextProvider>
            <SignUp />
        </AuthContextProvider>);
        const displayedImage = document.querySelectorAll('img')[0];
        expect(displayedImage).toHaveAttribute('src', 'bullsfirst-logo.svg');
    })

    test('Signup Form', async() => {
        render(<AuthContextProvider>
            <SignUp />
        </AuthContextProvider>)
        const name = screen.getByTestId('name-input')
        await userEvent.type(name, "Okey-Ikeri Divine");

        const email = screen.getByTestId('email-input')
        await userEvent.type(email, "ikeridivine@gmail.com");

        const password = screen.getByTestId('password-input')
        await userEvent.type(password, "12345");

        const submit = screen.getByRole('button', {
            name: /sign up/i
        })
        userEvent.click(submit);
        
        expect(screen.getByTestId("name-input")).toHaveValue("Okey-Ikeri Divine")
        expect(screen.getByTestId("email-input")).toHaveValue("ikeridivine@gmail.com");
        expect(screen.getByTestId("password-input")).toHaveValue("12345");

        expect(screen.queryByText('name is required field')).not.toBeInTheDocument();
        expect(screen.queryByText('email is required field')).not.toBeInTheDocument();
        expect(screen.queryByText('password is required field')).not.toBeInTheDocument();
    })
})