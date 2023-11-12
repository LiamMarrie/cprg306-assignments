// Import React and necessary hooks
'use strict';
'use client';
import React, { useState } from 'react';
import Item from './item';
import items from './items.json';

// Define the ItemList functional component
function ItemList({ onItemSelect }) {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    } else if (sortBy === 'quantity') {
      // Compare quantities as numbers
      return a.quantity - b.quantity;
    }
    return 0;
  });

  return (
    <div>
      {/* Sorting buttons */}
      <button
        onClick={() => setSortBy('name')}
        style={{
          backgroundColor: sortBy === 'name' ? '#0f4c81' : 'transparent',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginRight: '20px',
          border: '2px solid #0f4c81',
        }}
      >
        Name
      </button>

      <button
        onClick={() => setSortBy('category')}
        style={{
          backgroundColor: sortBy === 'category' ? '#0f4c81' : 'transparent',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginRight: '20px',
          border: '2px solid #0f4c81',
        }}
      >
        Category
      </button>

      <button
        onClick={() => setSortBy('quantity')}
        style={{
          backgroundColor: sortBy === 'quantity' ? '#0f4c81' : 'transparent',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          border: '2px solid #0f4c81',
        }}
      >
        Quantity
      </button>

      {/* Render the sorted items */}
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={() => onItemSelect(item)} // Pass onSelect prop to each Item
          />
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
