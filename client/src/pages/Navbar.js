import React, {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css';
const Navbar = () => {
    const [click , setClick] = useState (false)
    const [button,setButton]= useState(true)

    const handleClick =()=> setClick (!click)
    const closeMobileMenu =() => setClick(false)

    const showButton =()=>{
        if (window.innerWidth<=960){
            setButton(false)
        }else{setButton(true)}
    }
    //unshow the register button when we refrech
    useEffect(()=>{showButton()} ,[])

    window.addEventListener('resize', showButton)
    return (
        <div>
            <nav className="navbar">
            <div className='navbar-container'>
            <Link to ="/" className='navbar-logo' onClick={closeMobileMenu}>INTO THE WILD <i class="fas fa-caravan"></i></Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            <ul className={click? 'nav-menu active' : 'nav-menu'}>
                <li className ='nav-Item'>
                    <Link to ='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                </li>
                <li className ='nav-Item'>
                    <Link to ='/Login' className='nav-links' onClick={closeMobileMenu}>Login</Link>
                </li>
                <li className ='nav-Item'>
                    <Link to ='/Register' className='nav-links-mobile' onClick={closeMobileMenu}>Register</Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>Register</Button>}
            </div>
            </nav>
        </div>
    )
}

export default Navbar
