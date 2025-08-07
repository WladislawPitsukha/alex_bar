//TODO: start to build the page

import EventSect from "@/components/EventSect";
import Footer from "@/components/footer";
import GallerySect from "@/components/GallerySect";
import HeroSect from "@/components/HeroSect";
import MapSect from "@/components/MapSect";
import NavBar from "@/components/navbar";

export default function Home() {
  return (
      <>
        <NavBar />
        <main className="flex flex-col items-center">
          <HeroSect />
          <GallerySect />
          <EventSect />
          <MapSect />
        </main>
        <Footer />
      </>
    )
  }
