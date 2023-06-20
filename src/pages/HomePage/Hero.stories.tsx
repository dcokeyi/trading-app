import React from 'react';
import { Meta } from '@storybook/react';
import { Hero } from './Hero';

export default {
  title: 'Pages/Home',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const HeroStory = () => {
  return <Hero />;
};
HeroStory.storyName = 'Hero';
