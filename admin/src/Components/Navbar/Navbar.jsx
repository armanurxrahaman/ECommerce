import React from 'react'
import './Navbar.css'
import navlogo from '../Assets/mainlogo.png'
import navprofileIcon from '../Assets/nav-prof.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className = 'navbar-left'>
      <img src={navlogo} className='nav-logo' alt="" />
      <p>NoorMart</p>
      </div>
      <div> <img src={navprofileIcon} className='nav-profile' alt="" /></div>
    </div>
  )
}

export default Navbar
