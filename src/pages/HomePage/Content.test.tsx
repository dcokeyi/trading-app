import React from 'react';
import { render, screen } from '../../test/test-utils';
import { Content } from './Content';

describe('<Content />', () => {
  test('renders correctly', async () => {
    render(<Content />);
    expect(screen.getByText(/Every account comes with/i)).toBeTruthy();
  });
});
