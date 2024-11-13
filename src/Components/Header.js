import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeUser } from "../Store/userSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { LanguageChange, SUPPORTING_LANNGUAGES } from "../utils/languageConstants";
import { addDropDown, addSelectedLanguage } from "../Store/configSlice";
import { toggleGptButton } from "../Store/gptSlice";
import DropDown from "./DropDown";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const gptToggle = useSelector((store) => store.gpt.toggleButton);
  const dropDownState=useSelector((store)=>store.Config.dropDown);
  const selectedLanguage=useSelector((store)=>store.Config.lang);

  let { pathname } = useLocation();

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      if (pathname === "/browse" || pathname === "/gpt-search") {
        navigate("/login");
      }
    } else {
      if (pathname === "/login" || pathname === "/register") {
        navigate("/browse");
      }
    }
  }, []);

  

  const languageHandler = (e) => {
    dispatch(addSelectedLanguage(e.target.value));
  };

  return (
    
    
    
      
    <div className="absolute text-red-500 z-50 items-center w-screen md:flex justify-between py-8 pr-20 pl-8">
        <h1 className="font-lilita text-3xl font-extrabold">MOVIES PRIME</h1> 

        {localStorage.getItem("user") && (
          <div className="flex items-center justify-center">
            <p className="text-md font-bold pr-4">
                {" "}
                {LanguageChange[selectedLanguage]?.hi} <span className="text-2xl bg-gradient-to-r from-red-600 to-slate-500 text-transparent bg-clip-text">{localStorage.getItem("user")}</span>
              </p>

<div className="pr-4">
                 <select
                name="Languages"
                id="languages"
                className="p-2 bg-black rounded-md text-white"
                onChange={languageHandler}
              >

                {SUPPORTING_LANNGUAGES.map((item) => {
                  return <option value={item.identifier}>{item.name}</option>;
                })}
              </select>
            
            </div>

              <div className="w-10 h-10 bg-red-500 rounded-md text-white flex flex-col align-center cursor-pointer" onClick={()=>dispatch(addDropDown())}>
                <div className="flex text-6xl -m-6 gap-2 ml-0.5">
                <div>&middot;</div>
                <div>&middot;</div>
                </div>
                <div className="ml-3 font-black">
                  --
                  </div>
                 

                </div>

                



{
  dropDownState&&(
    gptToggle?
    (<div className="absolute top-20 right-14">
      <DropDown/>
      </div>):(<div className="absolute top-20 right-10">
      <DropDown/>
      </div>)
  )
  
}
                
               
            
          </div>
        )}
      </div>
    
    
  );
};

export default Header;
