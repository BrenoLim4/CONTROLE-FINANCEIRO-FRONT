import Btn from '../Btn';
import { FileBtnProps } from './interfaces';
import { FileButton } from '@mantine/core';

const FileBtn = (props: FileBtnProps) => {
  const {
    variant,
    children,
    template,
    multiple = true,
    setValue = (e) => console.log(e),
  } = props;
  return (
    <FileButton {...props} multiple={multiple} onChange={setValue}>
      {(propsBtn) => (
        <Btn
          {...propsBtn}
          variant={
            template
              ? template === 'gradient'
                ? 'gradient'
                : 'filled'
              : variant || 'default'
          }
        >
          {children}
        </Btn>
      )}
    </FileButton>
  );
};

export default FileBtn;
