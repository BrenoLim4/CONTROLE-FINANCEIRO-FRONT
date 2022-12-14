import { FileBtnProps } from './interfaces';
import { FileButton } from '@mantine/core';
import { defaultTransition } from '@/styles/theme';
import styled from '@emotion/styled';

const Container = styled(FileButton)<FileBtnProps>`
  transition: ${defaultTransition};

  padding: 0;

  &:disabled {
    border-color: #ced4da;
  }

  > div {
    > span {
      padding: 0;

      > p {
        padding: 0 22px;
        margin: 0;
      }
      > input {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        opacity: 0;
        cursor: pointer;
      }
    }
  }
`;
export { Container };
