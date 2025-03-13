//import { Metadata } from "next";
import data from "../../../data.json";
import { notFound } from 'next/navigation';
import Image from "next/image";
export async function generateMetadata({ params }: { params: { slug: string }}): Promise<Metadata> {
    const items: Circle[] = data;
    const {slug} = await params;
    const item = items.find((item) => item.slug === slug);
    if (!item) {
        notFound();
    }

    return {
        title: `${item?.circleName} | 金沢サークルハブ | 金沢大学のサークル・学生団体紹介`,
        description: `${item?.activityDetails.summary}`,
    };
}


export default async function Page({ params }: { params: { slug: string } }) {
    const items:Circle[] = data;
    const { slug } = await params;
    const item = items.find((item) => item.slug === slug);
    if (!item) {
        notFound();
    }
return (
    <div className="grid grid-rows-[0px_1fr_20px] justify-items-center pl-8 pr-8 pb-4 gap-4 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[16px] row-start-2 items-center sm:items-start">
        <p>{item.circleName}</p>
        <img src={item.profileImage} alt={item.circleName} className="w-full"/>
        <p className="text-sm">{item.activityDetails.summary}</p>
                <div className="flex flex-col gap-4  whitespace-pre-wrap">
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
                    <div className="flex flex-col gap-4">
                        <h2>活動詳細</h2>
                        <div className="flex flex-col gap-2">
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
                    <div className="flex flex-col gap-4">
                        <h2>基本情報</h2>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm">結成年</p>
                            <p className="text-sm text-muted-foreground">{item.memberComposition.foundingYear}</p>
                            <p className="text-sm">部員数</p>
                            <p className="text-sm text-muted-foreground">{item.memberComposition.totalMembers}</p>
                            <p className="text-sm">ジェンダー構成</p>
                            <p className="text-sm text-muted-foreground"></p>
                            <p className="text-sm">学域構成</p>
                            <p className="text-sm text-muted-foreground"></p>
                            <p className="text-sm">学年構成</p>
                            <p className="text-sm text-muted-foreground"></p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2>内部の声</h2>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm">◎魅力</p>
                            <p className="text-sm text-muted-foreground">{item.activityDetails.feelingPositive}</p>
                            <p className="text-sm">△ここはちょっと...</p>
                            <p className="text-sm text-muted-foreground">{item.activityDetails.feelingNegative}</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2>新歓スケジュール</h2>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm text-muted-foreground">{item.recruitmentInfo.welcomeSchedule}</p>
                        </div>
                    </div>
                </div>
        </main>
    </div>
);
}