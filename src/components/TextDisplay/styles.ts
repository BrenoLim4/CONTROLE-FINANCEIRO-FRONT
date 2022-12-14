import { onDesktop } from '@/styles/theme';
import styled from '@emotion/styled';

export const Container = styled.div<any>`
  background: ${({ theme }) => theme.colors.gray[2]};
  flex: ${({ flex }) => (flex ? '1' : '0')};

  border: 1px solid ${({ theme }) => theme.colors.gray[3]};
  border-radius: 8px;
  padding: 0.625rem;
  justify-content: flex-start;

  ${({ theme }) => onDesktop(theme)} {
    background: none;
    border: none;
  }
`;
