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
        <nav className="fixed top-0 inset-x-0 z-50 bg-black text-white py-4 shadow-md border-b border-white/10">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <Link href="/" aria-label="Home" className="flex items-center gap-3">
                        <div className="flex flex-col leading-none">
                            <span className="text-lg font-bold tracking-tight uppercase">
                                Alex Bar
                            </span>
                            <span className="text-xs opacity-75">Cozy cafe &amp; bar</span>
                        </div>
                    </Link>
                    <div className="hidden sm:flex items-center ml-2">
                        <Image
                            src={NorvaysFlag}
                            alt="Flag of Norway"
                            width={36}
                            height={36}
                            className="rounded-full object-cover shadow-sm"
                            priority
                        />
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
                    className="p-2 rounded-md text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
                >
                    {mobileOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
                </button>
                </div>
            </div>
            {mobileOpen && (
                <div className="md:hidden border-t border-white/10 bg-black">
                    <div className="px-4 py-4 space-y-2">
                        {navigationsParams.map((item) => (
                            <div key={item.id} className="w-full">
                                <AccordionUsage {...item} />
                            </div>
                        ))}
                        <div className="pt-2 border-t border-white/10 flex items-center justify-center gap-4">
                            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 rounded-full hover:bg-white/10">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="12" r="10" /></svg>
                            </Link>
                            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2 rounded-full hover:bg-white/10">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="2"/></svg>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}