
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import TextType from "../animations/text-type";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-[url('/images/portfolio-hero-bg.jpg')] bg-no-repeat bg-cover bg-center">
            <div className="absolute inset-0 bg-black/70"></div>

            <div className="container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7">
                        <h3 className="text-white">Hi, I'm</h3>
                        <TextType
                            text={["Muhammad Moon", "A Front-End Developer"]}
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor
                            cursorCharacter="_"
                            deletingSpeed={50}
                            cursorBlinkDuration={0.5}
                        />

                        <div className="flex flex-wrap items-center gap-4 mt-4">
                            <Link href="#contact" className="px-8 py-4 bg-primary text-dark font-primary text-lg font-medium hover:bg-white transition-colors duration-300 flex items-center gap-2 group">
                                Let's Talk
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="backdrop-blur-md bg-white/10 border border-white/20 p-8 rounded-2xl shadow-xl">
                            <h4 className="text-white text-2xl font-medium mb-6">Quick Connect</h4>
                            <form className="flex flex-col gap-4">
                                <div>
                                    <input 
                                        type="text" 
                                        placeholder="Your Name" 
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300" 
                                    />
                                </div>
                                <div>
                                    <input 
                                        type="email" 
                                        placeholder="Your Email" 
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300" 
                                    />
                                </div>
                                <div>
                                    <textarea 
                                        placeholder="Your Message" 
                                        rows={4} 
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none"
                                    ></textarea>
                                </div>
                                <button 
                                    type="submit" 
                                    className="w-full py-4 bg-primary text-dark font-primary font-medium hover:bg-white transition-colors duration-300 mt-2 rounded-lg"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
