import { PhotosProps } from "@/types/photosProps";
import Image from "next/image";

export const cardGradients = [
    "from-pink-500 via-red-400 to-yellow-300",
    "from-blue-500 via-cyan-400 to-green-300",
    "from-purple-500 via-fuchsia-400 to-pink-300",
    "from-orange-500 via-yellow-400 to-lime-300",
    "from-teal-500 via-blue-400 to-indigo-300",
];

export function GridPhotoBlock({
    id,
    photo,
    title,
    description,
    onClick,
}: PhotosProps & { onClick: () => void }): React.JSX.Element {
    const gradient = cardGradients[(id - 1) % cardGradients.length];
    return (
        <button
            key={id}
            onClick={onClick}
            title={title}
            className={`
                group overflow-hidden rounded-2xl w-[230px] h-[130px] md:w-[230px] md:h-[150px]
                bg-gradient-to-br ${gradient} animate-gradient-move shadow-lg border-2 border-white/20
                hover:scale-105 transition transform relative
            `}
        >
            <Image
                src={photo}
                alt={title}
                width={230}
                height={150}
                className="object-cover w-full h-full rounded-2xl group-hover:brightness-90 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center">
                <span className="text-white font-bold text-base drop-shadow">{title}</span>
                <span className="text-white/80 text-xs mt-1 px-2 text-center">{description}</span>
            </div>
        </button>
    );
}