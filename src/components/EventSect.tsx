"use client";

import { events } from "@/constants/events";
import { EventProps } from "@/types/eventProps";
import Image from "next/image";
import React, { useState } from "react";

export function EventBlock({
    id, title, date, description, images
}: EventProps): React.JSX.Element {
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    return(
        <article 
            aria-labelledby={`event-${id}-title`}
            className="flex flex-col border-b-4 border-white py-8 items-center justify-start w-full md:w-[45%] rounded-3xl p-6 bg-black/30"
            style={{
                animation: 'colorChange 3s infinite alternate'
            }}
        >
            <h2
                id={`event-${id}-title`} 
                className="text-2xl font-bold text-white mb-4"
            >
                {title}
            </h2>
            <div className="flex flex-col items-center gap-4 w-full">
                <h4 className="text-lg italic text-white">
                    {formattedDate}
                </h4>
                <div className="grid grid-cols-3 gap-4 w-full">
                    {images.map((image, index) => (
                        <Image 
                            key={index}
                            src={image.src}
                            alt={`Event image ${index + 1}`}
                            width={100}
                            height={100}
                            className="rounded-lg w-full h-full"
                        />
                    ))}
                </div>
                <p className="text-white text-center max-w-[600px] p-5 border rounded-lg border-white/20 mt-4">
                    {description}
                </p>
            </div>
        </article>
    )
}

export default function EventSect(): React.JSX.Element {
    const [page, setPage] = useState<number>(1);
    const pageSize = 2;
    const total = events.length;
    const totalPages = Math.max(1, Math.ceil(total / pageSize))

    const start  = (page - 1) * pageSize
    const current = events.slice(start, start + pageSize);

    const go = (p:number) => setPage(Math.min(Math.max(1, p), totalPages));
    const prev = () => go(page - 1);
    const next = () => go(page + 1)

    return(
        <section className="bg-black text-white py-12 min-h-[60vh]">
            <h1 className="text-4xl font-bold tracking-wide mb-8 text-white uppercase text-center">
                Interactions & Events
            </h1>
            <div className="flex flex-row flex-wrap items-start justify-center gap-8">
                {current.map((event, index) => (
                    <EventBlock 
                        key={index}
                        {...event}
                    />
                ))}
            </div>
            <div className="mt-8 flex items-center justify-center gap-3">
                <button
                    onClick={prev}
                    disabled={page === 1}
                    className="px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 disabled:opacity-40 cursor-pointer"
                    aria-label="Previous page"
                >
                    Prev
                </button>
                <div className="flex items-center gap-2">
                    {Array.from({length: totalPages}, (_, i) => i  + 1).map((p) => (
                        <button
                            key={p}
                            onClick={() => go(p)}
                            aria-current={p === page}
                            className={`px-3 py-1 rounded-md ${p === page ? "bg-white/30" : "bg-white/10 hover:bg-white/20 cursor-pointer"}`}
                        >
                            {p}
                        </button>
                    ))}
                </div>
                <button
                    onClick={next}
                    disabled={page === totalPages}
                    className="px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 disabled:opacity-40 cursor-pointer"
                    aria-label="Next page"
                >
                    Next
                </button>
            </div>
            <div className="mt-4 text-center text-sm text-white/60">
                Showing {Math.min(total, start + 1)} - {Math.min(total, start + pageSize)} of last {total} events
            </div>
        </section>
    )
}