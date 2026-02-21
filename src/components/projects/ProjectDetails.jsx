import { useParams } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ecom_1 from "../../assets/projects-img/ecom_1.png"
import ecom_2 from "../../assets/projects-img/ecom_2.png"
import ecom_3 from "../../assets/projects-img/ecom_3.png"
import gym_1 from "../../assets/projects-img/gym_1.png"
import gym_2 from "../../assets/projects-img/gym_2.png"
import gym_3 from "../../assets/projects-img/gym_3.png"


const projectData = {
  1: {
    title: "GYM Management System",
    description:
      "This system allows gym owners to manage members, trainers, payments, subscriptions and generate reports.",
    features: [
      "Member registration & subscription system",
      "Admin dashboard",
      "Trainer management",
      "SSLCommarze Payment integration",
    ],
    tech: ["React", "Django REST Framework", "POSTgreSQL", "Python", "Tailwind CSS"],
    images: [gym_1, gym_2, gym_3],
    live: "https://classic-fitness-ui.vercel.app",
    github: "https://github.com/mdarafathossensojib/ClassicFitnessUI",
  },
  2: {
    title: "E-Commerce Website",
    description:
      "A fully functional e-commerce platform with authentication, cart system and secure checkout.",
    features: [
      "User authentication",
      "Product filtering",
      "Shopping cart",
      "SSLCommarze payment integration",
    ],
    tech: ["React", "POSTgreSQL", "Django REST Framework", "Python", "Tailwind CSS"],
    images: [ecom_1, ecom_2, ecom_3],
    live: "https://ecommerce-front-end-murex.vercel.app",
    github: "https://github.com/mdarafathossensojib/Ecommerce_FrontEnd",
  },
};

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projectData[projectId];

  if (!project) {
    return <div className="text-white p-20">Project Not Found</div>;
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <section className="pt-28 pb-20 max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-cyan-400 mb-8">
          {project.title}
        </h1>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          className="mb-10"
        >
          {project.images.map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={img}
                alt=""
                className="w-full rounded-2xl shadow-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <p className="text-gray-400 text-lg mb-6">
          {project.description}
        </p>

        <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
          Features
        </h3>
        <ul className="list-disc list-inside text-gray-400 space-y-2 mb-8">
          {project.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>

        <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
          Technologies
        </h3>
        <div className="flex gap-3 flex-wrap mb-8">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-lg"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-6">
          <a
            href={project.live}
            target="_blank"
            className="bg-cyan-500 px-6 py-3 rounded-lg text-black font-semibold hover:bg-cyan-600 transition"
          >
            Live Website
          </a>

          <a
            href={project.github}
            target="_blank"
            className="border border-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-500 hover:text-black transition"
          >
            GitHub Code
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;