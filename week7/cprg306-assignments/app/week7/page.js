'use strict';
'use client';
import React, { useState } from 'react';
import itemsData from './items.json';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';

function Page() {
  // Initialize state with itemsData from items.json
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(null); // New state for selected item name

  // Event handler for selecting an item
  const handleItemSelect = (itemName) => {
    // Clean up the selected item name (remove size and emoji)
    const cleanedItemName = itemName.replace(/[\p{Emoji}]/gu, '').split(',')[0].trim();
    setSelectedItemName(cleanedItemName);
  };

  // Event handler to add a new item to the list
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [newItem, ...prevItems]);
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Left side with NewItem and ItemList components */}
      <div style={{ flex: 1 }}>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>

      {/* Right side with MealIdeas component */}
      <div style={{ flex: 1 }}>
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </div>
  );
}

export default Page;