"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname()
    return (
        <>
            <div className="navbar">
                <div className="text-5xl rotate-90 navbar-text tracking-widest -ml-4">MENU</div>
                <nav className="flex-[25%] navitems">
                    <ul className="text-left gap-2 text-3xl">
                        <Link href="/profile">
                            <li className={`px-24 py-4 cursor-pointer hover:underline hover:underline-offset-8 ${(pathname === '/' || pathname === '/profile') && ' underline underline-offset-8'}`}>
                                Profile
                            </li>
                        </Link>
                        <Link href="/projects">
                            <li className={`px-24 py-4  cursor-pointer hover:underline hover:underline-offset-8 ${(pathname === '/projects') && ' underline underline-offset-8'}`}>
                                Projects
                            </li>
                        </Link>
                        <Link href="/skills">
                            <li className={`px-24 py-4  cursor-pointer hover:underline hover:underline-offset-8 ${(pathname === '/skills') && ' underline underline-offset-8'}`}>
                                Skills
                            </li>
                        </Link>
                        <Link href="/resume">
                            <li className={`px-24 py-4  cursor-pointer hover:underline hover:underline-offset-8 ${(pathname === '/resume') && ' underline underline-offset-8'}`}>
                                Resume
                            </li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </>
    )
}
