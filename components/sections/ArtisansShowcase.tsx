"use client";

import { motion } from "framer-motion";
import { Users, Shield, Zap, ArrowUpRight } from "lucide-react";

const clusters = [
    {
        title: "Kanchipuram Guild",
        subtitle: "The Silk Guardians",
        desc: "Masters of the divine silk, weaving mythological narratives into golden borders with unshakeable precision.",
        image: "/images/artisans_kanchipuram.png",
        icon: Users,
        align: "start"
    },
    {
        title: "Balaramapuram Collective",
        subtitle: "The White Gold Weavers",
        desc: "Guardians of the fine cream threads—Kerala's traditional cotton weave with unbleached purity and royal grace.",
        image: "/images/artisans_balaramapuram.png",
        icon: Shield,
        align: "end"
    },
    {
        title: "Banaras Weavers",
        subtitle: "The Brocade Masters",
        desc: "Crafting the world's most luxurious brocades, where Persian heritage meets the soul of the Ganges.",
        image: "/images/artisans_banaras.png",
        icon: Zap,
        align: "start"
    }
];

export function ArtisansShowcase() {
    return (
        <section className="py-40 px-6 bg-ivory relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <pattern id="weaving-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M0 20 L40 20 M20 0 L20 40" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#weaving-grid)" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="max-w-3xl mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="space-y-6"
                    >
                        <div className="flex items-center space-x-3">
                            <span className="h-[1px] w-12 bg-accent/40"></span>
                            <span className="text-primary/60 tracking-[0.4em] text-xs font-bold uppercase">The Community</span>
                        </div>
                        <h2 className="font-serif text-5xl md:text-7xl text-secondary leading-tight">
                            Meet the hands that <br />
                            <span className="italic text-primary">shape our soul.</span>
                        </h2>
                        <p className="font-sans text-lg text-primary/60 leading-relaxed max-w-xl">
                            We work directly with over 500 weaver families across India, ensuring that the ancient language of the loom remains a living, thriving art form.
                        </p>
                    </motion.div>
                </div>

                {/* Artisans Grid - Editorial Style */}
                <div className="space-y-40 md:space-y-64">
                    {clusters.map((cluster, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1.2, delay: 0.1 }}
                            className={`flex flex-col ${cluster.align === "end" ? "md:flex-row-reverse" : "md:flex-row"} items-start gap-12 md:gap-24 relative`}
                        >
                            {/* Image Part with Floating Frame */}
                            <div className="relative w-full md:w-3/5 group">
                                <div className="aspect-[4/5] md:aspect-[16/10] overflow-hidden rounded-sm relative">
                                    <img
                                        src={cluster.image}
                                        alt={cluster.title}
                                        className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                                    />
                                    {/* Subtle Overlay */}
                                    <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors duration-1000" />
                                </div>

                                {/* Decorative Floating Border */}
                                <div className={`absolute -inset-4 border border-primary/20 -z-10 translate-x-8 translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000 shadow-sm`} />
                            </div>

                            {/* Text Content - Overlapping on Desktop */}
                            <div className={`w-full md:w-2/5 md:pt-12 ${cluster.align === "end" ? "md:pr-12" : "md:pl-12"}`}>
                                <div className="space-y-8">
                                    <div className="space-y-2">
                                        <p className="text-accent font-serif italic text-xl">{cluster.subtitle}</p>
                                        <h3 className="font-serif text-4xl md:text-5xl text-secondary leading-tight">{cluster.title}</h3>
                                    </div>

                                    <p className="font-sans text-lg text-primary/70 leading-relaxed">
                                        {cluster.desc}
                                    </p>

                                    <div className="pt-4">
                                        <button className="flex items-center space-x-3 text-secondary group-hover:text-primary transition-colors border-b border-accent/30 pb-2">
                                            <span className="text-xs font-bold uppercase tracking-[0.2em]">Explore Cluster</span>
                                            <ArrowUpRight className="w-4 h-4 text-accent" />
                                        </button>
                                    </div>
                                </div>

                                {/* Floating Initial Background */}
                                <span className="absolute -top-20 -right-20 text-[20vw] font-serif text-secondary/5 -z-10 pointer-events-none select-none">
                                    {cluster.title[0]}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Call to Action */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center py-24 border-y border-accent/10"
                >
                    <h3 className="font-serif text-3xl md:text-4xl text-secondary mb-8">
                        Supporting over 500 weaving <br className="hidden md:block" /> families across India.
                    </h3>
                    <div className="flex justify-center">
                        <div className="w-12 h-[1px] bg-accent"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
