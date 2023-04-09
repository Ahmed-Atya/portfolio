import './top-bar.scss'
import React from 'react'
import {Person,Mail} from '@material-ui/icons'
const TopBar = ({menuOpen,setMenuOpen}) => {
    return (
        <div className={"top-bar " + (menuOpen && "active")} id='topBar'>
            <div className="wrapper container">
                <div className="left">
                    <a href='#intro' className='logo'>AhDV...</a>
                        <div className='info'>
                            <Person className='icon'/>
                            <span>+201092372430</span>
                        </div>
                        <div className='info'>
                            <Mail className='icon'/>
                            <span>ahmedatya@outlook.com</span>
                        </div>
                </div>
                <div className="right">
                    <div className="menu" onClick={()=>{
                        setMenuOpen(!menuOpen);
                    }}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar