import React, {useState} from "react";
import SideHustle from '../assets/logo-sidehustle.png';
import { HiOutlineSearch } from "react-icons/hi";



function Main (){

    const [inputHandler, setInputHandler]= useState(SideHustle);
    const inputHandle = (e) =>{
        setInputHandler(e.target.value);
    }

    return(
          
        <div>
            
            {inputHandler ? <p className='text-handle'>{inputHandler}</p> : <img src={SideHustle} alt="" />}
            <input type="text" onChange={inputHandle}  />
          
            <i className='search-icon' >< HiOutlineSearch  /></i>
            <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path fill="#4285F4" d="M12 15c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v7c0 1.66 1.34 3 3 3z"/><path fill="#34A853" d="M11 18.92h2V22h-2z"/><path fill="#F4B400" d="M7 12H5c0 1.93.78 3.68 2.05 4.95l1.41-1.41C7.56 14.63 7 13.38 7 12z"/><path fill="#EA4335" d="M12 17c-1.38 0-2.63-.56-3.54-1.47l-1.41 1.41A6.99 6.99 0 0 0 12.01 19c3.87 0 6.98-3.14 6.98-7h-2c0 2.76-2.23 5-4.99 5z"/></svg>
            

            <button className='google-btn'>Google Search</button>
            <button  className='lucky-btn'>I'm feeling lucky</button>
            <p className='g1-txt'>Google offered in:</p> 
                <ul className='lang-link'>
                        <li className='lang-link1'>Hausa</li>
                        <li className='lang-link2'>Ede Yoruba</li>
                        <li className='lang-link3'>Igbo</li>
                        <li className='lang-link4'>Pidgin</li>
                </ul>
            
        </div>
    )
}

export default Main;