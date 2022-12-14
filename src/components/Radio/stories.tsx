import { Meta, Story } from '@storybook/react';

import Radio from '.';
import { RadioGoupProps } from './interfaces';
import { Row } from '../Row';
import TextInput from '../TextInput';

export default {
  title: 'Input/Radio',
  component: Radio,
} as Meta<RadioGoupProps>;

const Template: Story<RadioGoupProps> = (args) => <Radio {...args} />;

export const Default: Story<RadioGoupProps> = Template.bind({});
Default.args = {
  label: 'Opções',
  items: [
    { value: 'value1', label: 'Opção 1' },
    { value: 'value2', label: 'Opção 2' },
  ],
};

export const Loading: Story<RadioGoupProps> = Template.bind({});
Loading.args = {
  label: 'Opções',
  items: [
    { value: 'value1', label: 'Opção 1' },
    { value: 'value2', label: 'Opção 2' },
  ],
  loading: true,
};

export const Error: Story<RadioGoupProps> = Template.bind({});
Error.args = {
  label: 'Opções',
  items: [
    { value: 'value1', label: 'Opção 1' },
    { value: 'value2', label: 'Opção 2' },
  ],
  error: 'Erro teste',
};

const Template2: Story<RadioGoupProps> = (args) => (
  <Row>
    <TextInput label="Teste" />
    <Radio {...args} />
  </Row>
);

export const VsInput: Story<RadioGoupProps> = Template2.bind({});
VsInput.args = {
  label: 'Opções',
  items: [
    { value: 'value1', label: 'Opção 1' },
    { value: 'value2', label: 'Opção 2' },
  ],
};
