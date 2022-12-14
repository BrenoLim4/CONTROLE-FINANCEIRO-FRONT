import { Container } from './styles';
import CustomLoader from '../CustomLoader';
import InputMask from 'react-input-mask';
import { NumberInputProps } from './interfaces';

const NumberInput = (props: NumberInputProps) => {
  const {
    label,
    placeholder,
    value,
    setValue,
    mask,
    maskChar,
    formatChars,
    loading,
    required,
  } = props;
  return (
    <div style={{ position: 'relative' }}>
      <Container
        {...props}
        component={InputMask}
        label={label}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue && setValue(e.target.value)}
        mask={mask}
        type={mask ? 'text' : 'number'}
        maskChar={maskChar || ' '}
        errorProps={{ size: 'md' }}
        formatChars={
          formatChars || {
            '#': '[0-9]',
          }
        }
        withAsterisk={required}
      />
      <CustomLoader visible={loading} />
    </div>
  );
};

export default NumberInput;
