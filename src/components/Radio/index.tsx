import { Container, Item } from './styles';

import CustomLoader from '../CustomLoader';
import { RadioGoupProps } from './interfaces';

const Radio = (props: RadioGoupProps) => {
  const { setValue, loading, items } = props;

  return (
    <div style={{ position: 'relative' }}>
      <Container
        {...props}
        size={'md'}
        onChange={(e) => setValue && setValue(e)}
      >
        {items?.map((i, index) => (
          <Item key={index} value={i.value} label={i.label} />
        ))}
      </Container>
      <CustomLoader visible={loading} />
    </div>
  );
};

export default Radio;
