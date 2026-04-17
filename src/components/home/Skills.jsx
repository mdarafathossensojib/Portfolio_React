const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'],
    },
    {
      title: 'Backend',
      skills: ['Django', 'Python', 'REST APIs'],
    },
    {
      title: 'Database',
      skills: ['PostgreSQL', 'MySQL', 'Firebase'],
    },
    {
      title: 'Other',
      skills: ['Git & GitHub', 'Authentication', 'Deployment', 'API Integration', 'Problem Solving'],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-balance">Skills & Technologies</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-8 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold mb-6 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 text-foreground hover:bg-primary/20 hover:border-primary/50 transition-colors duration-300 text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;