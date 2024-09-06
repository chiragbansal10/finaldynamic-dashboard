// components/LineChart.tsx
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April'],
  datasets: [
    {
      label: 'Sales',
      data: [33, 53, 85, 41],
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
    },
  ],
};

const LineChart = () => <Line data={data} />;
export default LineChart;
