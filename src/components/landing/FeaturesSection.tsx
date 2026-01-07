import React from 'react';
import { motion } from 'framer-motion';
import { 
    Calendar, 
    Users, 
    TrendingUp, 
    Bell, 
    CreditCard, 
    Smartphone,
    Scissors,
    Clock,
    MapPin,
    Heart,
    Shield,
    Zap
} from 'lucide-react';

const customerFeatures = [
    {
        icon: MapPin,
        title: "Discover Nearby Salons",
        description: "Find the best-rated salons and stylists in your area with our smart location-based search.",
        color: "from-rose-400 to-pink-500"
    },
    {
        icon: Calendar,
        title: "Easy Booking",
        description: "Book appointments in seconds. Choose your service, stylist, and preferred time slot.",
        color: "from-purple-400 to-indigo-500"
    },
    {
        icon: Heart,
        title: "Save Favorites",
        description: "Keep your favorite salons and stylists at your fingertips for quick rebooking.",
        color: "from-amber-400 to-orange-500"
    },
    {
        icon: Bell,
        title: "Smart Reminders",
        description: "Never miss an appointment with timely notifications and calendar sync.",
        color: "from-teal-400 to-cyan-500"
    }
];

const businessFeatures = [
    {
        icon: TrendingUp,
        title: "Track Your Earnings",
        description: "Real-time analytics and insights to help you grow your business and maximize revenue.",
        color: "from-emerald-400 to-green-500"
    },
    {
        icon: Users,
        title: "Client Management",
        description: "Build lasting relationships with detailed client profiles and appointment history.",
        color: "from-blue-400 to-indigo-500"
    },
    {
        icon: Scissors,
        title: "Service Catalog",
        description: "Showcase your services with beautiful descriptions, images, and flexible pricing.",
        color: "from-rose-400 to-red-500"
    },
    {
        icon: Clock,
        title: "Schedule Control",
        description: "Full control over your availability. Set working hours, breaks, and vacation days.",
        color: "from-violet-400 to-purple-500"
    }
];

interface FeatureCardProps {
  feature: {
    icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
    title: string;
    description: string;
    color: string;
  };
  index: number;
  isReversed?: boolean;
}

const FeatureCard = ({ feature, index, isReversed }: FeatureCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="group"
        >
            <div className="relative bg-white rounded-3xl p-12 hover:shadow-xl hover:shadow-black/[0.03] transition-all duration-700 border border-gray-100 hover:border-gray-200">
                
                <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-br ${feature.color} mb-10 opacity-90`}>
                        <feature.icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                    </div>
                    
                    <h3 className="text-[17px] font-medium text-gray-900 mb-3 tracking-wide">
                        {feature.title}
                    </h3>
                    
                    <p className="text-gray-500 leading-[1.7] text-[15px] font-light">
                        {feature.description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default function FeaturesSection() {
    return (
        <section className="py-32 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <motion.div 
                    className="text-center max-w-3xl mx-auto mb-24"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-flex items-center gap-2 bg-white border border-black/5 rounded-full px-5 py-2.5 mb-6 shadow-sm">
                        <Zap className="w-3.5 h-3.5 text-rose-500" />
                        <span className="text-[13px] font-medium text-gray-600 tracking-wide">
                            Powerful Features
                        </span>
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-[1.1]">
                        Everything you need,
                        <br />
                        <span className="font-serif italic text-gray-900">
                            all in one place
                        </span>
                    </h2>
                    <p className="text-[17px] text-gray-500 font-light leading-[1.7]">
                        Whether you're a customer seeking the perfect experience<br className="hidden md:block" /> or a professional growing your business
                    </p>
                </motion.div>

                {/* For Customers */}
                <div className="mb-32">
                    <motion.div 
                        className="mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-gray-50 rounded-full px-5 py-2.5 mb-6">
                            <Smartphone className="w-3.5 h-3.5 text-gray-600" strokeWidth={1.5} />
                            <span className="text-[11px] uppercase tracking-[0.15em] text-gray-600">For Customers</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-light text-gray-900">Find and book your <span className="font-serif italic">perfect</span> beauty experience</h3>
                    </motion.div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {customerFeatures.map((feature, index) => (
                            <FeatureCard key={index} feature={feature} index={index} />
                        ))}
                    </div>
                </div>

                {/* For Business */}
                <div>
                    <motion.div 
                        className="mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-gray-50 rounded-full px-5 py-2.5 mb-6">
                            <Shield className="w-3.5 h-3.5 text-gray-600" strokeWidth={1.5} />
                            <span className="text-[11px] uppercase tracking-[0.15em] text-gray-600">For Salons & Stylists</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-light text-gray-900">Grow your business with <span className="font-serif italic">powerful</span> tools</h3>
                    </motion.div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {businessFeatures.map((feature, index) => (
                            <FeatureCard key={index} feature={feature} index={index} isReversed />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

