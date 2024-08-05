"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname()
    return (
        <nav>
            <ul className="text-center">
                <Link href="/profile">
                    <li className={`px-24 py-4 cursor-pointer hover:bg-slate-300 ${(pathname === '/' || pathname === '/profile') && ' bg-black text-white hover:bg-slate-900'}`}>
                        Profile
                    </li>
                </Link>
                <Link href="/experience">
                    <li className={`px-24 py-4  cursor-pointer hover:bg-slate-300 ${(pathname === '/experience') && ' bg-black text-white hover:bg-slate-900'}`}>
                        Experience
                    </li>
                </Link>
                <Link href="/projects">
                    <li className={`px-24 py-4  cursor-pointer hover:bg-slate-300 ${(pathname === '/projects') && ' bg-black text-white hover:bg-slate-900'}`}>
                        Projects
                    </li>
                </Link>
                <Link href="/skills">
                    <li className={`px-24 py-4  cursor-pointer hover:bg-slate-300 ${(pathname === '/skills') && ' bg-black text-white hover:bg-slate-900'}`}>
                        Skills
                    </li>
                </Link>
                <Link href="/education">
                    <li className={`px-24 py-4  cursor-pointer hover:bg-slate-300 ${(pathname === '/education') && ' bg-black text-white hover:bg-slate-900'}`}>
                        Education
                    </li>
                </Link>
                <Link href="/social">
                    <li className={`px-24 py-4  cursor-pointer hover:bg-slate-300 ${(pathname === '/social') && ' bg-black text-white hover:bg-slate-900'}`}>
                        Follow me
                    </li>
                </Link>
                <Link href="/resume">
                    <li className={`px-24 py-4  cursor-pointer hover:bg-slate-300 ${(pathname === '/resume') && ' bg-black text-white hover:bg-slate-900'}`}>
                        Resume
                    </li>
                </Link>
            </ul>
        </nav>
    )
}
