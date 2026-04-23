"use client";

import { menu } from "@/constants/menu";
import { PropsMenuPage } from "@/types/propsMenu";
import { Props } from "next/script";
import CardMenu from "./CardMenu";

export default function SectionMenu({
    id, section, products
}: PropsMenuPage) {
    return(
        <section
            className="w-full py-12 bg-linear-to-br from-black via-gray-900 to-gray-800"
            id={`section-${id}`}
        >
            <div
                className="w-full py-12 bg-linear-to-br from-black via-gray-900 to-gray-800"
            >
                <div
                    className="max-w-7xl mx-auto px-4"
                >
                    <div
                        className="mb-10"
                    >
                        <h2 className="text-4xl font-extrabold text-white drop-shadow-lg mb-2">
                            {section}
                        </h2>
                    </div>
                    <div className="w-20 h-1 bg-linear-to-r from-pink-400 via-yellow-400 to-green-400 rounded-full animate-gradient-move"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {products.map((product, index) => (
                        <CardMenu 
                            key={index}
                            {...product}
                        />
                    ))}
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
        </section>
    )
}