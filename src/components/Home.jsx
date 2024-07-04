import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import Logo from "../assets/profile.jpg";

const Home = () => {
  return (
    <div name='home' className='w-full min-h-screen bg-[#0a192f] py-12'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <div className="mt-20">
          <p className='text-pink-600'>Hi, my name is</p>
          <div className="flex flex-col sm:flex-row justify-between items-center px-4">
            <div className="order-2 sm:order-1">
              <h1 className='text-4xl sm:text-6xl font-bold text-[#ccd6f6]'>
                Trisweta Das
              </h1>
              <h1 className='text-4xl sm:text-5xl font-bold text-[#8892b0]'>
                I'm a Full Stack Developer.
              </h1>
            </div>
            <div className="flex items-center order-1 sm:order-2 mb-4 sm:mb-0">
              <img 
                src={Logo} 
                alt="Profile" 
                className="w-36 h-36 sm:w-64 sm:h-64 rounded-full shadow-lg" 
                style={{ boxShadow: '0px 0px 30px rgba(0, 1, 0, 1)' }}
              />
            </div>
          </div>
        </div>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          Currently enrolled in a Bachelor's program in Computer Science set to conclude in 2025, my focus lies in delving deep into web technologies. Seeking internship opportunities, I aim to fortify my skills and gain practical experience in the field.
        </p>
        <div>
          <Link to="work" className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 h-12 max-w-48'>
            View Projects
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
