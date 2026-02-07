import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { EmailService } from '../services/email';
import { LogoIcon } from '../components/Branding';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const emailSent = await EmailService.sendContactEmail({
            ...formData,
            message: formData.message // Ensure mapping matches service expectation
        });

        if (emailSent) {
            alert(`Thank you, ${formData.firstName}! We have received your message and will contact you shortly.`);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: ''
            });
        } else {
            alert(`Thank you, ${formData.firstName}! Message saved locally (Email notification failed - verify configuration).`);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: ''
            });
        }
    };

    return (
        <div className="container mx-auto px-4 py-12">
            {/* Header */}
            <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 flex flex-col items-center">
                <LogoIcon scale={1.2} className="mb-6" />
                <h1 className="text-4xl md:text-5xl font-serif mb-4 text-[var(--accent-gold)] uppercase tracking-widest">Contact Us</h1>
                <p className="text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
                    We'd love to hear from you! Whether you have a question about our collections,
                    pricing, or anything else, our team is ready to answer all your questions.
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto">
                {/* Contact Information */}
                <div className="w-full md:w-1/3 bg-gray-50 p-8 rounded-2xl border border-gray-100 h-fit">
                    <h2 className="text-2xl font-serif mb-8 border-b border-[var(--accent-gold)] pb-2 inline-block uppercase tracking-widest">Get In Touch</h2>

                    <div className="space-y-8">
                        <div className="flex items-start space-x-4">
                            <div className="bg-white p-3 rounded-full shadow-sm text-[var(--accent-gold)]">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Phone</h3>
                                <p className="text-gray-900 mt-1 font-medium">+91 90137 76435</p>
                                <p className="text-xs text-gray-500 mt-1">Mon-Sat 9am to 6pm</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-white p-3 rounded-full shadow-sm text-[var(--accent-gold)]">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email</h3>
                                <p className="text-gray-900 mt-1 font-medium italic">bhagwaticreationshelpdesk@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-white p-3 rounded-full shadow-sm text-[var(--accent-gold)]">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Office</h3>
                                <p className="text-gray-900 mt-1 font-medium leading-relaxed">
                                    G-29/ 1 Sector -3,<br />
                                    Rohini, Delhi - 110085
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-white p-3 rounded-full shadow-sm text-[var(--accent-gold)]">
                                <Clock size={24} />
                            </div>
                            <div>
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Working Hours</h3>
                                <p className="text-gray-900 mt-1 font-medium">Monday - Saturday</p>
                                <p className="text-gray-600 mt-1">10:00 AM - 07:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="w-full md:w-2/3">
                    <h2 className="text-2xl font-serif mb-8 uppercase tracking-widest">Send us a Message</h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">First Name</label>
                                <input
                                    required
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--accent-gold)] focus:border-transparent outline-none transition-all"
                                    placeholder="Enter your first name"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Last Name</label>
                                <input
                                    required
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--accent-gold)] focus:border-transparent outline-none transition-all"
                                    placeholder="Enter your last name"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Email</label>
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--accent-gold)] focus:border-transparent outline-none transition-all"
                                    placeholder="email@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Phone</label>
                                <input
                                    required
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--accent-gold)] focus:border-transparent outline-none transition-all"
                                    placeholder="+91 00000 00000"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Message</label>
                            <textarea
                                required
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--accent-gold)] focus:border-transparent outline-none transition-all"
                                placeholder="How can we help you today?"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="bg-[var(--accent-gold)] text-white px-12 py-5 rounded-full font-bold hover:bg-black transition-all duration-500 uppercase tracking-[0.2em] text-xs shadow-2xl shadow-gold/20 w-full md:w-auto"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
