"use client"

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { photosOfCafe, PhotosProps } from "@/constants/photos"
import Image from "next/image"

import { useState } from "react"

export function GridPhotoBlock({ id, photo, onClick }: 
    PhotosProps & {
        onClick: () => void
    }
) {
    return(
        <div 
            key={id}
            className="flex justify-center items-center border h-[150px] w-[250px] border-black rounded-2xl px-2 py-2 cursor-pointer"
            onClick={onClick}
        >
            <Image 
                className="h-[130px] w-[230px] rounded-2xl"
                src={photo}
                alt={`image of cafe num ${id}`}
            />
        </div>
    )
}

export default function GallerySect() {
    const [curPhoto, setCurPhoto] = useState<PhotosProps>(photosOfCafe[0]);

    const handleClickPrev = () => {
        const curIndex = photosOfCafe.findIndex(photo => photo.id === curPhoto.id);
        const prevIndex = curIndex > 0 ? curIndex - 1 : photosOfCafe.length - 1;

        setCurPhoto(photosOfCafe[prevIndex]);
    }

    const handleClickNext = () => {
        const curIndex = photosOfCafe.findIndex(photo => photo.id === curPhoto.id);
        const nextIndex = curIndex < photosOfCafe.length - 1 ? curIndex + 1 : 0;

        setCurPhoto(photosOfCafe[nextIndex]);
    }

    return(
        <section className="flex flex-col items-center justify-evenly h-screen w-full">
            <h1 className='text-4xl font-bold tracking-wide mb-10 text-white uppercase'>
                Gallery of Bar's day
            </h1>
            <div className='flex items-center justify-evenly w-full'>
                <article className="flex justify-around items-center border-4 rounded-2xl border-black py-10">
                    <div 
                        className='border-2 border-white rounded-full p-2 mx-5 cursor-pointer'
                        onClick={handleClickPrev}
                    >
                        <ArrowBackIosNewIcon className='text-white' />
                    </div>
                    <div className="border-2 border-black w-[450px] h-[400px] mx-5">
                        <Image 
                            src={curPhoto.photo}
                            alt={`Photo ${curPhoto.id}`}
                            className="w-full h-full object-cover"
                            width={450}
                            height={250}
                        />
                    </div>
                    <div 
                        className='border-2 border-white rounded-full p-2 mx-5 cursor-pointer'
                        onClick={handleClickNext}
                    >
                        <ArrowForwardIosIcon className='text-white' />
                    </div>
                </article>
                <article className="grid grid-cols-3 h-auto w-auto gap-5">
                    {photosOfCafe.map((photo) => (
                        <GridPhotoBlock
                            key={photo.id}
                            {...photo}
                            onClick={() => setCurPhoto(photo)}
                        />
                    ))}
                </article>
            </div>
        </section>
    )
}