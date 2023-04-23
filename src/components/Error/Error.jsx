import Styles from "./Error.module.css"
import React from 'react'
import {Link} from "react-router-dom"

const Error = () => {
  return (
    <div className = {Styles.contaninerError}>
        
        <Link to="/"> <h4> ← VOLVER</h4></Link> 
    
    </div>
  )
}

export default Error
