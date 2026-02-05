"use client";

import { motion } from "framer-motion";
import { Scissors, ShoppingBag, Truck, Ruler, Users, Globe, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";

const coreServices = [
    {
        title: "Bespoke Tailoring",
        subtitle: "The Perfect Fit",
        desc: "From delicate blouse detailing to structured ethnic suits, our master tailors possess the technical precision to bring your custom visions to life.",
        image: "/images/hero_services.png",
        icon: Scissors,
        align: "start"
    },
    {
        title: "Wholesale & Bulk",
        subtitle: "Volume Curations",
        desc: "We partner with boutiques, interior designers, and corporate houses to provide volume-based sourcing with unwavering quality standards.",
        image: "/images/hero_collections.png",
        icon: ShoppingBag,
        align: "end"
    },
    {
        title: "Global Logistic Care",
        subtitle: "Secure Journey",
        desc: "Each piece is handled with reverence, using insured, moisture-proof packaging and premier logistics partners to reach your door anywhere in the world.",
        image: "/images/hero_about.png",
        icon: Truck,
        align: "start"
    }
];

const processSteps = [
    { num: "01", title: "Consultation", text: "A personalized session to understand your fabric needs and aesthetic preferences." },
    { num: "02", title: "Curation", text: "We handpick a selection of weaves from our clusters that match your specific vision." },
    { num: "03", title: "Crafting", text: "Our artisans and tailors begin the meticulous process of creation and fitting." },
    { num: "04", title: "Delivery", text: "Your heritage piece arrives, beautifully packaged and ready for its new journey." }
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-ivory text-primary selection:bg-secondary selection:text-primary">
            {/* 1. Hero Section */}
            <PageHero
                kicker="BESPOKE CARE"
                title={"Crafting\nWith Intent."}
                description="We go beyond the fabric. Experience a suite of personalized services designed to bring the efficiency of modern luxury to the heart of traditional craft."
                imageSrc="/images/hero_services.png"
                badgeText="BESPOKE CARE • CUSTOM FIT • PREMIUM •"
            />

            {/* 2. Services Staggered Showcase */}
            <section className="py-40 px-6">
                <div className="max-w-7xl mx-auto space-y-40 md:space-y-64">
                    {coreServices.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1.2 }}
                            className={`flex flex-col ${service.align === "end" ? "md:flex-row-reverse" : "md:flex-row"} items-start gap-12 md:gap-24 relative`}
                        >
                            {/* Image Part */}
                            <div className="relative w-full md:w-3/5 group">
                                <div className="aspect-[16/10] overflow-hidden rounded-sm relative">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-secondary/5 group-hover:bg-transparent transition-colors duration-1000" />
                                </div>
                                <div className={`absolute -inset-4 border border-primary/10 -z-10 translate-x-8 translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000`} />
                            </div>

                            {/* Content Part */}
                            <div className={`w-full md:w-2/5 md:pt-12 ${service.align === "end" ? "md:pr-12" : "md:pl-12"}`}>
                                <div className="space-y-8">
                                    <div className="space-y-2">
                                        <p className="text-accent font-serif italic text-xl">{service.subtitle}</p>
                                        <h3 className="font-serif text-4xl md:text-5xl text-secondary leading-tight">{service.title}</h3>
                                    </div>
                                    <p className="font-sans text-lg text-primary/70 leading-relaxed">
                                        {service.desc}
                                    </p>
                                    <button className="flex items-center space-x-3 text-secondary border-b border-accent/30 pb-2 hover:text-primary transition-colors">
                                        <span className="text-xs font-bold uppercase tracking-[0.2em]">Learn More</span>
                                        <ArrowUpRight className="w-4 h-4 text-accent" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 3. The Methodology - Heritage Grid */}
            <section className="py-24 px-6 bg-ivory relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    {/* Header Area - Refined Spacing */}
                    <div className="mb-20">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <div className="flex items-center space-x-3">
                                <span className="h-[1px] w-8 bg-primary/30"></span>
                                <span className="text-primary tracking-[0.4em] text-[10px] font-bold uppercase">The Methodology</span>
                            </div>
                            <h2 className="font-serif text-4xl md:text-6xl text-secondary">
                                The Master <span className="italic">Process.</span>
                            </h2>
                        </motion.div>
                    </div>

                    {/* Methodology Heritage Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {processSteps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative"
                            >
                                {/* Arched Card Structure */}
                                <div className="bg-white/50 backdrop-blur-sm p-8 rounded-t-[100px] border border-primary/5 h-full relative z-10 transition-all duration-700 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 overflow-hidden">
                                    {/* Decorative Arch Background */}
                                    <div className="absolute inset-0 bg-primary/[0.02] -z-10 translate-y-20 group-hover:translate-y-10 transition-transform duration-1000" />

                                    <div className="space-y-8 text-center pt-8">
                                        <div className="relative inline-block">
                                            <span className="font-serif text-6xl text-primary/10 italic group-hover:text-primary/20 transition-colors duration-500">
                                                {step.num}
                                            </span>
                                            {/* Mini Accent Line */}
                                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                                        </div>

                                        <div className="space-y-4">
                                            <h3 className="font-serif text-2xl text-secondary">{step.title}</h3>
                                            <p className="font-sans text-primary/70 leading-relaxed text-sm">
                                                {step.text}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Decorative Corner */}
                                <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b border-r border-primary/20 group-hover:border-primary transition-all duration-500 -z-0" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Partnership CTA */}
            <section className="py-40 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto space-y-12"
                >
                    <div className="space-y-4">
                        <Users className="w-12 h-12 text-accent mx-auto mb-8" strokeWidth={1} />
                        <h2 className="font-serif text-4xl md:text-6xl text-secondary">Become a Partner</h2>
                        <p className="font-sans text-xl text-primary/60 max-w-2xl mx-auto">
                            Are you a boutique owner or designer? Join our wholesale program and access India's most curated handloom collections at trade terms.
                        </p>
                    </div>

                    <button className="relative px-12 py-6 bg-secondary text-ivory font-bold uppercase tracking-[0.3em] text-xs group overflow-hidden">
                        <span className="relative z-10">Apply for Partnership</span>
                        <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </button>

                    <div className="pt-24 flex justify-center space-x-12 opacity-30 grayscale contrast-200">
                        {/* Placeholder for partner logos */}
                        <div className="font-serif italic text-2xl">Boutiques</div>
                        <div className="font-serif italic text-2xl">Designers</div>
                        <div className="font-serif italic text-2xl">Hotels</div>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
