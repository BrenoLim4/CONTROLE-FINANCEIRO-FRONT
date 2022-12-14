import styled from '@emotion/styled';

const Container = styled.div`
  position: sticky;
  left: 0;

  width: 100%;
  padding: 1.25rem 1rem 1rem 1rem;

  text-align: center;
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({ color, theme }) => (color ? color : theme.colors.dark[4])};
`;

export { Container };
