import data from "../../jsons/portfolio.json";
import { CheckCircle2 } from "lucide-react";

export default function Skills() {
    return (
        <section id="skills" className="relative">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
                    <h2 className="text-white mb-4">
                        {data.skills.heading}
                    </h2>
                    <p className="text-secondary">
                        {data.skills.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {data.skills.list.map((skill, index) => (
                        <div 
                            key={index} 
                            className="bg-white/5 border border-white/10 p-6 md:p-8 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 group"
                        >
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                                    <h3 className="text-white text-xl md:text-2xl">{skill.name}</h3>
                                </div>
                                <span className="text-primary font-primary text-xl font-bold">{skill.level}%</span>
                            </div>
                            
                            {/* Progress bar container */}
                            <div className="w-full h-2 bg-dark rounded-full overflow-hidden">
                                <div 
                                    className="h-full bg-primary relative" 
                                    style={{ width: `${skill.level}%` }}
                                >
                                    <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite]" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
