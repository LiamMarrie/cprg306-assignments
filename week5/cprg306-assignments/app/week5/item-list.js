'use strict';
'use client';
import React, {useState} from 'react';
import Item from './item';
import items from './items.json';

function ItemList(){
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

    return(
        <div>
            <p>Sort by:</p>
            {/* Sorting buttons */}
            <button
            onClick={() => setSortBy('name')}
            style={{
                backgroundColor: sortBy === 'name' ? 'blue' : 'transparent',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                marginRight: '20px',
            }}
            >
            Name
            </button>

            <button
            onClick={() => setSortBy('category')}
            style={{
                backgroundColor: sortBy === 'category' ? 'blue' : 'transparent',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                marginRight: '20px',
            }}
            >
            Category
            </button>

            <button
            onClick={() => setSortBy('quantity')}
            style={{
                backgroundColor: sortBy === 'quantity' ? 'blue' : 'transparent',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
            }}
            >
            Quantity
            </button>

            {/* Render the sorted items */}
            <ul>
                {sortedItems.map((item) => (
                <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
                ))}
            </ul>
        </div>
    );
}

export default ItemList;
