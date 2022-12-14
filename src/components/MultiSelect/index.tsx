import { Container } from './styles';
import CustomLoader from '../CustomLoader';
import { MultiSelectProps } from './interfaces';

const MultiSelect = (props: MultiSelectProps) => {
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
export default MultiSelect;
