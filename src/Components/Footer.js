import React from 'react'
import { useSelector } from 'react-redux';
import { LanguageChange } from '../utils/languageConstants';

const Footer = () => {
  const selectedLanguage=useSelector((store)=>store.Config.lang);
  return (
    <div className='flex flex-col gap-10 w-screen min-h-1/4 text-white mt-12 p-12 pb-24'>
      <p >{LanguageChange[selectedLanguage]?.questions}? Call 000-800-919-1694</p>
      <div className='flex gap-48'>
        <div className='flex flex-col gap-4 underline cursor-pointer'>
          <p>{LanguageChange[selectedLanguage]?.faq}</p>
          <p>{LanguageChange[selectedLanguage]?.investorRelations}</p>
          <p>{LanguageChange[selectedLanguage]?.privacy}</p>
          <p>{LanguageChange[selectedLanguage]?.speed_test}</p>
        </div>
        <div className='flex flex-col gap-4 underline cursor-pointer'>
          <p>{LanguageChange[selectedLanguage]?.help_center}</p>
          <p>{LanguageChange[selectedLanguage]?.jobs}</p>
          <p>{LanguageChange[selectedLanguage]?.CookiePreferences}</p>
          <p>{LanguageChange[selectedLanguage]?.legal_notices}</p>
        </div>
        <div className='flex flex-col gap-4 underline cursor-pointer'>
          <p>{LanguageChange[selectedLanguage]?.account}</p>
          <p>{LanguageChange[selectedLanguage]?.Ways_to_watch}</p>
          <p>{LanguageChange[selectedLanguage]?.Corporate_Information}</p>
          <p>{LanguageChange[selectedLanguage]?.Only_on_Movies_Prime}</p>
        </div>
        <div className='flex flex-col gap-4 underline cursor-pointer'>
          <p>{LanguageChange[selectedLanguage]?.Media_Centre}</p>
          <p> {LanguageChange[selectedLanguage]?.Terms_of_Use}</p>
          <p>{LanguageChange[selectedLanguage]?.Contact_Us}</p>
        
        </div>

      </div>
      <p>Movies Prime {LanguageChange[selectedLanguage]?.india}</p>

    </div>
  )
}

export default Footer;
