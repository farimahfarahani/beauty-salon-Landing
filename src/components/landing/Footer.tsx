import React from 'react';
import { Scissors, Instagram, Twitter, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
    product: {
        title: "Product",
        links: [
            { label: "Features", href: "#" },
            { label: "For Customers", href: "#" },
            { label: "For Salons", href: "#" },
            { label: "Pricing", href: "#" },
            { label: "Mobile App", href: "#" }
        ]
    },
    company: {
        title: "Company",
        links: [
            { label: "About Us", href: "#" },
            { label: "Careers", href: "#" },
            { label: "Blog", href: "#" },
            { label: "Press", href: "#" },
            { label: "Partners", href: "#" }
        ]
    },
    support: {
        title: "Support",
        links: [
            { label: "Help Center", href: "#" },
            { label: "Contact Us", href: "#" },
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" },
            { label: "Cookie Policy", href: "#" }
        ]
    }
};

const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
];

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-6 lg:px-12 py-16">
                <div className="grid lg:grid-cols-5 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center">
                                <Scissors className="w-6 h-6 text-gray-900" />
                            </div>
                            <span className="text-2xl font-semibold tracking-tight">Beautiful Parlors</span>
                        </div>
                        
                        <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
                            Connecting beauty seekers with talented professionals. Book your perfect salon experience in seconds.
                        </p>

                        <div className="space-y-3 mb-8">
                            <div className="flex items-center gap-3 text-gray-400">
                                <Mail className="w-5 h-5 text-rose-400" />
                                <span>hello@beautifulparlors.com</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400">
                                <Phone className="w-5 h-5 text-rose-400" />
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400">
                                <MapPin className="w-5 h-5 text-rose-400" />
                                <span>San Francisco, CA</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-rose-500 hover:to-purple-600 transition-all duration-300"
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    {Object.values(footerLinks).map((section, index) => (
                        <div key={index}>
                            <h4 className="font-semibold text-lg mb-6">{section.title}</h4>
                            <ul className="space-y-4">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a 
                                            href={link.href}
                                            className="text-gray-400 hover:text-white transition-colors duration-200"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Beautiful Parlors. All rights reserved.
                    </p>
                    
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

