import { Container } from './styles';
import CustomLoader from '../CustomLoader';
import { SelectProps } from './interfaces';

const Select = (props: SelectProps) => {
  const { setValue, required, loading, data } = props;
  return (
    <div style={{ position: 'relative' }}>
      <Container
        {...props}
        data={data || []}
        errorProps={{ size: 'md' }}
        onChange={setValue}
        withAsterisk={required}
        clearable
        searchable
      />
      <CustomLoader visible={loading} />
    </div>
  );
};
export default Select;
