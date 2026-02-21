const Skills = () => {
  const skills = [
    "C",
    "C++",
    "Python",
    "Django REST Framework",
    "JavaScript",
    "React.js",
    "MySQL",
    "POSTgreSQL",
    "HTML & CSS",
    "Tailwind CSS",
  ];

  return (
    <section className="bg-gray-950 text-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-10">Skills</h2>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-6 py-3 bg-gray-800 rounded-xl hover:bg-cyan-500 hover:text-black transition cursor-pointer"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;