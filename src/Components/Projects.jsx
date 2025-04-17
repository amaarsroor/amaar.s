import React from 'react'
import { motion } from 'framer-motion'
import image1 from "../assets/amaarsroor.github.io_Alkhateeb-Project_.png"
import image2 from "../assets/localhost_5173_ (6).png"
import image3 from "../assets/127.0.0.1_5500_index.html (9).png"

const projectData = [
  {
    title: "Personal Website",
    description: "A personal portfolio website built with Html , JS and CSS to showcase my skills and projects.",
    image: image1,
    link: "https://amaarsroor.github.io/Alkhateeb-Project/",
  },
  {
    title: "CryptoCoin",
    description: "A crypto tracking website that displays real-time prices and charts using Tailwind.css and React.",
    image: image2,
    link: "https://coinnexus.netlify.app",
  },
  {
    title: "Covid-19",
    description: "A responsive COVID-19 tracker web app showing worldwide and country-based statistics.",
    image: image3,
    link: "https://amaarsroor.github.io/Covid-19/",
  },
]

const Projects = () => {
  return (
    <section className='container mx-auto p-12 pt-[20rem] flex flex-col items-center' id='projects'>
      <h2 className='mb-4 text-center text-4xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-teal-500 to-blue-500'>
        My Recent Projects
      </h2>

      <div className='mt-6 grid gap-[6.5rem] grid-cols-1 items-center place-content-center md:grid-cols-2 lg:grid-cols-3'>
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col justify-center items-center p-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img className='rounded-lg w-[350px]' src={project.image} alt={project.title} />
            <h2 className='text-xl font-bold mt-4'>{project.title}</h2>
            <p className='text-gray-400 mb-2 max-w-[450px] md:w-full text-center'>
              {project.description}
            </p>
            <button className='px-8 py-2.5 text-white bg-black rounded-lg mt-4'>
              <a href={project.link} target='_blank' rel='noopener noreferrer'>
                View Projects
              </a>
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
