import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [offCanvas, setOffCanvas] = useState(false);  

  return (
    <nav className="flex py-14 items-center justify-between">
        <div className="md:hidden cursor-pointer" onClick={() => setOffCanvas(!offCanvas)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.4">
                <path d="M3 12H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3 6H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3 18H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
            </svg>
        </div>
        <Link href="/">
            <a className="md:w-2/12 flex items-center gap-3">
                <div className="bg-slate-600 px-4 py-2 w-max rounded-md">
                    <span>E</span>
                </div>
                <div>Epictetus</div>
            </a>
        </Link>
        <ul className={`md:w-7/12 transition duration-300 md:translate-x-0 ${offCanvas ? 'translate-x-0' : '-translate-x-full'} flex gap-12 md:flex md:static fixed left-0 right-0 bottom-0 top-0 z-10 md:bg-transparent bg-slate-700 justify-center md:justify-start md:flex-row flex-col items-center md:text-base text-xl`}>
            <div className="cursor-pointer md:hidden fixed right-10 top-8 text-2xl" onClick={() => setOffCanvas(!offCanvas)}>&#10005;</div>
            <li><Link href="/"><a>UI Design</a></Link></li>
            <li><Link href="/"><a>Front-end</a></Link></li>
            <li><Link href="/"><a>Back-end</a></Link></li>
            <li><Link href="/">
                    <a className="flex items-center gap-1">
                        <span>Lainnya</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3org/2000/svg">
                            <path d="M4 6L8 10L12 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </a>
                </Link>
            </li>
        </ul>
        <div className="w-3/12 hidden md:flex justify-end">
            <input className="bg-[#1F2937] outline-none rounded-full py-2 pr-6 pl-12 icon-search" placeholder="Search" />
        </div>
        <div className="md:hidden md:w-4/12">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.4">
                <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21 21L16.65 16.65" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
            </svg>
        </div>
    </nav>
  )
}

