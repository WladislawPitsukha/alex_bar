"use client";

import React, { useEffect, useState } from "react";
import { photosOfCafe } from "@/constants/photosCafe";
import { PhotosProps } from "@/types/photosProps";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

function IconButton({
    onClick,
    children,
    aria,
}: {
    onClick?: () => void;
    children: React.ReactNode;
    aria?: string;
}) {
    return (
        <button
            onClick={onClick}
            aria-label={aria}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition flex items-center justify-center"
        >
            {children}
        </button>
    );
}

export function GridPhotoBlock({
    id,
    photo,
    onClick,
}: PhotosProps & { onClick: () => void }): React.JSX.Element {
    return (
        <button
            key={id}
            onClick={onClick}
            title="button"
            className="group overflow-hidden rounded-2xl w-[230px] h-[130px] md:w-[230px] md:h-[150px] bg-white/5 hover:scale-105 transition transform"
        >
            <Image
                src={photo}
                alt={`image of cafe num ${id}`}
                width={230}
                height={150}
                className="object-cover w-full h-full rounded-2xl group-hover:brightness-90"
            />
        </button>
    );
}

function MainViewer({
    photo,
    onPrev,
    onNext,
    onOpenLightbox,
}: {
    photo: PhotosProps;
    onPrev: () => void;
    onNext: () => void;
    onOpenLightbox: () => void;
}) {
    return (
        <div className="relative w-[460px] h-[360px] md:w-[600px] md:h-[420px] rounded-2xl overflow-hidden bg-white/5 flex items-center justify-center">
            <IconButton onClick={onPrev} aria="previous">
                <ArrowBackIosNewIcon />
            </IconButton>
            <button
                onClick={onOpenLightbox}
                className="mx-4 w-full h-full rounded-2xl overflow-hidden"
                aria-label="Open image"
            >
                <Image
                    src={photo.photo}
                    alt={`Photo ${photo.id}`}
                    width={600}
                    height={420}
                    className="object-cover w-full h-full"
                />
            </button>
            <IconButton onClick={onNext} aria="next">
                <ArrowForwardIosIcon />
            </IconButton>
        </div>
    );
}

function Lightbox({
    photo,
    onClose,
    onPrev,
    onNext,
}: {
    photo: PhotosProps | null;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
}) {
    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") onPrev();
            if (e.key === "ArrowRight") onNext();
        }
        window.addEventListener("keydown", onKey);

        return () => window.removeEventListener("keydown", onKey);

    }, [onClose, onPrev, onNext]);

    if (!photo) return null;
    return (
        <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            onClick={onClose}
        >
            <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/10 text-white"
                    aria-label="Close"
                >
                    ✕
                </button>
                    <div className="relative rounded-lg overflow-hidden bg-white/5">
                    <Image src={photo.photo} alt={`Lightbox ${photo.id}`} width={1200} height={800} className="object-contain w-full h-[80vh]" />
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 text-white">
                        <div className="flex items-center justify-between">
                            <span className="text-sm opacity-80">Photo #{photo.id}</span>
                            <div className="flex gap-2">
                                <button onClick={onPrev} className="p-2 rounded-md bg-white/5">◀</button>
                                <button onClick={onNext} className="p-2 rounded-md bg-white/5">▶</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    }

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
        <section className="flex flex-col items-center justify-start w-full border-b-4 border-white py-12">
            <SectionHeader title={`Gallery of Bar's day`} />
            <div className="max-w-6xl w-full px-4 flex flex-col md:flex-row items-start gap-8">
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
        </section>
    );
}