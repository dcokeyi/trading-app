import React from 'react';
import { Meta } from '@storybook/react';
import { Navbar } from './Navbar';

export default {
  title: 'Components',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const NavbarStory = () => {
  return <Navbar name="John Smith" />;
};
NavbarStory.storyName = 'Navbar';
