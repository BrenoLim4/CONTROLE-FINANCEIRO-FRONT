import { defaultTransition } from '@/styles/theme';
import styled from '@emotion/styled';

interface ListItemContainerProps {
  width: any;
  clicked: boolean;
  shadow: boolean;
}

const ListItemContainer = styled.li<ListItemContainerProps>`
  width: ${({ width }) => (width ? `width: ${width}px` : '')};
  margin: 5px 0;
  padding: 0.5rem;

  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.colors.gray[3]};
  border-radius: 8px;
  box-shadow: ${({ theme, shadow }) => (shadow ? theme.shadows.md : 'none')};
  list-style-type: none;

  transition: ${defaultTransition};

  &:first-of-type {
    margin-top: 0;
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[0]};
  }
`;

export { ListItemContainer };
