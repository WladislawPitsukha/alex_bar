"use client";

import { CafeInfoProps } from "@/types/aboutProps";
import ClientCard from "./ClientCard";
import { clients } from "@/constants/clients";
import { useEffect, useState } from "react";

const cardGradients = [
    "from-pink-500 via-red-400 to-yellow-300",
    "from-blue-500 via-cyan-400 to-green-300",
    "from-purple-500 via-fuchsia-400 to-pink-300",
];

export default function InfoCafeBlock({
    id, title, info, city, address, connection, time
}: CafeInfoProps) {
    const { days, hours } = time;
    const { phone, email } = connection;
    const { description, moreDesc, coolFacts, stars } = info;

    const [curCard, setCurCard] = useState(0);
    const gradient = cardGradients[(id - 1) % cardGradients.length];

    useEffect(() => {
        if (clients.length <= 1) return;

        const interval = setInterval(() => {
            setCurCard((prev) => (prev + 1) % clients.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <article
            className={`flex flex-col gap-8 p-8 rounded-2xl shadow-2xl bg-gradient-to-br ${gradient} animate-gradient-move relative overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-3xl`}
            key={id}
        >
            <div className="absolute inset-0 bg-black/50 rounded-2xl pointer-events-none" />

            <div className="flex flex-col items-center gap-2 z-10">
                <h2 className="text-3xl font-extrabold text-white tracking-tight drop-shadow-lg">
                    {title}
                </h2>
                <span className="w-16 h-1 bg-gradient-to-r from-pink-400 via-yellow-400 to-green-400 rounded-full my-2 animate-gradient-move" />
                <h3 className="text-lg font-semibold text-white/80">{city}</h3>
            </div>

            <div className="grid grid-cols-2 grid-rows-2 gap-4 bg-black/40 rounded-xl p-6 border border-white/20 shadow-inner z-10">
                <h4 className="font-semibold text-white truncate" title={address}>
                    {address}
                </h4>
                <h4 className="font-semibold text-yellow-300 flex items-center gap-1">
                    {stars} <span role="img" aria-label="star">⭐</span>
                </h4>
                <h4 className="text-white/80">
                    <span className="font-bold text-white">Time:</span> {hours}
                </h4>
                <h4 className="text-white/80">
                    <span className="font-bold text-white">Days:</span> {days}
                </h4>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-t border-dashed border-white/30 pt-4 z-10">
                <div>
                    <ClientCard {...clients[curCard]} />
                </div>
                <div className="flex flex-col items-end gap-1">
                    <p className="italic text-white/70 max-w-xs text-right">
                        {description}
                    </p>
                    <div className="text-xs text-yellow-300 font-semibold">
                        Fun fact: {coolFacts}
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-2 mt-2 border-t border-white/20 pt-4 z-10">
                <h4 className="text-white/90">
                    <span className="font-bold text-white">Contact us:</span> {phone} | {email}
                </h4>
                <h4 className="text-white/70">
                    <span className="font-bold text-white">Details:</span> {moreDesc}
                </h4>
            </div>
        </article>
    );
}