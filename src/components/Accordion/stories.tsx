import { Meta, Story } from '@storybook/react';
import { Row, RowItem } from '../Row';

import Accordion from './index';
import { AccordionProps } from './interfaces';
import Card from '../Card';
import Listar from '../../../public/images/listar.svg';

export default {
  title: 'Layout/Accordion',
  component: Accordion,
} as Meta<AccordionProps>;

const Template: Story<AccordionProps> = (args) => (
  <Accordion {...args}>Ver mais!</Accordion>
);

export const Default: Story<AccordionProps> = Template.bind({});
Default.args = {
  title: 'Teste',
};

export const Loading: Story<AccordionProps> = Template.bind({});
Loading.args = {
  title: 'Teste',
  loading: true,
};

const Template2: Story<AccordionProps> = (args) => (
  <Row grow noWrap={false} align="flex-start">
    <RowItem>
      <Accordion {...args}>
        <div>Ver mais!</div>
      </Accordion>
    </RowItem>
    <RowItem>
      <Card title="Teste">
        <div>Ver mais!</div>
      </Card>
    </RowItem>
  </Row>
);

export const AccordionXCard: Story<AccordionProps> = Template2.bind({});
AccordionXCard.args = {
  title: 'Teste',
  icon: <Listar />,
};
