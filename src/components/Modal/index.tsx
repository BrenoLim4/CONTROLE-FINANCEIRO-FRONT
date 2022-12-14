import { Container } from './styles';
import { ModalProps } from './interfaces';

const Modal = (props: ModalProps) => {
  const { children, centered } = props;

  return (
    <Container {...props} centered={centered || true}>
      {children}
    </Container>
  );
};

export default Modal;
