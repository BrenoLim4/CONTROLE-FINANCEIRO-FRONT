import { ListContainer } from './styles';
import ListItem from './ListItem';
import { ListProps } from './interfaces';
import NoContentWarn from '../NoContentWarn';
import React from 'react';

const List = ({
  items,
  emptyList,
  itemBody,
  useListItem = true,
  itemLinkPath,
  noContainer = false,
  shadow,
}: ListProps) => {
  return items && items.length === 0 ? (
    <ListContainer>
      <NoContentWarn text={emptyList} />
    </ListContainer>
  ) : noContainer === false ? (
    <ListContainer>
      {useListItem
        ? items &&
          items.map((item, index) => (
            <ListItem
              shadow={shadow}
              linkPath={itemLinkPath && itemLinkPath(item, index)}
              key={index}
            >
              {itemBody(item, index)}
            </ListItem>
          ))
        : items &&
          items.map((item, index) => (
            <div key={index}>{itemBody(item, index)}</div>
          ))}
    </ListContainer>
  ) : (
    <>
      {useListItem
        ? items &&
          items.map((item, index) => (
            <ListItem
              shadow={shadow}
              linkPath={itemLinkPath && itemLinkPath(item, index)}
              key={index}
            >
              {itemBody(item, index)}
            </ListItem>
          ))
        : items &&
          items.map((item, index) => (
            <div key={index}>{itemBody(item, index)}</div>
          ))}
    </>
  );
};
export default List;
