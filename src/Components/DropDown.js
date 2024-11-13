import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addDropDown } from '../Store/configSlice';
import { useNavigate } from 'react-router-dom';
import { toggleGptButton } from '../Store/gptSlice';
import { removeUser } from '../Store/userSlice';
import { LanguageChange } from '../utils/languageConstants';

const DropDown = () => {
    const navigate=useNavigate();
    const selectedLanguage=useSelector((store)=>store.Config.lang);
    const dispatch=useDispatch();
    const gptToggle = useSelector((store) => store.gpt.toggleButton);


    const signOutHandler = () => {
        dispatch(removeUser());
        localStorage.removeItem("user");
        navigate("/login");
      };
  return (
    <div className='flex flex-col w-38 h-38 align-center gap-1'>
        {
           gptToggle?(<div className='p-1 px-2 cursor-pointer bg-red-500 text-white rounded-md' onClick={()=>{dispatch(addDropDown());
            navigate("/browse");
            dispatch(toggleGptButton());
          }}>{LanguageChange[selectedLanguage]?.home}</div>) :(<div className='p-1 px-2 cursor-pointer bg-red-500 text-white rounded-md' onClick={()=>{dispatch(addDropDown());
            navigate("/gpt-search");
            dispatch(toggleGptButton());
          }}>{LanguageChange[selectedLanguage]?.ai_search}</div>)
        }
      
      <div className='p-1 cursor-pointer px-2 bg-red-500 text-white rounded-md'onClick={()=>{dispatch(addDropDown());
        signOutHandler()
      }}>{LanguageChange[selectedLanguage]?.logout}</div>
    </div>
  )
}

export default DropDown
