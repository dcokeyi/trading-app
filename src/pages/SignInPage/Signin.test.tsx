import React from "react";
import { render, userEvent} from "../../test/test-utils";
import { SignIn } from "./SignIn";

describe('<SignIn />', () => {
    const mockOnSubmit = jest.fn()

    test('renders Logo', () => {
        render(<SignIn onSubmit={mockOnSubmit} />);
        const displayedImage = document.querySelectorAll('img')[0];
        expect(displayedImage).toHaveAttribute('src', 'bullsfirst-logo.svg');
    })

    test('calls the onSubmit function', async () => {
        const { getByTestId, getByRole, queryByText } = render(<SignIn onSubmit={mockOnSubmit} />)
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
        const { getByText, findByText } = render(<SignIn onSubmit={mockOnSubmit} />)
        // const email = screen.getByTestId('email-input')
        // await user.type(email, "ikeridivi@gmailcom");

        // const password = screen.getByTestId('password-input')
        // await user.type(password, " ");

        // const submit = screen.getByTestId('button')
        userEvent.click(getByText('Sign in'));

        // expect(screen.getByTestId("email-input")).toHaveValue("ikeridivi@gmailcom");
        // expect(screen.getByTestId("password-input")).toHaveValue(" ");

        // await expect(mockOnSubmit).toBeCalled()

        expect(await findByText('email is required field')).toBeTruthy();
        expect(await findByText('password is required field')).toBeTruthy();
        
        
    })
})