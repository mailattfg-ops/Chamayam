"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative min-h-[100dvh] w-full overflow-hidden bg-secondary flex items-center py-32 lg:py-0">
            {/* Background Texture/Gradient */}
            <div className="absolute inset-0 bg-secondary" />
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-secondary to-secondary pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 h-full grid lg:grid-cols-[1.2fr_0.8fr] gap-12 w-full relative z-10 items-center">
                {/* Left Content */}
                <div className="text-left space-y-8 lg:pr-12 lg:pt-24 pb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        {/* Kicker */}
                        <div className="flex items-center space-x-3 mb-6">
                            <span className="h-[1px] w-12 bg-accent/60"></span>
                            <h2 className="text-accent text-xs tracking-[0.4em] uppercase font-sans font-bold">
                                EST. 2024 • MODERN HERITAGE
                            </h2>
                        </div>

                        {/* Headline */}
                        <div className="space-y-2">
                            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-ivory leading-[0.95] tracking-tighter">
                                WEAVING <br />
                                <span className="text-accent/90">LEGACY.</span>
                            </h1>
                            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary leading-[0.95] tracking-tighter">
                                CRAFTING <br />
                                LUXURY.
                            </h1>
                        </div>
                    </motion.div>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-4"
                    >
                        <Link href="/collections" className="group relative inline-flex items-center justify-center px-10 py-5 bg-accent text-secondary overflow-hidden transition-all duration-500 rounded-none hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                            <span className="relative z-10 uppercase tracking-[0.3em] text-[10px] font-bold">Shop Collection</span>
                            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                        </Link>
                        <Link href="/about" className="group flex items-center space-x-4 text-ivory/60 hover:text-accent transition-all duration-500 uppercase tracking-[0.3em] text-[10px] font-bold py-2">
                            <span>Read The Story</span>
                            <div className="w-8 h-[1px] bg-white/20 group-hover:w-12 group-hover:bg-accent transition-all duration-500" />
                        </Link>
                    </motion.div>
                </div>

                {/* Right Image - The Saree Pillar */}
                <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="relative hidden lg:block h-screen w-full -mr-24"
                >
                    <div className="absolute inset-0 z-10 border-l border-white/5" />
                    <div className="relative h-full w-full overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/Images/hero_magenta_silk.png"
                            alt="Luxury Mango Silk Saree"
                            className="object-cover w-full h-full brightness-90 hover:brightness-100 transition-all duration-[3s] scale-105 hover:scale-100"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-secondary via-secondary/20 to-transparent" />
                        <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-secondary to-transparent opacity-60" />
                    </div>

                    {/* Architectural Border Highlight */}
                    <div className="absolute -inset-4 border border-white/5 pointer-events-none z-0" />

                    {/* Decorative Seal */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute bottom-12 -left-16 z-20 w-32 h-32 flex items-center justify-center pointer-events-none"
                    >
                        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible opacity-40">
                            <path
                                id="curve"
                                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                                fill="transparent"
                            />
                            <text className="text-[10px] font-bold uppercase tracking-[0.2em] fill-accent">
                                <textPath href="#curve">
                                    Premium Silk • Handwoven • Authentic •
                                </textPath>
                            </text>
                        </svg>
                    </motion.div>
                </motion.div>
            </div>

            {/* Mobile Image Fallback */}
            <div className="absolute inset-0 z-0 lg:hidden opacity-30">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/Images/hero_magenta_silk.png"
                    alt="Luxury Mango Silk Saree"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-secondary/80" />
            </div>
        </section>
    );
}
