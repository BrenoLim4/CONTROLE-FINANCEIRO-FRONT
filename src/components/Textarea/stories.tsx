import { Meta, Story } from '@storybook/react';

import Textarea from '.';
import { TextareaProps } from './interfaces';

export default {
  title: 'Input/Textarea',
  component: Textarea,
} as Meta<TextareaProps>;

const Template: Story<TextareaProps> = (args) => <Textarea {...args} />;

export const Default: Story<TextareaProps> = Template.bind({});
Default.args = {
  label: 'Teste',
  placeholder: 'Digite algo',
};

export const Loading: Story<TextareaProps> = Template.bind({});
Loading.args = {
  label: 'Teste',
  placeholder: 'Digite algo',
  loading: true,
};

export const Error: Story<TextareaProps> = Template.bind({});
Error.args = {
  label: 'Teste',
  placeholder: 'Digite algo',
  error: 'Erro teste',
};
