import { Container } from './styles';
import CustomLoader from '../CustomLoader';
import { TextareaProps } from './interfaces';

const Textarea = (props: TextareaProps) => {
  const { setValue, value, loading, autosize, minRows, required } = props;

  return (
    <div style={{ position: 'relative' }}>
      <Container
        {...props}
        autosize={autosize || true}
        value={value}
        errorProps={{ size: 'md' }}
        onChange={(e) => setValue && setValue(e.target.value)}
        withAsterisk={required}
        minRows={minRows || 3}
        maxRows={4}
      />
      <CustomLoader visible={loading} />
    </div>
  );
};

export default Textarea;
