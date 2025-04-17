import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'

const skills = [
  { name: 'HTML', level: 90, icon: <FaHtml5 color="#E34F26" size={30} /> },
  { name: 'CSS', level: 85, icon: <FaCss3Alt color="#1572B6" size={30} /> },
  { name: 'JavaScript', level: 80, icon: <FaJs color="#F7DF1E" size={30} /> },
  { name: 'React.js', level: 75, icon: <FaReact color="#61DBFB" size={30} /> },
  { name: 'Tailwind CSS', level: 85, icon: <SiTailwindcss color="#38B2AC" size={30} /> },
  { name: 'Node.js', level: 70, icon: <FaNodeJs color="#339933" size={30} /> },
];

const Skills = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <section className='container mx-auto px-4 py-20 pt-[8rem]' id='skills'>
      <h2 className="text-center text-5xl font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-indigo-600 via-teal-500 to-blue-500 mb-8">
        My Skills
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8' ref={ref}>
        {skills.map((skill, index) => (
          <div key={index}>
            <div className='flex justify-between items-center mb-1'>
              <div className='flex items-center gap-2'>
                {skill.icon}
                <span className='text-lg font-medium text-gray-700'>{skill.name}</span>
              </div>
              <span className='text-sm text-gray-500'>{skill.level}%</span>
            </div>
            <div className='w-full bg-gray-300 rounded-full h-3 overflow-hidden'>
              <motion.div
                className='bg-teal-600 h-3 rounded-full'
                initial={{ width: 0 }}
                animate={{ width: isInView ? `${skill.level}%` : 0 }}
                transition={{ duration: 1.2, delay: index * 0.2 }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
