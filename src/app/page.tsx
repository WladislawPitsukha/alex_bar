//TODO: start to build the page

import EventSect from "@/components/EventSection";
import Footer from "@/components/footer";
import GallerySect from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import MapSect from "@/components/MapSection";
import NavBar from "@/components/navbar";

export default function Home() {
  return (
      <>
        <NavBar />
        <main className="flex flex-col items-center">
          <HeroSection />
          <GallerySect />
          <EventSect />
          <MapSect />
        </main>
        <Footer />
      </>
    )
  }
