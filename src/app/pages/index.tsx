
// import dynamic from 'next/dynamic';
// import styles from '../styles/Dashboard.module.css';

// const DynamicLineChartWidget = dynamic(() => import('../components/charts/LineChartWidget'), {
//     loading: () => <p>Loading Line Chart...</p>,
//     ssr: false,  // Disable server-side rendering for this component
//   });
  
//   const DynamicBarChartWidget = dynamic(() => import('../components/charts/BarChartWidget'), {
//     loading: () => <p>Loading Bar Chart...</p>,
//     ssr: false,  // Disable server-side rendering for this component
//   });
  

// const Dashboard = () => {
//   return (
//     <div className={styles.dashboard}>
//       <h1>Dashboard</h1>
//       <div className={styles.widgetContainer}>
//         {/* Dynamically load widgets */}
//         <DynamicLineChartWidget />
//         <DynamicBarChartWidget />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
// import dynamic from 'next/dynamic';
// import styles from '../styles/Dashboard.module.css';

// // Use dynamic imports to lazily load the chart components
// const DynamicLineChartWidget = dynamic(() => import('../components/charts/LineChartWidget'), {
//   loading: () => <p>Loading Line Chart...</p>,
//   ssr: false,  // Disable server-side rendering
// });

// const DynamicBarChartWidget = dynamic(() => import('../components/charts/BarChartWidget'), {
//   loading: () => <p>Loading Bar Chart...</p>,
//   ssr: false,  // Disable server-side rendering
// });

// const Dashboard = () => {
//   return (
//     <div className={styles.dashboard}>
//       <h1>Dashboard</h1>
//       <div className={styles.widgetContainer}>
//         {/* Dynamically load widgets */}
//         <DynamicLineChartWidget />
//         <DynamicBarChartWidget />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import Dashboard from '../components/Dashboard'; // Adjust the path as necessary

const Home = () => {
  return <Dashboard />;
};

export default Home;
