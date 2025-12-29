import { photosOfCafe } from "@/constants/photosCafe";
import { photosOfMenu } from "@/constants/photosMenu";

import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";

import Image from "next/image";
import { MenuBlockLink } from "./MenuBlockLinks";
import { menuLinks } from "@/constants/menuLinks";

export default function HeroSect() {
    const photosHero = photosOfCafe.concat(photosOfMenu).filter((photo) => photo.id <= 16);

    return(
        <section className="mt-[50px] border-white border-b-4 flex justify-between items-start h-auto w-full px-[100px] py-[50px]">
            <article className="w-[1250px] h-[800px] border border-white">
                <ImageList 
                    variant="masonry" 
                    cols={3} 
                    gap={8}
                    className="!overflow-y-auto h-[800px] p-4"
                >
                    {photosHero.map((item, index) => (
                        <ImageListItem key={index}>
                            <Image
                                key={item.id}
                                src={item.photo}
                                alt={item.description}
                                width={400}
                                height={300}
                                className="w-full h-auto object-cover"
                                priority={item.id <= 4}
                            />
                            <ImageListItemBar 
                                position="below" 
                                title={item.title}
                                className="text-white" 
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </article>
            <article className="flex flex-col items-end justify-between h-[800px] w-full">
                <h2 className="text-4xl font-bold tracking-wider text-white mb-10">
                    A taste of Norway in Poland - for all ages.
                </h2>
                <div className="bg-gradient-to-r from-gray-800 to-gray-600 rounded-full animate-pulse px-4 py-2">
                    <div className="flex items-center justify-center text-white text-xl font-bold">
                        Welcome to Alex's Bar
                    </div>
                </div>
                <div className="flex flex-col border-white border-1 rounded-3xl p-3 gap-1 w-[200px]">
                    {menuLinks.map((link, index) => (
                        <MenuBlockLink
                            key={index}
                            {...link}
                        />
                    ))}
                </div>
            </article>
        </section>
    )
}