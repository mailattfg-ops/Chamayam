"use client";

import { motion } from "framer-motion";

export function AboutStory() {
    return (
        <section className="py-32 px-6 bg-ivory/30 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Narrative Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="space-y-8"
                    >
                        <div className="flex items-center space-x-3">
                            <span className="h-[1px] w-12 bg-accent/40"></span>
                            <span className="text-secondary tracking-[0.4em] text-xs font-bold uppercase">Our Genesis</span>
                        </div>

                        <h2 className="font-serif text-5xl md:text-6xl text-primary leading-tight">
                            A legacy woven <br />
                            <span className="italic">across time.</span>
                        </h2>

                        <div className="space-y-6 text-lg font-sans text-primary/70 leading-relaxed max-w-xl">
                            <p>
                                Chamayam Textiles began in 1920, not as a business, but as a silent revolution. In the heart of Kerala's weaving clusters, our founders saw more than just fabric—they saw a dying language of art that needed a voice.
                            </p>
                            <p>
                                What started with a single loom in a small courtyard has grown into a collective that spans generations. We don't just produce textiles; we preserve the rhythmic heartbeat of the weaver's touch.
                            </p>
                        </div>
                    </motion.div>

                    {/* Visual Narrative Side - Upgraded with Layered Depth */}
                    <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
                        {/* 1. Main Arched Image Frame */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2 }}
                            className="relative w-full h-full max-w-md overflow-hidden rounded-t-full shadow-2xl border-4 border-white/10 group"
                        >
                            <img
                                src="/images/about_genesis_weave.png"
                                alt="Traditional Handloom"
                                className="w-full h-full object-cover transition-all duration-1000 scale-110 group-hover:scale-100"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent opacity-60" />
                        </motion.div>

                        {/* 2. Minimal Glassmorphism Quote - Moved to avoid obscuring the image */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="absolute -right-2 md:-right-20 -bottom-8 bg-secondary/40 backdrop-blur-xl p-6 md:p-8 max-w-[240px] md:max-w-[280px] rounded-2xl shadow-2xl border border-white/10 z-20 group"
                        >
                            <span className="text-accent/60 text-4xl font-serif absolute -top-3 -left-1 italic">"</span>
                            <h3 className="font-serif text-base md:text-lg text-ivory leading-relaxed italic relative z-10">
                                Woven with a hundred fingers and a thousand dreams.
                            </h3>
                            <div className="mt-4 pt-4 border-t border-white/5">
                                <p className="text-accent tracking-[0.2em] text-[9px] font-bold uppercase italic">The Weaver's Credo</p>
                            </div>
                        </motion.div>

                        {/* 3. Floating Heritage Badge */}
                        <motion.div
                            initial={{ opacity: 0, rotate: -20, scale: 0.5 }}
                            whileInView={{ opacity: 1, rotate: 12, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="absolute -top-8 -left-4 w-28 h-28 md:w-32 md:h-32 bg-accent rounded-full flex items-center justify-center p-4 text-center shadow-xl z-30 ring-8 ring-ivory/50 backdrop-blur-sm"
                        >
                            <span className="text-secondary font-serif text-[9px] md:text-[10px] font-bold leading-tight uppercase tracking-tighter">
                                100% Authentic <br /> Handloom <br /> Since 1920
                            </span>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
