"use client";

import { events } from "@/constants/events";
import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import { EventBlock } from "./EventBlock";


export default function EventSect(): React.JSX.Element {
    const [page, setPage] = useState<number>(1);
    const pageSize = 2;
    const total = events.length;
    const totalPages = Math.max(1, Math.ceil(total / pageSize));

    const start = (page - 1) * pageSize;
    const current = events.slice(start, start + pageSize);

    const go = (p: number) => setPage(Math.min(Math.max(1, p), totalPages));
    const prev = () => go(page - 1);
    const next = () => go(page + 1);

    return (
        <section 
            className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white py-12 min-h-[60vh] w-full"
            id="events"
        >
            <SectionHeader title={`Interactions & Events`} />
            <div className="flex flex-row flex-wrap items-start justify-center gap-10">
                {current.map((event, index) => (
                    <EventBlock
                        key={event.id}
                        {...event}
                        gradientIndex={index}
                    />
                ))}
            </div>
            <div className="mt-10 flex items-center justify-center gap-3">
                <button
                    onClick={prev}
                    disabled={page === 1}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-400 to-yellow-400 text-black font-bold shadow-lg hover:from-yellow-400 hover:to-pink-400 transition-all disabled:opacity-40 cursor-pointer"
                    aria-label="Previous page"
                >
                    Prev
                </button>
                <div className="flex items-center gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                        <button
                            key={p}
                            onClick={() => go(p)}
                            aria-current={p === page}
                            className={`px-4 py-2 rounded-full font-bold shadow-md transition-all ${
                                p === page
                                    ? "bg-gradient-to-r from-blue-400 to-green-400 text-black scale-110"
                                    : "bg-white/20 text-white hover:bg-white/40"
                            }`}
                        >
                            {p}
                        </button>
                    ))}
                </div>
                <button
                    onClick={next}
                    disabled={page === totalPages}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-400 to-yellow-400 text-black font-bold shadow-lg hover:from-yellow-400 hover:to-pink-400 transition-all disabled:opacity-40 cursor-pointer"
                    aria-label="Next page"
                >
                    Next
                </button>
            </div>
            <div className="mt-6 text-center text-base text-white/70 font-semibold">
                Showing {Math.min(total, start + 1)} - {Math.min(total, start + pageSize)} of {total} events
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
        </section>
    );
}