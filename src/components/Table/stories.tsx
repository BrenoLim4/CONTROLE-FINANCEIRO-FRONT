import { Meta, Story } from '@storybook/react';
import { SortColumn, TableProps } from './interfaces';
import { useEffect, useState } from 'react';

import Table from '.';
import axios from 'axios';

export default {
  title: 'Layout/Table',
  component: Table,
} as Meta<TableProps<any>>;

const records = [
  { id: 1, empty1: 'Teste1', empty2: 'Teste6' },
  { id: 2, empty1: 'Teste2', empty2: 'Teste7' },
  { id: 3, empty1: 'Teste3', empty2: 'Teste8' },
  { id: 4, empty1: 'Teste4', empty2: 'Teste9' },
  { id: 5, empty1: 'Teste5', empty2: 'Teste10' },
];

const Template: Story<TableProps<any>> = (args) => <Table {...args} />;

export const Default: Story<TableProps<any>> = Template.bind({});
Default.args = {
  records: records,
  onRowClick: (e) => alert(e.empty2),
};

export const Loading: Story<TableProps<any>> = Template.bind({});
Loading.args = {
  records: records,
  loading: true,
};

const Template2: Story<TableProps<any>> = (args) => {
  const [selected, setSelected] = useState([]);

  return (
    <Table
      {...args}
      selectedRecords={selected}
      onSelectedRecordsChange={setSelected}
    />
  );
};

export const WithRowSelecion: Story<TableProps<any>> = Template2.bind({});
WithRowSelecion.args = {
  records: records,
};

const Template3: Story<TableProps<any>> = (args) => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [sortColumns, setSortColumns] = useState<SortColumn[]>([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?offset=${(page - 1) * 20}`)
      .then((r) => {
        setLoading(false);
        setTotal(r.data.count);
        setData(
          r.data.results.map((r, index) => ({
            ...r,
            id: index + 1 + (page - 1) * 20,
          }))
        );
      });
  }, [page]);

  return (
    <Table
      {...args}
      page={page}
      totalRecords={total}
      onPageChange={(e) => setPage(e)}
      recordsPerPage={20}
      loading={loading}
      sortColumns={sortColumns}
      sortColumnsChange={setSortColumns}
      records={data}
      columns={[
        { accessor: 'id', title: 'Id', sortable: true },
        { accessor: 'name', title: 'Nome', sortable: true },
      ]}
    />
  );
};

export const WithPagination: Story<TableProps<any>> = Template3.bind({});
WithPagination.args = {};
