import { Container, Item } from './styles';

import { CheckboxGoupProps } from './interfaces';
import CustomLoader from '../CustomLoader';

const Checkbox = (props: CheckboxGoupProps) => {
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

export default Checkbox;
