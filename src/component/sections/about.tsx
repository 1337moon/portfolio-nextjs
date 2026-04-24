import data from "../../jsons/portfolio.json";

export default function About() {
    return (
        <section id="about" className="relative border-t border-white/5 bg-white/[0.02]">
            <div className="container">
                <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
                    
                    <div className="flex-1 w-full relative">
                        <div className="absolute -left-6 -top-6 text-[10rem] font-primary font-bold text-white/[0.03] leading-none select-none">
                            ABOUT
                        </div>
                        <h2 className="text-white mb-6 relative z-10">
                            {data.about.heading}
                            <span className="text-primary">.</span>
                        </h2>
                        <p className="text-secondary/90 leading-relaxed text-base md:text-lg">
                            {data.about.content}
                        </p>
                    </div>

                    <div className="flex-1 w-full grid grid-cols-2 gap-6 bg-dark border border-white/10 p-8 lg:p-12 relative overflow-hidden group">
                        {/* subtle highlight effect */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] group-hover:bg-primary/20 transition-all duration-700" />
                        
                        {data.about.stats.map((stat, index) => (
                            <div key={index} className="flex flex-col gap-2">
                                <span className="text-4xl lg:text-5xl font-primary text-primary font-bold">
                                    {stat.value}
                                </span>
                                <span className="text-white/60 font-primary uppercase tracking-widest text-sm">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
