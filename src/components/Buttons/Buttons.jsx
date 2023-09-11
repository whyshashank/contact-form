import React from 'react'
import styles from "./Button.module.css"
const Buttons = (props) => {
  const {isOpen,icon,value, ...rest} =props

  return (
     <button {...rest} className={isOpen ? styles.btn_email :styles.btn_primary}>
        {icon}
        {value}
        </button>
  )
}

export default Buttons