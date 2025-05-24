import React, { useEffect, useState } from 'react';
import CategoryList from './components/CategoryList';
import CheckInOut from './components/CheckInOut';
import StatsChart from './components/StatsChart';
import api from './api';

function App() {
  const [categories, setCategories] = useState([]);
  const [statsRefreshFlag, setStatsRefreshFlag] = useState(false);

  const fetchCategories = () => {
    api.get('/categories')
      .then(res => setCategories(res.data))
      .catch(err => console.error('Failed to fetch categories', err));
  };

  // Anropa för att trigga diagram-uppdatering
  const refreshStats = () => {
    setStatsRefreshFlag(prev => !prev);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div>
      <h1>Personligt Tidrapporteringssystem</h1>
      <CategoryList categories={categories} fetchCategories={fetchCategories} />
      <CheckInOut categories={categories} fetchCategories={fetchCategories} refreshStats={refreshStats} />
      <StatsChart refreshFlag={statsRefreshFlag} />
    </div>
  );
}

export default App;
