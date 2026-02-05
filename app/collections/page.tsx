"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, Shirt, Feather, ArrowUpRight, X, Globe, Ruler, MapPin } from "lucide-react";
import { useState, useMemo, useEffect } from "react";
import { PageHero } from "@/components/sections/PageHero";
import Link from "next/link";

const categories = ["All", "Silk", "Cotton", "Special Edition", "Linen"];

const products = [
    {
        id: 1,
        name: "Emerald Kanjivaram",
        price: "₹25,000",
        category: "Silk",
        image: "/images/artisans_kanchipuram.png",
        weave: "Hand-loomed Mulberry Silk",
        origin: "Kanchipuram, Tamil Nadu",
        desc: "A masterpiece of traditional weaving, featuring intricate gold zari borders and a rich emerald hue that symbolizes prosperity."
    },
    {
        id: 2,
        name: "Raw Cotton Drape",
        price: "₹12,000",
        category: "Cotton",
        image: "/images/hero_about.png",
        weave: "Organic Handspun Cotton",
        origin: "Balaramapuram, Kerala",
        desc: "Exquisitely soft and breathable, this raw cotton piece captures the essence of minimalist elegance with its natural textures."
    },
    {
        id: 3,
        name: "Golden Zari Weave",
        price: "₹32,000",
        category: "Special Edition",
        image: "/images/hero_magenta_silk.png",
        weave: "Pure Silk x Fine Gold Thread",
        origin: "Banaras, Uttar Pradesh",
        desc: "A regal addition to our registry, this Banarasi weave is a testament to the celestial artistry of our master weavers."
    },
    {
        id: 4,
        name: "Midnight Linen",
        price: "₹15,000",
        category: "Linen",
        image: "/images/hero_services.png",
        weave: "Premium Belgian Linen",
        origin: "Indo-European Cluster",
        desc: "Modern luxury meets heritage craft. This midnight linen piece offers a structured silhouette with a surprisingly soft hand-feel."
    },
    {
        id: 5,
        name: "Temple Border Silk",
        price: "₹28,000",
        category: "Silk",
        image: "/images/artisans_kanchipuram.png",
        weave: "Heavyweight Pure Silk",
        origin: "Kanchipuram",
        desc: "Featuring the iconic temple motifs along the border, this silk saree is a timeless tribute to Southern Indian architectural heritage."
    },
    {
        id: 6,
        name: "Ivory Mulmul",
        price: "₹9,000",
        category: "Cotton",
        image: "/images/hero_about.png",
        weave: "Fine Muslin Cotton",
        origin: "Bengal Craft Cluster",
        desc: "Light as air and pure as dawn. Our Ivory Mulmul is carefully woven to provide unparalleled comfort in the summer heat."
    },
    {
        id: 7,
        name: "Saffron Tussar",
        price: "₹21,000",
        category: "Silk",
        image: "/images/artisans_banaras.png",
        weave: "Wild Tussar Silk",
        origin: "Bhagalpur, Bihar",
        desc: "The unique golden-copper sheen of Tussar silk is complemented by a bold saffron dye, creating a piece that commands attention."
    },
    {
        id: 8,
        name: "Kerala Kasavu",
        price: "₹18,000",
        category: "Cotton",
        image: "/images/artisans_balaramapuram.png",
        weave: "Traditional Kasavu",
        origin: "Balaramapuram",
        desc: "The soul of Kerala. A pristine white cotton base adorned with gold zari borders for a look that is eternally graceful."
    },
    {
        id: 9,
        name: "Heritage Jamdani",
        price: "₹35,000",
        category: "Special Edition",
        image: "/images/hero_collections.png",
        weave: "Figurative Jamdani",
        origin: "Craft Collective",
        desc: "Intricate floral patterns appear to float on the translucent surface of the fabric in this rare Jamdani masterpiece."
    }
];

