import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "../ui/button";
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react';

const benefits = [
    "Free to get started",
    "No hidden fees",
    "Cancel anytime",
    "24/7 support"
];

export default function CTASection() {
    return (
        <section className="py-32 bg-slate-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-rose-100/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-100/20 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    <div className="bg-gray-900 rounded-[2.5rem] p-16 md:p-24 text-center overflow-hidden border border-gray-800">
                        {/* Decorative Elements */}
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                            <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-rose-500/10 to-transparent rounded-full blur-3xl" />
                            <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl" />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="relative z-10"
                        >
                            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2.5 mb-8">
                                <Sparkles className="w-3.5 h-3.5 text-rose-400" />
                                <span className="text-[13px] font-medium text-white/80 tracking-wide">
                                    Ready to transform your beauty experience?
                                </span>
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-[64px] font-light text-white mb-8 leading-[1.1]">
                                Start your journey to
                                <br />
                                <span className="font-serif italic text-white/90">
                                    effortless beauty
                                </span>
                            </h2>

                            <p className="text-[17px] md:text-[19px] text-gray-400 mb-14 max-w-2xl mx-auto font-light leading-[1.7]">
                                Whether you're looking to book your next appointment or grow your beauty business,<br className="hidden md:block" /> we're here to help you shine.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
                                <Button 
                                    size="lg" 
                                    className="bg-white hover:bg-gray-50 text-gray-900 rounded-full px-12 py-7 text-[15px] font-normal tracking-wide transition-all duration-500 hover:shadow-2xl hover:shadow-white/10"
                                >
                                    Book Appointment
                                </Button>
                                <Button 
                                    size="lg" 
                                    variant="outline" 
                                    className="border border-white/20 text-white hover:bg-white/5 hover:border-white/30 rounded-full px-12 py-7 text-[15px] font-normal tracking-wide transition-all duration-500"
                                >
                                    For Salon Owners
                                </Button>
                            </div>

                            <div className="flex flex-wrap justify-center gap-8">
                                {benefits.map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                                        className="flex items-center gap-2.5"
                                    >
                                        <CheckCircle className="w-4 h-4 text-white/60" strokeWidth={1.5} />
                                        <span className="text-gray-400 text-[15px] font-light">{benefit}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

