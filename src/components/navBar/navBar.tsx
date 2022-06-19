/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai';
import {MdOutlineMessage} from "react-icons/md";
import {VscTools,VscProject} from "react-icons/vsc";
import {Nav} from "./navBarStyle";
const NavBar =()=>{
    const [activeNav,setActiveNav] = useState('#');
    return(
        <Nav>
            {/*// eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
            <a href="#" onClick={() => setActiveNav('#')}className={activeNav === '#' ? 'active' : '' }><AiOutlineHome/></a>
            <a href='#about' onClick={() => setActiveNav('#about')}className={activeNav === '#about' ? 'active' : '' }><AiOutlineUser/></a>
            <a href='#skills' onClick={() => setActiveNav('#skills')}className={activeNav === '#skills' ? 'active' : '' }><VscTools/></a>
            <a href='#projects' onClick={() => setActiveNav('#projects')}className={activeNav === '#projects' ? 'active' : '' }><VscProject/></a>
            <a href='#contact' onClick={() => setActiveNav('#contact')}className={activeNav === '#contact' ? 'active' : '' }><MdOutlineMessage/></a>

        </Nav>
    )
}
export default NavBar;