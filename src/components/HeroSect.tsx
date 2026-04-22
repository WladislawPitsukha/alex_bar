"use client";

import { photosOfCafe } from "@/constants/photosCafe";
import { photosOfMenu } from "@/constants/photosMenu";

import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";

import Image from "next/image";
import { MenuBlockLink } from "./MenuBlockLinks";
import { menuLinks } from "@/constants/menuLinks";

export default function HeroSect() {
    const photosHero = photosOfCafe.concat(photosOfMenu).filter((photo) => photo.id <= 16);

    return (
        <section
            className="relative mt-12.5 flex justify-between items-start h-auto w-full px-25 py-12.5 bg-linear-to-br from-black via-gray-900 to-gray-800"
            id="home"
        >
            <article className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 w-312.5 h-200">
                <div className="absolute inset-0 bg-linear-to-br from-purple-600/20 via-transparent to-cyan-500/20 pointer-events-none z-10 rounded-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08),transparent)] pointer-events-none z-20" />
                <ImageList
                    variant="masonry"
                    cols={3}
                    gap={10}
                    className="overflow-y-auto! h-200 p-5 bg-black/80 rounded-3xl"
                >
                    {photosHero.map((item, index) => (
                        <ImageListItem key={index} className="group">
                            <div className="relative overflow-hidden rounded-xl border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300">
                                <Image
                                    key={item.id}
                                    src={item.photo}
                                    alt={item.description}
                                    width={400}
                                    height={300}
                                    className="w-full h-auto object-cover transition-transform group-hover:scale-110 duration-500"
                                    priority={item.id <= 4}
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                                    <span className="text-white font-semibold text-sm drop-shadow">{item.title}</span>
                                </div>
                            </div>
                            <ImageListItemBar
                                position="below"
                                title={item.title}
                                className="text-white/70 group-hover:text-white transition-colors"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </article>
            <article className="flex flex-col items-end justify-between h-auto w-full">
                <div className="mb-4 px-4 py-1 rounded-full bg-green-400/20 text-green-300 text-xs font-bold tracking-widest border border-green-300/30 animate-pulse">
                    ● OPEN NOW
                </div>
                <h2 className="text-3xl font-extrabold tracking-wider mb-6 drop-shadow-lg bg-linear-to-r from-pink-400 via-yellow-400 to-green-400 bg-clip-text text-transparent animate-gradient-move">
                    A taste of Norway in Poland — for all ages.
                </h2>
                <p className="text-white/80 text-right max-w-md mb-4">
                    Discover authentic Nordic flavors, cozy vibes, and a place where everyone feels at home.
                </p>
                <div className="flex items-center gap-3 text-white/70 mb-4">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="text-sm">4.8 (200+ guests)</span>
                </div>
                <div className="flex flex-wrap gap-2 justify-end mb-4">
                    {["Cozy", "Nordic", "Family Friendly", "Modern"].map((tag) => (
                        <span
                            key={tag}
                            className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/70 border border-white/10"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="w-24 h-px bg-white/20 my-4"></div>
                <div className="bg-pink-500/20 border border-pink-400/30 text-pink-300 px-4 py-2 rounded-xl text-sm mb-4">
                    🎉 Live music this Friday
                </div>
                <div className="relative mb-6">
                    <div className="absolute inset-0 blur-xl bg-linear-to-r from-pink-500 via-yellow-400 to-green-300 opacity-30 rounded-full"></div>
                    <div className="relative rounded-full px-6 py-3 bg-linear-to-r from-pink-500 via-yellow-400 to-green-300 shadow-2xl">
                        <div className="text-black text-xl font-extrabold text-center">
                            Welcome to Alex&apos;s Bar
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-3 max-w-xs mb-6">
                    <Image
                        src={photosOfMenu[0].photo}
                        alt="Featured dish"
                        width={60}
                        height={60}
                        className="rounded-xl object-cover"
                    />
                    <div className="text-right text-white">
                        <p className="text-xs text-white/60">Today&apos;s special</p>
                        <p className="font-semibold">Norwegian Salmon</p>
                    </div>
                </div>
                <div className="text-right text-white/70 text-sm mb-6">
                    <p>📍 Warsaw, Poland</p>
                    <p>🕒 Daily: 10:00 – 23:00</p>
                </div>
                <div className="flex flex-col items-end gap-4 mb-6">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-right text-white shadow-xl border border-white/20 max-w-xs">
                        <p className="text-sm text-white/70 mb-1">
                            Why people love us
                        </p>
                        <p className="font-semibold">
                            Fresh Nordic ingredients, cozy atmosphere, and unforgettable taste 🇳🇴
                        </p>
                    </div>
                    <div className="flex gap-3">
                        {menuLinks.map((link) => (
                            <MenuBlockLink key={link.id} {...link} />
                        ))}
                    </div>
                </div>
            </article>
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