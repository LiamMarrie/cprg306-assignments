'use strict';
import React from 'react';

function Item({ name, quantity, category }) {
  return (
    <li className="border border-gray-300 p-4 rounded-md shadow-md mb-4">
      <div className="font-bold text-lg">{name}</div>
      <div className="text-gray-600">Category: {category}</div>
      <div className="text-gray-600">Quantity: {quantity}</div>
    </li>
  );
}

export default Item;