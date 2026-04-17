import { useEffect, useState } from 'react'
import { ExternalLink, Target, Zap, Trophy, Brain, BarChart, Code2, Sparkles } from 'lucide-react'

const CompetitiveProgramming = () => {
  const [ratings, setRatings] = useState({
    leetcode: 0,
    codeforces: 0,
    codechef: 0,
  })

  useEffect(() => {
    const animateNumber = (target, callback, duration = 2000) => {
      let current = 0
      const increment = target / (duration / 50)
      const interval = setInterval(() => {
        current += increment
        if (current >= target) {
          callback(target)
          clearInterval(interval)
        } else {
          callback(Math.floor(current))
        }
      }, 50)
    }

    animateNumber(1845, (val) => setRatings((prev) => ({ ...prev, leetcode: val })))
    animateNumber(1259, (val) => setRatings((prev) => ({ ...prev, codeforces: val })))
    animateNumber(1558, (val) => setRatings((prev) => ({ ...prev, codechef: val })))
  }, [])

  const platforms = [
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/mdarafathossen/',
      rating: ratings.leetcode,
      maxRating: 1845,
      icon: <Target className="text-orange-500" size={32} />,
      description: 'Active problem solver with strong algorithmic foundation',
    },
    {
      name: 'Codeforces',
      url: 'https://codeforces.com/profile/mdarafathossen.py',
      rating: ratings.codeforces,
      maxRating: 1259,
      icon: <Zap className="text-blue-500" size={32} />,
      description: 'Competitive programming enthusiast',
    },
    {
      name: 'CodeChef',
      url: 'https://www.codechef.com/users/mdarafathossen',
      rating: ratings.codechef,
      maxRating: 1558,
      icon: <Trophy className="text-yellow-500" size={32} />,
      description: 'Regular participant in online contests',
    },
  ]

  return (
    <section id="competitive" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Competitive Programming</h2>
        <p className="text-lg text-foreground/70 mb-12">
          I actively participate in competitive programming contests, honing my problem-solving skills and deepening my understanding of data structures and algorithms.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="mb-4 p-3 bg-secondary/50 inline-block rounded-xl group-hover:scale-110 transition-transform">
                {platform.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {platform.name}
              </h3>
              <p className="text-foreground/70 text-sm mb-6">{platform.description}</p>

              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground font-medium">Rating</span>
                  <span className="font-bold text-lg text-primary">{platform.rating}</span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-linear-to-r from-primary to-accent rounded-full transition-all duration-300"
                    style={{ width: `${(platform.rating / platform.maxRating) * 100}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2 font-medium">Max rating: {platform.maxRating}</p>
              </div>

              <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
                <span className="text-sm font-bold uppercase tracking-wider">Visit Profile</span>
                <ExternalLink size={16} />
              </div>
            </a>
          ))}
        </div>

        {/* Skills Highlights with Lucide Icons */}
        <div className="p-8 rounded-2xl bg-linear-to-r from-primary/5 via-accent/5 to-primary/5 border border-primary/20 shadow-inner">
          <h3 className="text-xl font-bold mb-8 text-foreground flex items-center gap-2">
            <Sparkles className="text-primary" size={24} />
            Key Strengths
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="mt-1 p-2 bg-primary/10 rounded-lg h-fit text-primary"><Brain size={20}/></div>
              <div>
                <p className="font-bold text-foreground">Problem-Solving</p>
                <p className="text-foreground/70 text-sm">Strong grasp of algorithms, data structures, and optimization techniques.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1 p-2 bg-primary/10 rounded-lg h-fit text-primary"><BarChart size={20}/></div>
              <div>
                <p className="font-bold text-foreground">Consistent Practice</p>
                <p className="text-foreground/70 text-sm">Regular participation in contests to stay sharp and improve ranking.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1 p-2 bg-primary/10 rounded-lg h-fit text-primary"><Code2 size={20}/></div>
              <div>
                <p className="font-bold text-foreground">Algorithmic Thinking</p>
                <p className="text-foreground/70 text-sm">Ability to analyze complex problems and find efficient solutions.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1 p-2 bg-primary/10 rounded-lg h-fit text-primary"><Zap size={20}/></div>
              <div>
                <p className="font-bold text-foreground">Code Quality</p>
                <p className="text-foreground/70 text-sm">Writing clean, maintainable code that solves problems efficiently.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveProgramming;