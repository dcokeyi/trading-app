import { Meta } from '@storybook/react';
import { AccountHeader } from './AccountHeader';

export default {
    title: 'Components',
    component: AccountHeader,
    parameters: {
      layout: 'fullscreen',
    },
  } as Meta;
  
  export const AccountHeaderStory = () => {
    return <AccountHeader/>;
  };
 AccountHeaderStory.storyName = 'AccountHeader';