"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
    {
        quote: "Our craft is a silent conversation between the generations—a promise that quality and heritage never go out of style.",
        author: "Ranganathan M.",
        role: "Master Weaver",
        detail: "38 Years of Mastery",
        initial: "R"
    },
    {
        quote: "The craftsmanship is unparalleled. I've never seen such intricate Mango Silk work. A true masterpiece of heritage.",
        author: "Priya S.",
        role: "Heritage Enthusiast",
        detail: "Bangalore, India",
        initial: "P"
    },
    {
        quote: "A beautiful blend of tradition and modern elegance. My wedding saree was everything I dreamed of and more.",
        author: "Anjali R.",
        role: "Bespoke Client",
        detail: "Kochi, Kerala",
        initial: "A"
    },
    {
        quote: "Chamayam has captured the essence of Kerala's heritage perfectly. A must-visit for every textile lover.",
        author: "Sarah J.",
        role: "Global Traveler",
        detail: "Dubai, UAE",
        initial: "S"
    }
];

export function ArtisanVoices() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 500 : -500,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 500 : -500,
            opacity: 0
        })
    };

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    // Auto-slide every 8 seconds
    useEffect(() => {
        const timer = setInterval(nextSlide, 8000);
        return () => clearInterval(timer);
    }, []);

    const activeTestimonial = testimonials[currentIndex];

    return (
        <section className="py-32 px-6 bg-ivory/30 relative overflow-hidden min-h-[700px] flex items-center">
            {/* Background Decorative Pattern */}
            <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <pattern id="weaving-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                        <path d="M0 50 L100 50 M50 0 L50 100" stroke="currentColor" strokeWidth="1" />
                        <circle cx="50" cy="50" r="2" fill="currentColor" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#weaving-pattern)" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto relative z-10 w-full">
                <div className="flex flex-col items-center text-center">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center space-y-4 mb-16"
                    >
                        <span className="text-secondary tracking-[0.4em] text-xs font-bold uppercase">Voices of the Loom</span>
                        <div className="flex space-x-1 text-accent">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                        </div>
                    </motion.div>

                    {/* Carousel Area */}
                    <div className="relative w-full max-w-5xl h-[300px] md:h-[400px] flex items-center justify-center">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.5 }
                                }}
                                className="absolute w-full px-12"
                            >
                                <div className="relative group">
                                    <Quote className="absolute -top-12 -left-8 w-16 h-16 md:w-24 md:h-24 text-secondary/5 -z-10 rotate-12 group-hover:rotate-0 transition-transform duration-1000" strokeWidth={1} />
                                    <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-primary leading-[1.2] tracking-tight italic">
                                        "{activeTestimonial.quote}"
                                    </h2>
                                </div>

                                {/* Attribution */}
                                <div className="mt-12 flex flex-col items-center space-y-4">
                                    <div className="relative">
                                        <div className="w-16 h-16 rounded-full border border-secondary/20 flex items-center justify-center bg-secondary text-ivory font-serif text-2xl shadow-xl overflow-hidden group">
                                            <span className="group-hover:scale-150 transition-transform duration-700">{activeTestimonial.initial}</span>
                                            <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        </div>
                                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-accent border-2 border-ivory rounded-full" />
                                    </div>
                                    <div>
                                        <cite className="not-italic font-serif text-2xl text-secondary">{activeTestimonial.author}</cite>
                                        <div className="flex items-center justify-center space-x-3 mt-1">
                                            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary/40">{activeTestimonial.role}</span>
                                            <span className="w-1 h-1 bg-accent/30 rounded-full" />
                                            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary/40">{activeTestimonial.detail}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-secondary/30 hover:text-accent transition-colors z-20"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft className="w-8 h-8" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-secondary/30 hover:text-accent transition-colors z-20"
                            aria-label="Next slide"
                        >
                            <ChevronRight className="w-8 h-8" />
                        </button>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex space-x-3 mt-12">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setDirection(index > currentIndex ? 1 : -1);
                                    setCurrentIndex(index);
                                }}
                                className={`w-2 h-2 rounded-full transition-all duration-500 ${index === currentIndex ? "bg-accent w-8" : "bg-secondary/10 hover:bg-secondary/30"
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
