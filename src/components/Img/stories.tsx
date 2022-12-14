import { Meta, Story } from '@storybook/react';

import { ImageProps } from 'next/image';
import Img from '.';
import brasao from '../../../public/images/brasao.png';

export default {
  title: 'Image/Img',
  component: Img,
} as Meta<ImageProps>;

const Template: Story<ImageProps> = (args) => <Img {...args} />;

export const Default: Story<ImageProps> = Template.bind({});
Default.args = {
  src: brasao,
  alt: 'Imagem',
  width: 150,
  height: 200,
};
