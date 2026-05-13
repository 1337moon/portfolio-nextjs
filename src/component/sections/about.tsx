import Image from "next/image";


export default function About() {
    return (
        <section id="about" className="relative border-t border-white/5 bg-white/[0.02]">
            <div className="container">
                <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center">

                    <div className="flex-1 w-full relative">
                        <h2 className="text-white mb-6 relative z-10">
                            About Me
                            <span className="text-primary">.</span>
                        </h2>
                        <p className="text-secondary/90 leading-relaxed text-base md:text-lg">
                            Hello! I'm Moon, a passionate frontend developer based in San Francisco. I enjoy creating beautiful, functional web applications that solve real-world problems. My journey into web development started back in 2018, and since then I've been continuously learning and exploring new technologies. I specialize in React, Next.js, and modern CSS frameworks like Tailwind.
                        </p>
                    </div>

                    <div className="flex-1">
                        <Image src="/images/moon.jpg" width={326} height={480} alt="moon" className="object-cover" />
                    </div>

                </div>
            </div>
        </section>
    );
}
