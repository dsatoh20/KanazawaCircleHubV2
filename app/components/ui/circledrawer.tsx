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
import Image from "next/image";


interface CircleCardProps {
    item: Circle;
}

export default function CircleDrawer({item}: CircleCardProps) {
    return (
        <Drawer>
        <DrawerTrigger className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium text-white transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border border-input bg-black hover:bg-accent hover:text-accent-foreground h-8 px-4 has-[>svg]:px-3">詳しくみる</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{item.circleName}</DrawerTitle>
            
            <ScrollArea className="w-full h-[360px]">
            <img src={item.profileImage} alt={item.circleName} className="object-cover w-full h-[160px] mb-1"/>
            <h2 className="mt-1 mb-1">活動概要</h2>
            <DrawerDescription>{item.activityDetails.summary}</DrawerDescription>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <h2 className="pt-1">外部リンク</h2>
                        <div className="flex flex-row gap-2">
                            {item.externalLinks.Facebook && <a href={item.externalLinks.Facebook} target='_blank' rel='noopener noreferrer'><Image src="/facebook.svg" alt="facebook" width={24} height={24} /></a> }
                            {item.externalLinks.X && <a href={item.externalLinks.X} target='_blank' rel='noopener noreferrer'><Image src="/x.svg" alt="x" width={32} height={32} /></a>}
                            {item.externalLinks.Instagram && <a href={item.externalLinks.Instagram} target='_blank' rel='noopener noreferrer'><Image src="/instagram.svg" alt="instagram" width={32} height={32} /></a>}
                            {item.externalLinks.LINE && <a href={item.externalLinks.LINE} target='_blank' rel='noopener noreferrer'><Image src="/line.svg" alt="line" width={32} height={32} /></a>}
                            {item.externalLinks.Website && <a href={item.externalLinks.Website} target='_blank' rel='noopener noreferrer'><Image src="/website.svg" alt="website" width={32} height={32} /></a>}
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2>活動詳細</h2>
                        <div className="flex flex-col gap-1">
                            <p className="text-sm">活動実績</p>
                            <p className="text-sm text-muted-foreground">{item.activityDetails.record}</p>
                            <p className="text-sm">活動場所</p>
                            <p className="text-sm text-muted-foreground">{item.activityDetails.location}</p>
                            <p className="text-sm">活動頻度</p>
                            <p className="text-sm text-muted-foreground">{item.activityDetails.frequency}</p>
                            <p className="text-sm">部飯</p>
                            <p className="text-sm text-muted-foreground">{item.activityDetails.meal}</p>
                            <p className="text-sm">部費</p>
                            <p className="text-sm text-muted-foreground">{item.activityDetails.membershipFee}</p>
                            <p className="text-sm">初期費用</p>
                            <p className="text-sm text-muted-foreground">{item.activityDetails.initialCost}</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2>基本情報</h2>
                        <div className="flex flex-col gap-1">
                            <p className="text-sm">結成念</p>
                            <p className="text-sm text-muted-foreground">{item.memberComposition.foundingYear}年</p>
                            <p className="text-sm">部員数</p>
                            <p className="text-sm text-muted-foreground">{item.memberComposition.totalMembers}人</p>
                            <p className="text-sm">ジェンダー構成</p>
                            <p className="text-sm text-muted-foreground"></p>
                            <p className="text-sm">学域構成</p>
                            <p className="text-sm text-muted-foreground"></p>
                            <p className="text-sm">学年構成</p>
                            <p className="text-sm text-muted-foreground"></p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2>内部の声</h2>
                        <div className="flex flex-col gap-1">
                            <p className="text-sm">◎魅力</p>
                            <p className="text-sm text-muted-foreground">{item.activityDetails.feelingPositive}</p>
                            <p className="text-sm">△ここはちょっと...</p>
                            <p className="text-sm text-muted-foreground">{item.activityDetails.feelingNegative}</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2>新歓スケジュール</h2>
                        <div className="flex flex-col gap-1">
                            <p className="text-sm text-muted-foreground">{item.recruitmentInfo.welcomeSchedule}</p>
                        </div>
                    </div>
                </div>
                </ScrollArea>
          </DrawerHeader>
          <DrawerFooter>
            <a href={item.externalLinks.weighted} className="w-full" target='_blank' rel='noopener noreferrer'>
            <Button className="w-full">{item.circleName}公式サイトへ</Button></a>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
}
