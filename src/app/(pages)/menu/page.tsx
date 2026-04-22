//TODO: make the page with full-component's structure of menu's page

import AsideMenu from "@/components/AsideMenu";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import SectionMenu from "@/components/SectionMenu";

export default function Home() {
    return(
        <>
            <NavBar />
            <main className="flex flex-row items-center">
                <AsideMenu />
                <div className="">
                    <SectionMenu />
                </div>
            </main>
            <Footer />
        </>
    )
}