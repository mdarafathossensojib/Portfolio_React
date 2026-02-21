const Section = ({ title, items }) => (
  <div className="mb-16">
    <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">
      {title}
    </h2>

    <div className="flex flex-wrap justify-center gap-4">
      {items.map((skill, i) => (
        <span key={i} className="px-6 py-3 bg-gray-900 rounded-xl">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default Section;