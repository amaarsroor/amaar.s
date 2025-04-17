import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal';

const Banner = () => {

  useEffect(() => {
    ScrollReveal().reveal(".reveal-right-1",{
        origin:"right",
        distance:"50px",
        duration:1500,
        delay:50,
    }),
    ScrollReveal().reveal(".reveal-right-2",{
        origin:"right",
        distance:"50px",
        duration:1500,
        delay:60,
    }),
    ScrollReveal().reveal(".reveal-right-3",{
        origin:"right",
        distance:"50px",
        duration:1500,
        delay:70,
    })
  },[])
  return (
    <div className='p-4 grid gap-6 grid-cols-1 place-content-center items-center mt-30 w-full md:grid-cols-3 container mx-auto'>

        <div className="reveal-right-1 text-center p-4 h-[140px] bg-black rounded-2xl">
          <h2 className='text-2xl font-extrabold text-transparent  mb-0.5 bg-clip-text  bg-gradient-to-r from-teal-400 via-green-700 to-blue-600'>Projects</h2>
          <p className='text-2xl text-white font-extrabold'>+20</p>
          <p className=' text-white'>
            Completed high-quality web and mobile projects for clients and personal use.
            </p>
        </div>

        <div className="reveal-right-2 text-center p-4 h-[140px] bg-black rounded-2xl">
          <h2 className='text-2xl font-extrabold text-transparent  mb-0.5 bg-clip-text  bg-gradient-to-r from-teal-400 via-green-700 to-blue-600'>Years of Experience</h2>
          <p className='text-2xl text-white font-extrabold'>+2</p>
          <p className=' text-white'>
            Over two years of experience in front-end development and building real-world applications.
          </p>
        </div>

        <div className="reveal-right-3 text-center p-4 h-[140px] bg-black rounded-2xl">
          <h2 className='text-2xl font-extrabold text-transparent  mb-0.5 bg-clip-text bg-gradient-to-r from-teal-400 via-green-700 to-blue-600'>Customer Satisfaction Rate</h2>
          <p className='text-2xl text-white font-extrabold'>4.5</p>
          <p className=' text-white'>
            Rated highly by clients for professionalism, quality, and reliability.
          </p>
        </div>

      </div>
  )
}

export default Banner
