import React, { useContext } from 'react'
import './Display.css'
import { MyContext } from '../App'
const Display = () => {
    const context = useContext(MyContext);
  return (
    <div className='display'>
        <div className="top">
            {context.num1}
        </div>
        <div className="bottom" style={{fontSize:"1.5rem", color:(context.ans!==0)?"#ffa500":"white"}}>{context.ans}</div>
    </div>
  )
}

export default Display