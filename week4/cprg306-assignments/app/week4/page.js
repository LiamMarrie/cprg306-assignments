'use strict';
import React from 'react';
import NewItem from './new-item';

// Mark Page component as a client entry with "use client"
export const useClient = true;

export default function Page() {
  return (
    <div>
      <h1>Add New Item</h1>
      <NewItem />
    </div>
  );
}
