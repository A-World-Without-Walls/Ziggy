import React from 'react';

import { Header } from './index';

export default {
  title: 'Atoms/Header',
  component: Header,
  argTypes: {}
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});

Default.args = {};
