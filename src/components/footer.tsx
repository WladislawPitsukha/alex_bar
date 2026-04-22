"use client"

import React from 'react';
import { linksFot } from '@/constants/linksFot'
import { IconType } from 'react-icons'

const iconGradients = [
    "from-pink-500 via-red-400 to-yellow-300",
    "from-blue-500 via-cyan-400 to-green-300",
    "from-purple-500 via-fuchsia-400 to-pink-300",
    "from-orange-500 via-yellow-400 to-lime-300",
];

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white py-10 w-full border-t-4 border-white/10">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                    <span className="text-2xl font-extrabold tracking-wider bg-gradient-to-r from-pink-400 via-yellow-400 to-green-400 bg-clip-text text-transparent drop-shadow animate-gradient-move">
                        Alex Bar
                    </span>
                    <span className="text-sm font-medium italic bg-gradient-to-r from-white/60 via-white/90 to-white/60 bg-clip-text text-transparent tracking-wide animate-gradient-move">
                        Cozy cafe &amp; bar — good vibes only
                    </span>
                </div>

                <div className="flex items-center gap-3">
                    {linksFot.map((link, idx) => {
                        const Icon = link.icon as IconType;
                        const gradient = iconGradients[idx % iconGradients.length];
                        return (
                            <a
                                key={link.id}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.labelText}
                                className={`p-2 rounded-full bg-gradient-to-br ${gradient} animate-gradient-move text-black hover:scale-110 hover:shadow-lg transition-all shadow-md`}
                            >
                                <Icon />
                            </a>
                        );
                    })}
                </div>

                <div className="text-sm opacity-75 text-center md:text-right">
                    © {new Date().getFullYear()} Alex Bar. All rights reserved.
                </div>
            </div>
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
        </footer>
    )
}