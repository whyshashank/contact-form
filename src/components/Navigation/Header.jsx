import React from 'react'
import styles from "./Header.module.css"
const Header = () => {
    
  return (

    <nav className={
      styles.navbar
    }>
    <div className='app'>
        <img src="./images/LogoContactForm.png" />
    </div>
       <ul>
        <li className="shashank">Home</li>
        <li className="shashank">About</li>
        <li className="shashank">Contact</li>
       </ul>

    
    
    </nav>

  )
}

export default Header