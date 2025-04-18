import React from 'react'
import HomeImg from "../assets/346102164_771319631145659_3847829363404503795_n.jpg"
import { motion } from "motion/react";
import { FaGithub, FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";

const Home = () => {
  
  return (
    <div className=''>
      <section className='container mx-auto flex flex-col-reverse md:flex-col-reverse  lg:flex-row  items-center justify-between pt-44 p-8' id='home'>
        <motion.div
          className="md:text-left text-left pt-4"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className='text-xl font-semibold text-purple-600 mb-0.5'>Hello , i am</h2>

          <h3 className='text-4xl font-extrabold text-transparent  mb-0.5 bg-clip-text bg-gradient-to-r from-indigo-600 via-teal-500 to-blue-500'>
            Amaar Sroor
          </h3>

          <h4 className='font-medium text-gray-600 mb-0.5'>Front-End Developer</h4>

          <p className='max-w-[650px]  md:max-w-[500px] text-left mb-8 text-gray-500'>
            Professional Frontend Developer | Expert in React.js, Tailwind CSS, & JavaScript
            Welcome! I'm a skilled Frontend Developer with expertise in HTML, CSS, JavaScript, React.js, Tailwind CSS. I specialize in
            building modern, responsive, and high-performance websites and web applications
          </p>
          <div className="flex flex-row justify-start mb-4 p-2 items-start gap-10">
            {/* Social Icons */}
            <div className="flex justify-start md:flex-row gap-4 md:items-center">
              <a href="https://github.com/amaarsroor" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-700 hover:text-black transition">
                <FaGithub />
              </a>
              <a href="https://wa.me/201287550918" target="_blank" rel="noopener noreferrer" className="text-3xl text-green-500 hover:text-green-700 transition">
                <FaWhatsapp />
              </a>
              <a href="https://m.me/AmaarSroor.dev" target="_blank" rel="noopener noreferrer" className="text-3xl text-blue-500 hover:text-blue-700 transition">
                <FaFacebookMessenger />
              </a>
            </div>
          </div>
          <a
            className='px-8 py-2 text-lg text-black bg-teal-700 mt-13 rounded-lg shadow-2xl shadow-black hover:bg-black duration-300 hover:text-teal-900'
            href=""
            download="../amaar sroor - front-end - CV.pdf"
          >
            Download CV
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <img
            className="w-[350px] rounded-lg shadow-lg border-4 border-teal-500"
            src={HomeImg}
            alt=""
          />
        </motion.div>

      </section>
    </div>
  )
}

export default Home
