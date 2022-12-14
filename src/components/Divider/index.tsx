import { Container } from './styles';
import { DividerProps } from '@mantine/core';

const InfoDivider = (props: DividerProps) => {
  return <Container {...props} my={20} />;
};

export default InfoDivider;
