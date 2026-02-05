"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
    kicker: string;
    title: string;
    description: string;
    imageSrc?: string;
    badgeText?: string;
}

export function PageHero({
    kicker,
    title,
    description,
    imageSrc = "/Images/hero_magenta_silk.png",
    badgeText = "Premium Silk • Handwoven • Authentic •"
}: PageHeroProps) {
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-secondary flex items-center pt-32 lg:py-0">
            {/* Background Texture/Gradient */}
            <div className="absolute inset-0 bg-secondary" />
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-secondary to-secondary pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 w-full relative z-10 items-center">
                {/* Left Content */}
                <div className="text-left space-y-10 lg:pr-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Kicker */}
                        <div className="flex items-center space-x-3 mb-6">
                            <span className="h-[1px] w-12 bg-accent/60"></span>
                            <h2 className="text-accent text-xs tracking-[0.4em] uppercase font-sans font-bold">
                                {kicker}
                            </h2>
                        </div>

                        {/* Headline */}
                        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-ivory leading-[1.05] tracking-tight whitespace-pre-line">
                            {title}
                        </h1>

                        {/* Description */}
                        <p className="mt-8 text-lg font-light text-ivory/60 max-w-md leading-relaxed border-l-2 border-accent/20 pl-6 italic">
                            {description}
                        </p>
                    </motion.div>
                </div>

                {/* Right Image - The Saree Pillar */}
                <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative hidden lg:block h-screen w-full -mr-24"
                >
                    <div className="absolute inset-0 z-10 border-l border-white/5" />
                    <div className="relative h-full w-full overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.4)]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={imageSrc}
                            alt={title}
                            className="object-cover w-full h-full brightness-90 hover:brightness-100 transition-all duration-[3s] scale-105 hover:scale-100"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-secondary via-secondary/20 to-transparent" />
                        <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-secondary to-transparent opacity-60" />
                    </div>

                    {/* Architectural Border Highlight */}
                    <div className="absolute -inset-4 border border-white/5 pointer-events-none z-0" />

                    {/* Decorative Elements - Premium Seal */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute bottom-12 -left-12 z-20 w-32 h-32 hidden lg:flex items-center justify-center pointer-events-none"
                    >
                        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible opacity-30">
                            <path
                                id="curve_hero"
                                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                                fill="transparent"
                            />
                            <text className="text-[10px] font-bold uppercase tracking-[0.2em] fill-accent">
                                <textPath href="#curve_hero">
                                    {badgeText}
                                </textPath>
                            </text>
                        </svg>
                    </motion.div>
                </motion.div>
            </div>

            {/* Mobile Image Fallback (Background) */}
            <div className="absolute inset-0 z-0 lg:hidden opacity-20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={imageSrc}
                    alt={title}
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-secondary/80" />
            </div>
        </section>
    );
}
