import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi. I'm Trisweta and I am a Full Stack Developer. Take a look at my portfolio!</p>
          </div>
          <div>
            <p>A highly motivated individual with a strong passion for computer science, I am actively seeking opportunities to learn
              and grow. I thrive in positive, collaborative environments and have a specific interest in Development. By combining
              my development skills with a dedication to enhancing my proficiency in data structures and algorithms, I aim to make a
              meaningful contribution while continuously expanding my knowledge.</p>
          </div>
        </div>
        {/* Mobile Socials Horizontal */}
        <div className='block lg:hidden flex justify-center space-x-6 mt-8'>
          <a
            className='flex items-center text-gray-300 text-lg hover:text-pink-600'
            href='https://www.linkedin.com/in/trisweta-das-419397221/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin size={30} />
            <span className='ml-2'></span>
          </a>
          <a
            className='flex items-center text-gray-300 text-lg hover:text-pink-600'
            href='https://github.com/trisweta'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub size={30} />
            <span className='ml-2'></span>
          </a>
          <a
            className='flex items-center text-gray-300 text-lg hover:text-pink-600'
            href='mailto:triswetadas@gmail.com'
          >
            <HiOutlineMail size={30} />
            <span className='ml-2'></span>
          </a>
          <a
            className='flex items-center text-gray-300 text-lg hover:text-pink-600'
            href='https://drive.google.com/file/d/12nvAgGquC4fx-NF2CFTE9CR2VztyMP0e/view'
            target='_blank'
            rel='noopener noreferrer'
          >
            <BsFillPersonLinesFill size={30} />
            <span className='ml-2'></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
