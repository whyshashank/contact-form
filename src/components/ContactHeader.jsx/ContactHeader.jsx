import React from 'react'
import styles from "./ContactHeader.module.css"

const ContactHeader = () => {
  return (
    <div className={`container
       ${styles.contact_section}
    `}>
        <h1>CONTACT US</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore hic porro culpa similique reiciendis. Praesentium, tenetur aspernatur quidem rem laborum exercitationem autem doloribus corporis, 
            alias reiciendis, quos eum soluta porro.</p>
    </div>
  )
}

export default ContactHeader