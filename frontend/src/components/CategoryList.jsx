import React, { useEffect, useState } from 'react';
import api from '../api';

function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [newName, setNewName] = useState('');

  useEffect(() => {
    api.get('/categories').then(res => setCategories(res.data));
  }, []);

  const addCategory = () => {
    api.post('/categories', { name: newName }).then(res => {
      setCategories([...categories, res.data]);
      setNewName('');
    });
  };

  return (
    <div>
      <h2>Kategorier</h2>
      <ul>
        {categories.map(cat => (
          <li key={cat.id}>{cat.name}</li>
        ))}
      </ul>
      <input
        value={newName}
        onChange={e => setNewName(e.target.value)}
        placeholder="Ny kategori"
      />
      <button onClick={addCategory}>Lägg till</button>
    </div>
  );
}

export default CategoryList;
