//TODO: to make this component

import NorvaysFlag from '@/assets/imgs/norwaysflag.jpg';
import Image from 'next/image';
import AccordionUsage from './AccordionUsage';
import { navigationsParams } from '@/constants/navigations';

export default function NavBar() {
    return(
        <nav className="flex items-center justify-evenly stucky top-0 right-0 w-full h-[60px] border border-black bg-white">
            <div className="flex justify-center items-center gap-1">
                <h1 className="text-2xl font-bold tracking-wider hover:text-gray-700 transition-colors duration-300 text-black uppercase">
                    Alex's bar
                </h1>
                <Image 
                    src={NorvaysFlag}
                    className='w-10 h-10'
                    alt='Flag of Norvay'
                />
            </div>
            <article className='flex items-center justify-center gap-10'>
                {navigationsParams.map((obj) => (
                    <AccordionUsage 
                        key={obj.id}
                        {...obj}
                    />
                ))}
            </article>
        </nav>
    )
}