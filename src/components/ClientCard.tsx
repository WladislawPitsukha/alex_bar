import { ClientProps } from "@/types/clientProps";

export default function ClientCard({
    id, desc, comments
}: ClientProps) {
    const { clientName } = desc;
    const { rating, text, date } = comments;

    return(
        <div 
            key={id}
            className="flex flex-col gap-2 p-3 rounded-lg shadow-sm bg-white border border-gray-200 max-w-[390px] max-h-[160px]"
        >
            <div className="flex items-center justify-between">
                <span className="font-bold text-black text-base">{clientName}</span>
                <span className="text-gray-500 text-xs">{date}</span>
            </div>
            <div className="text-gray-700 italic text-sm">
                "{text}"
            </div>
            <div className="flex items-center gap-1">
                <span className="text-black font-semibold text-sm">Rating:</span>
                <span className="text-gray-700 text-sm">{rating} <span role="img" aria-label="star">⭐</span></span>
            </div>
            <div className="border-t border-gray-200 pt-1 text-gray-500 text-xs">
                {desc.en}
            </div>
        </div> 
    )
}