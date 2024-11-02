import React, { useEffect, useState } from 'react'
import Header from '../Components/Header';
import { Link, useNavigate } from 'react-router-dom';
import { ValidateForm } from '../utils/validateForm';
import { generateCatcha } from '../utils/generateCatcha';

const LoginPage = () => {
  const navigate=useNavigate();
    const [email, setEmail]=useState("");
    const[password, setPassword]=useState("");
    const[message, setMessage]=useState();
    const[captcha, setCaptcha]=useState("");
    const[newCaptcha, setNewCaptcha]=useState("");
    const[refreshCaptcha, setRefreshCaptcha]=useState(false);

    useEffect(()=>{
      const newCaptcha=generateCatcha();
      setCaptcha(newCaptcha);
    },[ refreshCaptcha])


    const handleSignin=()=>{
     
        
const mess=ValidateForm(email, password);

const captchaWithoutspace=captcha.split(" ").join("");

setMessage(mess);
if(mess===null){
  if(captchaWithoutspace===newCaptcha){
    navigate("/browse");
    setPassword("");
    setEmail("");
    setNewCaptcha("");
    
  }
  else{
    setRefreshCaptcha(!refreshCaptcha);
    setNewCaptcha("");
    setMessage("Invalid captcha");
    
  }
}



    }
  return ( 
    <div>
    
<div className=' width-full h-screen relative'>

      <div className=" absolute inset-0 bg-black z-10 opacity-70 "></div>
         <div className='relative'>
         <Header/>
         <img
    className=" w-full h-screen object-cover"
    src="https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_large.jpg"
    alt="banner"
  />
  <div className=' absolute z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/5 min-h-96 bg-black opacity-70 flex flex-col p-8 text-white rounded-lg'>
  <h1 className='text-white text-3xl m-2 bold'>Sign In</h1>
  <input type="text" value={email} placeholder='Email Address' className='p-2 m-2 bg-gray-700 rounded-sm' onChange={(e)=>setEmail(e.target.value)}/>
  <input type="password" value={password} placeholder='Password' className='p-2 m-2 bg-gray-700 rounded-sm'onChange={(e)=>setPassword(e.target.value)}/>
  <div className='p-4 m-2 bg-gray-700 rounded-sm border-solid	border-2 flex justify-between items-center border-transparent'>
   <p>{captcha}</p> 
   <i className="fa-solid fa-arrows-rotate cursor-pointer px-2" onClick={()=>{setRefreshCaptcha(!refreshCaptcha)}}></i>
    </div>
  <input type="text" value={newCaptcha} placeholder='Type the Captcha here' className='p-2 m-2 bg-gray-700 rounded-sm'onChange={(e)=>setNewCaptcha(e.target.value)}/>
  <button className='p-2 m-2 text-white bg-red-700 rounded-md' onClick={handleSignin}>Sign In</button>
  <span className='text-red-400 ml-2'>{message}</span>
  <Link to="/register"><p className='text-xs p-2 m-2 hover:underline cursor-pointer'>New to Movies Prime? Sign Up now</p></Link>
  </div>
  </div>

  

      
    </div>
    </div>
  )
}

export default LoginPage
