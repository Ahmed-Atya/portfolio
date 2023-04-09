import React from 'react'
import './menu.scss'
const menu = ({menuOpen,setMenuOpen}) => {
  return (
    <div className={"menu-list " + (menuOpen && "active")} onClick={()=>{setMenuOpen(false)}}>
       <ul>
        <li><a href="#intro" className="link">Home</a></li>
        <li><a href="#portfolio" className="link">Portfolio</a></li>
        <li><a href="#works" className="link">Projects</a></li>
        <li><a href="#testimonials" className="link">Testimonials</a></li>
        <li><a href="#contact" className="link">Contact</a></li>
       </ul>
    </div>
  )
}

export default menu
