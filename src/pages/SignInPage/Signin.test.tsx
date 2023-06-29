import React from "react";
import { render, userEvent, screen } from "../../test/test-utils";
import { SignIn } from "./SignIn";
import { AuthContextProvider } from "../../contexts";

describe('<SignIn />', () => {

    test('renders Logo', () => {
        render(<AuthContextProvider>
            <SignIn />
        </AuthContextProvider>);
        const displayedImage = document.querySelectorAll('img')[0];
        expect(displayedImage).toHaveAttribute('src', 'bullsfirst-logo.svg');
    })

    test('Signin Form', async() => {
        render(<AuthContextProvider>
            <SignIn />
        </AuthContextProvider>)
        const email = screen.getByTestId('email-input')
        await userEvent.type(email, "ikeridivine@gmail.com");

        const password = screen.getByTestId('password-input')
        await userEvent.type(password, "12345");

        const submit = screen.getByRole('button', {
            name: /sign in/i
        })
        userEvent.click(submit);

        expect(screen.getByTestId("email-input")).toHaveValue("ikeridivine@gmail.com");
        expect(screen.getByTestId("password-input")).toHaveValue("12345");

        expect(screen.queryByText('email is required field')).not.toBeInTheDocument();
        expect(screen.queryByText('password is required field')).not.toBeInTheDocument();
    })
})