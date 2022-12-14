import 'dayjs/locale/pt-br';

import { Container } from './styles';
import CustomLoader from '../CustomLoader';
import { MonthPickerProps } from './interfaces';

const MonthPicker = (props: MonthPickerProps) => {
  const { loading, placeholder } = props;
  return (
    <div style={{ position: 'relative' }}>
      <Container
        {...props}
        locale="pt-br"
        placeholder={placeholder || 'Selecione uma data'}
        valueFormat="MM/YYYY"
      />
      <CustomLoader visible={loading} />
    </div>
  );
};

export default MonthPicker;
