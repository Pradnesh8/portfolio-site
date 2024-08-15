"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { RiCloseLargeLine } from "react-icons/ri";
export default function Navbar() {
    const pathname = usePathname()
    const [IsNavActive, setIsNavActive] = useState(false)
    const toggleNav = () => {
        IsNavActive ? setIsNavActive(false) : setIsNavActive(true)
    }
    return (
        <>
            {/* For mobile devices */}
            <div className="fixed z-20 flex top-2 right-2 md:hidden" onClick={toggleNav}>
                {
                    IsNavActive ?
                        <RiCloseLargeLine fontSize={"2rem"} style={{ marginTop: "0.25rem", marginRight: '0.25rem', background: "gray" }} />
                        :
                        <FiMenu fontSize={"2.5rem"} style={{ background: "black", padding: "0.2rem", borderRadius: "0.25rem" }} />
                }

                {/* <div className="text-5xl rotate-90 navbar-text tracking-widest -ml-4">MENU</div> */}
                {
                    IsNavActive &&
                    (
                        <nav className="bg-black rounded-sm opacity-85">
                            <ul className="text-left min-h-screen flex flex-col justify-start gap-2 text-2xl">
                                <Link href="/profile">
                                    <li className={`px-16 py-4 cursor-pointer hover:underline hover:underline-offset-8 ${(pathname === '/' || pathname === '/profile') && ' underline underline-offset-8'}`}>
                                        Profile
                                    </li>
                                </Link>
                                <Link href="/projects">
                                    <li className={`px-16 py-4  cursor-pointer hover:underline hover:underline-offset-8 ${(pathname === '/projects') && ' underline underline-offset-8'}`}>
                                        Projects
                                    </li>
                                </Link>
                                <Link href="/skills">
                                    <li className={`px-16 py-4  cursor-pointer hover:underline hover:underline-offset-8 ${(pathname === '/skills') && ' underline underline-offset-8'}`}>
                                        Skills
                                    </li>
                                </Link>
                                <Link href="/resume">
                                    <li className={`px-16 py-4  cursor-pointer hover:underline hover:underline-offset-8 ${(pathname === '/resume') && ' underline underline-offset-8'}`}>
                                        Resume
                                    </li>
                                </Link>
                            </ul>
                        </nav>
                    )
                }
            </div>
            {/* For other devices */}
            <div className="hidden md:block navbar">
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
