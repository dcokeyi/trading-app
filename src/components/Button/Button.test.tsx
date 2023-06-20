import React from 'react';
import { render, screen} from '@testing-library/react';
import { userEvent } from '../../test/test-utils';
import { Wrapper } from './Wrapper';

describe('<Button />', () => {
  it('Should render button', () => {
    render(<Wrapper/>)
    const signIn = screen.getByText('Click Me');
    expect(signIn).toBeInTheDocument();
  });

  it('Confirm button was Clicked', async () => {
    render(<Wrapper/>)
    const signIn = screen.getByText('Click Me');
    const Clicked = screen.getByText(/the button was not clicked/i);

    userEvent.click(signIn)

    expect(Clicked).toBeInTheDocument();
  });
});
