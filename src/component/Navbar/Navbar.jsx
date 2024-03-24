import React, { useState } from 'react';
import '../Navbar/Navbar.css';
import { Link } from 'react-scroll';
import logo1 from '../../Assets/logo1.png';
import contact from '../../Assets/contact.png';
import Menu from '../../Assets/menu.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false); // Corrected variable name

  return (
    <nav className='navbar'>
      <img src={logo1} alt='logo' style={{ width: "4%" }} />
      <div className='desktopmenu'>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='DesktopMenuListItem'>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='DesktopMenuListItem'>About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='DesktopMenuListItem'>Portfolio</Link>
        <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='DesktopMenuListItem'>clients</Link>
      </div>
      <button className='desktopMenuBtn' style={{ background: "white" }} onClick={() => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      }}>
        <img src={contact} alt='contact-img' className='desktopNMenuImg' />contact me
      </button>
      <img src={Menu} alt='menu' className='MobMenu' onClick={() => setShowMenu(!showMenu)} />
      <div className='navMenu' style={{ display: showMenu ? 'flex' : 'none' }}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-0} duration={500} className='ListItem' onClick={() => setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={() => setShowMenu(false)}>About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={() => setShowMenu(false)}>Portfolio</Link>
        <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={() => setShowMenu(false)}>clients</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={() => setShowMenu(false)}>contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;

