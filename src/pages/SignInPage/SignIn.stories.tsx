import React from 'react';
import { Meta } from '@storybook/react';
import { SignIn } from './SignIn';

export default {
  title: 'Pages/Home',
  component: SignIn,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const SignInStory = () => {
  return <SignIn/>
};
SignInStory.storyName = 'Sign-In';

