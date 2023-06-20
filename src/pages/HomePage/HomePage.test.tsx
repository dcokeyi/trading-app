import React from 'react';
import { render } from '../../test/test-utils';
import { HomePage } from './HomePage';

describe('<Home />', () => {
  test('renders correctly', async () => {
    render(<HomePage />);
  });
});
