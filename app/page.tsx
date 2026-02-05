import { Hero } from "@/components/sections/Hero";
import { Contact } from "@/components/sections/Contact";
import { HeritageTeaser } from "@/components/sections/HeritageTeaser";
import { CollectionsPreview } from "@/components/sections/CollectionsPreview";
import { Craftsmanship } from "@/components/sections/Craftsmanship";
import { ArtisanVoices } from "@/components/sections/ArtisanVoices";

export default function Home() {
    return (
        <main className="min-h-screen bg-ivory selection:bg-secondary selection:text-primary">
            <Hero />
            <HeritageTeaser />
            <CollectionsPreview />
            <Craftsmanship />
            <ArtisanVoices />
            <Contact />
        </main>
    );
}