export default function CollectionsPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedProduct) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [selectedProduct]);

    const filteredProducts = useMemo(() => {
        if (selectedCategory === "All") return products;
        return products.filter(p => p.category === selectedCategory);
    }, [selectedCategory]);

    return (
        <main className="min-h-screen bg-ivory text-primary selection:bg-secondary selection:text-primary">
            {/* 1. Hero Section */}
            <PageHero
                kicker="CURATED COLLECTIONS"
                title={"The Loom\nEdit."}
                description="A curated anthology of India's finest weaves. Each piece is handpicked for its texture, history, and ability to transcend seasons."
                imageSrc="/images/hero_collections.png"
                badgeText="HANDPICKED • CURATED • LUXURY •"
            />

            {/* 2. Portfolio Gallery */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Header & Filter */}
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 space-y-12 lg:space-y-0 border-b border-primary/5 pb-12">
                        <div className="space-y-4">
                            <span className="text-primary/40 tracking-[0.4em] text-xs font-bold uppercase">The Portfolio</span>
                            <h2 className="font-serif text-5xl md:text-6xl text-secondary">Seasonal <span className="italic">Anthology</span></h2>
                        </div>

                        <div className="flex flex-wrap gap-x-8 gap-y-4 text-[10px] uppercase tracking-[0.2em] font-bold text-primary/40">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`pb-2 transition-all duration-500 border-b relative ${selectedCategory === cat ? "text-secondary border-accent" : "border-transparent hover:text-secondary"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
                        <AnimatePresence mode="popLayout">
                            {filteredProducts.map((product, index) => (
                                <motion.div
                                    key={product.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.6 }}
                                    className="group cursor-pointer"
                                    onClick={() => setSelectedProduct(product)}
                                >
                                    <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-8 bg-secondary/5">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-secondary/5 group-hover:bg-transparent transition-colors duration-1000" />

                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-secondary/10 backdrop-blur-[2px]">
                                            <div className="bg-ivory text-secondary px-8 py-4 text-[10px] font-bold uppercase tracking-[0.3em] flex items-center space-x-3 shadow-2xl">
                                                <span>View Details</span>
                                                <ArrowUpRight className="w-3 h-3" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex justify-between items-baseline">
                                            <h3 className="font-serif text-2xl text-secondary group-hover:text-primary transition-colors duration-500">{product.name}</h3>
                                            <span className="font-sans text-lg text-primary">{product.price}</span>
                                        </div>
                                        <div className="flex items-center justify-between pt-2 border-t border-primary/5">
                                            <p className="text-[10px] uppercase tracking-[0.2em] text-primary/40 font-bold">{product.category}</p>
                                            <div className="flex space-x-1">
                                                {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 rounded-full bg-accent/30" />)}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* 3. Material Spotlight - Upgraded Ivory Theme */}
            <section className="py-32 px-6 bg-ivory relative overflow-hidden">
                {/* Brand Pattern Background */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <pattern id="material-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                            <path d="M0 40 L80 40 M40 0 L40 80" stroke="currentColor" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#material-pattern)" />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
                        {[
                            {
                                icon: Feather,
                                title: "Ethical Sourcing",
                                desc: "Direct-from-weaver partnerships that eliminate middlemen, ensuring 100% of fair-trade value reaches the artisans."
                            },
                            {
                                icon: Star,
                                title: "Certified Purity",
                                desc: "Every silk piece bears the authentic Silk Mark and Handloom Mark, guaranteeing the heritage of your investment."
                            },
                            {
                                icon: Shirt,
                                title: "Limited Curation",
                                desc: "We only release small-batch editions. Once a weave is sold, it's never replicated identically, preserving its uniqueness."
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative"
                            >
                                {/* Arched Heritage Card */}
                                <div className="bg-white/50 backdrop-blur-sm p-12 rounded-t-[120px] border border-primary/5 h-full relative z-10 transition-all duration-700 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 overflow-hidden text-center">
                                    <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mx-auto mb-10 group-hover:bg-primary transition-colors duration-500">
                                        <item.icon className="w-6 h-6 text-primary group-hover:text-ivory" strokeWidth={1} />
                                    </div>
                                    <div className="space-y-6">
                                        <h3 className="font-serif text-3xl text-secondary">{item.title}</h3>
                                        <p className="font-sans text-primary/60 leading-relaxed text-sm">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                                {/* Floating Corner Decor */}
                                <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b border-r border-primary/20 group-hover:border-primary transition-all duration-500" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Details Modal */}
            <AnimatePresence>
                {selectedProduct && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 md:px-12 py-8 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProduct(null)}
                            className="absolute inset-0 bg-secondary/80 backdrop-blur-sm pointer-events-auto"
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 50, scale: 0.95 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="bg-ivory w-full max-w-5xl max-h-full md:max-h-[85vh] overflow-hidden rounded-lg relative z-10 pointer-events-auto flex flex-col md:flex-row shadow-[0_30px_100px_rgba(0,0,0,0.5)] border border-white/10"
                        >
                            <button
                                onClick={() => setSelectedProduct(null)}
                                className="absolute top-4 right-4 z-30 w-10 h-10 bg-ivory/80 backdrop-blur-md rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-ivory transition-all duration-300 shadow-xl border border-primary/10"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Left: Product Imagery - Fixed to cover half on desktop */}
                            <div className="w-full md:w-1/2 min-h-[300px] md:min-h-0 relative shrink-0">
                                <img
                                    src={selectedProduct.image}
                                    alt={selectedProduct.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-secondary/10" />
                            </div>

                            {/* Right: Narrative Details - Optimized spacing */}
                            <div className="w-full md:w-1/2 flex flex-col h-full bg-ivory">
                                <div className="flex-1 overflow-y-auto p-8 md:p-12 lg:p-14 custom-scrollbar">
                                    <div className="space-y-8 pb-4">
                                        <div className="space-y-4">
                                            <div className="flex items-center space-x-3">
                                                <span className="text-accent text-[10px] font-bold uppercase tracking-widest">{selectedProduct.category}</span>
                                                <span className="w-1 h-1 rounded-full bg-primary/20"></span>
                                                <span className="text-secondary/40 text-[10px] font-bold uppercase tracking-widest">Limited Edition</span>
                                            </div>
                                            <h2 className="font-serif text-3xl md:text-5xl text-secondary leading-tight">{selectedProduct.name}</h2>
                                            <div className="text-2xl font-serif text-primary">{selectedProduct.price}</div>
                                        </div>

                                        <div className="space-y-6 pt-6 border-t border-primary/5">
                                            <div className="grid grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <div className="flex items-center space-x-2 text-primary/40">
                                                        <Globe className="w-3 h-3" strokeWidth={1.5} />
                                                        <span className="text-[10px] uppercase font-bold tracking-widest">Origin</span>
                                                    </div>
                                                    <p className="font-serif text-secondary text-sm md:text-base">{selectedProduct.origin}</p>
                                                </div>
                                                <div className="space-y-2">
                                                    <div className="flex items-center space-x-2 text-primary/40">
                                                        <Ruler className="w-3 h-3" strokeWidth={1.5} />
                                                        <span className="text-[10px] uppercase font-bold tracking-widest">Weave</span>
                                                    </div>
                                                    <p className="font-serif text-secondary text-sm md:text-base">{selectedProduct.weave}</p>
                                                </div>
                                            </div>

                                            <div className="space-y-4">
                                                <p className="font-sans text-primary/70 leading-relaxed text-sm italic border-l-2 border-accent/20 pl-4 py-1">
                                                    {selectedProduct.desc}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="space-y-4 pt-4">
                                            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/40">Craftmanship Details</h4>
                                            <ul className="grid grid-cols-2 gap-3">
                                                {["100% Authentic Silk", "Eco-friendly Dye", "Handcrafted Zari", "Artisan Certified"].map((feat, i) => (
                                                    <li key={i} className="flex items-center space-x-2 text-[10px] text-primary/60 font-medium">
                                                        <div className="w-1 h-1 rounded-full bg-accent" />
                                                        <span>{feat}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Fixed Footer with Enquiry Button - Ensuring it's never cut off */}
                                <div className="p-8 md:p-12 lg:px-14 lg:pb-14 pt-0">
                                    <Link
                                        href={`/contact?subject=${encodeURIComponent(selectedProduct.name)}`}
                                        className="group w-full py-5 bg-secondary text-ivory flex items-center justify-center space-x-4 relative overflow-hidden rounded-sm transition-transform active:scale-95"
                                    >
                                        <span className="relative z-10 font-bold uppercase tracking-[0.3em] text-[10px]">Enquire Today</span>
                                        <ArrowUpRight className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-[0.4s] ease-out" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </main>
    );
}

const styles = `
.custom-scrollbar::-webkit-scrollbar {
    width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
    background: rgba(var(--primary), 0.1);
    border-radius: 10px;
}
`;
