import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [gradientColor, setGradientColor] = useState('#0a192f');

  const handleClick = () => setNav(!nav);

  const handleMouseOver = () => {
    setGradientColor('#061120');
  };

  const handleMouseOut = () => {
    setGradientColor('#0a192f');
  };

  return (
    <div
      className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'
      style={{ background: gradientColor }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {/* menu */}
      <ul className='hidden md:flex '>
        <li>
          <Link
            to='home'
            smooth={true}
            duration={500}
            onClick={() => setGradientColor('#0a192f')}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to='about'
            smooth={true}
            duration={500}
            onClick={() => setGradientColor('#0a192f')}>
            About
          </Link>
        </li>
        <li>
          <Link
            to='skills'
            smooth={true}
            duration={500}
            onClick={() => setGradientColor('#0a192f')}>
            Skills
          </Link>
        </li>
        <li>
          <Link
            to='work'
            smooth={true}
            duration={500}
            onClick={() => setGradientColor('#0a192f')}>
            Projects
          </Link>
        </li>
        <li>
          <Link
            to='contact'
            smooth={true}
            duration={500}
            onClick={() => setGradientColor('#0a192f')}>
            Contact
          </Link>
        </li>
      </ul>

      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Socials SideBar */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/trisweta-das-419397221/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/trisweta'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto:triswetadas@gmail.com'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://drive.google.com/file/d/12nvAgGquC4fx-NF2CFTE9CR2VztyMP0e/view'
              target='_blank'
              rel='noopener noreferrer'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
