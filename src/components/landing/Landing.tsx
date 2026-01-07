import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import HowItWorks from './HowItWorks';
import TestimonialsSection from './TestimonialsSection';
import CTASection from './CTASection';
import Footer from './Footer';

export default function Landing() {
    return (
        <div className="min-h-screen bg-white overflow-hidden">
            <Navbar />
            <HeroSection />
            <FeaturesSection />
            <HowItWorks />
            <TestimonialsSection />
            <CTASection />
            <Footer />
        </div>
    );
}

