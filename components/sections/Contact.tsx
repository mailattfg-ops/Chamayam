"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const categories = [
    "Silk Sarees",
    "Cotton Weaves",
    "Bespoke Tailoring",
    "Bulk Orders",
    "Limited Editions",
    "Other"
];

export function Contact() {
    const searchParams = useSearchParams();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        category: categories[0],
        message: ""
    });

    useEffect(() => {
        const subject = searchParams.get("subject");
        if (subject) {
            setFormData(prev => ({
                ...prev,
                message: `Subject: ${subject}\n\nI'm interested in this piece from your collection. Could you provide more details regarding its availability and pricing?`
            }));
        }
    }, [searchParams]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Format the WhatsApp message
        const text = `*New Inquiry from Chamayam Website*%0A%0A` +
            `*Name:* ${formData.name}%0A` +
            `*Email:* ${formData.email}%0A` +
            `*Phone:* ${formData.phone}%0A` +
            `*Category:* ${formData.category}%0A%0A` +
            `*Message:* ${formData.message}`;

        const whatsappUrl = `https://wa.me/919876543210?text=${text}`; // Dummy number
        window.open(whatsappUrl, "_blank");
    };

    return (
        <section id="contact" className="py-32 px-6 bg-ivory/30 text-primary relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 skew-x-12 transform origin-top-right pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-24 items-stretch">
                    {/* Left: Contact Info & Timing */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col justify-between h-full py-2"
                    >
                        <div className="space-y-8">
                            <div className="space-y-6">
                                <span className="text-secondary tracking-[0.3em] text-sm font-bold uppercase">Get in Touch</span>
                                <h2 className="font-serif text-5xl md:text-6xl leading-tight text-primary">We’d love to <br /> hear from you.</h2>
                                <p className="font-sans text-lg text-primary/60 leading-relaxed max-w-md">
                                    Whether you're interested in a custom weave or have a general inquiry, our team is here to assist you with timeless care.
                                </p>
                            </div>

                            {/* Details Grid - Restructured to save space */}
                            <div className="space-y-8">
                                <h3 className="font-serif text-2xl text-secondary">Contact Details</h3>
                                <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
                                    <div className="flex items-start space-x-4 group">
                                        <div className="w-10 h-10 shrink-0 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary transition-colors">
                                            <Phone className="w-4 h-4 text-primary group-hover:text-ivory" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-secondary/50 font-bold mb-1">Phone</p>
                                            <p className="font-serif text-lg text-secondary group-hover:text-primary transition-colors whitespace-nowrap">+91 987 654 3210</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4 group">
                                        <div className="w-10 h-10 shrink-0 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary transition-colors">
                                            <Mail className="w-4 h-4 text-primary group-hover:text-ivory" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-secondary/50 font-bold mb-1">Email</p>
                                            <p className="font-serif text-lg text-secondary group-hover:text-primary transition-colors">contact@chamayam.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4 group sm:col-span-2">
                                        <div className="w-10 h-10 shrink-0 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary transition-colors">
                                            <MapPin className="w-4 h-4 text-primary group-hover:text-ivory" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-secondary/50 font-bold mb-1">Location</p>
                                            <p className="font-serif text-lg text-secondary group-hover:text-primary transition-colors leading-tight">Main Road, Thalassery, Kerala</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Shop Timing Moved to align at bottom */}
                        <div className="space-y-8 pt-12 border-t border-secondary/5">
                            <h3 className="font-serif text-2xl text-secondary">Boutique Hours</h3>
                            <div className="flex flex-col md:flex-row md:space-x-12 space-y-6 md:space-y-0">
                                <div className="flex items-start space-x-4 group">
                                    <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center">
                                        <Clock className="w-4 h-4 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-secondary/50 font-bold mb-1">Mon - Sat</p>
                                        <p className="font-serif text-lg text-secondary group-hover:text-primary transition-colors">10:00 AM - 08:30 PM</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4 opacity-40">
                                    <div className="w-10 h-10 rounded-full bg-secondary/5 flex items-center justify-center">
                                        <Clock className="w-4 h-4 text-secondary/40" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-secondary/50 font-bold mb-1">Sunday</p>
                                        <p className="font-serif text-lg text-secondary italic">Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Modern Form - Refined "Night Plum" shade matching brand aesthetic */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-gradient-to-br from-secondary via-[#1C0F19] to-secondary p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden group"
                    >
                        {/* Subtle background glow consistent with Hero */}
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-primary/20 transition-colors duration-1000" />

                        <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Name Input */}
                                <div className="space-y-2 group">
                                    <label className="text-[10px] uppercase tracking-widest font-bold text-ivory/40 group-focus-within:text-accent transition-colors">Name</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-accent transition-colors placeholder:text-ivory/20 font-sans text-ivory"
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                {/* Phone Input */}
                                <div className="space-y-2 group">
                                    <label className="text-[10px] uppercase tracking-widest font-bold text-ivory/40 group-focus-within:text-accent transition-colors">Phone</label>
                                    <input
                                        required
                                        type="tel"
                                        placeholder="+91 000 000 0000"
                                        className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-accent transition-colors placeholder:text-ivory/20 font-sans text-ivory"
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Email Input */}
                                <div className="space-y-2 group">
                                    <label className="text-[10px] uppercase tracking-widest font-bold text-ivory/40 group-focus-within:text-accent transition-colors">Email</label>
                                    <input
                                        required
                                        type="email"
                                        placeholder="email@example.com"
                                        className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-accent transition-colors placeholder:text-ivory/20 font-sans text-ivory"
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                {/* Category Dropdown */}
                                <div className="space-y-2 group relative">
                                    <label className="text-[10px] uppercase tracking-widest font-bold text-ivory/40 group-focus-within:text-accent transition-colors">Collection Interest</label>
                                    <div className="relative">
                                        <select
                                            className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-accent transition-colors appearance-none font-sans cursor-pointer text-ivory"
                                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                        >
                                            {categories.map((cat) => (
                                                <option key={cat} value={cat} className="bg-secondary text-ivory">
                                                    {cat}
                                                </option>
                                            ))}
                                        </select>
                                        <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-ivory/40 pointer-events-none" />
                                    </div>
                                </div>
                            </div>

                            {/* Message Area */}
                            <div className="space-y-2 group">
                                <label className="text-[10px] uppercase tracking-widest font-bold text-ivory/40 group-focus-within:text-accent transition-colors">Your Message</label>
                                <textarea
                                    required
                                    rows={4}
                                    value={formData.message}
                                    placeholder="Tell us about your requirements..."
                                    className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-accent transition-colors resize-none placeholder:text-ivory/20 font-sans text-ivory"
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            {/* Submit Button - Pushed down for better balance */}
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="group w-full py-5 bg-accent border border-accent text-secondary hover:bg-ivory hover:border-ivory transition-all duration-500 rounded-full flex items-center justify-center space-x-4 shadow-xl"
                                >
                                    <span className="font-sans font-bold tracking-[0.2em] uppercase text-sm">Send WhatsApp Inquiry</span>
                                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
