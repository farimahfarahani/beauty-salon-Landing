import { motion } from 'framer-motion';
import { Button } from "../ui/button";
import { Sparkles, Calendar, Star } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
            {/* Decorative Elements - More Subtle */}
            <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-rose-100/20 to-amber-50/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-gradient-to-br from-purple-50/30 to-rose-50/20 rounded-full blur-3xl" />
            
            {/* Floating Elements - More Elegant */}
            <motion.div 
                className="absolute top-20 right-[10%] hidden lg:block z-20"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="bg-white/90 backdrop-blur-md rounded-3xl p-5 shadow-2xl shadow-black/5 border border-black/5 relative z-20">
                    <div className="flex items-center gap-4">
                        <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-rose-500 to-rose-600 flex items-center justify-center shadow-lg shadow-rose-500/20">
                            <Calendar className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <p className="text-[11px] uppercase tracking-wider text-gray-400 font-medium mb-0.5">New Booking</p>
                            <p className="text-sm font-semibold text-gray-900">Hair Styling at 3PM</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div 
                className="absolute top-1/2 -translate-y-1/2 left-[8%] hidden lg:block z-20"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
                <div className="bg-white/90 backdrop-blur-md rounded-3xl p-5 shadow-2xl shadow-black/5 border border-black/5 relative z-20">
                    <div className="flex items-center gap-2 mb-2">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                        ))}
                    </div>
                    <p className="text-sm font-semibold text-gray-900">2,847 happy customers</p>
                </div>
            </motion.div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-20">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 bg-white border border-black/5 rounded-full px-5 py-2.5 mb-8 shadow-sm">
                            <Sparkles className="w-3.5 h-3.5 text-rose-500" />
                            <span className="text-[13px] font-medium text-gray-600 tracking-wide">The future of beauty booking</span>
                        </div>
                        
                        <h1 className="text-5xl md:text-6xl lg:text-[80px] leading-[1.05] tracking-tight mb-8">
                            <span className="block text-gray-400 font-light mb-2">Beauty at your</span>
                            <span className="block font-serif italic text-gray-900">
                                fingertips
                            </span>
                        </h1>
                        
                        <p className="text-[17px] md:text-[19px] text-gray-500 leading-[1.7] max-w-xl font-light">
                            Connect with award-winning salons and master stylists.<br className="hidden md:block" /> Experience effortless beauty booking that transforms your routine.
                        </p>
                        
                        <div className="mt-14 flex flex-col sm:flex-row gap-4">
                            <Button 
                                size="lg" 
                                className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-12 py-7 text-[15px] font-normal tracking-wide shadow-lg shadow-gray-900/10 transition-all duration-500 hover:shadow-xl hover:shadow-gray-900/20"
                            >
                                Book Appointment
                            </Button>
                            <Button 
                                size="lg" 
                                variant="outline" 
                                className="rounded-full px-12 py-7 text-[15px] font-normal tracking-wide border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-500"
                            >
                                For Salon Owners
                            </Button>
                        </div>

                        <div className="mt-20 grid grid-cols-3 gap-8 max-w-md">
                            <div className="text-center">
                                <p className="text-3xl font-light text-gray-900 mb-2">500+</p>
                                <p className="text-[11px] uppercase tracking-[0.15em] text-gray-400">Salons</p>
                            </div>
                            <div className="text-center border-l border-r border-gray-200">
                                <p className="text-3xl font-light text-gray-900 mb-2">50K+</p>
                                <p className="text-[11px] uppercase tracking-[0.15em] text-gray-400">Clients</p>
                            </div>
                            <div className="text-center">
                                <p className="text-3xl font-light text-gray-900 mb-2">4.9</p>
                                <p className="text-[11px] uppercase tracking-[0.15em] text-gray-400">Rating</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        className="relative hidden lg:block z-10 -mt-20"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-gray-200/30 rounded-[2rem] blur-3xl" />
                            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-black/5 z-0">
                                <img 
                                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80" 
                                    alt="Beautiful salon interior" 
                                    className="object-cover w-full h-[620px] grayscale-[15%] relative z-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent z-10" />
                            </div>
                            
                            {/* Overlay Card */}
                            <motion.div 
                                className="absolute -bottom-8 -left-8 bg-white rounded-3xl p-8 shadow-2xl shadow-black/5 z-30"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                            >
                                <div className="flex items-center gap-5">
                                    <div className="relative">
                                        <img 
                                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" 
                                            alt="Stylist" 
                                            className="w-16 h-16 rounded-2xl object-cover grayscale-[20%]"
                                        />
                                        <div className="absolute -bottom-1.5 -right-1.5 w-5 h-5 bg-green-500 rounded-full border-[3px] border-white" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900 mb-1 text-[15px]">Sarah Mitchell</p>
                                        <p className="text-xs text-gray-500 mb-2.5 tracking-wide">Master Stylist</p>
                                        <div className="flex items-center gap-1.5">
                                            <div className="flex gap-0.5">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500" />
                                                ))}
                                            </div>
                                            <span className="text-xs text-gray-400 ml-1">324 reviews</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>


        </section>
    );
}

