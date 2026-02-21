

const CompetitiveProgramming = () => {
  const platforms = [
    {
      name: "Codeforces",
      rating: 1235,
      solved: "400+ Problems Solved",
      color: "text-red-400",
      href : 'https://codeforces.com/profile/mdarafathossen.py'
    },
    {
      name: "CodeChef",
      rating: 1558,
      solved: "200+ Problems Solved",
      color: "text-yellow-400",
      href: 'https://www.codechef.com/users/mdarafathossen'
    },
    {
      name: "LeetCode",
      rating: 1845,
      solved: "450+ Problems Solved",
      color: "text-orange-400",
      href: 'https://leetcode.com/u/mdarafathossen'
    },
  ];

  return (
    <section className="bg-gray-950 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
          Competitive Programming
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-cyan-500 hover:scale-105 transition duration-300"
            >
              <h3 className={`text-2xl font-bold ${platform.color}`}>
                {platform.name}
              </h3>
              <p className="mt-4 text-gray-400">
                MAX_RATING:{" "}
                <span className="text-white font-medium">
                  {platform.rating}
                </span>
              </p>
              <p className="mt-2 mb-4 text-gray-500">{platform.solved}</p>

              <a href={platform.href} target="_blank" className=" w-full bg-cyan-500 px-4 py-2 rounded-lg text-black font-semibold hover:bg-cyan-600 transition">
                View Profile
              </a>
            </div>
          ))}
        </div>

        {/* Extra Highlight */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 max-w-3xl mx-auto">
            Passionate about solving algorithmic problems, data structures,
            dynamic programming, and participating in online contests regularly
            to improve problem-solving and analytical skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveProgramming;