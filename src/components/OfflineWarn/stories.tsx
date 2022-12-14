import { Meta, Story } from '@storybook/react';

import Container from './styles';

export default {
  title: 'Layout/OfflineWarn',
  component: Container,
} as Meta<{ isOnline: boolean }>;

const Template: Story<{ isOnline: boolean }> = (args) => (
  <Container {...args}>
    <p>Modo Offline</p>
  </Container>
);

export const Default: Story<{ isOnline: boolean }> = Template.bind({});
Default.args = {
  isOnline: false,
};
