import { motion } from 'framer-motion';

export function About() {
  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold mb-12 text-balance"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column: Text Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInLeft}
            className="space-y-6"
          >
            <p className="text-lg text-foreground/80 leading-relaxed">
              I am a passionate Full Stack Web Developer with hands-on experience building real-world applications from concept to deployment. I combine technical expertise with creative problem-solving to deliver solutions that are both functional and user-centric.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              My journey spans across frontend technologies like React and Tailwind CSS, backend frameworks like Django and databases including MySQL and PostgreSQL. Beyond web development, I maintain an active interest in competitive programming, which keeps my problem-solving skills sharp.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              I believe in continuous learning and staying updated with modern development practices. Whether it&apos;s optimizing performance, improving user experience, or architecting scalable systems, I approach every challenge with dedication and precision.
            </p>
          </motion.div>

          {/* Right Column: Skill Cards */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInRight}
            className="space-y-6"
          >
            <motion.div variants={cardVariants} className="p-6 rounded-lg bg-secondary/30 border border-border hover:border-primary/50 transition-colors duration-300">
              <h3 className="text-xl font-semibold mb-3 text-primary">Full Stack Development</h3>
              <p className="text-foreground/70">
                Building complete web applications with modern tech stacks, from intuitive UIs to robust backend systems.
              </p>
            </motion.div>

            <motion.div variants={cardVariants} className="p-6 rounded-lg bg-secondary/30 border border-border hover:border-primary/50 transition-colors duration-300">
              <h3 className="text-xl font-semibold mb-3 text-primary">Problem Solving</h3>
              <p className="text-foreground/70">
                Competitive programmer with strong algorithmic thinking and data structure knowledge.
              </p>
            </motion.div>

            <motion.div variants={cardVariants} className="p-6 rounded-lg bg-secondary/30 border border-border hover:border-primary/50 transition-colors duration-300">
              <h3 className="text-xl font-semibold mb-3 text-primary">Continuous Learning</h3>
              <p className="text-foreground/70">
                Always exploring new technologies and best practices to deliver cutting-edge solutions.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;