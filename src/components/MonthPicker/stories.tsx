import { Meta, Story } from '@storybook/react';
import { Row, RowItem } from '../Row';

import DatePicker from '../DatePicker';
import MonthPicker from '.';
import { MonthPickerProps } from './interfaces';
import YearPicker from '../YearPicker';
import { useState } from 'react';

export default {
  title: 'Date/MonthPicker',
  component: MonthPicker,
} as Meta<MonthPickerProps>;

const Template: Story<MonthPickerProps> = (args) => {
  const [date, setDate] = useState(null);
  const [date2, setDate2] = useState(null);
  const [date3, setDate3] = useState(null);

  return (
    <Row>
      <RowItem>
        <MonthPicker {...args} value={date} onChange={setDate} />
      </RowItem>
      <RowItem>
        <DatePicker
          label="Data"
          placeholder="Selecione uma data"
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

export const Default: Story<MonthPickerProps> = Template.bind({});
Default.args = {
  placeholder: 'Selecione um mês',
  label: 'Mês',
};
