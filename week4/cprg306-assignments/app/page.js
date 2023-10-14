import Image from 'next/image'
import React from 'react';
import NewItem from './week4/new-item';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
            <NewItem id="new-item" />
      </div>
    </main>
  )
}
