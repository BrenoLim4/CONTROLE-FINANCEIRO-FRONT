import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('./RealChart'), { ssr: false });

export default Chart;
