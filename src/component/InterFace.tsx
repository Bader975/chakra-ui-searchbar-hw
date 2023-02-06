import React from 'react'
import { ImFire } from 'react-icons/im';

import { useNavigate } from "react-router-dom";

function InterFace() {

    const navigate = useNavigate()


    const LogIn =()=>{
        navigate("/logIn")  
       
    }
  return (
    <div className='main'>

        <h3 className='text'>الله اللي عزنا مالحد منه <ImFire/></h3>
        
        <div className='btn'>
        <button onClick={LogIn}>تسجيل دخول</button>
        <button> تسجيل جديد</button>
        </div>
      
    </div>
  )
}

export default InterFace