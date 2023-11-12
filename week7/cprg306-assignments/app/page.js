import Image from 'next/image';
import React from 'react';
import NewItem from './week7/new-item';
import ItemList from './week7/item-list';
import MealIdeas from './week7/meal-ideas';

export default function Home() {
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
        <div>
          <NewItem />
        </div>
        <div>
          <ItemList />
        </div>
      </div>
      <div>
        <MealIdeas/>
      </div>
      
    </main>
  )
}
