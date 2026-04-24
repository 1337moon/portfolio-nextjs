import Link from "next/link";
import { Code2, Globe, User, MessageSquare } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-dark/80 backdrop-blur-md border-b border-white/10">
            <div className="container flex items-center justify-between h-20">
                <Link href="#" className="flex items-center gap-2 text-white group">
                    <Code2 className="w-8 h-8 text-primary group-hover:rotate-12 transition-transform duration-300" />
                    <span className="text-2xl font-primary font-bold tracking-wider">JANE<span className="text-primary">.</span></span>
                </Link>

                <div className="hidden md:flex items-center gap-8 text-secondary font-primary text-lg tracking-wide uppercase">
                    <Link href="#about" className="hover:text-primary transition-colors">About</Link>
                    <Link href="#skills" className="hover:text-primary transition-colors">Skills</Link>
                    <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
                    <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="#" className="text-secondary hover:text-primary transition-colors"><Globe className="w-5 h-5" /></Link>
                    <Link href="#" className="text-secondary hover:text-primary transition-colors"><User className="w-5 h-5" /></Link>
                    <Link href="#" className="hidden sm:block text-secondary hover:text-primary transition-colors"><MessageSquare className="w-5 h-5" /></Link>
                </div>
            </div>
        </nav>
    )
}
