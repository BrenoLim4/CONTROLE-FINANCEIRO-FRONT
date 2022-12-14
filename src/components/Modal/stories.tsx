import { Meta, Story } from '@storybook/react';

import Btn from '../Btn';
import Modal from '.';
import { ModalProps } from './interfaces';
import NumberInput from '../NumberInput';
import { useState } from 'react';

export default {
  title: 'Layout/Modal',
  component: Modal,
} as Meta<ModalProps>;

const Template: Story<ModalProps> = (args) => {
  const [opened, setOpened] = useState(true);
  return (
    <>
      <Btn onClick={() => setOpened(true)}>Abrir modal</Btn>
      <Modal {...args} opened={opened} onClose={() => setOpened(false)}>
        <Btn>Teste</Btn>
        <NumberInput />
        <div>Teste</div>
      </Modal>
    </>
  );
};

export const Default: Story<ModalProps> = Template.bind({});
Default.args = {
  title: 'Título teste',
};
