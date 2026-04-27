import { useEffect } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { ExternalLink, Target, Zap, Trophy, Brain, BarChart, Code2, Sparkles } from 'lucide-react'

const AnimatedCounter = ({ value }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, value, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [value, count]);

  return <motion.span>{rounded}</motion.span>;
};

const CompetitiveProgramming = () => {
  const platforms = [
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/mdarafathossen/',
      rating: 1845,
      maxRating: 1845,
      icon: <Target className="text-orange-500" size={32} />,
      description: 'Active problem solver with strong algorithmic foundation',
    },
    {
      name: 'Codeforces',
      url: 'https://codeforces.com/profile/mdarafathossen.py',
      rating: 1259,
      maxRating: 1500, 
      icon: <Zap className="text-blue-500" size={32} />,
      description: 'Competitive programming enthusiast',
    },
    {
      name: 'CodeChef',
      url: 'https://www.codechef.com/users/mdarafathossen',
      rating: 1558,
      maxRating: 1800,
      icon: <Trophy className="text-yellow-500" size={32} />,
      description: 'Regular participant in online contests',
    },
  ]

  return (
    <section id="competitive" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Competitive Programming</h2>
          <p className="text-lg text-foreground/70 mb-12">
            I actively participate in competitive programming contests, honing my problem-solving skills and deepening my understanding of data structures and algorithms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {platforms.map((platform, index) => (
            <motion.a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
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
                  <span className="font-bold text-lg text-primary">
                    <AnimatedCounter value={platform.rating} />
                  </span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-linear-to-r from-primary to-accent rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(platform.rating / platform.maxRating) * 100}%` }}
                    viewport={{ once: false }}
                    transition={{ duration: 2, ease: "easeOut" }}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2 font-medium">Max rating: {platform.rating}</p>
              </div>

              <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
                <span className="text-sm font-bold uppercase tracking-wider">Visit Profile</span>
                <ExternalLink size={16} />
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          className="p-8 rounded-2xl bg-linear-to-r from-primary/5 via-accent/5 to-primary/5 border border-primary/20 shadow-inner"
        >
          <h3 className="text-xl font-bold mb-8 text-foreground flex items-center gap-2">
            <Sparkles className="text-primary" size={24} />
            Key Strengths
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: <Brain size={20}/>, title: "Problem-Solving", desc: "Strong grasp of algorithms, data structures, and optimization techniques." },
              { icon: <BarChart size={20}/>, title: "Consistent Practice", desc: "Regular participation in contests to stay sharp and improve ranking." },
              { icon: <Code2 size={20}/>, title: "Algorithmic Thinking", desc: "Ability to analyze complex problems and find efficient solutions." },
              { icon: <Zap size={20}/>, title: "Code Quality", desc: "Writing clean, maintainable code that solves problems efficiently." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="mt-1 p-2 bg-primary/10 rounded-lg h-fit text-primary">{item.icon}</div>
                <div>
                  <p className="font-bold text-foreground">{item.title}</p>
                  <p className="text-foreground/70 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompetitiveProgramming;