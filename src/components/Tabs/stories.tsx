import { Item, TabsProps } from './interfaces';
import { Meta, Story } from '@storybook/react';

import Tabs from '.';

export default {
  title: 'Layout/Tabs',
  component: Tabs,
} as Meta<TabsProps>;

const items: Item[] = [
  {
    label: 'Teste',
    content: <div>adadawda</div>,
  },
  {
    label: 'Teste',
    content: 'dadadawd',
  },
];

const Template: Story<TabsProps> = (args) => <Tabs {...args} />;

export const Default: Story<TabsProps> = Template.bind({});
Default.args = {
  placeholder: 'Digite algo',
  items: items,
};
