import { Meta, Story } from '@storybook/react';

import { BsAlarm } from 'react-icons/bs';
import Btn from './index';
import { BtnProps } from './interfaces';
import IconTeste from '../../../public/images/sections/contratos.svg';

export default {
  title: 'Button/Btn',
  component: Btn,
} as Meta<BtnProps>;

const Template: Story<BtnProps> = (args) => <Btn {...args}>Ver mais!</Btn>;

export const Primary: Story<BtnProps> = Template.bind({});
Primary.args = {
  template: 'primary',
};

export const Secondary: Story<BtnProps> = Template.bind({});
Secondary.args = {
  template: 'secondary',
};

export const Default: Story<BtnProps> = Template.bind({});
Default.args = {};

export const Icon: Story<BtnProps> = Template.bind({});
Icon.args = {
  leftIcon: <IconTeste />,
  rightIcon: <BsAlarm />,
};

export const Loading: Story<BtnProps> = Template.bind({});
Loading.args = {
  loading: true,
};

export const Disabled: Story<BtnProps> = Template.bind({});
Disabled.args = {
  disabled: true,
};

const Template2: Story<BtnProps> = (args) => (
  <>
    <Btn {...args}>Ver mais!</Btn>
    <Btn {...args}>Ver mais!</Btn>
  </>
);

export const Multiple: Story<BtnProps> = Template2.bind({});
Multiple.args = {
  template: 'primary',
  mx: 'xs',
};
