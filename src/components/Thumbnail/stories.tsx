import { Meta, Story } from '@storybook/react';

import { Row } from '../Row';
import Thumbnail from '.';
import { ThumbnailProps } from './interfaces';
import brasao from '../../../public/images/brasao.png';

export default {
  title: 'Image/Thumbnail',
  component: Thumbnail,
} as Meta<ThumbnailProps>;

const Template: Story<ThumbnailProps> = (args) => (
  <Row>
    <Thumbnail {...args} />
    <Thumbnail
      {...args}
      src={
        'http://sigsopedificacoes.sop.ce.gov.br/ARQUIVOS/FOTO_GERENCIAL_CONTRATADA/5004/191801.jpeg'
      }
    />
  </Row>
);

export const Default: Story<ThumbnailProps> = Template.bind({});
Default.args = {
  src: brasao,
};

export const Loading: Story<ThumbnailProps> = Template.bind({});
Loading.args = {
  src: brasao,
  loading: true,
};
