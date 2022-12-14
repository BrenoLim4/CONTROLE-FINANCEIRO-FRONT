import { Meta, Story } from '@storybook/react';

import PasswordInput from '.';
import { PasswordInputProps } from './interfaces';
import React from 'react';

export default {
  title: 'Input/PasswordInput',
  component: PasswordInput,
} as Meta<PasswordInputProps>;

const Template: Story<PasswordInputProps> = (args) => (
  <PasswordInput {...args} />
);

export const Default: Story<PasswordInputProps> = Template.bind({});
Default.args = {
  label: 'Teste',
  placeholder: 'Digite algo',
};

export const Loading: Story<PasswordInputProps> = Template.bind({});
Loading.args = {
  label: 'Teste',
  placeholder: 'Digite algo',
  loading: true,
};

export const Error: Story<PasswordInputProps> = Template.bind({});
Error.args = {
  label: 'Teste',
  placeholder: 'Digite algo',
  error: 'Erro teste',
};
