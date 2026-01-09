"use client";

import { CafeInfoProps } from "@/types/aboutProps";
import { Description } from "@mui/icons-material";
import ClientCard from "./ClientCard";
import { clients } from "@/constants/clients";
import { useEffect, useState } from "react";

export default function InfoCafeBlock({
    id, title, info, city, address, connection, time
}: CafeInfoProps) {
    const {days, hours} = time;
    const {phone, email} = connection;
    const {description, moreDesc, coolFacts} = info;

    const [curCard, setCurCard] = useState(0);

    useEffect(() => {
        if( clients.length <= 1) return;

        const interval = setInterval(() => {
            setCurCard((prev) => (prev + 1) % clients.length);
        }, 3000)

        return () => clearInterval(interval);
    }, []);

    return(
        <article 
            className="flex flex-col gap-8 p-8 rounded-2xl shadow-xl bg-white border-2 border-gray-200 transition-all duration-700"
            key={id}
        >
            <div className="flex flex-col items-center gap-2">
                <h2 className="text-3xl font-extrabold text-black tracking-tight drop-shadow">
                    {title}
                </h2>
                <span className="w-12 h-1 bg-gray-300 rounded-full my-2"></span>
                <h3 className="text-lg font-semibold text-gray-600">{city}</h3>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-inner">
                <h4 className="font-semibold text-black truncate" title={address}>
                    {address}
                </h4>
                <h4 className="font-semibold text-gray-700 flex items-center gap-1">
                    4.8 <span role="img" aria-label="star">⭐</span>
                </h4>
                <h4 className="text-gray-700">
                    <span className="font-bold text-black">Time:</span> {hours}
                </h4>
                <h4 className="text-gray-700">
                    <span className="font-bold text-black">Days:</span> {days}
                </h4>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-t border-dashed border-gray-300 pt-4">
                <div className="">
                    <ClientCard 
                        {...clients[curCard]}
                    />
                </div>
                <div className="flex flex-col items-end gap-1">
                    <p className="italic text-gray-500 max-w-xs text-right">
                        {description}
                    </p>
                    <div className="text-xs text-gray-600 font-semibold">
                        Fun fact: {coolFacts}
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2 mt-2 border-t border-gray-200 pt-4">
                <h4 className="text-gray-800">
                    <span className="font-bold text-black">Contact us:</span> {phone} | {email}
                </h4>
                <h4 className="text-gray-600">
                    <span className="font-bold text-black">Details:</span> {moreDesc}
                </h4>
            </div>
        </article>
    )
}