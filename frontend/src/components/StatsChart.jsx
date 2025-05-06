import React, { useEffect, useState } from 'react';
import api from '../api'; // Din Axios-instans

const StatsChart = () => {
  const [data, setData] = useState({ labels: [], values: [] });

  useEffect(() => {
    api.get('/time-entry/stats')
      .then(res => {
        console.log("Statistik från API:", res.data); // 👈 Viktig logg
        const labels = Object.keys(res.data);
        const values = Object.values(res.data);
        setData({ labels, values });
      })
      .catch(err => {
        console.error("Fel vid hämtning av statistik:", err);
      });
  }, []);

  return (
    <div>
      <h2>Tidsstatistik (senaste veckan)</h2>
      {data.labels.map((label, index) => (
        <p key={label}>
          {label}: {data.values[index]} minuter
        </p>
      ))}
    </div>
  );
};

export default StatsChart;
