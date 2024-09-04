import React, { useContext } from 'react'
import { themecontext } from '../Context/Themecontex'
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

const Button =()=>{
    const {themeupdaterfunction,theme}=useContext(themecontext)
  return (
    <div>
      <button style={{marginTop:"5px",backgroundColor:theme?"white":"black",color:theme?"black":"white"}} onClick={themeupdaterfunction}>
       {theme?<FaSun /> : <FaMoon />}</button>  
    </div>
    )
}
export default Button
