import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import api from '../api';

const StatsChart = ({ refreshFlag }) => {
  const [chartData, setChartData] = useState([]);

  const fetchStats = () => {
    api.get('/time-entry/stats')
      .then(res => {
        const data = Object.entries(res.data).map(([name, value]) => ({
          name,
          minutes: value,
        }));
        setChartData(data);
      })
      .catch(err => console.error('Kunde inte hämta statistik:', err));
  };

  useEffect(() => {
    fetchStats();
  }, [refreshFlag]);  // Kör om varje gång refreshFlag ändras

  return (
    <div style={{ width: '100%', height: 400 }}>
      <h2 className="text-xl font-bold mb-4">Tidsanvändning (senaste veckan)</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis label={{ value: 'Minuter', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Bar dataKey="minutes" fill="#4A90E2" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatsChart;
