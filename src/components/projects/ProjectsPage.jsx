import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const projects = [
  {
    id: 1,
    title: "GYM Management System",
    image: "/gym1.png",
    description: "Full featured gym management system.",
  },
  {
    id: 2,
    title: "E-Commerce Website",
    image: "/ecommerce.png",
    description: "Modern e-commerce platform.",
  },
];

const ProjectsPage = () => {
  return (
    <div className="bg-black min-h-screen text-white">

      {/* 🔥 Top Autoplay Slider */}
      <div className="pt-28 max-w-6xl mx-auto px-6">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2500 }}
          pagination={{ clickable: true }}
          loop={true}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <img
                src={project.image}
                alt=""
                className="w-full h-96 object-cover rounded-2xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 🔥 Cards Section */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-cyan-400 mb-12">
          All Projects
        </h1>

        <div className="flex flex-col gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-center"
            >
              <img
                src={project.image}
                className="w-full md:w-1/3 rounded-xl"
              />

              <div>
                <h2 className="text-2xl font-bold text-cyan-400">
                  {project.title}
                </h2>
                <p className="text-gray-400 mt-3">
                  {project.description}
                </p>

                <Link
                  to={`/projects/${project.id}`}
                  className="inline-block mt-6 bg-cyan-500 px-5 py-2 rounded-lg text-black font-semibold hover:bg-cyan-600 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;