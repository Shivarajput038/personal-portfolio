import React from 'react'
import '../Intro/Intro.css'
import bg from '../../Assets/image.png'
import{Link} from 'react-scroll';
import btnImg from '../../Assets/hireme.png'
const Intro = () => {
  return (
    <div>
     <section id='intro'>
        <div className="introContent">
<span className='hello'>Hello</span>
<span className='introText'>I'm <span className='introName'>SHIV</span><br/>Website devloper</span>
<p className='introPara'>I am a skilled web devloper with experince in creating <br/> visually appealing and  user-friendly website.</p>
<Link><button className='btn'><img src={btnImg}alt='hire' className='btnImg'/>Hire me</button></Link>
 </div>
     <img src={bg}  alt="background-img"className="bg"/>
     </section>
    </div>
  )
}
export default Intro;
