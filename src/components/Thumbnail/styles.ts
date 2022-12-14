import { defaultTransition } from '@/styles/theme';
import styled from '@emotion/styled';

const Container = styled.div<any>`
  position: relative;

  width: 210px;
  height: 140px;

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.gray[3]};
  box-shadow: ${({ theme }) => theme.shadows.md};

  transition: ${defaultTransition};
  overflow: hidden;

  cursor: ${({ link, onClick }) => (link || onClick ? 'pointer' : 'normal')};

  img {
    object-position: center;
    object-fit: ${({ fit }) => fit};
  }
`;

export { Container };
