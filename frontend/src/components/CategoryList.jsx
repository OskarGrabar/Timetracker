import React, { useEffect, useState } from 'react';
import api from '../api';

function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [newName, setNewName] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState('');

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    api.get('/categories').then(res => setCategories(res.data));
  };

  const addCategory = () => {
    api.post('/categories', { name: newName }).then(() => {
      setNewName('');
      fetchCategories();
    });
  };

  const startEdit = (id, name) => {
    setEditingId(id);
    setEditName(name);
  };

  const saveEdit = (id) => {
    api.put(`/categories/${id}`, { name: editName }).then(() => {
      setEditingId(null);
      setEditName('');
      fetchCategories();
    });
  };

  return (
    <div>
      <h2>Kategorier</h2>
      <ul>
        {categories.map(cat => (
          <li key={cat.id}>
            {editingId === cat.id ? (
              <>
                <input
                  value={editName}
                  onChange={e => setEditName(e.target.value)}
                />
                <button onClick={() => saveEdit(cat.id)}>Spara</button>
                <button onClick={() => setEditingId(null)}>Avbryt</button>
              </>
            ) : (
              <>
                {cat.name}
                <button onClick={() => startEdit(cat.id, cat.name)}>Redigera</button>
              </>
            )}
          </li>
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
