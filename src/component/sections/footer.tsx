import Link from "next/link";
import { ArrowUp, Globe, User, MessageSquare } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-dark border-t border-white/5 pt-20 pb-10 overflow-hidden">
             <div className="absolute inset-0 top-auto h-1/2 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
             
            <div className="container relative z-10 flex flex-col items-center">
                <h2 className="text-4xl md:text-6xl text-white text-center mb-8 max-w-3xl leading-tight">
                    Let's create something <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white italic">extraordinary</span> together.
                </h2>
                
                <div className="flex justify-center gap-6 mb-16">
                    <a href="#" className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary hover:text-dark text-white transition-all duration-300">
                        <Globe className="w-6 h-6" />
                    </a>
                    <a href="#" className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary hover:text-dark text-white transition-all duration-300">
                        <User className="w-6 h-6" />
                    </a>
                    <a href="#" className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary hover:text-dark text-white transition-all duration-300">
                        <MessageSquare className="w-6 h-6" />
                    </a>
                </div>

                <div className="w-full flex w-full flex-col md:flex-row justify-between items-center border-t border-white/10 pt-10 mt-10 gap-6">
                    <p className="text-secondary/60 text-sm font-primary tracking-widest uppercase">
                        © {new Date().getFullYear()} MUHAMMAD MOON. All Rights Reserved.
                    </p>

                    <Link href="#hero" className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 text-secondary hover:text-primary transition-all duration-300 group">
                        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
