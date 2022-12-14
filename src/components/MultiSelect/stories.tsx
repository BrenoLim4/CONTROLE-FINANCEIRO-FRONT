import { Meta, Story } from '@storybook/react';

import MultiSelect from '.';
import { MultiSelectProps } from './interfaces';

export default {
  title: 'Input/MultiSelect',
  component: MultiSelect,
} as Meta<MultiSelectProps>;

const Template: Story<MultiSelectProps> = (args) => (
  <MultiSelect
    {...args}
    data={[
      { value: '1', label: 'Opção 1' },
      { value: '2', label: 'Opção 2' },
      { value: '3', label: 'Opção 3' },
      { value: '4', label: 'Opção 4' },
      { value: '5', label: 'Opção 5' },
      { value: '6', label: 'Opção 6' },
      { value: '7', label: 'Opção 7' },
      { value: '8', label: 'Opção 8' },
      { value: '9', label: 'Opção 9' },
      { value: '10', label: 'Opção 10' },
    ]}
  />
);

export const Default: Story<MultiSelectProps> = Template.bind({});
Default.args = {
  label: 'Teste',
  placeholder: 'Escolha algo',
};

export const Error: Story<MultiSelectProps> = Template.bind({});
Error.args = {
  label: 'Teste',
  placeholder: 'Escolha algo',
  error: 'Erro teste',
};

export const Loading: Story<MultiSelectProps> = Template.bind({});
Loading.args = {
  label: 'Teste',
  placeholder: 'Escolha algo',
  loading: true,
};
