import { Meta, Story } from '@storybook/react';

import Select from '.';
import { SelectProps } from './interfaces';

export default {
  title: 'Input/Select',
  component: Select,
} as Meta<SelectProps>;

const Template: Story<SelectProps> = (args) => (
  <Select
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

export const Default: Story<SelectProps> = Template.bind({});
Default.args = {
  label: 'Teste',
  placeholder: 'Escolha algo',
};
