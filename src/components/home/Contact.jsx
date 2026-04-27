import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  const contactLinks = [
    {
      label: 'Email',
      value: 'mdarafathossensojib2020@gmail.com',
      href: 'mailto:mdarafathossensojib2020@gmail.com',
      icon: Mail,
    },
    {
      label: 'GitHub',
      value: 'mdarafathossensojib',
      href: 'https://github.com/mdarafathossensojib',
      icon: Github,
    },
    {
      label: 'LinkedIn',
      value: 'mdarafathossen',
      href: 'https://www.linkedin.com/in/mdarafathossen/',
      icon: Linkedin,
    },
  ]

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance text-foreground">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side: Contact Info */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Direct Contact</h3>
              <div className="space-y-3">
                {contactLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <motion.a
                      key={link.label}
                      variants={itemVariants}
                      href={link.href}
                      target={link.label !== 'Email' ? '_blank' : undefined}
                      rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                      className="group flex items-start gap-4 p-4 rounded-xl bg-secondary/30 border border-border hover:border-primary/50 transition-all duration-300 hover:bg-primary/5 shadow-sm"
                    >
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors mt-1">
                        <Icon size={20} className="text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">{link.label}</p>
                        <p className="text-foreground break-all group-hover:text-primary transition-colors font-medium">
                          {link.value}
                        </p>
                      </div>
                      <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
                    </motion.a>
                  )
                })}
              </div>
            </div>

            <motion.div 
              variants={itemVariants}
              className="p-6 rounded-xl bg-linear-to-br from-primary/10 to-accent/5 border border-primary/10"
            >
              <p className="text-foreground/80 leading-relaxed">
                Whether you have a question, want to collaborate, or just want to say hello, I&apos;d love to hear from you!
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-2xl bg-card border border-border shadow-xl">
              {submitted && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 rounded-lg bg-green-500/10 border border-green-500/50 text-green-600 dark:text-green-400"
                >
                  <p className="font-medium">Message sent successfully! I&apos;ll get back to you soon.</p>
                </motion.div>
              )}

              {['name', 'email', 'message'].map((field) => (
                <div key={field}>
                  <label htmlFor={field} className="block text-sm font-semibold text-foreground mb-2 capitalize">
                    Your {field === 'email' ? 'Email' : field}
                  </label>
                  {field === 'message' ? (
                    <textarea
                      id={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-foreground placeholder-muted-foreground resize-none"
                      placeholder={`Tell me about your ${field}...`}
                    />
                  ) : (
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      id={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-foreground placeholder-muted-foreground"
                      placeholder={field === 'name' ? "John Doe" : "john@example.com"}
                    />
                  )}
                </div>
              ))}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-6 py-4 bg-linear-to-r from-primary to-accent text-white rounded-xl font-bold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 cursor-pointer"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;