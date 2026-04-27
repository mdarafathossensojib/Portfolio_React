import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

export function Hero() {
  // Animation variants
  const fadeInRight = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } }
  };

  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content with Motion */}
          <motion.div 
            initial="hidden"
            whileInView="visible" 
            viewport={{ once: false, amount: 0.3 }} // once: false mane protibar hobe
            variants={fadeInRight}
          >
            <div className="mb-8 inline-block">
              <div className="px-4 py-2 rounded-full bg-secondary/50 border border-primary/20">
                <p className="text-sm text-foreground/80">Welcome to my portfolio</p>
              </div>
            </div>

            <h1 className="text-5xl font-bold mb-6 bg-linear-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              MD ARAFAT HOSSEN
            </h1>
            <p className="text-xl sm:text-2xl text-foreground/80 mb-4 text-balance">
              Full Stack Web Developer & Competitive Programmer
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mb-10 text-balance leading-relaxed">
              I build scalable web applications and solve complex problems through code. With expertise in React, Django, and competitive programming, I create solutions that matter.
            </p>
          </motion.div>

          {/* Image with Motion */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInLeft}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-linear-to-r from-primary to-accent rounded-2xl blur-2xl opacity-40" />
              <img
                src="https://res.cloudinary.com/mdarafathossen/image/upload/v1770819355/hxunrf6uf4pgwrevqb7k.png"
                alt="Arafat"
                className="relative rounded-2xl object-cover w-full h-full border-2 border-primary/20"
              />
            </div>
          </motion.div>
        </div>

        {/* Buttons and Socials with Delay */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInUp}
          className="mt-12"
        >
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a href="#projects" className="group px-8 py-4 bg-linear-to-r from-primary to-accent text-white rounded-lg flex items-center gap-2 font-medium hover:opacity-90 transition-all duration-300 hover:translate-y-1 hover:shadow-lg hover:shadow-primary/30">
              View My Projects <ArrowRight size={20} />
            </a>
            <a href="#contact" className="px-8 py-4 border border-primary/50 text-foreground rounded-lg font-medium hover:bg-primary/10 transition-colors duration-300">
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
export default Hero;