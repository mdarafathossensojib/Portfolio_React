import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'React'],
    },
    {
      title: 'Backend',
      skills: ['Python', 'Django', 'REST APIs', 'Django REST Framework'],
    },
    {
      title: 'Database',
      skills: ['PostgreSQL', 'MySQL', 'Firebase'],
    },
    {
      title: 'Other',
      skills: ['Git & GitHub', 'Authentication', 'Deployment', 'API Integration', 'Problem Solving'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          className="text-3xl sm:text-4xl font-bold mb-12 text-balance"
        >
          Skills & Technologies
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ y: -5 }} // মাউস নিলে কার্ডটি হালকা উপরে উঠবে
              className="p-8 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors duration-300 shadow-sm hover:shadow-md"
            >
              <h3 className="text-xl font-semibold mb-6 text-primary flex items-center gap-2">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1 }} // ট্যাগের ওপর মাউস নিলে হালকা বড় হবে
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 text-foreground hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 text-sm font-medium cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;