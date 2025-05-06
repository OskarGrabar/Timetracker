import React, { useState } from 'react';
import api from '../api';

function CheckInOut({ categories }) {
  const [active, setActive] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');

  const checkIn = () => {
    api.post('../time-entry/check-in', { categoryId: Number(selectedCategory) })
      .then(res => setActive(res.data));
  };

  const checkOut = () => {
    api.post('../time-entry/check-out').then(res => {
      setActive(null);
      alert(`Avslutade aktivitet: ${JSON.stringify(res.data)}`);
    });
  };

  return (
    <div>
      <h2>Tidrapportering</h2>
      {active ? (
        <div>
          <p>Aktiv: {active.startTime}</p>
          <button onClick={checkOut}>Checka ut</button>
        </div>
      ) : (
        <div>
          <select onChange={e => setSelectedCategory(e.target.value)} value={selectedCategory}>
            <option value="">Välj kategori</option>
            {categories.map(c => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
          <button disabled={!selectedCategory} onClick={checkIn}>Checka in</button>
        </div>
      )}
    </div>
  );
}

export default CheckInOut;
