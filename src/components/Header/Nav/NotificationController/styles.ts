import { defaultTransition } from '@/styles/theme';
import styled from '@emotion/styled';

const Container = styled.div<any>`
  svg {
    width: 2.25rem;
    height: 2.25rem;

    fill: ${({ isSubscribed, theme }) =>
      isSubscribed ? theme.colors.orange : 'grey'};

    transition: ${defaultTransition};
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export { Container };
