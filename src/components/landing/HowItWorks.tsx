import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, CalendarCheck, Sparkles, Star, ArrowRight } from 'lucide-react';
import { Button } from "../ui/button";

const customerSteps = [
    {
        number: "01",
        icon: Search,
        title: "Discover",
        description: "Browse salons and stylists near you. Filter by services, ratings, and availability.",
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80"
    },
    {
        number: "02",
        icon: CalendarCheck,
        title: "Book",
        description: "Select your preferred date, time, and services. Confirm your appointment instantly.",
        image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80"
    },
    {
        number: "03",
        icon: Sparkles,
        title: "Enjoy",
        description: "Arrive at your appointment and enjoy a premium beauty experience.",
        image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80"
    },
    {
        number: "04",
        icon: Star,
        title: "Review",
        description: "Share your experience and help others find great salons and stylists.",
        image: "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=600&q=80"
    }
];

export default function HowItWorks() {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section className="py-32 bg-slate-50">
            <div className="container mx-auto px-6 lg:px-12">
                <motion.div 
                    className="text-center max-w-3xl mx-auto mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-flex items-center gap-2 bg-white border border-black/5 rounded-full px-5 py-2.5 mb-6 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-rose-500" />
                        <span className="text-[13px] font-medium text-gray-600 tracking-wide">
                            Simple Process
                        </span>
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-[1.1]">
                        How it <span className="font-serif italic">works</span>
                    </h2>
                    <p className="text-[17px] text-gray-500 font-light leading-[1.7]">
                        Book your perfect beauty appointment in just a few simple steps
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Steps List */}
                    <div className="space-y-4">
                        {customerSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                onClick={() => setActiveStep(index)}
                                className={`relative cursor-pointer group rounded-3xl p-8 transition-all duration-700 ${
                                    activeStep === index 
                                        ? 'bg-white shadow-xl shadow-black/[0.03] border border-gray-200' 
                                        : 'bg-white border border-gray-100 hover:border-gray-200 hover:shadow-lg hover:shadow-black/[0.02]'
                                }`}
                            >
                                <div className="flex items-start gap-6">
                                    <div className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                                        activeStep === index 
                                            ? 'bg-gray-900' 
                                            : 'bg-gray-100 group-hover:bg-gray-200'
                                    }`}>
                                        <step.icon className={`w-5 h-5 transition-colors duration-500 ${
                                            activeStep === index ? 'text-white' : 'text-gray-600'
                                        }`} strokeWidth={1.5} />
                                    </div>
                                    
                                    <div className="flex-1">
                                        <div className="flex items-center gap-4 mb-3">
                                            <span className={`text-[13px] font-light tracking-wider transition-colors duration-500 ${
                                                activeStep === index 
                                                    ? 'text-gray-400' 
                                                    : 'text-gray-300'
                                            }`}>
                                                {step.number}
                                            </span>
                                            <h3 className={`text-lg font-medium tracking-wide transition-colors duration-500 ${
                                                activeStep === index ? 'text-gray-900' : 'text-gray-700'
                                            }`}>
                                                {step.title}
                                            </h3>
                                        </div>
                                        <p className="text-gray-500 leading-[1.7] text-[15px] font-light">
                                            {step.description}
                                        </p>
                                    </div>

                                    <ArrowRight className={`w-4 h-4 flex-shrink-0 transition-all duration-500 ${
                                        activeStep === index 
                                            ? 'text-gray-900 translate-x-0 opacity-100' 
                                            : 'text-gray-300 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-50'
                                    }`} strokeWidth={1.5} />
                                </div>

                                {activeStep === index && (
                                    <motion.div 
                                        className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-16 bg-gray-900 rounded-full"
                                        layoutId="activeIndicator"
                                    />
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* Image Display */}
                    <div className="relative hidden lg:block">
                        <div className="absolute inset-0 bg-gray-200/20 rounded-[2rem] blur-3xl" />
                        
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeStep}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.5 }}
                                className="relative"
                            >
                                <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-black/5">
                                    <img 
                                        src={customerSteps[activeStep].image}
                                        alt={customerSteps[activeStep].title}
                                        className="object-cover w-full h-[520px] grayscale-[15%]"
                                    />
                                </div>
                                
                                {/* Floating Badge */}
                                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white rounded-full px-8 py-4 shadow-xl shadow-black/5 flex items-center gap-4">
                                    <div className="flex -space-x-3">
                                        {[1,2,3].map(i => (
                                            <div key={i} className="w-9 h-9 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-white" />
                                        ))}
                                    </div>
                                    <p className="text-sm font-light text-gray-700">
                                        Join <span className="font-medium text-gray-900">50,000+</span> happy users
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Step Indicators */}
                        <div className="absolute -right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3">
                            {customerSteps.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveStep(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-500 ${
                                        activeStep === index 
                                            ? 'bg-gray-900 scale-125' 
                                            : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <motion.div 
                    className="text-center mt-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <Button 
                        size="lg" 
                        className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-12 py-7 text-[15px] font-normal tracking-wide shadow-lg shadow-gray-900/10 transition-all duration-500 hover:shadow-xl hover:shadow-gray-900/20"
                    >
                        Get Started Now
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}

