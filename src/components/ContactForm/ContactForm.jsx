import React, { useState } from 'react'
import styles from "./Contact.module.css"
import Buttons from '../Buttons/Buttons'
import {BiSolidMessageSquareDetail} from "react-icons/bi"
import {IoMdCall} from "react-icons/io"
import {SiGmail} from "react-icons/si"


const ContactForm = () => {
  
  const [name,setName] = useState("shashank")
  const [email,setEmail]= useState("xyz@gmail.com")
  const [text,setText]=useState("wassup")

 const onSubmit=(event)=>{
   event.preventDefault() 
   console.log(event)

   setName(event.target[0].value)
   setEmail(event.target[1].value)
   setText(event.target[2].value)
 }

  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
          <div className={styles.top_btn}>
        <Buttons value={'Support Chat'} icon={<BiSolidMessageSquareDetail fontSize='20px'/>}/>
        <Buttons  value={'Support Call'} icon={<IoMdCall fontSize='20px'/>}/>
    
      </div> 
      <Buttons isOpen={true} value={'Support Email'} icon={<SiGmail fontSize='20px'/>}/>
      <form onSubmit={onSubmit}>
        <div className={styles.form_control}>
          <label htmlFor="name">Name</label>
          <input type="text" name='name' />
        </div>
        <div className={styles.form_control}>
          <label htmlFor="email">Email</label>
          <input type="email" name='email' />
        </div>
        <div className={styles.form_control}>
          <label htmlFor="text">Text</label>
          <textarea  name='text'/>
        </div>
        <div style={{display:"flex",justifyContent:"flex-end"}}> 
           <Buttons 
         value={'Submit'} />
        </div>
      
      </form>
      {
        name +" "+email+" "+ text
      }
       </div>
        <div className={styles.contact_image}>
          <img src="/images/contactForm.avif" alt="" />
        </div>
    </section>
  )
}

export default ContactForm