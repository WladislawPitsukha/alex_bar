//TODO: to make this component
//TODO: make undependies component sect with h1 & div with the same CSS for Section's Components

import { cafes } from "@/constants/cafes";
import InfoCafeBlock from "./InfoCafeBlock";
import SectionHeader from "./SectionHeader";

export default function MapSect() {
    return(
        <section className="flex flex-col w-full py-12 bg-black">
            <SectionHeader title="Find Your Nearest Alex Bar" />
            <div className="flex flex-col md:flex-row justify-evenly gap-8 w-full">
                <InfoCafeBlock 
                    {...cafes[0]}
                />
                {/* Add more <InfoCafeBlock {...cafes[1]} /> as needed */}
            </div>
            <div className="w-full h-[2px] bg-gradient-to-r from-white via-gray-200 to-white my-12" />
        </section>
    )
}