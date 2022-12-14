import { Container } from './styles';
import CustomLoader from '../CustomLoader';
import { TextInputProps } from './interfaces';

const TextInput = (props: TextInputProps) => {
  const { setValue, value, loading } = props;

  return (
    <div style={{ position: 'relative' }}>
      <Container
        {...props}
        value={value}
        errorProps={{ size: 'md' }}
        onChange={(e) => setValue && setValue(e.target.value)}
        withAsterisk={props.required}
      />
      <CustomLoader visible={loading} />
    </div>
  );
};

export default TextInput;
