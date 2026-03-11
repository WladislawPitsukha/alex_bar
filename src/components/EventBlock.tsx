import { EventProps } from "@/types/eventProps";
import Image from "next/image";

const cardGradients = [
    "from-pink-500 via-red-400 to-yellow-300",
    "from-blue-500 via-cyan-400 to-green-300",
    "from-purple-500 via-fuchsia-400 to-pink-300",
    "from-orange-500 via-yellow-400 to-lime-300",
    "from-teal-500 via-blue-400 to-indigo-300",
];

export function EventBlock({
    id, title, date, description, images
}: EventProps & { gradientIndex?: number }): React.JSX.Element {
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const gradient = cardGradients[(id - 1) % cardGradients.length];

    return (
        <article
            aria-labelledby={`event-${id}-title`}
            className={`
                flex flex-col shadow-xl border-4 border-white/30 py-8 items-center justify-start w-full md:w-[45%] rounded-3xl p-6
                bg-gradient-to-br ${gradient} animate-gradient-move relative overflow-hidden
                transition-transform hover:scale-105 hover:shadow-2xl
            `}
        >
            <div className="absolute inset-0 bg-black/40 rounded-3xl pointer-events-none" />
            <h2
                id={`event-${id}-title`}
                className="text-3xl font-extrabold text-white mb-4 drop-shadow-lg z-10"
            >
                {title}
            </h2>
            <div className="flex flex-col items-center gap-4 w-full z-10">
                <h4 className="text-lg italic text-white/90 bg-black/30 px-4 py-1 rounded-full shadow">
                    {formattedDate}
                </h4>
                <div className="grid grid-cols-3 gap-4 w-full">
                    {images.map((image, index) => (
                        <div key={index} className="relative aspect-square overflow-hidden rounded-xl shadow-lg border-2 border-white/30">
                            <Image
                                src={image.src}
                                alt={image.alt || `Event image ${index + 1}`}
                                fill
                                style={{ objectFit: "cover" }}
                                className="transition-transform hover:scale-110 duration-300"
                            />
                        </div>
                    ))}
                </div>
                <p className="text-white text-center max-w-[600px] p-5 border rounded-lg border-white/30 mt-4 bg-black/40 shadow">
                    {description}
                </p>
            </div>
        </article>
    );
}