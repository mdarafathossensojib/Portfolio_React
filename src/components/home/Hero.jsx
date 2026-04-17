import { useState, useEffect } from 'react'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

export function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl translate-y-1/2 translate-x-1/4" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8 inline-block">
              <div className="px-4 py-2 rounded-full bg-secondary/50 border border-primary/20">
                <p className="text-sm text-foreground/80">Welcome to my portfolio</p>
              </div>
            </div>

            {/* Gradient text fix: Using bg-gradient-to-r */}
            <h1 className="text-5xl sm:text-6xl lg:text-5xl font-bold mb-6 bg-linear-to-r from-foreground via-primary to-accent bg-clip-text text-transparent text-balance">
              MD ARAFAT HOSSEN
            </h1>

            <p className="text-xl sm:text-2xl text-foreground/80 mb-4 text-balance">
              Full Stack Web Developer & Competitive Programmer
            </p>

            <p className="text-lg text-muted-foreground max-w-2xl mb-10 text-balance leading-relaxed">
              I build scalable web applications and solve complex problems through code. With expertise in React, Django, Node.js, and competitive programming, I create solutions that matter.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-linear-to-r from-primary to-accent rounded-2xl blur-2xl opacity-40" />
              {/* Removed 'priority' and added self-closing tag */}
              <img
                src="https://res.cloudinary.com/mdarafathossen/image/upload/v1770819355/hxunrf6uf4pgwrevqb7k.png"
                alt="MD Arafat Hossen"
                width={320}
                height={320}
                className="relative rounded-2xl object-cover w-full h-full border-2 border-primary/20"
              />
            </div>
          </div>
        </div>

        <div className="mt-12">
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#projects"
              className="group px-8 py-4 bg-linear-to-r from-primary to-accent text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-300 hover:translate-y-1"
            >
              View My Projects
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-primary/50 text-foreground rounded-lg font-medium hover:bg-primary/10 transition-colors duration-300"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 items-center">
            <span className="text-sm text-muted-foreground">Connect:</span>
            <div className="flex gap-4">
              <a
                href="https://github.com/mdarafathossensojib"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary/50 hover:bg-primary/20 rounded-lg transition-colors duration-300"
              >
                <Github size={20} className="text-primary" />
              </a>
              <a
                href="https://www.linkedin.com/in/mdarafathossen/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary/50 hover:bg-primary/20 rounded-lg transition-colors duration-300"
              >
                <Linkedin size={20} className="text-primary" />
              </a>
              <a
                href="mailto:mdarafathossensojib2020@gmail.com"
                className="p-3 bg-secondary/50 hover:bg-primary/20 rounded-lg transition-colors duration-300"
              >
                <Mail size={20} className="text-primary" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;