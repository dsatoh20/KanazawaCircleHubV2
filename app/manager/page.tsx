import { Send, ExternalLink } from '@geist-ui/icons'
import Image from 'next/image'
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "団体運営者向け | 金沢サークルハブ | 金沢大学のサークル・学生団体紹介",
    description: "金沢・北陸の学生向け、サークル情報まとめサイトです。各団体の活動内容から新歓スケジュールまで掲載しています。",        
}

export default function Page() {
    return (
        <div className="grid grid-rows-[0px_1fr_20px] justify-items-center  pl-4 pr-4 pb-4 gap-4 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-[16px] row-start-2 items-left sm:items-start">
                <p className='flex text-sm text-muted-foreground'><ExternalLink size={16} className='mr-1 mt-0.5' />外部リンク</p>
                <ul className='flex flex-col gap-4'>
                    <li><a className='flex' href='https://circlehubinfo.netlify.app/' target='_blank' rel='noopener noreferrer'>
                        <Image className='mr-1' src={"/website.svg"} height={24} width={24} alt='website'/><p>サークル運営者向けサイト</p>
                    </a></li>
                    <li><a className='flex' href='https://docs.google.com/forms/d/e/1FAIpQLSfKS6W8k96MnR8cCdYF1ZX0PmcJdhw7ahlIIZgOo2NCGeIPWw/viewform?usp=dialog' target='_blank' rel='noopener noreferrer'>
                        <Send className='mr-1'/><p>掲載内容修正依頼フォーム</p>
                    </a></li>
                </ul>
            </main>
        </div>
    )
}