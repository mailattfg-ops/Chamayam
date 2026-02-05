"use client";

import { motion } from "framer-motion";

export function OurTeam() {
    return (
        <section className="pt-16 pb-32 px-6 bg-ivory">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Owner Image with Creative Frame */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                        className="relative group order-2 lg:order-1"
                    >
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white group-hover:border-accent/10 transition-colors duration-700">
                            <img
                                src="/images/owner_portrait_1770193913998.png"
                                alt="Founder of Chamayam Textiles"
                                className="w-full h-full object-cover transition-all duration-[2s] scale-105 group-hover:scale-100"
                            />
                        </div>

                        {/* Decorative Layered Path */}
                        <div className="absolute -top-10 -left-10 w-full h-full border border-primary/10 rounded-2xl -z-10 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000" />

                        {/* Name Badge */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="absolute -bottom-6 -right-6 md:right-12 bg-secondary p-8 rounded-lg shadow-xl z-20 text-ivory border border-white/5"
                        >
                            <p className="text-accent tracking-[0.3em] text-[10px] font-bold uppercase mb-1">Founder & Managing Director</p>
                            <h3 className="font-serif text-3xl">Latha Nair</h3>
                        </motion.div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="space-y-10 order-1 lg:order-2"
                    >
                        <div className="space-y-4">
                            <span className="text-primary/40 tracking-[0.4em] text-xs font-bold uppercase">The Visonary</span>
                            <h2 className="font-serif text-5xl md:text-6xl text-secondary leading-tight">
                                A personal promise to <br />
                                <span className="italic text-primary">every loom.</span>
                            </h2>
                        </div>

                        <div className="space-y-6 text-lg font-sans text-primary/70 leading-relaxed max-w-xl">
                            <p>
                                "Chamayam Textiles was born from a desire to see the hands behind the threads get the recognition they deserve. Our brand isn't just about selling clothes; it's about sustaining a way of life."
                            </p>
                            <p>
                                Under Latha's leadership, Chamayam has grown from a local initiative into a global ambassador for Indian handlooms, always keeping the weaver's dignity at the core of the company name.
                            </p>
                        </div>

                        <div className="pt-8">
                            <div className="inline-block p-10 bg-secondary/5 border-l-4 border-accent rounded-r-xl">
                                <h4 className="font-serif text-2xl text-secondary mb-2 italic">Chamayam Textiles</h4>
                                <p className="text-primary/50 text-sm uppercase tracking-widest">A Movement. A Brand. A Legacy.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
