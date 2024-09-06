import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
  { name: 'Jan', pv: 2400 },
  { name: 'Feb', pv: 1398 },
  { name: 'Mar', pv: 9800 },
  { name: 'Apr', pv: 3908 },
];
const BarChartWidget: React.FC = () => (
  <div>
    <h2>Bar Chart</h2>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="pv" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);
export default BarChartWidget;
