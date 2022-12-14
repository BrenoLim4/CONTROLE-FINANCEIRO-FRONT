import { Meta, Story } from '@storybook/react';

import TextDisplay from '.';
import { TextProps } from './interfaces';

export default {
  title: 'Layout/TextDisplay',
  component: TextDisplay,
} as Meta<TextProps>;

const Template: Story<TextProps> = (args) => <TextDisplay {...args} />;

export const Default: Story<TextProps> = Template.bind({});
Default.args = {
  label: 'Fim Previsto',
  text: '',
};
