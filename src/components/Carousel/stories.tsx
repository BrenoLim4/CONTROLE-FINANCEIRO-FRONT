import { Meta, Story } from '@storybook/react';

import Btn from '../Btn';
import Carousel from '.';
import { CarouselProps } from './interfaces';
import Img from '../Img';
import Modal from '../Modal';
import { useState } from 'react';

export default {
  title: 'Image/Carousel',
  component: Carousel,
} as Meta<CarouselProps>;

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
];

const Template: Story<CarouselProps> = (args) => (
  <Carousel {...args}>
    {items.map((i, index) => (
      <Img key={index} src={i.src} alt={i.alt} />
    ))}
  </Carousel>
);

export const Default: Story<CarouselProps> = Template.bind({});
Default.args = {
  loop: true,
  fit: 'contain',
};

const Template2: Story<CarouselProps> = (args) => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Btn onClick={() => setOpened(true)}>Teste</Btn>
      <Modal size={'100%'} opened={opened} onClose={() => setOpened(false)}>
        <Carousel {...args}>
          {items.map((i, index) => (
            <Img fill={false} key={index} src={i.src} alt={i.alt} />
          ))}
        </Carousel>
      </Modal>
    </>
  );
};

export const WithinModal: Story<CarouselProps> = Template2.bind({});
WithinModal.args = {
  loop: true,
  fit: 'contain',
};
