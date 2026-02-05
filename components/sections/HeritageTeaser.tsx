"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeritageTeaser() {
    return (
        <section className="py-32 px-6 bg-ivory/30 overflow-hidden">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                {/* Visual Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative"
                >
                    <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/images/hero_about.png"
                            alt="The Artisan Loom"
                            className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                    </div>
                    {/* Decorative Overlay Card */}
                    <div className="absolute -bottom-10 -right-10 bg-secondary p-8 rounded-xl shadow-xl hidden md:block max-w-[280px]">
                        <p className="font-serif text-ivory text-xl italic leading-relaxed">
                            "Every thread we weave carries a century of tradition and a promise of quality."
                        </p>
                    </div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-8"
                >
                    <div className="flex items-center space-x-4">
                        <span className="h-[1px] w-12 bg-secondary"></span>
                        <span className="text-secondary tracking-[0.3em] text-sm font-bold uppercase">Our Heritage</span>
                    </div>

                    <h2 className="font-serif text-5xl md:text-6xl text-primary leading-tight">
                        Woven in Time, <br />
                        <span className="italic text-secondary">Crafted for Generations.</span>
                    </h2>

                    <p className="font-sans text-lg text-primary/70 leading-relaxed max-w-xl">
                        At Chamayam, we don't just sell textiles; we preserve a legacy. Our journey began in the heart of Kerala's weaving clusters, where every saree tells a story of patience, skill, and heritage.
                    </p>

                    <div className="pt-6">
                        <Link
                            href="/about"
                            className="group inline-flex items-center space-x-4 text-primary font-bold tracking-widest uppercase text-sm border-b-2 border-secondary pb-2"
                        >
                            <span>Explore our full story</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform color-secondary" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
