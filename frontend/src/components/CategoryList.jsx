import React, { useState } from 'react';
import api from '../api';

function CategoryList({ categories, fetchCategories }) {
  const [newName, setNewName] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState('');

  const addCategory = () => {
    if (!newName.trim()) return;
    api.post('/categories', { name: newName.trim() })
      .then(() => {
        setNewName('');
        fetchCategories();
      })
      .catch(err => console.error('Failed to add category', err));
  };

  const startEdit = (id, name) => {
    setEditingId(id);
    setEditName(name);
  };

  const saveEdit = (id) => {
    if (!editName.trim()) return;
    api.put(`/categories/${id}`, { name: editName.trim() })
      .then(() => {
        setEditingId(null);
        setEditName('');
        fetchCategories();
      })
      .catch(err => console.error('Failed to update category', err));
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
                {cat.name}{' '}
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
      <button onClick={addCategory} disabled={!newName.trim()}>Lägg till</button>
    </div>
  );
}

export default CategoryList;
