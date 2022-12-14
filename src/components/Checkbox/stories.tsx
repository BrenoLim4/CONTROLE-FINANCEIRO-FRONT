import { Meta, Story } from '@storybook/react';

import Checkbox from '.';
import { CheckboxGoupProps } from './interfaces';
import { Row } from '../Row';
import TextInput from '../TextInput';

export default {
  title: 'Input/Checkbox',
  component: Checkbox,
} as Meta<CheckboxGoupProps>;

const Template: Story<CheckboxGoupProps> = (args) => <Checkbox {...args} />;

export const Default: Story<CheckboxGoupProps> = Template.bind({});
Default.args = {
  label: 'Opções',
  items: [
    { value: 'value1', label: 'Opção 1' },
    { value: 'value2', label: 'Opção 2' },
  ],
};

export const Loading: Story<CheckboxGoupProps> = Template.bind({});
Loading.args = {
  label: 'Opções',
  items: [
    { value: 'value1', label: 'Opção 1' },
    { value: 'value2', label: 'Opção 2' },
  ],
  loading: true,
};

export const Error: Story<CheckboxGoupProps> = Template.bind({});
Error.args = {
  label: 'Opções',
  items: [
    { value: 'value1', label: 'Opção 1' },
    { value: 'value2', label: 'Opção 2' },
  ],
  error: 'Erro teste',
};

const Template2: Story<CheckboxGoupProps> = (args) => (
  <Row>
    <TextInput label="Teste" />
    <Checkbox {...args} />
  </Row>
);

export const VsInput: Story<CheckboxGoupProps> = Template2.bind({});
VsInput.args = {
  label: 'Opções',
  items: [
    { value: 'value1', label: 'Opção 1' },
    { value: 'value2', label: 'Opção 2' },
  ],
};
