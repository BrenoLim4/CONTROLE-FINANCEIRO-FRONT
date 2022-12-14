import { Meta, Story } from '@storybook/react';
import { Row, RowItem } from '../Row';

import DatePicker from '.';
import { DatePickerProps } from './interfaces';
import MonthPicker from '../MonthPicker';
import YearPicker from '../YearPicker';
import { useState } from 'react';

export default {
  title: 'Date/DatePicker',
  component: DatePicker,
} as Meta<DatePickerProps>;

const Template: Story<DatePickerProps> = (args) => {
  const [date, setDate] = useState(null);
  const [date2, setDate2] = useState(null);
  const [date3, setDate3] = useState(null);

  return (
    <Row>
      <RowItem>
        <DatePicker {...args} value={date} onChange={setDate} />
      </RowItem>
      <RowItem>
        <MonthPicker
          label="Mês"
          placeholder="Selecione um mês"
          value={date2}
          onChange={setDate2}
        />
      </RowItem>
      <RowItem>
        <YearPicker
          label="Ano"
          placeholder="Selecione um ano"
          value={date3}
          onChange={setDate3}
        />
      </RowItem>
    </Row>
  );
};

export const Default: Story<DatePickerProps> = Template.bind({});
Default.args = {
  placeholder: 'Selecione uma data',
  label: 'Data',
};
