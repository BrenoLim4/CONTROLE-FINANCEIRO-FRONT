import { LoadingOverlay, LoadingOverlayProps } from '@mantine/core';

import Loader from '../../../public/images/loader.svg';

const CustomLoader = (props: LoadingOverlayProps & { size?: number }) => (
  <LoadingOverlay
    {...props}
    sx={{ borderRadius: 'inherit' }}
    loader={<Loader width={props.size || 32} />}
  />
);

export default CustomLoader;
