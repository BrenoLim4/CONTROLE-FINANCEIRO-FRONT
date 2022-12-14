import { Container, Control, Item, Panel } from './styles';
import { Title, useMantineTheme } from '@mantine/core';

import { AccordionProps } from './interfaces';
import CustomLoader from '../CustomLoader';
import { FaArrowDown } from 'react-icons/fa';
import { useState } from 'react';

const Accordion = ({
  title,
  children,
  icon: Icon,
  loading,
}: AccordionProps) => {
  const [value, setValue] = useState(null);
  const theme = useMantineTheme();

  return (
    <Container
      value={value}
      onChange={setValue}
      radius={'md'}
      variant="contained"
      chevron={<FaArrowDown fill="#FFF" size={18} />}
    >
      <Item value="default">
        <Control icon={Icon || null} p={'xs'} closed={value !== 'default'}>
          <Title order={2} weight={700} size={theme.fontSizes.xl}>
            {title}
          </Title>
        </Control>
        <Panel>{children}</Panel>
      </Item>
      <CustomLoader visible={loading} size={32} />
    </Container>
  );
};

export default Accordion;
