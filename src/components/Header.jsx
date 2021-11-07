import React from 'react';
import { CgMenuGridO } from "react-icons/cg";
import Avatar from '../assets/image avatar.jpg'

function Header(){
    return(
        <header className='header' >
            <p className='gmail-txt'>Gmail</p>
            <p className='image-txt'>Images</p>
           <  CgMenuGridO className='menu-icon' />
           <img className='avatar' src={Avatar} alt="" />
        </header>
    )
}

export default Header;
