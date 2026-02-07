import React from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ModernLogo } from './Branding';

const Footer = ({ onAboutClick }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thanks for subscribing!");
    }

    return (
        <footer className="bg-[var(--bg-dark)] py-20 text-white border-t border-white/5">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
                    {/* Brand Column */}
                    <div className="flex flex-col gap-8">
                        <ModernLogo light={true} />
                        <p className="text-gray-400 text-sm leading-relaxed font-light">
                            Celebrating the essence of Indian ethnic wear with a modern touch. Handcrafted with love for the contemporary woman.
                        </p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-500 hover:text-[var(--accent-gold)] transition-all duration-300"><Facebook size={20} /></a>
                            <a href="https://www.instagram.com/bhagwati_creations01/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[var(--accent-gold)] transition-all duration-300"><Instagram size={20} /></a>
                            <a href="#" className="text-gray-500 hover:text-[var(--accent-gold)] transition-all duration-300"><Twitter size={20} /></a>
                        </div>
                    </div>

                    {/* Links Column */}
                    <div>
                        <h3 className="text-lg font-serif font-bold text-white mb-8 tracking-wider">Quick Links</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li>
                                <button onClick={onAboutClick} className="hover:text-[var(--accent-gold)] transition-all text-left">About Us</button>
                            </li>
                            <li><Link to="/contact" className="hover:text-[var(--accent-gold)] transition-all">Contact Us</Link></li>
                            <li><Link to="/track-order" className="hover:text-[var(--accent-gold)] transition-all">Track Order</Link></li>
                            <li><Link to="/shipping-policy" className="hover:text-[var(--accent-gold)] transition-all">Shipping Policy</Link></li>
                            <li><Link to="/return-exchange" className="hover:text-[var(--accent-gold)] transition-all">Return & Exchange</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="text-lg font-serif font-bold text-white mb-8 tracking-wider">Get in Touch</h3>
                        <ul className="space-y-6 text-sm text-gray-400">
                            <li className="flex items-start gap-4">
                                <MapPin size={18} className="mt-0.5 shrink-0 text-[var(--accent-gold)]" />
                                <span className="leading-relaxed">G-29/ 1 Sector -3, Rohini, Near Sector-3 Bus Stand & Mother Divine Public School, Delhi-110085</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone size={18} className="text-[var(--accent-gold)]" />
                                <span>+91 90137 76435</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail size={18} className="text-[var(--accent-gold)]" />
                                <span className="break-all">bhagwaticreationshelpdesk@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-serif font-bold text-white mb-8 tracking-wider">Newsletter</h3>
                        <p className="text-gray-400 text-sm mb-6 font-light">Join our elite circle for exclusive previews of upcoming couture.</p>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full px-5 py-3 bg-white/5 border border-white/10 focus:outline-none focus:border-[var(--accent-gold)] text-sm transition-all text-white placeholder:text-gray-600"
                                required
                            />
                            <button type="submit" className="btn-gold py-3 text-xs">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-10 text-center">
                    <p className="text-gray-600 text-[10px] uppercase tracking-[0.2em]">
                        © {new Date().getFullYear()} Bhagwati Creations • Timeless Heritage • Modern Grace
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
