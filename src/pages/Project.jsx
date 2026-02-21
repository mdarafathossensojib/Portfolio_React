import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ecom_1 from "../assets/projects-img/ecom_1.png"
import ecom_2 from "../assets/projects-img/ecom_2.png"
import ecom_3 from "../assets/projects-img/ecom_3.png"
import gym_1 from "../assets/projects-img/gym_1.png"
import gym_2 from "../assets/projects-img/gym_2.png"
import gym_3 from "../assets/projects-img/gym_3.png"
import { Link } from "react-router";

const projects = [
  {
    id: 1,
    title: "GYM Management System",
    description:
      "Full featured gym management system.",
    features: [
      "Member registration & subscription system",
      "Admin dashboard",
      "Trainer management",
      "Payment integration",
    ],
    tech: ["Django REST Framework", "React", "TailWind CSS"],
    images: [gym_1, gym_2, gym_3],
    to: "/projects/1",
    live : 'https://classic-fitness-ui.vercel.app',
    github : 'https://github.com/mdarafathossensojib/ClassicFitnessUI'
  },
  {
    id: 2,
    title: "E-Commerce Website",
    description:
      "A fully functional e-commerce platform with authentication, cart system and secure checkout.",
    features: [
      "User authentication",
      "Product filtering",
      "Shopping cart",
      "Stripe payment integration",
    ],
    tech: ["Django REST Framework", "React", "TailWind CSS"],
    images: [ecom_1, ecom_2, ecom_3],
    to: "/projects/2",
    live : 'https://ecommerce-front-end-murex.vercel.app',
    github : 'https://github.com/mdarafathossensojib/Ecommerce_FrontEnd'
  },
];

const Project = () => {
  return (
    <div className="bg-black min-h-screen text-white pt-28 pb-20 px-6">
      <h1 className="text-4xl font-bold text-center text-cyan-400 mb-16">
        Projects
      </h1>

      <div className="max-w-7xl mx-auto space-y-16">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-linear-to-r from-gray-900 to-gray-800 rounded-2xl p-6 md:p-10 flex flex-col md:flex-row gap-8 shadow-lg"
          >
            {/* LEFT SIDE - IMAGE SLIDER */}
            <div className="md:w-1/2 w-full">
              <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                autoplay={{ delay: 2500 }}
                loop={true}
                className="rounded-xl"
              >
                {project.images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={img}
                      alt=""
                      className="w-full h-72 md:h-80 object-cover rounded-xl"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* RIGHT SIDE - DETAILS */}
            <div className="md:w-1/2 w-full">
              <Link to={project.to} className="text-2xl md:text-3xl font-bold text-cyan-400">
                {project.title}
              </Link>

              <p className="text-gray-300 mt-4">
                {project.description}
              </p>

              <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
                {project.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-3 mt-6">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-cyan-500/20 text-cyan-400 px-4 py-1 rounded-full text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-6 mt-3 ml-2">
                <a
                  href={project.live}
                  target="_blank"
                  className=" text-cyan-400 font-semibold hover:text-cyan-300 transition"
                >
                  Live Website
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  className=" hover:text-cyan-300 text-cyan-400 transition"
                >
                  GitHub Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;