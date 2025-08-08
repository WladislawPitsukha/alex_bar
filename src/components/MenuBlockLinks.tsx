import { MenuLinksProps } from "@/types/menuLinks";
import Link from "next/link";

export function MenuBlockLink({id, text, link}: 
    MenuLinksProps
) {
    return(
        <div 
            className="flex items-center justify-center p-2 border-2 hover:bg-black rounded-md transition-colors duration-200" 
            key={id}
        >
            <Link href={link}>
                <h4 className="text-lg font-medium text-white">
                    {text}
                </h4>
            </Link>
        </div>
    )
}