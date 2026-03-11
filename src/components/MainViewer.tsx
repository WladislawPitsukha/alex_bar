import { PhotosProps } from "@/types/photosProps";
import IconButton from "./IconButton";
import { cardGradients } from "./GridPhotoBlock";
import Image from "next/image";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"

export default function MainViewer({
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
    const gradient = cardGradients[(photo.id - 1) % cardGradients.length];
    return (
        <div className={`relative w-[460px] h-[360px] md:w-[600px] md:h-[420px] rounded-2xl overflow-hidden bg-gradient-to-br ${gradient} animate-gradient-move flex items-center justify-center shadow-2xl`}>
            <div className="absolute inset-0 bg-black/40 pointer-events-none rounded-2xl" />
            <IconButton onClick={onPrev} aria="previous">
                <ArrowBackIosNewIcon />
            </IconButton>
            <button
                onClick={onOpenLightbox}
                className="mx-4 w-full h-full rounded-2xl overflow-hidden z-10"
                aria-label="Open image"
            >
                <Image
                    src={photo.photo}
                    alt={photo.title}
                    width={600}
                    height={420}
                    className="object-cover w-full h-full rounded-2xl transition-transform hover:scale-105 duration-300"
                />
            </button>
            <IconButton onClick={onNext} aria="next">
                <ArrowForwardIosIcon />
            </IconButton>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 px-4 py-1 rounded-full text-white text-sm font-semibold z-20">
                {photo.title}
            </div>
        </div>
    );
}