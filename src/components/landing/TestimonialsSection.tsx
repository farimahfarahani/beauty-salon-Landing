import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Jessica Williams",
        role: "Regular Customer",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
        rating: 5,
        text: "Beautiful Parlors has completely changed how I book my beauty appointments. I love being able to see real reviews and photos before choosing a stylist. The booking process is so smooth!",
        highlight: "So easy to use"
    },
    {
        name: "Maria Santos",
        role: "Salon Owner",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&q=80",
        rating: 5,
        text: "Since joining the platform, my salon has seen a 40% increase in new customers. The management tools help me run my business efficiently. Couldn't be happier!",
        highlight: "40% more customers"
    },
    {
        name: "Emily Chen",
        role: "Freelance Stylist",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80",
        rating: 5,
        text: "As an independent stylist, this platform gives me the visibility I need. The earnings tracker and client management features are invaluable for growing my business.",
        highlight: "Perfect for freelancers"
    },
    {
        name: "David Thompson",
        role: "Regular Customer",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
        rating: 5,
        text: "Finally, an app that makes booking a haircut as easy as ordering food. The reminders are super helpful, and I love being able to rebook my favorite barber in seconds.",
        highlight: "Game changer"
    },
    {
        name: "Sophie Laurent",
        role: "Spa Owner",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
        rating: 5,
        text: "The analytics dashboard gives me insights I never had before. I can see which services are most popular and optimize my team's schedule accordingly. Brilliant platform!",
        highlight: "Powerful analytics"
    },
    {
        name: "Olivia Martinez",
        role: "Regular Customer",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80",
        rating: 5,
        text: "I've discovered so many amazing salons through this app that I never knew existed in my neighborhood. The filters make it easy to find exactly what I'm looking for.",
        highlight: "Great discovery tool"
    }
];

interface TestimonialCardProps {
  testimonial: {
    name: string;
    role: string;
    avatar: string;
    rating: number;
    text: string;
    highlight: string;
  };
  index: number;
}

const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="group"
        >
            <div className="relative bg-white rounded-3xl p-12 h-full hover:shadow-xl hover:shadow-black/[0.03] transition-all duration-700 border border-gray-100 hover:border-gray-200">
                {/* Quote Icon */}
                <div className="absolute top-10 right-10 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700">
                    <Quote className="w-24 h-24 text-gray-900" />
                </div>

                {/* Highlight Badge */}
                <div className="inline-flex items-center bg-gray-50 rounded-full px-4 py-2 mb-10">
                    <span className="text-[11px] uppercase tracking-[0.12em] text-gray-600">
                        {testimonial.highlight}
                    </span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-0.5 mb-8">
                    {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 leading-[1.8] mb-12 relative z-10 font-light text-[15px]">
                    "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                    <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-2xl object-cover grayscale-[20%]"
                    />
                    <div>
                        <h4 className="font-medium text-gray-900 text-[15px] mb-1">{testimonial.name}</h4>
                        <p className="text-xs text-gray-500 tracking-wide">{testimonial.role}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default function TestimonialsSection() {
    return (
        <section className="py-32 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
                <motion.div 
                    className="text-center max-w-3xl mx-auto mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-flex items-center gap-2 bg-white border border-black/5 rounded-full px-5 py-2.5 mb-6 shadow-sm">
                        <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                        <span className="text-[13px] font-medium text-gray-600 tracking-wide">
                            Loved by thousands
                        </span>
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-[1.1]">
                        What our community
                        <br />
                        <span className="font-serif italic text-gray-900">
                            is saying
                        </span>
                    </h2>
                    <p className="text-[17px] text-gray-500 font-light leading-[1.7]">
                        Join thousands of satisfied customers and thriving businesses on our platform
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard 
                            key={index} 
                            testimonial={testimonial} 
                            index={index}
                        />
                    ))}
                </div>

                {/* Trust Indicators */}
                <motion.div 
                    className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-12 max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className="text-center border-r border-gray-200 last:border-r-0 md:last:border-r md:[&:nth-child(2)]:border-r-0">
                        <p className="text-4xl font-light text-gray-900 mb-2">
                            4.9/5
                        </p>
                        <p className="text-[11px] uppercase tracking-[0.15em] text-gray-400">Rating</p>
                    </div>
                    <div className="text-center md:border-r border-gray-200">
                        <p className="text-4xl font-light text-gray-900 mb-2">
                            50K+
                        </p>
                        <p className="text-[11px] uppercase tracking-[0.15em] text-gray-400">Users</p>
                    </div>
                    <div className="text-center border-r border-gray-200 last:border-r-0">
                        <p className="text-4xl font-light text-gray-900 mb-2">
                            500+
                        </p>
                        <p className="text-[11px] uppercase tracking-[0.15em] text-gray-400">Salons</p>
                    </div>
                    <div className="text-center">
                        <p className="text-4xl font-light text-gray-900 mb-2">
                            98%
                        </p>
                        <p className="text-[11px] uppercase tracking-[0.15em] text-gray-400">Satisfaction</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

