import React from 'react'
import './Button.css'
const Button = ({width,height,name,bgcolor,onclick,arg}) => {
  return (
    <div className='button'>
        <button onClick={()=>{
            console.log("clicked");
           onclick({arg});
        }} style={{width:`${width}`,height:`${height}`,backgroundColor:`${bgcolor}`}}>{name}</button>
    </div>
  )
}

export default Button