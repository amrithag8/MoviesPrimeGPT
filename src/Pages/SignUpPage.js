import React, { useState } from 'react'
import Header from '../Components/Header';
import { Link, useNavigate } from 'react-router-dom';
import { ValidateForm, ValidateName } from '../utils/validateForm';
import { createUserWithEmailAndPassword , updateProfile} from 'firebase/auth';
import { auth } from '../utils/firebase';
import { BG_IMG } from '../utils/constant';

const SignUpPage = () => {
  const navigate=useNavigate();
    const[fullName, setFullName]=useState("");
    const[email, setEmail]=useState("");
    const[password, setPassword]=useState("");
    const[message, setMessage]=useState();

    const signUpHandler=()=>{
       const mess= ValidateForm(email, password);
       const name= ValidateName(fullName);
       
       if(mess===null&&name===null){
        setMessage("");

        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("success yes");
    updateProfile(user, {
      displayName: fullName,
    }).then(() => {
      console.log("success");
      // Profile updated!
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
    });
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error",errorCode+" "+errorMessage );
    // ..
  });

        navigate("/login");
        return null;
       }
       
       if(mess!==null){
        setMessage(mess);
       }
       else if(name!==null){
        setMessage(name);
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
  <div className=' absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/5 min-h-96 bg-black opacity-70 flex flex-col p-6 text-white rounded-lg'>
  <h1 className='text-white text-3xl m-2 bold'>Sign Up</h1>
  <input type="text" value={fullName} placeholder='Full Name' className='p-2 m-2 bg-gray-700 rounded-sm' onChange={(e)=>setFullName(e.target.value)}/>
  <input type="text" value={email} placeholder='Email Address' className='p-2 m-2 bg-gray-700 rounded-sm' onChange={(e)=>setEmail(e.target.value)}/>
  <input type="password" value={password} placeholder='Password' className='p-2 m-2 bg-gray-700 rounded-sm' onChange={(e)=>setPassword(e.target.value)}/>
  <button className='p-2 m-2 text-white bg-red-700 rounded-md' onClick={signUpHandler}>Sign Up</button>
  {(message!=="")&&<span className='text-red-400 ml-2'>{message}</span>}
  <Link to="/login"><p className='text-xs p-2 m-2 hover:underline cursor-pointer'>Already a user? Sign in</p></Link>
  </div>
  </div>

  

      
    </div>
    </div>
  )
}

export default SignUpPage
