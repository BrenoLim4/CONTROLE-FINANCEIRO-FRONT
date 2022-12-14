import { FaAcquisitionsIncorporated, FaEllipsisV } from 'react-icons/fa';
import { Meta, Story } from '@storybook/react';
import { Row, RowItem } from '../Row';

import Btn from '../Btn';
import Card from './index';
import { CardProps } from './interfaces';
import Checkbox from '../Checkbox';
import DatePicker from '../DatePicker';
import FileBtn from '../FileBtn';
import IconBtn from '../IconBtn';
import InfoDivider from '../Divider';
import MonthPicker from '../MonthPicker';
import MultiSelect from '../MultiSelect';
import NumberInput from '../NumberInput';
import PasswordInput from '../PasswordInput';
import Radio from '../Radio';
import Select from '../Select';
import Teste from '../../../public/images/listar.svg';
import TextInput from '../TextInput';
import Textarea from '../Textarea';
import YearPicker from '../YearPicker';

export default {
  title: 'Layout/Card',
  component: Card,
} as Meta<CardProps>;

const Template: Story<CardProps> = (args) => <Card {...args}>Ver mais!</Card>;

export const WithOptions: Story<CardProps> = Template.bind({});
WithOptions.args = {
  title: 'Título teste',
  menuItens: [
    {
      children: 'Teste',
      icon: <FaEllipsisV size={20} />,
      onClick: () => alert('testee'),
    },
  ],
};
export const WithIcon: Story<CardProps> = Template.bind({});
WithIcon.args = {
  title: 'Título teste',
  icon: Teste,
};

export const Default: Story<CardProps> = Template.bind({});
Default.args = {
  title: 'Título teste',
};

const Template2: Story<CardProps> = (args) => (
  <Card {...args}>
    <Row>
      <RowItem>
        <Btn fullWidth template="secondary">
          Ver mais!
        </Btn>
      </RowItem>
      <Btn template="primary">Ver mais!</Btn>
      <Btn>Ver mais!</Btn>
    </Row>
    <InfoDivider label={'Testee'} labelPosition={'center'} />
    <Row>
      <IconBtn>
        <FaAcquisitionsIncorporated />
      </IconBtn>
      <FileBtn>Adicionar imagens</FileBtn>
      <Btn template="gradient">Ver mais!</Btn>
      <Btn fullWidth>Ver mais!</Btn>
    </Row>
  </Card>
);

export const WithButtons: Story<CardProps> = Template2.bind({});
WithButtons.args = {
  title: 'Título teste',
};

const Template3: Story<CardProps> = (args) => <Card {...args}></Card>;

export const NoContent: Story<CardProps> = Template3.bind({});
NoContent.args = {
  title: 'Título teste',
};

const Template4: Story<CardProps> = (args) => (
  <Card {...args}>
    <Row>
      <RowItem>
        <TextInput label={'Text'} />
      </RowItem>
      <RowItem>
        <NumberInput label={'Number'} />
      </RowItem>
      <RowItem>
        <Checkbox label={'Opções'} items={dataCheckbox} />
      </RowItem>
      <RowItem>
        <Radio label={'Opções'} items={dataCheckbox} />
      </RowItem>
      <RowItem>
        <PasswordInput label={'Password'} />
      </RowItem>
      <RowItem>
        <Select label={'Select'} data={dataSelect} />
      </RowItem>
      <RowItem>
        <MultiSelect label={'MultiSelect'} data={dataSelect} />
      </RowItem>
      <RowItem>
        <Textarea label={'Textarea'} />
      </RowItem>
      <RowItem>
        <DatePicker label={'Date'} />
      </RowItem>
      <RowItem>
        <MonthPicker label={'Month'} />
      </RowItem>
      <RowItem>
        <YearPicker label={'Year'} />
      </RowItem>
    </Row>
  </Card>
);

export const WithInputs: Story<CardProps> = Template4.bind({});
WithInputs.args = {
  title: 'Título teste',
};

const dataCheckbox = [
  { value: 'value1', label: 'Opção 1' },
  { value: 'value2', label: 'Opção 2' },
];

const dataSelect = [
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
];
