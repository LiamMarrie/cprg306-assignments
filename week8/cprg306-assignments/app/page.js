'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import NewItem from './week7/new-item';
import ItemList from './week7/item-list';
import MealIdeas from './week7/meal-ideas';
import Page from './week7/page';

export default function Home() {
  const handleItemSelect = (selectedItemName) => {
    // Handle the selection of an item, e.g., update state or perform any desired action
    console.log(`Selected item: ${selectedItemName}`);
  };

  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'left',
      margin: '25px',
      webkitUserSelect: 'none',
      msUserSelect: 'none',
      mozUserSelect: 'none',
      userSelect: 'none'
    }}>
      <div>
        <h1 style={{
          fontSize: '40px',
          fontWeight: 'bold',
          color: 'white',
          marginBottom: '20px'
        }}>Shopping List</h1>
      </div>
      <div>
        <MealIdeas />
      </div>
      <div>
        <Page />
      </div>
    </main>
  );
}

