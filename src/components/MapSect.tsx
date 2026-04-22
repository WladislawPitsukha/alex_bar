'use client'

import { cafes } from "@/constants/cafes";
import InfoCafeBlock from "./InfoCafeBlock";
import SectionHeader from "./SectionHeader";
import MapBlock from "./MapBlock";

export default function MapSect() {
    return (
        <section 
            className="flex flex-col items-center w-full py-12 bg-gradient-to-br from-black via-gray-900 to-gray-800 min-h-[60vh]"
            id="location"
        >
            <SectionHeader title="Find Your Nearest Alex Bar" />
            <div className="max-w-6xl w-full px-4 flex flex-col md:flex-row items-start justify-evenly gap-10">
                <div className="flex-1 flex items-center justify-center">
                    <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-gradient-to-br from-pink-500 via-yellow-400 to-green-300 animate-gradient-move p-1">
                        <div className="bg-black/60 rounded-2xl">
                            <MapBlock />
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-gradient-to-br from-blue-500 via-cyan-400 to-green-300 animate-gradient-move p-1">
                        <div className="bg-black/60 rounded-2xl">
                            <InfoCafeBlock {...cafes[0]} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-6xl h-[2px] bg-gradient-to-r from-pink-400 via-yellow-400 to-green-400 my-12 rounded-full animate-gradient-move" />
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