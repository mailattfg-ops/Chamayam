"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

const featuredProducts = [
    {
        id: "emerald-kanjivaram",
        name: "Emerald Kanjivaram",
        category: "Silk Special",
        price: "₹25,000",
        image: "/images/hero_collections.png"
    },
    {
        id: "heritage-print",
        name: "Vintage Butta Silk",
        category: "Heritage Collection",
        price: "₹18,000",
        image: "/images/hero_magenta_silk.png"
    },
    {
        id: "raw-cotton",
        name: "Ivory Raw Cotton",
        category: "Daily Luxury",
        price: "₹12,000",
        image: "/images/hero_services.png"
    }
];

export function CollectionsPreview() {
    return (
        <section className="py-32 px-6 bg-ivory/30">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="space-y-4">
                        <span className="text-secondary tracking-[0.3em] text-xs font-bold uppercase">The Loom Edit</span>
                        <h2 className="font-serif text-5xl text-primary">Signature Collections</h2>
                    </div>
                    <Link
                        href="/collections"
                        className="flex items-center space-x-2 text-primary/60 hover:text-secondary transition-colors font-sans tracking-wide"
                    >
                        <span>View All Collections</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {featuredProducts.map((product, idx) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            className="group"
                        >
                            <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-6 shadow-md shadow-primary/5">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-1000 saturate-[0.85] group-hover:saturate-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Quick Tag */}
                                <div className="absolute top-4 right-4 bg-secondary/90 text-ivory text-[10px] uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-sm">
                                    Limited Edition
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold font-sans">
                                        {product.category}
                                    </span>
                                    <div className="flex text-accent h-3">
                                        {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                                    </div>
                                </div>
                                <h3 className="font-serif text-2xl text-primary group-hover:text-secondary transition-colors">
                                    {product.name}
                                </h3>
                                <p className="text-primary/60 font-sans font-light italic">{product.price}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
