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
            <MenubarItem>
                サークル一覧 <MenubarShortcut><Home /></MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>金沢サークルハブとは</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>新歓カレンダー</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>サークル運営者向け</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>お問い合わせ <MenubarShortcut><ExternalLink /></MenubarShortcut></MenubarItem>
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