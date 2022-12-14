import { ColumnHeader, Container } from './styles';
import { FaSort, FaSortDown, FaSortUp } from 'react-icons/fa';
import { SortColumn, TableProps } from './interfaces';

import Loader from '../../../public/images/loader.svg';
import NoContentWarn from '../NoContentWarn';

const Table = <T,>({
  columns,
  records,
  loading,
  page,
  sortColumns,
  sortColumnsChange,
  ...otherProps
}: TableProps<T>) => {
  const handleSortColumns = (
    column: SortColumn,
    property: string,
    index: number
  ) => {
    const auxSortColumns = sortColumns ? [...sortColumns] : [];

    if (column) {
      if (column.direction === 'ASC') {
        auxSortColumns[index].direction = 'DESC';
      } else {
        auxSortColumns.splice(index, 1);
      }
    } else {
      auxSortColumns.push({
        property: property,
        direction: 'ASC',
      });
    }

    sortColumnsChange(auxSortColumns);
  };

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Container
      {...otherProps}
      page={page}
      striped
      withBorder
      shadow={'md'}
      highlightOnHover
      fetching={loading}
      borderColor={(theme) => theme.colors.gray[3]}
      withColumnBorders
      borderRadius={'md'}
      verticalSpacing={'xs'}
      horizontalSpacing={'xs'}
      columns={
        columns?.map((c) => {
          const sortIndex = sortColumns?.findIndex(
            (sC) => sC.property === c.accessor
          );
          const sortColumn =
            sortColumns && sortIndex !== -1 ? sortColumns[sortIndex] : null;
          return {
            ...c,
            title: (
              <ColumnHeader>
                <div>{c.title}</div>
                <Sorting
                  sortable={c.sortable}
                  column={sortColumn}
                  index={sortIndex}
                  onClick={() =>
                    c.sortable &&
                    sortColumnsChange &&
                    handleSortColumns(sortColumn, c.accessor, sortIndex)
                  }
                />
              </ColumnHeader>
            ),
            sortable: false,
          };
        }) || [{ accessor: 'empty1', title: 'Tabela Básica' }]
      }
      records={records || []}
      minHeight={records?.length ? null : page !== null ? 250 : 250}
      emptyState={<NoContentWarn />}
      customLoader={<Loader width={32} />}
    />
  );
};

const Sorting = ({ sortable, column, index, onClick }) => {
  return (
    <>
      {sortable ? (
        column ? (
          column.direction === 'DESC' ? (
            <span onClick={onClick} className="down">
              <div>{index + 1}</div>
              <FaSortDown />
            </span>
          ) : (
            <span onClick={onClick} className="up">
              <FaSortUp />
              <div>{index + 1}</div>
            </span>
          )
        ) : (
          <span onClick={onClick}>
            <FaSort />
          </span>
        )
      ) : null}
    </>
  );
};

export default Table;
