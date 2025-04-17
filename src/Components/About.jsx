import React from 'react'
import AboutImg from "../assets/346102164_771319631145659_3847829363404503795_n.jpg";
import { User, Calendar, MapPin, Mail, Phone, Languages, Heart, Globe } from "lucide-react";
const About = () => {
  return (
    <div className= 'pt-[25rem]  p-14'>
      <section className='container mx-auto flex  flex-col justify-center items-center ' id='about'>
        <div>
          <img className='w-[350px] rounded-[50%] shadow-lg border-4 border-teal-500' src={AboutImg} alt="" />
        </div>
        <div className='text-left mt-4 md:text-center'>
          <h2 className='text-3xl mb-2 text-center text-teal-500'>BioGraphy</h2>
          <p className='max-w-[650px]  md:max-w-[600px] text-left mb-8 text-gray-500'>
            Professional Frontend Developer | Expert in React.js,
            Tailwind CSS, & JavaScript Welcome! I'm a skilled Frontend Developer
            with expertise in HTML, CSS, JavaScript, React.js, Tailwind CSS.
            I specialize in building modern, responsive, and high-performance
            websites and web applications
          </p>
          <div>
            <div className=" rounded-lg shadow-xl p-8 pt-8 text-left">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">About Me</h2>
              <div className="grid grid-cols-1 md:grid-cols-2  gap-6">

                <div className="flex items-center gap-3">
                  <User className="text-teal-600" />
                  <span className="text-gray-600 font-semibold">Name:</span>
                  <span className="text-gray-800">Amaar Sroor</span>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar className="text-teal-600" />
                  <span className="text-gray-600 font-semibold">Age:</span>
                  <span className="text-gray-800">17</span>
                </div>

                <div className="flex items-center gap-3">
                  <Globe className="text-teal-600" />
                  <span className="text-gray-600 font-semibold">Country:</span>
                  <span className="text-gray-800">Egypt</span>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="text-teal-600" />
                  <span className="text-gray-600 font-semibold">City:</span>
                  <span className="text-gray-800">Cairo</span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="text-teal-600" />
                  <span className="text-gray-600 font-semibold">Email:</span>
                  <span className="text-gray-800">amaar@email.com</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="text-teal-600" />
                  <span className="text-gray-600 font-semibold">Phone:</span>
                  <span className="text-gray-800">+20 1287550918</span>
                </div>

                <div className="flex items-center gap-3">
                  <Languages className="text-teal-600" />
                  <span className="text-gray-600 font-semibold">Languages:</span>
                  <span className="text-gray-800">English, Arabic</span>
                </div>

                <div className="flex items-center gap-3">
                  <Heart className="text-teal-600" />
                  <span className="text-gray-600 font-semibold">Hobby:</span>
                  <span className="text-gray-800">Coding</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
