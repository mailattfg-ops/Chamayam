"use client";

import { PageHero } from "@/components/sections/PageHero";
import { AboutStory } from "@/components/sections/AboutStory";
import { ArtisansShowcase } from "@/components/sections/ArtisansShowcase";
import { OurTeam } from "@/components/sections/OurTeam";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-ivory text-primary selection:bg-secondary selection:text-primary">
            {/* Hero Section */}
            <PageHero
                kicker="OUR LEGACY"
                title={"Weaving Stories.\nPreserving Soul."}
                description="Chamayam Textiles began as a small initiative to support a single weaving family in Kerala. Today, it is a movement—a bridge between the ancient looms of India and the modern wardrobe."
                imageSrc="/Images/hero_collections.png" // Reusing available high-res image
                badgeText="HERITAGE SINCE 1920 • AUTHENTIC •"
            />

            {/* Stories Section */}
            <AboutStory />

            {/* Artisans Section */}
            <ArtisansShowcase />

            {/* Our Team Section */}
            <OurTeam />

            {/* Redesigned Philosophy Section */}
        </main>
    );
}
