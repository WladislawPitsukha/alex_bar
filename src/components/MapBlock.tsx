"use client";

import { useEffect, useState } from "react";
import { cafes } from "@/constants/cafes";

const cityPoints = [
    { name: "Warsaw", cx: 220, cy: 120, cafeIdx: 0 },
    { name: "Gdansk", cx: 320, cy: 60, cafeIdx: 1 },
    { name: "Krakow", cx: 180, cy: 220, cafeIdx: 2 },
];

export default function MapBlock() {
    const [selectedCafe, setSelectedCafe] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);

    const handlePointClick = (idx: number) => {
        setSelectedCafe(idx);
        setModalOpen(true);
    };

    useEffect(() => {
        if(!modalOpen) return;

        const timer = setTimeout(() => setModalOpen(false), 3000);

        return () => clearTimeout(timer);
    }, [modalOpen])

    const cafe = cafes[selectedCafe];

    return (
        <section className="flex flex-col items-center gap-8 w-full">
            <div className="relative w-[400px] h-[300px] bg-gray-100 rounded-xl border border-gray-300 shadow-md">
                <svg viewBox="0 0 400 300" className="w-full h-full">
                    <rect x="0" y="0" width="400" height="300" fill="#f3f4f6" />
                    <ellipse cx="200" cy="150" rx="160" ry="110" fill="#e5e7eb" />
                    {cityPoints.map((pt, idx) => (
                        <circle
                            key={pt.name}
                            cx={pt.cx}
                            cy={pt.cy}
                            r="10"
                            fill={selectedCafe === pt.cafeIdx ? "#1f2937" : "#d97706"}
                            stroke="#111"
                            strokeWidth="2"
                            className="cursor-pointer transition-all duration-200"
                            onClick={() => handlePointClick(pt.cafeIdx)}
                        />
                    ))}
                    {cityPoints.map((pt) => (
                        <text
                            key={pt.name + "-label"}
                            x={pt.cx + 14}
                            y={pt.cy + 4}
                            fontSize="16"
                            fill="#111"
                        >
                            {pt.name}
                        </text>
                    ))}
                </svg>
            </div>
            {modalOpen && (
                <div className="fixed inset-0 bg-opacity-40 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl shadow-xl p-8 min-w-[300px] flex flex-col gap-4 relative">
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
                            onClick={() => setModalOpen(false)}
                            aria-label="Close"
                        >
                            &times;
                        </button>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">{cafe.title}</h2>
                        <div className="flex flex-col gap-2">
                            <div>
                                <span className="font-semibold text-gray-700">Address:</span>
                                <span className="ml-2 text-gray-600">{cafe.address}</span>
                            </div>
                            <div>
                                <span className="font-semibold text-gray-700">Stars:</span>
                                <span className="ml-2 text-yellow-600">{cafe.info.stars} ⭐</span>
                            </div>
                            <div>
                                <span className="font-semibold text-gray-700">Time:</span>
                                <span className="ml-2 text-gray-600">{cafe.time.hours}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}