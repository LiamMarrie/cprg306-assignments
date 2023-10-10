import React from 'react';
import Image from 'next/image';
import ItemList from './week3/item-list';

export default function Home() {
  // Define your shopping list items here
  const shoppingListItems = [
    { name: 'Item 1', quantity: 3, category: 'Category A' },
    { name: 'Item 2', quantity: 2, category: 'Category B' },
    { name: 'Item 3', quantity: 5, category: 'Category C' },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
      <ItemList items={shoppingListItems} /> {/* Pass the shopping list items as a prop */}
    </main>
  );
}
