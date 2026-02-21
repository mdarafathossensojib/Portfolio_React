import { Link } from "react-router";
import arafat from "../../assets/images/arafat.jpg"

const Hero = () => {
  return (
    <section className="min-h-screen bg-linear-to-b from-black via-gray-900 to-black text-white flex items-center pt-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left */}
        <div>
          <h2 className="text-cyan-400 text-2xl font-semibold">HI!</h2>
          <h1 className="text-5xl font-bold mt-2">
            I'M <span className="text-cyan-400">ARAFAT HOSSEN</span>
          </h1>
          <p className="mt-4 text-gray-400 text-lg">
            Full Stack Web Developer || React Developer || Programmer
          </p>
          <p className="mt-4 text-gray-500">
            Enthusiastic MERN stack developer passionate about building modern
            responsive web applications with clean UI & smooth UX.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold text-black transition">
              Hire Me
            </button>
            <Link to='/projects' className="border border-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-500 hover:text-black transition">
              View Projects
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center">
          <img
            src={arafat}
            alt="profile"
            className="w-80 rounded-2xl shadow-lg shadow-cyan-500/30"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;