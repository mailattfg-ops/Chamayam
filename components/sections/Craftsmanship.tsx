"use client";

import { motion } from "framer-motion";
import { Hammer, Wind, Sun, Clock } from "lucide-react";

const processSteps = [
    {
        icon: Hammer,
        title: "Ethical Sourcing",
        desc: "We source yarn directly from artisanal clusters, ensuring fair compensation and quality from the start."
    },
    {
        icon: Wind,
        title: "Artisanal Weave",
        desc: "Each piece spends 15-20 days on the handloom, where rhythmic weaving patterns bring silk to life."
    },
    {
        icon: Sun,
        title: "Natural Dyeing",
        desc: "Using time-tested techniques and organic extracts to achieve rich, vibrant hues that last a lifetime."
    }
];

export function Craftsmanship() {
    return (
        <section className="py-24 px-6 bg-ivory/30 text-primary">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-10"
                    >
                        <div className="space-y-4">
                            <span className="text-secondary tracking-[0.3em] text-sm font-bold uppercase">The Artisan's Touch</span>
                            <h2 className="font-serif text-5xl md:text-6xl text-primary leading-tight">Mastery in <br /> <span className="text-secondary italic">Every Thread.</span></h2>
                        </div>

                        <p className="font-sans text-lg text-primary/70 leading-relaxed max-w-xl">
                            The rhythm of the loom is the heartbeat of our brand. We celebrate the master weavers who turn simple threads into wearable art using techniques passed down through centuries.
                        </p>

                        <div className="grid gap-8 pt-6">
                            {processSteps.map((step, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.2 }}
                                    className="flex items-start space-x-6 group"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-secondary/20 flex items-center justify-center group-hover:bg-secondary group-hover:border-secondary transition-colors duration-500">
                                        <step.icon className="w-5 h-5 text-secondary group-hover:text-ivory transition-colors duration-500" strokeWidth={1.5} />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="font-serif text-xl text-primary">{step.title}</h3>
                                        <p className="font-sans text-sm text-primary/60 leading-relaxed">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Image/Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-primary/5 shadow-2xl">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/images/hero_about.png"
                                alt="Master Artisan"
                                className="object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
                        </div>

                        {/* Quality Floating Badge */}
                        <div className="absolute -top-10 -right-10 bg-secondary text-ivory p-8 rounded-full shadow-2xl flex flex-col items-center justify-center space-y-2 animate-bounce-slow">
                            <Clock className="w-6 h-6 text-accent" />
                            <div className="text-center">
                                <span className="block text-2xl font-serif leading-none">20</span>
                                <span className="text-[10px] uppercase tracking-widest font-bold">Days per weave</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
