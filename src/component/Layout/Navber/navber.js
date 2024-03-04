import React from 'react'
import './navber.css'
import { VscHome  } from "react-icons/vsc";
import { LuUser2 } from "react-icons/lu";
import { IoFileTrayFullOutline } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import { LuShapes } from "react-icons/lu";
import { LiaGripVerticalSolid } from "react-icons/lia";
import { MdOutlineComment } from "react-icons/md";
import { MdOutlineContactPhone } from "react-icons/md";
import Link from 'next/link';

function Navber() {


  return (
    <div className='navber-part'>
      <div className='nav-icons'>
        <div className='icon-details'>
          <a href='#intro'>
            <VscHome  className='icon'/>
          </a>
          <div className='icon-name'>
            <p>Home</p>
          </div>
        </div>
        <div className='icon-details'>
          <a href='#about-part'>
            <LuUser2  className='icon'/>
          </a>
          <div className='icon-name'>
            <p>About</p>
          </div>
        </div>
        <div className='icon-details'>
          <a href='#resume-part'>
            <IoFileTrayFullOutline  className='icon'/>
          </a>
          <div className='icon-name'>
            <p>Resume</p>
          </div>
        </div>
        <div className='icon-details'>
          <a href='#service-part'>
            <FaBarsStaggered  className='icon'/>
          </a>
          <div className='icon-name'>
            <p>Service</p>
          </div>
        </div>
        <div className='icon-details'>
          <Link href='#skill-part'>
            <LuShapes  className='icon'/>
          </Link>
          <div className='icon-name'>
            <p>Skill</p>
          </div>
        </div>
        <div className='icon-details'>
          <a href='#portfolio-part'>
            <LiaGripVerticalSolid  className='icon'/>
          </a>
          <div className='icon-name'>
            <p>Portfolio</p>
          </div>
        </div>
        <div className='icon-details'>
          <a href='#testimonial'>
            <MdOutlineComment  className='icon'/>
          </a>
          <div className='icon-name'>
            <p>Testimonial</p>
          </div>
        </div>
        <div className='icon-details'>
          <a href='#Footer-part'>
            <MdOutlineContactPhone  className='icon'/>
          </a>
          <div className='icon-name'>
            <p>Contact</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navber

