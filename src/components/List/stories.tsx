import { Meta, Story } from '@storybook/react';

import List from '.';
import { ListProps } from './interfaces';

export default {
  title: 'Layout/List',
  component: List,
} as Meta<ListProps>;

const items = [
  {
    description:
      'Tai daoid aowi hdaowih daoih aoipd awpkd apwod aw0ihda woidah pioajpdoa jwda',
  },
  {
    description:
      'km2121pj1peiopwioe1pwoje po1p owe poiew pioew1 pop oep1oe po wpoi 1poiw1e po',
  },
  {
    description:
      'pocxzpozcx pozx pcpocz pocz pozxc pocx pozcpo czpo czp sdapo czpo czp osd',
  },
  {
    description:
      'çwemrç lwemrçwe lmrweçlrm lwem rçlwme rçlwm çlmw çlmwrç lmwrçl mwrlçm wçlemr weçlr',
  },
];

const Template: Story<ListProps> = (args) => (
  <List {...args} items={items} itemBody={(i) => <div>{i.description}</div>} />
);

export const Default: Story<ListProps> = Template.bind({});
Default.args = {};
