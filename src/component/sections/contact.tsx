"use client";

import data from "../../jsons/portfolio.json";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="relative">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-white mb-6">
                            {data.contact.heading}
                            <span className="text-primary">.</span>
                        </h2>
                        <p className="text-secondary/80 text-lg mb-12 max-w-lg">
                            {data.contact.description}
                        </p>

                        <div className="flex flex-col gap-8">
                            <div className="flex items-center gap-6 group">
                                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300">
                                    <Mail className="w-7 h-7 text-primary" />
                                </div>
                                <div>
                                    <span className="block text-sm text-secondary/60 font-primary uppercase tracking-widest mb-1">Email</span>
                                    <a href={`mailto:${data.contact.email}`} className="text-white text-xl hover:text-primary transition-colors">
                                        {data.contact.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300">
                                    <Phone className="w-7 h-7 text-primary" />
                                </div>
                                <div>
                                    <span className="block text-sm text-secondary/60 font-primary uppercase tracking-widest mb-1">Phone</span>
                                    <a href={`tel:${data.contact.phone.replace(/[^0-9]/g, '')}`} className="text-white text-xl hover:text-primary transition-colors">
                                        {data.contact.phone}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300">
                                    <MapPin className="w-7 h-7 text-primary" />
                                </div>
                                <div>
                                    <span className="block text-sm text-secondary/60 font-primary uppercase tracking-widest mb-1">Location</span>
                                    <span className="text-white text-xl">
                                        {data.contact.location}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-dark border border-white/10 p-8 md:p-12">
                        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-sm font-primary uppercase tracking-widest text-secondary/70">Your Name</label>
                                <input type="text" id="name" className="bg-white/5 border border-white/10 px-4 py-4 text-white focus:outline-none focus:border-primary/50 transition-colors" placeholder="John Doe" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm font-primary uppercase tracking-widest text-secondary/70">Your Email</label>
                                <input type="email" id="email" className="bg-white/5 border border-white/10 px-4 py-4 text-white focus:outline-none focus:border-primary/50 transition-colors" placeholder="john@example.com" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-sm font-primary uppercase tracking-widest text-secondary/70">Message</label>
                                <textarea id="message" rows={5} className="bg-white/5 border border-white/10 px-4 py-4 text-white focus:outline-none focus:border-primary/50 transition-colors resize-none" placeholder="How can I help you?"></textarea>
                            </div>
                            <button type="submit" className="bg-primary text-dark font-primary text-lg font-bold uppercase tracking-widest py-5 mt-4 hover:bg-white transition-colors duration-300 flex justify-center items-center gap-2 group">
                                Send Message
                                <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
