/*
// Import React and necessary hooks
'use strict';
'use client';
import React, { useState } from 'react';
import itemsData from './items.json'; // Import itemsData
import MealIdeas from './meal-ideas';
import NewItem from './new-item';
import ItemList from './item-list';

function Page() {
  // Initialize state with itemsData from items.json
  const [items, setItems] = useState(itemsData);
  const [selectedItem, setSelectedItem] = useState(null); // New state for selected item

  // Event handler to add a new item to the list
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  // Event handler to select an item
  const handleItemSelect = (itemName) => {
    setSelectedItem(itemName);
  };

  return (
    <div>

      <NewItem onAddItem={handleAddItem} />
      <div>
        <ItemList onItemSelect={handleItemSelect} />
      </div>

      
      {selectedItem && (
        <div>
          <MealIdeas ingredient={selectedItem} />
        </div>
      )}
    </div>
  );
}

export default Page;
*/
// Import React and necessary hooks
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
  const [selectedItem, setSelectedItem] = useState(null); // New state for selected item

  // Event handler to add a new item to the list
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  // Event handler for selecting an item
  const handleItemSelect = (itemName) => {
    // Find the selected item from the items array
    const selected = items.find((item) => item.name === itemName);
    setSelectedItem(selected);
  };

  return (
    <div>
      {/* Pass the onAddItem prop to the NewItem component */}
      <NewItem onAddItem={handleAddItem} />
      <div>
        {/* Pass the onItemSelect prop to the ItemList component */}
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div>
        {/* Pass the selected item's name to the MealIdeas component */}
        <MealIdeas ingredient={selectedItem?.name} />
      </div>
    </div>
  );
}

export default Page;

