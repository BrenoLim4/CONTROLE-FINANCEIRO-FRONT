import { Container } from './styles';
import { NoContentWarnProps } from './interfaces';

const NoContentWarn = ({ text, color }: NoContentWarnProps) => {
  return (
    <Container color={color}>
      {text ? text : 'Nenhum dado encontrado!'}
    </Container>
  );
};

export default NoContentWarn;
