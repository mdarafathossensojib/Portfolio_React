export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-balance">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              I am a passionate Full Stack Web Developer with hands-on experience building real-world applications from concept to deployment. I combine technical expertise with creative problem-solving to deliver solutions that are both functional and user-centric.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              My journey spans across frontend technologies like React and Tailwind CSS, backend frameworks like Django and Node.js, and databases including MongoDB and PostgreSQL. Beyond web development, I maintain an active interest in competitive programming, which keeps my problem-solving skills sharp.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              I believe in continuous learning and staying updated with modern development practices. Whether it&apos;s optimizing performance, improving user experience, or architecting scalable systems, I approach every challenge with dedication and precision.
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-secondary/30 border border-border hover:border-primary/50 transition-colors duration-300">
              <h3 className="text-xl font-semibold mb-3 text-primary">Full Stack Development</h3>
              <p className="text-foreground/70">
                Building complete web applications with modern tech stacks, from intuitive UIs to robust backend systems.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-secondary/30 border border-border hover:border-primary/50 transition-colors duration-300">
              <h3 className="text-xl font-semibold mb-3 text-primary">Problem Solving</h3>
              <p className="text-foreground/70">
                Competitive programmer with strong algorithmic thinking and data structure knowledge.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-secondary/30 border border-border hover:border-primary/50 transition-colors duration-300">
              <h3 className="text-xl font-semibold mb-3 text-primary">Continuous Learning</h3>
              <p className="text-foreground/70">
                Always exploring new technologies and best practices to deliver cutting-edge solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
