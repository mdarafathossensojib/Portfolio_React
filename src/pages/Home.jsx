import About from "../components/home/About";
import CompetitiveProgramming from "../components/home/CompetitiveProgramming";
import Contact from "../components/home/Contact";
import Hero from "../components/home/Hero";
import Projects from "../components/home/Projects";
import Skills from "../components/home/Skills";

const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <CompetitiveProgramming />
            <Contact />
        </div>
    );
};

export default Home;