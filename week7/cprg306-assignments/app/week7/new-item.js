'use strict';
'use client';
import React, { useState } from 'react';

function NewItem({ onAddItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('Produce');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { name, quantity, category };
    onAddItem(newItem); // Invoke the onAddItem prop with the item object
    setName('');
    setQuantity(1);
    setCategory('Produce');
  };

  return (
    <div className='newItemContainer' style={{
      border: '1px solid black',
      width: '350px',
      padding: '15px',
      marginBottom: '10px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#e2eaeb',
      borderRadius: '5px',
      MozUserSelect: 'none',
      WebkitUserSelect: 'none',
      msUserSelect: 'none',
    }}>
      <div className='inputs'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='Name'
            value={name}
            onChange={e => setName(e.target.value)}
            style={{
              color: 'black',
              width: '100%',
              marginBottom: '10px',
              padding: '10px',
              boxSizing: 'border-box',
              border: '1px solid black',
              borderRadius: '5px',
            }}
            placeholder='Item name'
          />
          <div className='bottom' style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <input
              type='number'
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min='1'
              max='99'
              required
              style={{
                width: '25%',
                color: 'black',
                marginRight: '20px',
                textAlign: 'center',
                border: '1px solid black',
                borderRadius: '5px',
              }}
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={{
                width: '50%',
                color: 'black',
                marginLeft: '20px',
                border: '1px solid black',
                borderRadius: '5px',
              }}>
              <option value="Produce">Produce</option>
              <option value="Dairy">Dairy</option>
              <option value="Bakery">Bakery</option>
              <option value="Meat">Meat</option>
              <option value="Frozen Foods">Frozen Foods</option>
              <option value="Canned Goods">Canned Goods</option>
              <option value="Dry Goods">Dry Goods</option>
              <option value="Beverages">Beverages</option>
              <option value="Snacks">Snacks</option>
              <option value="Household">Household</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <button
            type='submit'
            style={{
              backgroundColor: '#0f4c81',
              color: 'white',
              width: '100%',
              padding: '10px',
              textAlign: 'center',
              marginTop: '10px',
              borderRadius: '5px',
              cursor: 'pointer',
            }}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewItem;
