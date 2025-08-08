import { photosOfCafe } from "@/constants/photosCafe";
import { photosOfMenu } from "@/constants/photosMenu";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import Image from "next/image";
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
    const photosHero = photosOfCafe.concat(photosOfMenu).filter((photo) => photo.id <= 16);

    return(
        <section className="flex justify-between items-start h-auto w-full px-[100px] py-[50px]">
            <article className="w-[1250px] h-[800px] border border-white">
                <div className="grid grid-cols-4 gap-4 p-4 overflow-y-auto h-auto">
                    <ImageList variant="masonry" cols={3} gap={8}>
                        {photosHero.map((item) => (
                            <ImageListItem key={item.id}>
                            <img
                                srcSet={`${item.photo}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.photo}?w=248&fit=crop&auto=format`}
                                alt={item.description}
                                loading="lazy"
                            />
                            <ImageListItemBar position="below" title={item.title} />
                            </ImageListItem>
                        ))}
                    </ImageList>
                    {photosHero.map((photo) => (
                        <div 
                            key={photo.id} 
                            className="relative h-[200px] w-full border border-gray-400 rounded-lg overflow-hidden hover:border-white transition-colors duration-200"
                        >
                            <Image
                                src={photo.photo}
                                alt={`Gallery photo ${photo.id}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
            </article>
            <article className="flex flex-col items-end justify-between h-[800px] w-full">
                <h2 className="text-4xl font-bold tracking-wider text-white mb-10">
                    A taste of Norway in Poland - for all ages.
                </h2>
                <div className="bg-gradient-to-r rounded-full animate-pulse">
                    <div className="flex items-center justify-center text-white text-2xl font-bold">
                        Welcome to Alex's Bar
                    </div>
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