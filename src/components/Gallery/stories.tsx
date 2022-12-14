import { Meta, Story } from '@storybook/react';

import Gallery from '.';
import { GalleryProps } from './interfaces';

export default {
  title: 'Image/Gallery',
  component: Gallery,
} as Meta<GalleryProps>;

const items = [
  {
    src: 'http://sigsopedificacoes.sop.ce.gov.br/ARQUIVOS/FOTO_GERENCIAL_CONTRATADA/5004/191801.jpeg',
    alt: 'Teste',
  },
  {
    src: 'http://sigsopedificacoes.sop.ce.gov.br/ARQUIVOS/FOTO_GERENCIAL_CONTRATADA/5004/191801.jpeg',
    alt: 'Teste',
  },
  {
    src: 'http://sigsopedificacoes.sop.ce.gov.br/ARQUIVOS/FOTO_GERENCIAL_CONTRATADA/5004/191801.jpeg',
    alt: 'Teste',
  },
  {
    src: 'http://sigsopedificacoes.sop.ce.gov.br/ARQUIVOS/FOTO_GERENCIAL_CONTRATADA/5004/191801.jpeg',
    alt: 'Teste',
  },
  {
    src: 'http://sigsopedificacoes.sop.ce.gov.br/ARQUIVOS/FOTO_GERENCIAL_CONTRATADA/5004/191801.jpeg',
    alt: 'Teste',
  },
  {
    src: 'http://sigsopedificacoes.sop.ce.gov.br/ARQUIVOS/FOTO_GERENCIAL_CONTRATADA/5004/191801.jpeg',
    alt: 'Teste',
  },
  {
    src: 'http://sigsopedificacoes.sop.ce.gov.br/ARQUIVOS/FOTO_GERENCIAL_CONTRATADA/5004/191801.jpeg',
    alt: 'Teste',
  },
  {
    src: 'http://sigsopedificacoes.sop.ce.gov.br/ARQUIVOS/FOTO_GERENCIAL_CONTRATADA/5004/191801.jpeg',
    alt: 'Teste',
  },
  {
    src: 'http://sigsopedificacoes.sop.ce.gov.br/ARQUIVOS/FOTO_GERENCIAL_CONTRATADA/5004/191801.jpeg',
    alt: 'Teste',
  },
  {
    src: 'http://sigsopedificacoes.sop.ce.gov.br/ARQUIVOS/FOTO_GERENCIAL_CONTRATADA/5004/191801.jpeg',
    alt: 'Teste',
  },
  {
    src: 'http://sigsopedificacoes.sop.ce.gov.br/ARQUIVOS/FOTO_GERENCIAL_CONTRATADA/5004/191801.jpeg',
    alt: 'Teste',
  },
  {
    src: 'http://sigsopedificacoes.sop.ce.gov.br/ARQUIVOS/FOTO_GERENCIAL_CONTRATADA/5004/191801.jpeg',
    alt: 'Teste',
  },
  {
    src: 'http://sigsopedificacoes.sop.ce.gov.br/ARQUIVOS/FOTO_GERENCIAL_CONTRATADA/5004/191801.jpeg',
    alt: 'Teste',
  },
  {
    src: 'http://sigsopedificacoes.sop.ce.gov.br/ARQUIVOS/FOTO_GERENCIAL_CONTRATADA/5004/191801.jpeg',
    alt: 'Teste',
  },
  {
    src: 'http://sigsopedificacoes.sop.ce.gov.br/ARQUIVOS/FOTO_GERENCIAL_CONTRATADA/5004/191801.jpeg',
    alt: 'Teste',
  },
  {
    src: 'http://sigsopedificacoes.sop.ce.gov.br/ARQUIVOS/FOTO_GERENCIAL_CONTRATADA/5004/191801.jpeg',
    alt: 'Teste',
  },
  {
    src: 'http://sigsopedificacoes.sop.ce.gov.br/ARQUIVOS/FOTO_GERENCIAL_CONTRATADA/5004/191801.jpeg',
    alt: 'Teste',
  },
  {
    src: 'http://sigsopedificacoes.sop.ce.gov.br/ARQUIVOS/FOTO_GERENCIAL_CONTRATADA/5004/191801.jpeg',
    alt: 'Teste',
  },
  {
    src: 'http://sigsopedificacoes.sop.ce.gov.br/ARQUIVOS/FOTO_GERENCIAL_CONTRATADA/5004/191801.jpeg',
    alt: 'Teste',
  },
  {
    src: 'http://sigsopedificacoes.sop.ce.gov.br/ARQUIVOS/FOTO_GERENCIAL_CONTRATADA/5004/191801.jpeg',
    alt: 'Teste',
  },
  {
    src: 'http://sigsopedificacoes.sop.ce.gov.br/ARQUIVOS/FOTO_GERENCIAL_CONTRATADA/5004/191801.jpeg',
    alt: 'Teste',
  },
  {
    src: 'http://sigsopedificacoes.sop.ce.gov.br/ARQUIVOS/FOTO_GERENCIAL_CONTRATADA/5004/191801.jpeg',
    alt: 'Teste',
  },
  {
    src: 'http://sigsopedificacoes.sop.ce.gov.br/ARQUIVOS/FOTO_GERENCIAL_CONTRATADA/5004/191801.jpeg',
    alt: 'Teste',
  },
  {
    src: 'http://sigsopedificacoes.sop.ce.gov.br/ARQUIVOS/FOTO_GERENCIAL_CONTRATADA/5004/191801.jpeg',
    alt: 'Teste',
  },
  {
    src: 'http://sigsopedificacoes.sop.ce.gov.br/ARQUIVOS/FOTO_GERENCIAL_CONTRATADA/5004/191801.jpeg',
    alt: 'Teste',
  },
  {
    src: 'http://sigsopedificacoes.sop.ce.gov.br/ARQUIVOS/FOTO_GERENCIAL_CONTRATADA/5004/191801.jpeg',
    alt: 'Teste',
  },
  {
    src: 'http://sigsopedificacoes.sop.ce.gov.br/ARQUIVOS/FOTO_GERENCIAL_CONTRATADA/5004/191801.jpeg',
    alt: 'Teste',
  },
  {
    src: 'http://sigsopedificacoes.sop.ce.gov.br/ARQUIVOS/FOTO_GERENCIAL_CONTRATADA/5004/191801.jpeg',
    alt: 'Teste',
  },
  {
    src: 'http://sigsopedificacoes.sop.ce.gov.br/ARQUIVOS/FOTO_GERENCIAL_CONTRATADA/5004/191801.jpeg',
    alt: 'Teste',
  },
  {
    src: 'http://sigsopedificacoes.sop.ce.gov.br/ARQUIVOS/FOTO_GERENCIAL_CONTRATADA/5004/191801.jpeg',
    alt: 'Teste',
  },
  {
    src: 'http://sigsopedificacoes.sop.ce.gov.br/ARQUIVOS/FOTO_GERENCIAL_CONTRATADA/5004/191801.jpeg',
    alt: 'Teste',
  },
  {
    src: 'http://sigsopedificacoes.sop.ce.gov.br/ARQUIVOS/FOTO_GERENCIAL_CONTRATADA/5004/191801.jpeg',
    alt: 'Teste',
  },
];

const Template: Story<GalleryProps> = (args) => <Gallery {...args} />;

export const Default: Story<GalleryProps> = Template.bind({});
Default.args = {
  items: items,
};
