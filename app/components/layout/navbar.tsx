import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import { Menu, Home, ExternalLink } from '@geist-ui/icons'
import Image from "next/image"
import Link from "next/link"


export default function Navbar() {
    return (
        <Menubar className="h-16 rounded-none">
        <MenubarMenu>
            <MenubarTrigger><Menu className="ms-1"/></MenubarTrigger>
            <MenubarContent>
            <Link href={"/"}>
            <MenubarItem>
                サークル一覧 <MenubarShortcut><Home /></MenubarShortcut>
            </MenubarItem></Link>
            <MenubarSeparator />
            <Link href={"/about"}><MenubarItem>金沢サークルハブとは</MenubarItem></Link>
            <MenubarSeparator />
            <Link href={"/calendar"}><MenubarItem>新歓カレンダー</MenubarItem></Link>
            <MenubarSeparator />
            
            <Link href={"/manager"}><MenubarItem>サークル運営者向け</MenubarItem></Link>
            <MenubarSeparator />
            <Link 
                href="https://docs.google.com/forms/u/1/d/1XgikhuDE0JQoBhm0a7QN3_60IQzY9ZHGJ0H_3LxaLqQ/" 
                target='_blank' 
                rel='noopener noreferrer'
                >
            <MenubarItem>
                お問い合わせ <MenubarShortcut><ExternalLink /></MenubarShortcut>
            </MenubarItem></Link>
            </MenubarContent>
            
        </MenubarMenu>
        <Link href={"/"}>
        <div className="flex item-center ml-1">
            <Image src="/logo.svg" alt="logo" height={30} width={30} />
            <Image src="/logo_typo.svg" alt="logo" height={30} width={200} className="ml-1" />
        </div>
        </Link>
        
        </Menubar>

    )
}