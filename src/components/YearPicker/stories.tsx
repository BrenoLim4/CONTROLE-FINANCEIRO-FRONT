import { Meta, Story } from '@storybook/react';
import { Row, RowItem } from '../Row';

import DatePicker from '../DatePicker';
import MonthPicker from '../MonthPicker';
import YearPicker from '.';
import { YearPickerProps } from './interfaces';
import { useState } from 'react';

export default {
  title: 'Date/YearPicker',
  component: YearPicker,
} as Meta<YearPickerProps>;

const Template: Story<YearPickerProps> = (args) => {
  const [date, setDate] = useState(null);
  const [date2, setDate2] = useState(null);
  const [date3, setDate3] = useState(null);

  return (
    <Row>
      <RowItem>
        <YearPicker {...args} value={date} onChange={setDate} />
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
        <MonthPicker
          label="Mês"
          placeholder="Selecione um mês"
          value={date3}
          onChange={setDate3}
        />
      </RowItem>
    </Row>
  );
};

export const Default: Story<YearPickerProps> = Template.bind({});
Default.args = {
  placeholder: 'Selecione um ano',
  label: 'Ano',
};
