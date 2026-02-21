import CompetitiveProgramming from "../components/home/CompetitiveProgramming";
import Contact from "../components/home/Contact";
import Hero from "../components/home/Hero";
import Projects from "../components/home/Projects";
import Skills from "../components/home/Skills";

const Home = () => {
    return (
        <div className="bg-black">
            <Hero />
            <CompetitiveProgramming />
            <Projects />
            <Skills />
            <Contact />
        </div>
    );
};

export default Home;