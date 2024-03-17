import React from 'react';
import { data } from "../data/data.js";

const Work = () => {
    const projects = data;
  
    return (
        <div name='work' className='w-full md:h-screen bg-[#0a192f] py-32'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                        Projects
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {projects.map((item, index) => (
                        <div key={index} className="bg-gradient-to-br from-indigo-900 to-indigo-950 shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-center items-center mx-auto content-div text-center py-4">
                            <span className="text-2xl font-bold text-white tracking-wider py-2">
                                {item.name}
                            </span>
                            <div className="pt-4">
                                <a href={item.github} target="_blank" rel="noopener noreferrer">
                                    <button className="rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Work;
