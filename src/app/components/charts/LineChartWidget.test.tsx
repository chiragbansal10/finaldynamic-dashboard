import { render, screen } from '@testing-library/react';
import LineChartWidget from './LineChartWidget'; // Default import

test('renders LineChartWidget component', () => {
  render(<LineChartWidget />);
  expect(screen.getByText('Line Chart')).toBeInTheDocument();
});
