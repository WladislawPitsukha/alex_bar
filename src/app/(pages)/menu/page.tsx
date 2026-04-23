//TODO: make the page with full-component's structure of menu's page

import AsideMenu from "@/components/AsideMenu";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import SectionMenu from "@/components/SectionMenu";
import { menu } from "@/constants/menu";

export default function Home() {
    return(
        <>
            <NavBar />
            <main className="flex flex-row items-center w-full">
                {/* <AsideMenu /> */}
                <div className="flex flex-col items-center gap-2 w-full">
                    {menu.map((section, index) => (
                        <SectionMenu key={index} {...section} />
                    ))}
                </div>
            </main>
            <Footer />
        </>
    )
}