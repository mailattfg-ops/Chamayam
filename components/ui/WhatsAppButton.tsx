"use client";

import { motion } from "framer-motion";

export function WhatsAppButton() {
    const phoneNumber = "919876543210"; // Placeholder
    const message = encodeURIComponent("Hello! I'm interested in Chamayam Textiles' collections.");

    return (
        <div className="fixed bottom-8 right-8 z-50">
            {/* Pulsing Background Ripple */}
            <motion.div
                animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.3, 0, 0.3],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute inset-0 bg-primary rounded-full -z-10"
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                    opacity: 1,
                    scale: [1, 1.05, 1],
                    y: [0, -20, 0] // Refined Ping Pong Effect
                }}
                transition={{
                    opacity: { duration: 0.5 },
                    scale: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    },
                    y: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }
                }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
            >
                <a
                    href={`https://wa.me/${phoneNumber}?text=${message}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full shadow-[0_15px_35px_rgba(160,0,64,0.4)] hover:shadow-[0_20px_45px_rgba(160,0,64,0.6)] transition-all duration-300 group ring-4 ring-white/10"
                    aria-label="Contact on WhatsApp"
                >
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-10 h-10 group-hover:scale-110 transition-transform duration-300 drop-shadow-md"
                    >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412.001 12.049a11.812 11.812 0 001.592 5.955L0 24l6.117-1.606a11.808 11.808 0 005.933 1.598h.005c6.637 0 12.046-5.414 12.049-12.052a11.758 11.758 0 00-3.489-8.522z" />
                    </svg>
                </a>
            </motion.div>
        </div>
    );
}
