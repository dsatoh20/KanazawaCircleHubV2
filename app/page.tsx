'use client'

import Searchbox from "./components/ui/searchbox";
import { SortChip } from "./components/ui/sortchip";
import data from "../data.json";
import CircleCard from "./components/ui/circlecard";
import { useState } from "react";

export default function Home() {
  const items:Circle[] = data;
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  function sortByTags(items: Circle[], tags: string[]) {
    if (tags.length === 0) return items;
    return items.filter((item) => tags.every((tag) => item.tags.includes(tag)));
  };

  function shuffleOnce(array: Circle[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // 0 から i のランダムなインデックス
      [array[i], array[j]] = [array[j], array[i]]; // 要素を入れ替えます
    }
  };
  function shuffleAndReturnItems(array: Circle[]) {
    for (let i = 0; i < 20; i++) {
      shuffleOnce(array);
    };
    return array;
  };
  return (
    <div className="grid grid-rows-[0px_1fr_20px] justify-items-center pl-4 pr-4 pb-4 gap-4 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[16px] row-start-2 items-center sm:items-start">
        <Searchbox items={items} />
        <SortChip selectedItems={selectedItems} setSelectedItems={setSelectedItems}/>
        {sortByTags(shuffleAndReturnItems(items), selectedItems).map((item: Circle, index: number) => (
          <CircleCard item={item} key={index}/>))}
        
        
      </main>
    </div>
  );
}
