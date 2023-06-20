import React from 'react';
import { render, screen } from '../../test/test-utils';
import { Footer } from './Footer';

describe('<Footer />', () => {
  test('renders correctly', () => {
    render(<Footer />);
    expect(
      screen.getByText(
        /This is a demo application. All Data displayed is fictitious/i
      )
    ).toBeTruthy();
  });
});
