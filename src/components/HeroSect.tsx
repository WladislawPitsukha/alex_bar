import Link from "next/link";

export type MenuLinksProps = {
    id: number;
    text: string;
    link: string;
}

export const menuLinks: MenuLinksProps[] = [
    {
        id: 1,
        text: 'Reservation',
        link: '/reservation',
    },
    {
        id: 2,
        text: 'Menu',
        link: '/menu'
    }
]

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

//TODO: to make this component
export default function HeroSect() {
    return(
        <section className="flex justify-between items-start h-auto w-full">
            <article className="w-[1250px] h-[800px] border border-white">
                //TODO: add scroll & gallery's photos of menu, cafe, tradition
            </article>
            <article className="flex flex-col items-end justify-between h-[800px] w-full">
                <h2 className="text-4xl font-bold tracking-wider text-white mb-10">
                    A taste of Norway in Poland - for all ages.
                </h2>
                <div className="">
                    //TODO: add some interesting & animation component
                </div>
                <div className="flex flex-col border-white border-1 rounded-3xl p-3 gap-1 w-[200px]">
                    {menuLinks.map((link) => (
                        <MenuBlockLink 
                            {...link}
                        />
                    ))}
                </div>
            </article>
        </section>
    )
}