import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Java from '../assets/java.svg';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import SpringBoot from '../assets/spring.svg';
import NextJs from '../assets/nextjs.svg';
import BootStrap from '../assets/bootstrap.svg';


const Skills = () => {
  return (
    <div name='skills' className='w-full min-h-screen bg-[#0a192f] text-gray-300 py-32'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
          </div>

          <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 text-center py-8'>
              {/* Skills grid */}
              <SkillCard image={HTML} title="HTML" />
              <SkillCard image={CSS} title="CSS" />
              <SkillCard image={JavaScript} title="JavaScript" />
              <SkillCard image={ReactImg} title="React" />
              <SkillCard image={GitHub} title="GitHub" />
              <SkillCard image={Node} title="Node JS" />
              <SkillCard image={Mongo} title="MongoDB" />
              <SkillCard image={BootStrap} title="BootStrap" />
              <SkillCard image={Tailwind} title="Tailwind" />
              <SkillCard image={NextJs} title="Next JS" />
              <SkillCard image={Java} title="Java" />
              <SkillCard image={SpringBoot} title="SpringBoot" />
          </div>
      </div>
    </div>
  );
};

const SkillCard = ({ image, title }) => {
  return (
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
      <img className='w-20 mx-auto' src={image} alt={title} />
      <p className='my-4'>{title}</p>
    </div>
  );
};

export default Skills;
