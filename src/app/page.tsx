import Navbar from "../component/ui/navbar";
import Hero from "../component/sections/hero";
import About from "../component/sections/about";
import Skills from "../component/sections/skills";
import Projects from "../component/sections/projects";
import Contact from "../component/sections/contact";
import Footer from "../component/sections/footer";

export default function Home() {
    return (
        <div className="relative">
            <Navbar />
            
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>

            <Footer />
        </div>
    );
}
