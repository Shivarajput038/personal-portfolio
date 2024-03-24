import React from 'react'
import '../Contact/Contact.css'
import Walmart from '../../Assets/walmart.png'
import Adobe from '../../Assets/adobe.png'
import Microsoft  from '../../Assets/microsoft.png'
import Facebook from '../../Assets/facebook.png'
import FacebookIcon from '../../Assets/facebook-icon.png'
import TwitterIcon from '../../Assets/twitter.png'
import YoutubeIcon from '../../Assets/youtube.png'
import InstagramIcon from '../../Assets/instagram.png'
const Contact = () => {
  return (
<section className='ContactPage'>
    <div className='clients'>
        <div className="contact">
            <h1 className='
            contactPageTitle'>My Client</h1>
            <p className='ClientDesc'>i had th oportunity to works with a  diserve group   of companies. some of the notable companies i have worked with includes</p>
        </div>
        <div className="clientImgs">
            <img src={Walmart}alt='walmart' className='clientImg'/>
            <img src={Adobe}alt='adobe' className='clientImg'/>
            <img src={Microsoft}alt='microsoft' className='clientImg'/>
            <img src={Facebook}alt='facebook' className='clientImg'/>
        </div>
    </div>
    <div id="contact">
        <h1 className='ContactPageTitle'>Contact Me </h1>
        <span className='contactDesc'>please fil out the form blow to discuss and my work opportunities</span>
        <form className='contactForm'>
            <input type="text" className='name' name='text'placeholder='your Name' />
            <input type="email" className='email' name='email'placeholder='your Email'/>
            <textarea className='msg' name='massage' rows='5' placeholder='Your Massage'></textarea>
                <button type='submit' value='sand' className='submitBtn'> submit</button>
                <div className="links">
                    <img src={FacebookIcon} alt="facebook" className="link" />
                    <img src={TwitterIcon} alt="twitter" className="link" />
                    <img src={YoutubeIcon} alt="youtube" className="link" />
                    <img src={InstagramIcon} alt="instagram" className="link" />
                </div>
           
        </form>
    </div>
</section>
  )
}

export default Contact
