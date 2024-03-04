'use client'
import React, { useState } from 'react'
import Button from '../button'
import { LuShapes } from 'react-icons/lu'
import { GrHtml5 } from "react-icons/gr";
import { FaCss3 } from "react-icons/fa";
import { TbBrandBootstrap } from "react-icons/tb";
import { DiJavascript } from "react-icons/di";
import { IoLogoReact } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTailwindCss } from "react-icons/bi";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { FiFigma } from "react-icons/fi";
import { IoLogoFirebase } from "react-icons/io5";
import { DiPhotoshop } from "react-icons/di";
import { SiVisualstudiocode } from "react-icons/si";

function Skills() {
    const [countOn, setCountOn] = useState(false)
  return (
    <div id='skill-part'>
      <Button><div><LuShapes  className='skill-icon'/></div><div>Skills</div></Button>
      <h3>My <span className='text'>Skills</span> & <span className='text'>Tools</span></h3>
      <div className='all-skill'>
       <div className='skills'>
            <div className='skill-item'>
                <div className='skill-icons'>
                    <GrHtml5/>
                </div>
                    <div className='count-part'>
                        <h4>
                        <CountUp start={0} end={70} duration={2} delay={0}/>  
                        %</h4>
                    </div>
            </div>
            <h4>Html</h4>
        </div>
        <div className='skills'>
            <div className='skill-item'>
                <div className='skill-icons'>
                    <FaCss3/>
                </div>
                    <div className='count-part'>
                        <h4>
                        <CountUp start={0} end={85} duration={2} delay={0}/>  
                        %</h4>
                    </div>
            </div>
            <h4>Css</h4>
       </div>
       <div className='skills'>
            <div className='skill-item'>
                <div className='skill-icons'>
                    <TbBrandBootstrap/>
                </div>
                    <div className='count-part'>
                        <h4>
                        <CountUp start={0} end={80} duration={2} delay={0}/>  
                        %</h4>
                    </div>
            </div>
            <h4>Bootstrap</h4>
       </div>
       <div className='skills'>
            <div className='skill-item'>
                <div className='skill-icons'>
                    <DiJavascript/>
                </div>
                    <div className='count-part'>
                        <h4>
                        <CountUp start={0} end={75} duration={2} delay={0}/>   
                        %</h4>
                    </div>
            </div>
            <h4>Javascript</h4>
       </div>
       <div className='skills'>
            <div className='skill-item'>
                <div className='skill-icons'>
                    <BiLogoTailwindCss/>
                </div>
                    <div className='count-part'>
                        <h4>
                        <CountUp start={0} end={80} duration={2} delay={0}/>   
                        %</h4>
                    </div>
            </div>
            <h4>Tailwind Css</h4>
       </div>
       <div className='skills'>
            <div className='skill-item'>
                <div className='skill-icons'>
                    <IoLogoReact/>
                </div>
                    <div className='count-part'>
                        <h4>
                        <CountUp start={0} end={75} duration={2} delay={0}/>  
                        %</h4>
                    </div>
            </div>
            <h4>Reactjs</h4>
       </div>
       <div className='skills'>
            <div className='skill-item'>
                <div className='skill-icons'>
                    <TbBrandNextjs/>
                </div>
                    <div className='count-part'>
                        <h4>
                        <CountUp start={0} end={75} duration={2} delay={0}/>   
                        %</h4>
                    </div>
            </div>
            <h4>NextJs</h4>
       </div>
       <div className='skills'>
            <div className='skill-item'>
                <div className='skill-icons'>
                    <IoLogoFirebase/>
                </div>
                    <div className='count-part'>
                        <h4>
                        <CountUp start={0} end={80} duration={2} delay={0}/> 
                        %</h4>
                    </div>
            </div>
            <h4>Firebase</h4>
       </div>
       <div className='skills'>
            <div className='skill-item'>
                <div className='skill-icons'>
                    <FiFigma/>
                </div>
                    <div className='count-part'>
                        <h4>
                        <CountUp start={0} end={80} duration={2} delay={0}/>  
                        %</h4>
                    </div>
            </div>
            <h4>Figma</h4>
       </div>
       <div className='skills'>
            <div className='skill-item'>
                <div className='skill-icons'>
                    <DiPhotoshop/>
                </div>
                    <div className='count-part'>
                        <h4>
                        <CountUp start={0} end={75} duration={2} delay={0}/>  
                        %</h4>
                    </div>
            </div>
            <h4>Photoshop</h4>
       </div>
       <div className='skills'>
            <div className='skill-item'>
                <div className='skill-icons'>
                    <SiVisualstudiocode/>
                </div>
                    <div className='count-part'>
                        <h4>
                        <CountUp start={0} end={75} duration={2} delay={0}/>    
                        %</h4>
                    </div>
            </div>
            <h4>VS Code</h4>
       </div>
      </div>
    </div>
  )
}

export default Skills
