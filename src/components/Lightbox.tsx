"use client";

import { PhotosProps } from "@/types/photosProps";
import Image from "next/image";
import { useEffect } from "react";
import { cardGradients } from "./GridPhotoBlock";

export default function Lightbox({
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
    const gradient = cardGradients[(photo.id - 1) % cardGradients.length];
    return (
        <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={onClose}
        >
            <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/20 text-white hover:bg-white/40"
                    aria-label="Close"
                >
                    ✕
                </button>
                <div className={`relative rounded-lg overflow-hidden bg-gradient-to-br ${gradient} animate-gradient-move shadow-2xl`}>
                    <Image src={photo.photo} alt={photo.title} width={1200} height={800} className="object-contain w-full h-[80vh]" />
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 text-white">
                        <div className="flex items-center justify-between">
                            <span className="text-sm opacity-80">{photo.title}</span>
                            <div className="flex gap-2">
                                <button onClick={onPrev} className="p-2 rounded-md bg-white/10 hover:bg-white/20">◀</button>
                                <button onClick={onNext} className="p-2 rounded-md bg-white/10 hover:bg-white/20">▶</button>
                            </div>
                        </div>
                        <div className="text-xs mt-1 opacity-80">{photo.description}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
