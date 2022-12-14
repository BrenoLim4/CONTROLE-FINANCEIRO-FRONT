import { Meta, Story } from '@storybook/react';

import FileBtn from './index';
import { FileBtnProps } from './interfaces';

export default {
  title: 'Button/FileBtn',
  component: FileBtn,
} as Meta<FileBtnProps>;

const Template: Story<FileBtnProps> = (args) => (
  <FileBtn {...args}>Adicionar novas imagens</FileBtn>
);

export const Default: Story<FileBtnProps> = Template.bind({});
Default.args = {};
