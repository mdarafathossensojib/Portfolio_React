import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-cyan-400">
          <Link to="/">Arafat</Link>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
          <li>
            <Link to="/" className="hover:text-cyan-400 transition">
              Home
            </Link>
          </li>

          <li>
            <Link to="/projects" className="hover:text-cyan-400 transition">
              Projects
            </Link>
          </li>

          <li className="hover:text-cyan-400 transition cursor-pointer">
            <Link to="/skills" className="hover:text-cyan-400 transition">
              Skills
            </Link>
          </li>

          <li className="hover:text-cyan-400 transition cursor-pointer">
            <Link to="/contact" className="hover:text-cyan-400 transition">
              Contact
            </Link>
          </li>

          <button className="bg-cyan-500 hover:bg-cyan-600 px-3 py-1 rounded-lg text-black font-semibold transition">
            Resume
          </button>
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden text-white">
          {open ? (
            <X onClick={() => setOpen(false)} className="cursor-pointer" />
          ) : (
            <Menu onClick={() => setOpen(true)} className="cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-4 space-y-4 text-gray-300">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link to="/skills" onClick={() => setOpen(false)}>Skills</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;