import Chart, { Props } from 'react-apexcharts';

const RealChart = ({
  series = [],
  options = {},
  type = 'line',
  height = '500px',
  width = '500px',
}: Props) => {
  return (
    <Chart
      type={type}
      options={options}
      series={series}
      width={width}
      height={height}
    />
  );
};

export default RealChart;
