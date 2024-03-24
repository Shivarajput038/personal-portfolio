import React from 'react'
import '../works/Works.css'
import portfolio1 from '../../Assets/portfolio-1.png'
import portfolio2 from '../../Assets/portfolio-2.png'
import portfolio3 from '../../Assets/portfolio-3.png'
import portfolio4 from '../../Assets/portfolio-4.png'
import portfolio5 from '../../Assets/portfolio-5.png'
import portfolio6 from '../../Assets/portfolio-6.png'


const Works = () => {
  return (
    <div>
      <section id='works'>
        <h2 className='worksTitle'>My portfolio</h2>
        <span className='worksDesc'>I take pride in paying attention to the  smallest  details and making sure that my work is pixel perfect i am excited to bring my skills and  experince to help businesses achive therir  goals and create a strong online presence</span>
        <div className="worksImags">
        <img src={portfolio1} alt='' className='worksImg' />
        <img src={portfolio2} alt='' className='worksImg' />
        <img src={portfolio3} alt='' className='worksImg' />
        <img src={portfolio4} alt='' className='worksImg' />
        <img src={portfolio5} alt='' className='worksImg' />
        <img src={portfolio6} alt='' className='worksImg' />
        </div>
        <button className='WorksBtn'>see more</button>
      </section>
    </div>
  )
}

export default Works
