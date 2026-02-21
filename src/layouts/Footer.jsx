const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 text-gray-400 py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-xl font-semibold text-cyan-400">
          Arafat Hossen
        </h3>

        <p className="mt-3 text-sm">
          MERN Stack Developer | Competitive Programmer
        </p>

        <div className="flex justify-center gap-6 mt-4 text-lg">
          <a href="https://github.com/mdarafathossensojib" target="_blank" className="hover:text-cyan-400 transition">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/mdarafathossen" target="_blank" className="hover:text-cyan-400 transition">
            LinkedIn
          </a>
          <a href="https://codeforces.com/profile/mdarafathossen.py" target="_blank" className="hover:text-cyan-400 transition">
            Codeforces
          </a>
        </div>

        <p className="mt-6 text-xs text-gray-600">
          © {new Date().getFullYear()} Arafat Hossen. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;