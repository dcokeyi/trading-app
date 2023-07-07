import React from 'react';
import { Meta } from '@storybook/react';
import { SideBar } from './SideBar';
import data from  '../../mocks/data/accounts.json'

export default {
  title: 'Components',
  component: SideBar,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const SideBarStory = () => {
  return <SideBar
  title={"SideBar"} 
  items={data}/>;
};
SideBarStory.storyName = 'SideBar';