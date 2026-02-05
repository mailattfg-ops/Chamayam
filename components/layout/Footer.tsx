"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-primary text-ivory pt-24 pb-12 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    {/* Brand Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="font-serif text-3xl tracking-tighter">CHAMAYAM</h2>
                            <p className="text-[10px] tracking-[0.4em] uppercase font-bold text-secondary mt-1">Textiles</p>
                        </div>
                        <p className="font-sans text-sm text-ivory/60 leading-relaxed">
                            Curating India's finest handloom heritage. We celebrate the artisan, the weave, and the timeless elegance of tradition.
                        </p>
                        <div className="flex space-x-4">
                            {[Instagram, Facebook, Mail].map((Icon, idx) => (
                                <Link key={idx} href="#" className="hover:text-secondary transition-colors group">
                                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-8">
                        <h3 className="font-serif text-xl">Navigation</h3>
                        <ul className="space-y-4 font-sans text-sm text-ivory/50">
                            <li><Link href="/" className="hover:text-secondary transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-secondary transition-colors">Our Legacy</Link></li>
                            <li><Link href="/services" className="hover:text-secondary transition-colors">Services</Link></li>
                            <li><Link href="/collections" className="hover:text-secondary transition-colors">Collections</Link></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div className="space-y-8">
                        <h3 className="font-serif text-xl">The Loom Edit</h3>
                        <ul className="space-y-4 font-sans text-sm text-ivory/50">
                            <li><Link href="/collections" className="hover:text-secondary transition-colors">Kanjivaram Silk</Link></li>
                            <li><Link href="/collections" className="hover:text-secondary transition-colors">Raw Cotton</Link></li>
                            <li><Link href="/collections" className="hover:text-secondary transition-colors">Zari Weaves</Link></li>
                            <li><Link href="/collections" className="hover:text-secondary transition-colors">Limited Editions</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h3 className="font-serif text-xl">Contact</h3>
                        <div className="space-y-6 font-sans text-sm text-ivory/50">
                            <div className="flex items-start space-x-3">
                                <MapPin className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                                <span>Main Road, Thalassery,<br />Kerala, India</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <Phone className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                                <span>+91 987 654 3210</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <Mail className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                                <span>contact@chamayam.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="font-sans text-[10px] uppercase tracking-widest text-ivory/30">
                        &copy; {new Date().getFullYear()} Chamayam Textiles. All rights reserved.
                    </p>

                    <div className="flex items-center space-x-8 opacity-40 grayscale hover:grayscale-0 transition-all">
                        {/* Quality Symbols Placeholder (e.g. Handloom Mark) */}
                        <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 border rounded-full border-ivory flex items-center justify-center text-[8px] font-bold">HM</div>
                            <span className="text-[10px] tracking-widest uppercase">Handloom Mark</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 border rounded-full border-ivory flex items-center justify-center text-[8px] font-bold">SM</div>
                            <span className="text-[10px] tracking-widest uppercase">Silk Mark</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
