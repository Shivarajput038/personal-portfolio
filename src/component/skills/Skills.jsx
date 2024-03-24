import React from 'react'
import '../skills/Skills.css'
import UIdesign from '../../Assets/ui-design.png'
import Webdesign from '../../Assets/website-design.png'
import Appdesign from '../../Assets/app-design.png'

const Skills = () => {
  return (
    <div>
     <section id='skills'>
       <span className='skillTitle'>What i do</span>
       <span className='skillDesc'>I am a skilled and passionet web devloper with experince in creating  visually appealing and  user-friendly website. I have a  srtong understanding of a  design and a keen eye for detil. i am a proficent in Html,css,javaScript, as  well as design softwatre such a  abode  photoshophy and Illustrator</span>
   <div className="skillBars">
   <div className="skillBars"></div>
   <img  src={UIdesign} alt='UIdesign' className='skillBarImg'/>
   <div className="skillBarText">
    <h2>UI/UX Design</h2>
    <p>this  is demo text you can write your own content here.</p>
    </div>
   </div>
   <div className="skillBars">
   <div className="skillBars"></div>
   <img  src={Webdesign} alt='Webdesign' className='skillBarImg'/>
   <div className="skillBarText">
    <h2>Website Design</h2>
    <p>this demo text can be changed while making the  production ready site.</p>
    </div>
   </div>
   <div className="skillBars">
   <div className="skillBars"></div>
   <img  src={Appdesign} alt='Appdesign' className='skillBarImg'/>
   <div className="skillBarText">
    <h2>App design</h2>
    <p>you can write text related to Mobaile app devlopment</p>
    </div>
   </div>
     </section>
    </div>
  )
}

export default Skills
