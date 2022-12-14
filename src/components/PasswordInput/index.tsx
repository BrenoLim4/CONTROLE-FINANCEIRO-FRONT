import { Container } from './styles';
import CustomLoader from '../CustomLoader';
import { PasswordInputProps } from './interfaces';
import { useState } from 'react';

const PasswordInput = (props: PasswordInputProps) => {
  const { setValue, value, loading, required } = props;
  const [focused, setFocused] = useState(false);

  return (
    <div style={{ position: 'relative' }}>
      <Container
        {...props}
        value={value}
        onChange={(e) => setValue && setValue(e.target.value)}
        withAsterisk={required}
        focused={focused}
        size={'lg'}
        errorProps={{ size: 'md' }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <CustomLoader visible={loading} />
    </div>
  );
};

export default PasswordInput;
