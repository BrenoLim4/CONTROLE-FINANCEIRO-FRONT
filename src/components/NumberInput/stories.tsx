import { Meta, Story } from '@storybook/react';
import { Row, RowItem } from '../Row';

import NumberInput from '.';
import { NumberInputProps } from './interfaces';
import TextInput from '../TextInput';

export default {
  title: 'Input/NumberInput',
  component: NumberInput,
} as Meta<NumberInputProps>;

const Template1: Story<NumberInputProps> = (args) => <NumberInput {...args} />;

export const Default: Story<NumberInputProps> = Template1.bind({});
Default.args = {
  label: 'Teste',
  placeholder: 'Digite algo',
};

export const Loading: Story<NumberInputProps> = Template1.bind({});
Loading.args = {
  label: 'Teste',
  placeholder: 'Digite algo',
  loading: true,
};

export const Error: Story<NumberInputProps> = Template1.bind({});
Error.args = {
  label: 'Teste',
  placeholder: 'Digite algo',
  error: 'Erro teste',
};

const Template2: Story<NumberInputProps> = (args) => (
  <Row>
    <RowItem>
      <NumberInput {...args} />
    </RowItem>
    <RowItem>
      <TextInput label={'Teste'} placeholder="Digite algo" />
    </RowItem>
  </Row>
);

export const VsTextInput: Story<NumberInputProps> = Template2.bind({});
VsTextInput.args = {
  label: 'Teste',
  placeholder: 'Digite algo',
  mask: '###.###.###-##',
};
