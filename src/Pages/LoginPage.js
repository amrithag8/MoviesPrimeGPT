import React, { useEffect, useState } from 'react'
import Header from '../Components/Header';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ValidateForm } from '../utils/validateForm';
import { generateCatcha } from '../utils/generateCatcha';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../Store/userSlice';
import { BG_IMG } from '../utils/constant';

const LoginPage = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  

  const[signUppage, setSignUppage]=useState(false);
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


    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // console.log(user, "user token is", user.accessToken);
    localStorage.setItem("user", user.displayName);
    dispatch(addUser({UUID:user.uid, displayName:user.displayName}))
    navigate("/browse");
    setPassword("");
    setEmail("");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // console.log(errorMessage);
    
    setMessage("Invalid email/password");
  });
    
    
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
    src={BG_IMG}
    alt="banner"
  />
  <div className=' absolute z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:w-1/5 sm:w-1/2 min-h-96 bg-black opacity-70 flex flex-col p-8 text-white rounded-lg'>
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
  <p className='text-xs p-2 m-2 hover:underline cursor-pointer' onClick={()=>{
    setSignUppage(true);
    navigate("/register");}}>New to Movies Prime? Sign Up now</p>
 
  </div>
  </div>

  
  
      
    </div>
    </div>
  )
}

export default LoginPage
