import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router";
import gym_1 from "../../assets/projects-img/gym_1.png";
import ecom_1 from "../../assets/projects-img/ecom_1.png"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules

const Projects = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
          My Projects
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={800}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
        >
          {/* Project 1 */}
          <SwiperSlide>
            <div className="grid md:grid-cols-2 gap-8 bg-gray-900 p-8 rounded-2xl">
              <img src={gym_1} alt="gym" className="rounded-xl" />

              <div>
                <Link to='/projects/1' className="text-2xl font-bold text-cyan-400">
                  GYM Management System
                </Link>
                <p className="mt-4 text-gray-400">
                  A full-featured gym management system with member tracking,
                  payment system, trainer dashboard and admin control panel.
                </p>

                <div className="mt-4 flex gap-2 flex-wrap">
                  <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded">
                    Python
                  </span>
                  <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded">
                    Django REST Framework
                  </span>
                  <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded">
                    POSTgreSQL
                  </span>
                  <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded">
                    React
                  </span>
                  <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded">
                    Tailwind CSS
                  </span>
                </div>
                <div className="flex gap-6 mt-5">
                  <a
                    href='https://classic-fitness-ui.vercel.app'
                    target="_blank"
                    className="bg-cyan-500 px-6 py-3 rounded-lg text-black font-semibold hover:bg-cyan-600 transition"
                  >
                    Live Website
                  </a>

                  <a
                    href='https://github.com/mdarafathossensojib/ClassicFitnessUI'
                    target="_blank"
                    className="border border-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-500 hover:text-black transition"
                  >
                    GitHub Code
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Project 2 */}
          <SwiperSlide>
            <div className="grid md:grid-cols-2 gap-8 bg-gray-900 p-8 rounded-2xl">
              <img src={ecom_1} alt="ecommerce" className="rounded-xl" />

              <div>
                <Link to='/projects/2' className="text-2xl font-bold text-cyan-400">
                  E-Commerce Website
                </Link>
                <p className="mt-4 text-gray-400">
                  Modern e-commerce platform with product filtering,
                  authentication, cart system and secure checkout.
                </p>

                <div className="mt-4 flex gap-2 flex-wrap">
                  <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded">
                    Python
                  </span>
                  <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded">
                    Django REST Framework
                  </span>
                  <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded">
                    POSTgreSQL
                  </span>
                  <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded">
                    React
                  </span>
                  <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded">
                    Tailwind CSS
                  </span>
                </div>
                <div className="flex gap-6 mt-5">
                  <a
                    href='https://ecommerce-front-end-murex.vercel.app'
                    target="_blank"
                    className="bg-cyan-500 px-6 py-3 rounded-lg text-black font-semibold hover:bg-cyan-600 transition"
                  >
                    Live Website
                  </a>

                  <a
                    href='https://github.com/mdarafathossensojib/Ecommerce_FrontEnd'
                    target="_blank"
                    className="border border-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-500 hover:text-black transition"
                  >
                    GitHub Code
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;