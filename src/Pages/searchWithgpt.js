import React from 'react'
import Header from '../Components/Header'
import { BG_IMG } from '../utils/constant'
import { useSelector } from 'react-redux'
import { LanguageChange } from '../utils/languageConstants'

const SearchWithgpt = () => {

    const selectedLanguage=useSelector((store)=>store.Config.lang);
    console.log("selectedLanguage", selectedLanguage);
  return (
    <div className='w-screen h-screen relative'>
        <div className=" w-screen ">
        <Header/>
      </div>
      
        
        <img src={BG_IMG} className='blur-md backdrop-blur-xl h-screen w-screen'/>

        <div className='w-6/12 h-20 absolute left-1/2 bg-black flex px-4 py-2 items-center justify-around rounded-md' style={{ top: '100px', transform: 'translateX(-50%)'}}>
<input type="text" placeholder={LanguageChange[selectedLanguage]?.placeHolderText} className='w-3/4 h-2/3 px-4 py-2 text-lg rounded-md'/>
<button className='bg-red-700 w-1/5 p-2.5 rounded-md'>{LanguageChange[selectedLanguage]?.search}</button>
        </div>
      
    </div>
  )
}

export default SearchWithgpt
