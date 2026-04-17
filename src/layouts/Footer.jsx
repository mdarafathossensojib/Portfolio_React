const Footer = () => {
 const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-secondary/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          
          {/* Brand/Name Section */}
          <div className="text-center md:text-left">
            <p className="text-xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              MD Arafat Hossen
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              Full Stack Developer & Competitive Programmer
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {[
              { name: 'GitHub', href: 'https://github.com/mdarafathossensojib' },
              { name: 'LinkedIn', href: 'https://www.linkedin.com/in/mdarafathossen/' },
              { name: 'Email', href: 'mailto:mdarafathossensojib2020@gmail.com' }
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.name !== 'Email' ? "_blank" : undefined}
                rel={link.name !== 'Email' ? "noopener noreferrer" : undefined}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-muted-foreground">
          <p>&copy; {currentYear} MD Arafat Hossen. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Built with</span>
            <span className="text-primary font-medium">React</span>
            <span>&</span>
            <span className="text-accent font-medium">Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;