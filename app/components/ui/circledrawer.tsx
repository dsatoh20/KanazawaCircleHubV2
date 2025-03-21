import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import Image from "next/image";

interface CircleCardProps {
    item: Circle;
}

export default function CircleDrawer({item}: CircleCardProps) {
    return (
        <Drawer>
        <DrawerTrigger className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium text-white transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border border-input bg-black hover:bg-accent hover:text-accent-foreground h-7 px-4 has-[>svg]:px-3">詳しくみる</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <img src={item.profileImage} alt={item.circleName} className="object-cover w-full h-[160px] mb-1"/>
            <DrawerTitle>{item.circleName}</DrawerTitle>
            <ScrollArea className="w-full h-[360px]">
            <DrawerDescription className="">{item.activityDetails.summary}</DrawerDescription>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <h2 className="mt-4">外部リンク</h2>
                    <div className="flex flex-row gap-2 items-center">
                        {item.externalLinks.Facebook && <a href={item.externalLinks.Facebook} target='_blank' rel='noopener noreferrer'><Image src="/facebook.svg" alt="facebook" width={24} height={24} /></a> }
                        {item.externalLinks.X && <a href={item.externalLinks.X} target='_blank' rel='noopener noreferrer'><Image src="/x.svg" alt="x" width={32} height={32} /></a>}
                        {item.externalLinks.Instagram && <a href={item.externalLinks.Instagram} target='_blank' rel='noopener noreferrer'><Image src="/instagram.svg" alt="instagram" width={32} height={32} /></a>}
                        {item.externalLinks.LINE && <a href={item.externalLinks.LINE} target='_blank' rel='noopener noreferrer'><Image src="/line.svg" alt="line" width={32} height={32} /></a>}
                        {item.externalLinks.Website && <a href={item.externalLinks.Website} target='_blank' rel='noopener noreferrer'><Image src="/website.svg" alt="website" width={32} height={32} /></a>}
                    </div>
                </div>
            </div>
            </ScrollArea>
          </DrawerHeader>
          <DrawerFooter>
            <Link href={`/circle/${item.slug}`}>
            <Button className="w-full">{item.circleName}のページへ</Button></Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
}
