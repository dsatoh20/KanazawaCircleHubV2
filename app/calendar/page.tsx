import { Metadata } from "next"

export const metadata: Metadata = {
    title: "新歓カレンダー | 金沢サークルハブ | 金沢大学のサークル・学生団体紹介",
    description: "金沢・北陸の学生向け、サークル情報まとめサイトです。各団体の活動内容から新歓スケジュールまで掲載しています。",        
}

export default function Page() {
    return (
        <div className="grid grid-rows-[0px_1fr_20px] justify-items-center pl-4 pr-4 pb-4 gap-4 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-[16px] row-start-2 items-center sm:items-start">
            <p className="m-4">新歓カレンダー</p>
            <div className="pt-8">
                <iframe src="https://calendar.google.com/calendar/embed?src=70ec9252bded01ff4dc5ce38e1c04347877bdbf442b365603d3806b1c5bcd82f%40group.calendar.google.com&ctz=Asia%2FTokyo" width="100%" height="600" />
            </div>
            <p className="text-sm">※最新情報は各団体に確認してください。</p>
            </main>
        </div>
    )
}