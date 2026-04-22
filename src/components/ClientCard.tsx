import { ClientProps } from "@/types/clientProps";

export default function ClientCard({
    id, desc, comments
}: ClientProps) {
    const { clientName } = desc;
    const { rating, text, date } = comments;

    return (
        <div
            key={id}
            className="flex flex-col gap-2 p-4 rounded-xl shadow-lg bg-black/40 border border-white/20 max-w-[390px] max-h-[160px] backdrop-blur-sm"
        >
            <div className="flex items-center justify-between">
                <span className="font-bold text-white text-base">{clientName}</span>
                <span className="text-white/50 text-xs">{date}</span>
            </div>
            <div className="text-white/80 italic text-sm">
                &ldquo;{text}&rdquo;
            </div>
            <div className="flex items-center gap-1">
                <span className="text-white font-semibold text-sm">Rating:</span>
                <span className="text-yellow-300 text-sm">{rating} <span role="img" aria-label="star">⭐</span></span>
            </div>
            <div className="border-t border-white/20 pt-1 text-white/50 text-xs">
                {desc.en}
            </div>
        </div>
    );
}