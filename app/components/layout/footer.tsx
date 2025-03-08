import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { ExternalLink, ChevronUpCircle } from '@geist-ui/icons'


export default function Footer() {
    return (
        <footer className="stick w-full h-24 bg-gray-50 justify-center items-center p-5 hover:underline hover:underline-offset-4">
            <div className="flex items-center h-5 space-x-4 justify-center">
            <Link 
                color='primary.light'
                href="https://docs.google.com/forms/u/1/d/1XgikhuDE0JQoBhm0a7QN3_60IQzY9ZHGJ0H_3LxaLqQ/" 
                target='_blank' 
                rel='noopener noreferrer'
                className="flex"
                >
                    お問い合わせ <ExternalLink className="ms-1"/>
            </Link>
            <Separator orientation="vertical" className=""/>
            <Link 
                color='primary.light'
                href='/'
                className="flex"

                >トップへ戻る <ChevronUpCircle className="ms-1"/>
            </Link>
            </div>
            <div className="">
                <p className="text-sm w-full text-center m-3">&copy; 2025 Kanazawa Circle Hub</p>
            </div>
        </footer>
    )}