import Image from 'next/image';
import React from 'react';
import Page from './week6/page';
import NewItem from './week6/new-item';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <NewItem />
      </div>
    </main>
  )
}
