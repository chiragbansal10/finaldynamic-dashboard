import dynamic from 'next/dynamic';
import styles from '../styles/Dashboard.module.css';

// Dynamically import widgets
const DynamicLineChartWidget = dynamic(() => import('../components/charts/LineChartWidget'), {
  loading: () => <p>Loading Line Chart...</p>,
});

const DynamicBarChartWidget = dynamic(() => import('../components/charts/BarChartWidget'), {
  loading: () => <p>Loading Bar Chart...</p>,
});

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <h1>Dashboard</h1>
      <div className={styles.widgetContainer}>
        <DynamicLineChartWidget />
        <DynamicBarChartWidget />
      </div>
    </div>
  );
};

export default Dashboard;
