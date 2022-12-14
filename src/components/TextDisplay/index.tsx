import { Text, useMantineTheme } from '@mantine/core';

import { Container } from './styles';
import React from 'react';
import { TextProps } from './interfaces';

const TextDisplay = ({
  label,
  labelColor,
  text,
  textColor,
  size,
  weight,
  ...otherProps
}: TextProps) => {
  const theme = useMantineTheme();
  return (
    <Container>
      <Text
        {...otherProps}
        weight={weight || 'bold'}
        size={size || 14}
        color={labelColor || theme.colors.green[8]}
      >
        {`${label}:`}
      </Text>
      <Text
        {...otherProps}
        weight={text ? weight : 'bold'}
        size={size || 14}
        color={textColor || theme.colors.dark[4]}
      >
        {text || 'Não disponível'}
      </Text>
    </Container>
  );
};

export default TextDisplay;
