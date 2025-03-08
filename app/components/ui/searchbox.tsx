'use client'

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
  } from "@/components/ui/command"
import { useState } from "react";
import CircleCard from "./circlecard";

const tags = ['公認', '文化系', '体育会系', '音楽', '兼サー可', '中途歓迎', 'インカレ', 'ボランティア', '初心者歓迎'];

export default function Searchbox({items}: {items: Circle[]}) {
    const [inputValue, setInputValue] = useState<string>('');
    function handleClick(value: string) {
        setInputValue(value);
    }
    function getCircle(value: string) {
        return items.filter((item) => item.circleName === value)[0];
    }
    function sortByTag(items: Circle[], tag: string) {
        return items.filter((item) => item.tags.includes(tag));
    }
    return (<>
        <Command>
        <CommandInput placeholder="サークルをさがす" />
        <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            {tags.map((tag) => (<>
                <CommandGroup heading={tag}>
                {sortByTag(items, tag).map((item: Circle, index: number) => (
                    <CommandItem key={index} value={item.circleName}><button onClick={() => handleClick(item.circleName)}>{item.circleName}</button></CommandItem>
                ))}
                </CommandGroup>
                <CommandSeparator />
            </>))}
        </CommandList>
        {(inputValue !== '') && <div className="pt-2 pb-2 bg-gray-200"><CircleCard item={getCircle(inputValue)}/></div>}
        </Command>
        
    </>)
}