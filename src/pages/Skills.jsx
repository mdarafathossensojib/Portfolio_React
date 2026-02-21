import Section from "../components/skills/Section";

const Skills = () => {
  const expertise = [
    "React.js",
    "JavaScript",
    "MySQL",
    "POSTgreSQL",
    "HTML",
    "Tailwind CSS",
  ];

  const comfortable = [
    "JavaScript",
    "React.js",
    "Redux",
    "Docker",
    "AWS",
    "Socket.io",
  ];

  const familiar = [
    "C++",
    "Python",
    "Django",
    "SQL",
  ];

  const tools = [
    "VS Code",
    "Git",
    "GitHub",
    "Vercel",
    "Postman",
    "Figma",
  ];

  return (
    <div className="bg-black min-h-screen text-white pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-cyan-400 mb-16">
          My Skills
        </h1>

        <Section title="Expertise" items={expertise} />
        <Section title="Comfortable With" items={comfortable} />
        <Section title="Familiar With" items={familiar} />
        <Section title="Tools" items={tools} />
      </div>
    </div>
  );
};

export default Skills;