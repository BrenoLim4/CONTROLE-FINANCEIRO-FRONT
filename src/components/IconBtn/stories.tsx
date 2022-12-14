import { Meta, Story } from '@storybook/react';

import { FaEllipsisV } from 'react-icons/fa';
import IconBtn from './index';
import { IconBtnProps } from './interfaces';

export default {
  title: 'Button/IconBtn',
  component: IconBtn,
} as Meta<IconBtnProps>;

const Template: Story<IconBtnProps> = (args) => (
  <IconBtn {...args}>
    <FaEllipsisV />
  </IconBtn>
);

export const Primary: Story<IconBtnProps> = Template.bind({});
Primary.args = {
  color: 'green.8',
};

export const Secondary: Story<IconBtnProps> = Template.bind({});
Secondary.args = {
  template: 'secondary',
};
