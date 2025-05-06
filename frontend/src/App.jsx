import React, { useEffect, useState } from 'react';
import CategoryList from './components/CategoryList';
import CheckInOut from './components/CheckInOut';
import api from './api';
import StatsChart from './components/StatsChart';

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api.get('/categories').then(res => setCategories(res.data));
  }, []);

  return (
    <div>
      <h1>Personligt Tidrapporteringssystem</h1>
      <CategoryList />
      <CheckInOut categories={categories} />
      <>
      
      <StatsChart />
    </>
    </div>
  );
}

export default App;
