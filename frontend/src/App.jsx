import React, { useEffect, useState } from 'react';
import CategoryList from './components/CategoryList';
import CheckInOut from './components/CheckInOut';
import api from './api';

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
    </div>
  );
}

export default App;
