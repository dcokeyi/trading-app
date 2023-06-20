import React from 'react';
import { render, screen } from '../../test/test-utils';
import { Hero } from './Hero';

describe('<Hero />', () => {
  render(<Hero />);

  test('renders correctly', () => {
    expect(
      screen.getByText(
        /Get better results with Bullsfirst at the helm of your portfolio/i
      )
    ).toBeTruthy();
  });

  test('renders logo and Popsicle', () => {
    render(<Hero />);
    const displayedImage = document.querySelectorAll('img')[0];
    expect(displayedImage).toHaveAttribute('src', 'bullsfirst-logo.svg');
    expect(displayedImage).toHaveAttribute('alt', 'logo');
  });

  test('Popsicle', async () => {
    await render(<Hero />);
    const displayedImage = document.querySelectorAll('img')[1];
    expect(displayedImage).toHaveAttribute('src', 'popsicle.png');
    expect(displayedImage).toHaveAttribute('alt', 'popsicle');
  });
});
