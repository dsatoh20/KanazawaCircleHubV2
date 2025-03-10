'use client'

import { Input } from "@/components/ui/input";
import { Search } from '@geist-ui/icons'
import { useEffect, useRef, useState } from "react";
import CircleCard from "./circlecard";

export default function Searchbox({items}: {items: Circle[]}) {
    const [inputValue, setInputValue] = useState<string>('');
    const [open, setOpen] = useState(false);
    const [filteredItems, setFilteredItems] = useState<Circle[]>(items);
    const [selectedItem, setSelectedItem] = useState<Circle | null>(null);
    const searchBoxRef = useRef<HTMLDivElement | null>(null);

    function handleClick(value: string) {
        setSelectedItem(getCircle(value));
        setOpen(false);
    }
    function getCircle(value: string) {
        return items.filter((item) => item.circleName === value)[0];
    }

    useEffect(() =>{
        setFilteredItems(items.filter((item) => item.circleName.includes(inputValue)));
    }, [inputValue, items]
    );

    useEffect(() => {
        function handleClickOutside(event:MouseEvent) {
            if (searchBoxRef.current && !searchBoxRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener("click", handleClickOutside);
    }, []);

    return (
    <div className="w-full" ref={searchBoxRef}>
        <div className="flex w-full max-w-sm items-center border border-gray-300 rounded-lg px-2.5 py-1.5">
          <Search className="mr-1" />
          <Input type="search" placeholder="サークルをさがす" className="w-full border-0" onChange={(e) => setInputValue(e.target.value)} onFocus={() => setOpen(true)}/>
        </div>
        {open &&
        <ul className="w-full ml-4 mt-2">
            {filteredItems.length === 0 && <li className="mt-1 text-left"><span>検索結果がありません</span></li>}
            {filteredItems.map((item, index) => (
                <li className="mt-1 w-full" key={index}><button className="w-full text-left" onClick={(() => handleClick(item.circleName))}>{item.circleName}</button></li>
            ))}
        </ul>
        } 
        {selectedItem && <div className="mt-1"><CircleCard item={selectedItem} /></div>}
    </div>
    )
}