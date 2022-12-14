import 'dayjs/locale/pt-br';

import { Container } from './styles';
import CustomLoader from '../CustomLoader';
import { DatePickerProps } from './interfaces';

const DatePicker = (props: DatePickerProps) => {
  const { loading, placeholder } = props;
  return (
    <div style={{ position: 'relative' }}>
      <Container
        {...props}
        locale="pt-br"
        placeholder={placeholder || 'Selecione uma data'}
        valueFormat="DD/MM/YYYY"
      />
      <CustomLoader visible={loading} />
    </div>
  );
};

export default DatePicker;
