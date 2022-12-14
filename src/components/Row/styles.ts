import { Group as MGroup } from '@mantine/core';
import { RowItemProps } from './interfaces';
import styled from '@emotion/styled';

const Group = styled(MGroup)`
  gap: 0.625rem;
  align-items: flex-start;
`;

const GroupItem = styled.div<RowItemProps>`
  max-width: 100%;
  flex: 1 1 300px;
  align-self: ${({ center }) => (center ? 'center' : 'auto')};
`;

export { Group, GroupItem };
