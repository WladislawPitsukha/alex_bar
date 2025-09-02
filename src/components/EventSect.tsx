import { events } from "@/constants/events";
import { EventProps } from "@/types/eventProps"
import Image from "next/image"
import '../styles/globals.css'

export function EventBlock({
    id, title, date, description, images}
: EventProps) {
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    return(
        <article  
            className="flex flex-col border-b-4 border-white py-[50px] items-center justify-evenly h-[500px] w-auto border rounded-3xl p-5"
            key={id}
            style={{
                animation: 'colorChange 3s infinite alternate'
            }}
        >
            <h2 className="text-2xl font-bold text-white mb-5">
                {title}
            </h2>
            <div className="flex flex-col items-center gap-4">
                <h4 className="text-lg italic text-white">
                    {formattedDate}
                </h4>
                <div className="grid grid-cols-3 gap-4 h-auto">
                    {images.map((image, index) => (
                        <Image 
                            key={index}
                            src={image.src}
                            alt={image.alt}
                            className="rounded-lg object-cover h-[150px] w-[200px]"
                        />
                    ))}
                </div>
                <p 
                    className="text-white text-center max-w-[600px] p-5 border rounded-lg border-white"  
                >
                    {description}
                </p>
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
            <div className="flex items-center justify-evenly w-full gap-10">
                {events.map((event, index) => (
                    <EventBlock
                        key={index}
                        {...event}
                    />
                ))}
            </div>
        </section>
    )
}