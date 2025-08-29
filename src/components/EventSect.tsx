//TODO: to make this component
//TODO: finish this component 
//TODO: make undependies component sect with h1 & div with the same CSS for Section's Components
import { EventProps } from "@/types/eventProps"

export function EventBlock({
    id, title, date, description, images}
: EventProps) {
    //TODO: finish this Block
    return(
        <article  
            className="flex flex-col items-center justify-evenly h-auto w-auto"
            key={id}
        >
            <h2 className="text-2xl font-bold text-white mb-5">

            </h2>
            <div>

            </div>
        </article>
    )
}

export default function EventSect() {
    return(
        <section className="flex flex-col items-center justify-evenly h-screen w-full">
            <h1 className="text-4xl font-bold tracking-wide mb-10 text-white uppercase">
                Interactions &  Events
            </h1>
            <div className="flex items-center justify-evenly w-full">

            </div>
        </section>
    )
}