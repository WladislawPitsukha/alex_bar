"use client";

import React, { useState } from "react";
import NorvaysFlag from "@/assets/imgs/norwaysflag.jpg";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import AccordionUsage from "./AccordionUsage";
import { navigationsParams } from "@/constants/navigations";

export default function NavBar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className="fixed top-0 inset-x-0 z-50 bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white py-4 shadow-2xl border-b-2 border-white/10">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <Link href="/" aria-label="Home" className="flex items-center gap-3 group">
                        <div className="flex flex-col leading-none">
                            <span className="text-xl font-extrabold tracking-wider uppercase bg-gradient-to-r from-pink-400 via-yellow-400 to-green-400 bg-clip-text text-transparent drop-shadow animate-gradient-move">
                                Alex Bar
                            </span>
                            <span className="text-xs font-medium italic bg-gradient-to-r from-white/60 via-white/90 to-white/60 bg-clip-text text-transparent tracking-wide animate-gradient-move">
                                Cozy cafe &amp; bar
                            </span>
                        </div>
                    </Link>
                    <div className="hidden sm:flex items-center ml-2">
                        <div className="rounded-full p-[2px] bg-gradient-to-br from-pink-500 via-yellow-400 to-green-300 animate-gradient-move shadow-lg">
                            <Image
                                src={NorvaysFlag}
                                alt="Flag of Norway"
                                width={36}
                                height={36}
                                className="rounded-full object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex items-center gap-6">
                    {navigationsParams.map((item) => (
                        <AccordionUsage key={item.id} {...item} />
                    ))}
                </div>
                <div className="flex items-center gap-3 md:hidden">
                    <button
                        onClick={() => setMobileOpen((s) => !s)}
                        aria-label={mobileOpen ? "Close menu" : "Open menu"}
                        className="p-2 rounded-full bg-gradient-to-br from-pink-500 via-yellow-400 to-green-300 animate-gradient-move text-black hover:scale-110 hover:shadow-lg transition-all shadow-md"
                    >
                        {mobileOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
                    </button>
                </div>
            </div>
            {mobileOpen && (
                <div className="md:hidden border-t border-white/10 bg-gradient-to-b from-gray-900 to-black">
                    <div className="px-4 py-4 space-y-2">
                        {navigationsParams.map((item) => (
                            <div key={item.id} className="w-full">
                                <AccordionUsage {...item} />
                            </div>
                        ))}
                        <div className="pt-2 border-t border-white/10 flex items-center justify-center gap-4">
                            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 rounded-full bg-gradient-to-br from-pink-500 via-red-400 to-yellow-300 animate-gradient-move text-black hover:scale-110 hover:shadow-lg transition-all shadow-md">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="12" r="10" /></svg>
                            </Link>
                            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2 rounded-full bg-gradient-to-br from-blue-500 via-cyan-400 to-green-300 animate-gradient-move text-black hover:scale-110 hover:shadow-lg transition-all shadow-md">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="2"/></svg>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
            <style jsx global>{`
                @keyframes gradient-move {
                    0% { background-position: 0% 50%; }
                    100% { background-position: 100% 50%; }
                }
                .animate-gradient-move {
                    background-size: 200% 200%;
                    animation: gradient-move 6s ease-in-out infinite alternate;
                }
            `}</style>
        </nav>
    );
}