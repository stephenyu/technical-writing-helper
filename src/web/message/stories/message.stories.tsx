import * as React from 'react';
import { Message, MessageProps } from '../message';
import { Story } from '@storybook/react/types-6-0';

// This default export determines where your story goes in the story list
export default {
  title: 'Message',
  component: Message,
};

const Template: Story<MessageProps> = (args) => <Message {...args}/>

export const Main = Template.bind({});

Main.args = {
  message: 'Hello World'
};
