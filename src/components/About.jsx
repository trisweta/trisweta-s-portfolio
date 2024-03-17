import React from 'react';

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
              <p>A highly motivated individual with a strong passion for computer science, I am actively seeking   opportunities to learn
                and grow. I thrive in positive, collaborative environments and have a specific interest in Development. By combining
                my development skills with a dedication to enhancing my proficiency in data structures and algorithms, I aim to make a
                meaningful contribution while continuously expanding my knowledge.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;