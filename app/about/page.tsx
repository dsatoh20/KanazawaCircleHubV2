import Image from "next/image";

export default function Page() {
    return (
        <div className="grid grid-rows-[0px_1fr_20px] justify-items-center pl-4 pr-4 pb-4 gap-4 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col row-start-2 items-center sm:items-start">
            <div className="">
                <Image alt="demo" src={"/demo.png"} width={400} height={400} />
            </div>
            <p className="text-lg text-muted-foreground pt-4">私たちのミッション</p>
            <p className="text-2xl pt-4">金沢・北陸の学生と<br/>サークルをつなぐ<br/>&quot;HUB&quot;となる</p>
            <p className="text-sm pl-8 pr-8 pt-4">&emsp;加賀藩の城下町として栄え、工芸、芸能を培ってきた伝統のまち、金沢。その一方で、今日には、新たな価値を生み出す創造都市としてもその存在感を放っています。そんな金沢を語るうえで、学生の存在は欠かせません。人口あたりの高等教育機関数、学生数は全国屈指であり、街中は若い活気であふれています。伝統と創造のまち、金沢は、学生がつくるまちでもあるのです。<br />&emsp;学生個々は流動的で未熟です。まだ何者でもない彼らは、志を同じくする仲間と集うことによって、これまで金沢のまちへ貢献してきました。私たちは、自らも金沢の学生として、このまちをつくる熱意ある同志をつなぎたい。学生と学生を、そして学生とまちをつなぐHUBとなる。その思いで、「金沢サークルハブ」を立ち上げました。</p>
            <p className="text-lg text-muted-foreground pt-8">沿革</p>
            <p className="w-full text-sm pl-8 pr-8 pt-4 text-left">2025年2月</p>
            <p className="w-full text-sm text-muted-foreground pl-8 pr-8 text-left">金沢大学の学生2名で結成。</p>
            <div className="flex flex-row justify-center pt-16 gap-4">
                <a href="https://www.instagram.com/kanazawa.circlehub/" target="_blank" rel="noopener noreferrer"><Image alt="Instagram" src={"/instagram.svg"} width={32} height={32} /></a>
                <a href="https://x.com/gocirclehub" target="_blank" rel="noopener noreferrer"><Image alt="X" src={"/x.svg"} width={32} height={32} /></a>
            </div>
            </main>
        </div>
    )
}