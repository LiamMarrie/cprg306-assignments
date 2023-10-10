'use strict';
import React from 'react';
import ItemList from './item-list'; // Import the 'ItemList' component

function Page() {
  return (
    <main className="max-w-screen-xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
      <ItemList /> {/*item-list*/}
    </main>
  );
}

export default Page;
