import { Link } from "react-router";
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Gym Management System',
      description: 'A comprehensive system to manage gym members, subscriptions, attendance, and fitness tracking with both frontend and backend components.',
      image: 'https://res.cloudinary.com/mdarafathossen/image/upload/v1776224693/Screenshot_1_dzhz1g.png',
      tech: ['Django REST API', 'React', 'Tailwind CSS', 'PostgreSQL'],
      frontendUrl: 'https://classic-fitness-ui.vercel.app/',
      backendUrl: 'https://classicfitness-flax.vercel.app/swagger/',
      frontendRepo: 'https://github.com/mdarafathossensojib/ClassicFitnessUI/',
      backendRepo: 'https://github.com/mdarafathossensojib/ClassicFitness/',
    },
    {
      title: 'E-commerce Platform',
      description: 'A complete online shopping system with product management, shopping cart, payment integration, and an admin dashboard for business operations.',
      image: 'https://res.cloudinary.com/mdarafathossen/image/upload/v1776224675/Screenshot_2_vks6p5.png',
      tech: ['Django REST API', 'React', 'Tailwind CSS', 'Stripe Integration'],
      frontendUrl: 'https://ecommerce-front-end-murex.vercel.app/',
      backendUrl: 'https://ecommerce-web-drab-eight.vercel.app/swagger/',
      frontendRepo: 'https://github.com/mdarafathossensojib/Ecommerce_FrontEnd',
      backendRepo: 'https://github.com/mdarafathossensojib/Ecommerce_Web',
    },
    {
      title: 'Event Management System',
      description: 'A platform for creating, managing, and booking events with user authentication, dynamic features, and a responsive interface.',
      image: 'https://res.cloudinary.com/mdarafathossen/image/upload/v1776224675/Screenshot_3_dn0lad.png',
      tech: ['Django MVT', 'JavaScript', 'Tailwind CSS', 'SQLite'],
      liveUrl: 'https://event-management-project-ah4k.onrender.com',
      githubUrl: 'https://github.com/mdarafathossensojib/Event_Management_Project',
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-balance">Featured Projects</h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-8 rounded-lg bg-secondary/30 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <p className="text-sm text-muted-foreground mb-3 font-semibold">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-primary/10 border border-primary/30 text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg bg-primary/20 border border-primary/50 text-foreground hover:bg-primary/30 transition-colors flex items-center gap-2 text-sm font-medium"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                    {project.frontendUrl && (
                      <a
                        href={project.frontendUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg bg-primary/20 border border-primary/50 text-foreground hover:bg-primary/30 transition-colors flex items-center gap-2 text-sm font-medium"
                      >
                        <ExternalLink size={16} />
                        Frontend
                      </a>
                    )}
                    {project.backendUrl && (
                      <a
                        href={project.backendUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg bg-primary/20 border border-primary/50 text-foreground hover:bg-primary/30 transition-colors flex items-center gap-2 text-sm font-medium"
                      >
                        <ExternalLink size={16} />
                        Backend
                      </a>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg bg-background border border-border hover:border-primary/50 flex items-center gap-2 transition-colors group"
                      >
                        <Github size={16} className="text-primary" />
                        <span className="font-medium group-hover:text-primary transition-colors">
                          View GitHub
                        </span>
                      </a>
                    )}
                    {project.frontendRepo && (
                      <a
                        href={project.frontendRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg bg-background border border-border hover:border-primary/50 flex items-center gap-2 transition-colors group"
                      >
                        <Github size={16} className="text-primary" />
                        <span className="font-medium group-hover:text-primary transition-colors">
                          Frontend Repo
                        </span>
                      </a>
                    )}
                    {project.backendRepo && (
                      <a
                        href={project.backendRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg bg-background border border-border hover:border-primary/50 flex items-center gap-2 transition-colors group"
                      >
                        <Github size={16} className="text-primary" />
                        <span className="font-medium group-hover:text-primary transition-colors">
                          Backend Repo
                        </span>
                      </a>
                    )}
                  </div>
                </div>

                <div className="relative h-48 md:h-56 rounded-lg overflow-hidden border border-border group-hover:border-primary/50 transition-colors">
                  <img
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
};

export default Projects;