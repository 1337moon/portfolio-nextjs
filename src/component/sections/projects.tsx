import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import data from "../../jsons/portfolio.json";

export default function Projects() {
    return (
        <section id="projects" className="relative bg-white/[0.02] border-y border-white/5">
            <div className="container">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-24 gap-6">
                    <h2 className="text-white m-0 max-w-xl">
                        {data.projects.heading}
                        <span className="text-primary">.</span>
                    </h2>
                    <Link href="#" className="hidden md:flex text-primary font-primary uppercase tracking-wider text-base items-center gap-2 hover:text-white transition-colors">
                        View All Projects <ExternalLink className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {data.projects.list.map((project) => (
                        <div key={project.id} className="group relative block overflow-hidden bg-dark border border-white/10 hover:border-primary/50 transition-colors duration-500">
                            {/* Image Container */}
                            <div className="relative w-full aspect-[4/3] overflow-hidden bg-white/5">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors duration-500" />
                            </div>
                            
                            {/* Content */}
                            <div className="p-8">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-xs font-primary uppercase tracking-wider text-primary border border-primary/20 px-3 py-1 bg-primary/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-white mb-4 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-secondary/80 mb-6 text-sm lg:text-base">
                                    {project.description}
                                </p>
                                
                                <a href={project.link} className="inline-flex items-center gap-2 text-white font-primary uppercase tracking-widest text-sm hover:text-primary transition-colors">
                                    View Live <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-12 text-center md:hidden">
                    <Link href="#" className="inline-flex text-primary border border-primary px-8 py-4 font-primary uppercase tracking-wider text-base items-center gap-2 hover:bg-primary hover:text-dark transition-all">
                        View All Projects <ExternalLink className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
