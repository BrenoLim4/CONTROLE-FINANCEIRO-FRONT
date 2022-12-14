import { Group, GroupItem } from './styles';

import { GroupProps } from '@mantine/core';
import { RowItemProps } from './interfaces';

const Row = (props: GroupProps) => <Group {...props}>{props.children}</Group>;
const RowItem = ({ children, center }: RowItemProps) => (
  <GroupItem center={center}>{children}</GroupItem>
);

export { Row, RowItem };
