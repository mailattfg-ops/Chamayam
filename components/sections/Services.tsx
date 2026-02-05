import { Scissors, ShoppingBag, Truck } from "lucide-react";

const services = [
    {
        icon: Scissors,
        title: "Custom Tailoring",
        description: "Bespoke tailoring services to ensure the perfect fit for your unique style.",
    },
    {
        icon: ShoppingBag,
        title: "Bulk Orders",
        description: "Curated collections for boutiques and corporate gifting at competitive rates.",
    },
    {
        icon: Truck,
        title: "Global Shipping",
        description: "Bringing the finest Indian handlooms to doorsteps across the world.",
    },
];

export function Services() {
    return (
        <section id="services" className="py-24 px-6 bg-white text-secondary">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="font-serif text-4xl md:text-5xl mb-4">Our Services</h2>
                <p className="font-sans text-secondary/60 mb-16 max-w-xl mx-auto">
                    Beyond selling fabric, we offer a suite of services designed to enhance your experience.
                </p>

                <div className="grid md:grid-cols-3 gap-12">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col items-center p-8 bg-ivory border border-transparent hover:border-accent transition-all duration-300">
                            <service.icon className="w-12 h-12 text-accent mb-6" strokeWidth={1.5} />
                            <h3 className="font-serif text-2xl mb-4">{service.title}</h3>
                            <p className="font-sans text-secondary/70 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
