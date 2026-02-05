export function About() {
    return (
        <section id="about" className="py-24 px-6 bg-ivory text-secondary">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                <div className="aspect-[3/4] bg-gray-200 relative overflow-hidden">
                    {/* Placeholder for About Image */}
                    <div className="absolute inset-0 bg-secondary/10 flex items-center justify-center text-secondary/30 text-4xl font-serif">
                        Image
                    </div>
                </div>
                <div>
                    <h2 className="font-serif text-4xl md:text-5xl mb-8 relative inline-block">
                        The Art of Handloom
                        <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-accent"></span>
                    </h2>
                    <p className="font-sans text-lg text-secondary/80 leading-relaxed mb-6">
                        Chamayam Textiles stands as a beacon of artisanal excellence. Born from a desire to preserve the dying art of hand-weaving, we collaborate with master craftsmen to create fabrics that tell a story.
                    </p>
                    <p className="font-sans text-lg text-secondary/80 leading-relaxed">
                        Every thread is spun with intent, every color inspired by nature, and every piece designed to transcend trends. It is not just fabric; it is a legacy you wear.
                    </p>
                </div>
            </div>
        </section>
    );
}
