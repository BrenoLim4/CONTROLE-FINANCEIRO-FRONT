import { Meta, Story } from '@storybook/react';

import TextInput from '.';
import { TextInputProps } from './interfaces';

export default {
  title: 'Input/TextInput',
  component: TextInput,
} as Meta<TextInputProps>;

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />;

export const Default: Story<TextInputProps> = Template.bind({});
Default.args = {
  label: 'Teste',
  placeholder: 'Digite algo',
};

export const Loading: Story<TextInputProps> = Template.bind({});
Loading.args = {
  label: 'Teste',
  placeholder: 'Digite algo',
  loading: true,
};

export const Error: Story<TextInputProps> = Template.bind({});
Error.args = {
  label: 'Teste',
  placeholder: 'Digite algo',
  error: 'Erro teste',
};
