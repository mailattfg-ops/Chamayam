"use client";

import { motion } from "framer-motion";

export function Philosophy() {
    return (
        <section className="py-40 px-6 bg-secondary text-ivory relative overflow-hidden">
            {/* Subtle Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <pattern id="phi-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                        <circle cx="30" cy="30" r="1" fill="white" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#phi-grid)" />
                </svg>
            </div>

            <div className="max-w-5xl mx-auto relative z-10 text-center space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="space-y-6"
                >
                    <span className="text-accent tracking-[0.5em] text-[10px] font-bold uppercase block">Our Ethos</span>
                    <div className="w-12 h-[1px] bg-accent/30 mx-auto" />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                    className="font-serif text-4xl md:text-6xl italic leading-relaxed md:leading-[1.4] max-w-4xl mx-auto"
                >
                    "We do not inherit the loom from our ancestors; we borrow it from our children."
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="pt-12"
                >
                    <div className="inline-flex flex-col items-center">
                        <span className="text-accent text-3xl font-serif">◈</span>
                        <p className="font-sans text-xs uppercase tracking-[0.3em] text-ivory/40 mt-4">The Eternal Thread</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
