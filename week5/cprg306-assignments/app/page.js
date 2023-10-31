import Image from 'next/image'
import React from 'react';
import NewItem from './week5/item-list';
import Page from './week5/page';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Page id="title"/>
      </div>
      <div>
        <NewItem id="new-item" />
      </div>
    </main>
  )
}
