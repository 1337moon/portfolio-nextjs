import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import data from "../../jsons/portfolio.json";

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative">
            {/* Background elements */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="container grid lg:grid-cols-2 gap-12 lg:gap-8 items-center h-full">
                <div className="order-2 lg:order-1 flex flex-col gap-6 lg:ap-8 z-10">
                    <div className="inline-block px-4 py-2 border border-primary/30 rounded-full bg-primary/5 text-primary text-sm font-primary tracking-widest uppercase w-max">
                        {data.hero.role}
                    </div>
                    
                    <h1 className="text-white">
                        Hi, I'm <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">
                            {data.hero.name}
                        </span>
                    </h1>
                    
                    <p className="max-w-xl text-lg lg:text-xl text-secondary">
                        {data.hero.description}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-4 mt-4">
                        <Link href="#contact" className="px-8 py-4 bg-primary text-dark font-primary text-lg font-medium hover:bg-white transition-colors duration-300 flex items-center gap-2 group">
                            Let's Talk
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <a href="#" className="px-8 py-4 bg-transparent border border-white/20 text-white font-primary text-lg font-medium hover:border-primary hover:text-primary transition-colors duration-300 flex items-center gap-2">
                            Resume
                            <Download className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div className="order-1 lg:order-2 w-full flex justify-center lg:justify-end z-10">
                    <div className="relative w-72 h-72 md:w-96 md:h-96 xl:w-[500px] xl:h-[500px] rounded-full overflow-hidden border-4 border-white/10 p-2">
                        <div className="w-full h-full rounded-full overflow-hidden relative bg-dark">
                            <Image 
                                src="/images/hero.png" 
                                alt={data.hero.name}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        {/* Decorative circle */}
                        <div className="absolute inset-0 border border-primary/50 rounded-full animate-[spin_10s_linear_infinite] pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>
    );
}
