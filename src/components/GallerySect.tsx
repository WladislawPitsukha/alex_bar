"use client"

import React, { useEffect, useState } from "react";
import { photosOfCafe } from "@/constants/photosCafe";
import { PhotosProps } from "@/types/photosProps";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SectionHeader from "./SectionHeader";
import { GridPhotoBlock } from "./GridPhotoBlock";
import MainViewer from "./MainViewer";
import IconButton from "./IconButton";
import Lightbox from "./Lightbox";


export default function GallerySect(): React.JSX.Element {
    const [curPhoto, setCurPhoto] = useState<PhotosProps>(photosOfCafe[0]);
    const [isLightboxOpen, setLightboxOpen] = useState(false);

    const handleClickPrev = () => {
        const curIndex = photosOfCafe.findIndex((p) => p.id === curPhoto.id);
        const prevIndex = curIndex > 0 ? curIndex - 1 : photosOfCafe.length - 1;
        setCurPhoto(photosOfCafe[prevIndex]);
    };

    const handleClickNext = () => {
        const curIndex = photosOfCafe.findIndex((p) => p.id === curPhoto.id);
        const nextIndex = curIndex < photosOfCafe.length - 1 ? curIndex + 1 : 0;
        setCurPhoto(photosOfCafe[nextIndex]);
    };

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") handleClickPrev();
            if (e.key === "ArrowRight") handleClickNext();
            if (e.key === "Enter") setLightboxOpen(true);
        };
        window.addEventListener("keydown", onKey);

        return () => window.removeEventListener("keydown", onKey);

    }, [curPhoto]);

    return (
        <section className="flex flex-col items-center justify-start w-full py-12 bg-gradient-to-br from-black via-gray-900 to-gray-800 min-h-[60vh]">
            <SectionHeader title={`Gallery of Bar's day`} />
            <div className="max-w-6xl w-full px-4 flex flex-col md:flex-row items-start gap-10">
                <div className="flex-1 flex items-center justify-center">
                    <MainViewer
                        photo={curPhoto}
                        onPrev={handleClickPrev}
                        onNext={handleClickNext}
                        onOpenLightbox={() => setLightboxOpen(true)}
                    />
                </div>
                <aside className="w-full md:w-[360px] flex flex-col gap-4">
                    <div className="grid grid-cols-3 gap-4 justify-start">
                        {photosOfCafe.slice(0, 6).map((photo) => (
                            <GridPhotoBlock
                                key={photo.id}
                                {...photo}
                                onClick={() => setCurPhoto(photo)}
                            />
                        ))}
                    </div>
                    <div className="mt-2 flex items-center justify-between px-1">
                        <span className="text-sm text-white/70">Preview</span>
                        <div className="flex gap-2">
                            <IconButton onClick={handleClickPrev} aria="previous-small">
                                <ArrowBackIosNewIcon fontSize="small" />
                            </IconButton>
                            <IconButton onClick={handleClickNext} aria="next-small">
                                <ArrowForwardIosIcon fontSize="small" />
                            </IconButton>
                        </div>
                    </div>
                    <div className="mt-4 text-sm text-white/60">
                        Tip: Use arrow keys to navigate. Press Enter to open lightbox.
                    </div>
                </aside>
            </div>
            <Lightbox
                photo={isLightboxOpen ? curPhoto : null}
                onClose={() => setLightboxOpen(false)}
                onPrev={handleClickPrev}
                onNext={handleClickNext}
            />
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