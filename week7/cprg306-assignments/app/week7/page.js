// Import React and necessary components
import React, { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';

// Define the Page functional component
function Page() {
  // State variable to hold the name of the selected item
  const [selectedItemName, setSelectedItemName] = useState('');

  // Event handler to handle item selection
  const handleItemSelect = (itemName) => {
    // Clean up the item name by removing emojis and other characters
    const cleanedItemName = itemName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '').trim();
    
    // Update the state with the cleaned item name
    setSelectedItemName(cleanedItemName);
  };

  // Function to handle the addition of a new item to the list
  const handleAddItem = (newItem) => {
    // Update the list of items
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {/* NewItem and ItemList components grouped together */}
      <div>
        <NewItem onAddItem={handleAddItem}/>
        <ItemList onItemSelect={handleItemSelect} />
      </div>

      {/* MealIdeas component on the other side */}
      <MealIdeas ingredient={selectedItemName} />
    </div>
  );
}

export default Page;
