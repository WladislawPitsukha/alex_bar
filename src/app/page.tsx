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
          <div id="home" className="w-full"><HeroSect /></div>
          <div id="gallery" className="w-full"><GallerySect /></div>
          <div id="events" className="w-full"><EventSect /></div>
          <div id="location" className="w-full"><MapSect /></div>
        </main>
        <Footer />
      </>
    )
  }