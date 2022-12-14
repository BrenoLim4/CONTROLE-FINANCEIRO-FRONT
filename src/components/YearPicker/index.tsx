import 'dayjs/locale/pt-br';

import { Container } from './styles';
import CustomLoader from '../CustomLoader';
import { YearPickerProps } from './interfaces';

const YearPicker = (props: YearPickerProps) => {
  const { loading, placeholder } = props;
  return (
    <div style={{ position: 'relative' }}>
      <Container
        {...props}
        locale="pt-br"
        placeholder={placeholder || 'Selecione uma data'}
        valueFormat="YYYY"
      />
      <CustomLoader visible={loading} />
    </div>
  );
};

export default YearPicker;
