import { Meta, Story } from '@storybook/react';

import { DividerProps } from '@mantine/core';
import InfoDivider from '.';

export default {
  title: 'Layout/InfoDivider',
  component: InfoDivider,
} as Meta<DividerProps>;

const Template: Story<DividerProps> = (args) => <InfoDivider {...args} />;

export const Default: Story<DividerProps> = Template.bind({});
Default.args = {
  label: 'Seção teste',
  labelPosition: 'center',
};
