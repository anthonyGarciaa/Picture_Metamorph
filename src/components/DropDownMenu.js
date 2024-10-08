import { useState } from "react";
import BurgerButton from "./BurgerButton";
import LanguageSelect from "./LanguageSelect";
import Link from "next/link";
import { useContext } from "react";
import { LanguageContext } from "@/Context";

const DropDownMenu = ({active}) => {
    const [isOpen,setIsOpen]=useState(false);
    const{ texts,language,handleLanguage }=useContext(LanguageContext);
    return(
        <>
        <BurgerButton active={active} isOpen={isOpen} onClick={()=>setIsOpen(!isOpen)}/>
        {isOpen && 
        <nav className={"drop-down-nav opacity-100 fixed w-screen p-2 bottom-0 z-40"}>
        <ul className="roboto-medium flex-col text-xl pb-2">
        <li className="mb-px pt-1 pb-1  text-center"><Link className={`hover:text-primary-100 ${active==='use' && 'active'} transition-colors mx-1`} href='/use'>{texts.headerUse}</Link></li>
        <li className="mb-px pt-1 pb-1  text-center"><Link className={`hover:text-primary-100 ${active==='api' && 'active'} transition-colors mx-1`} href='/api'>{texts.headerApi}</Link></li>
        <li className="mb-px pt-1 pb-1  text-center"><Link className={`hover:text-primary-100 ${active==='contact' && 'active'} transition-colors mx-2`} href='/contact'>{texts.headerContact}</Link></li>
        <li className="mb-px pt-1 pb-1  text-center"><Link className={`hover:text-primary-100 ${active==='about' && 'active'} transition-colors mx-2`} href='/about'>{texts.headerAbout}</Link></li>
        <li className="pt-2 pb-2 flex justify-center">           
         <LanguageSelect language={language} handleLanguage={handleLanguage}/>
        </li>
        </ul>
        </nav>
}
            
        </>
    )
};

  export default DropDownMenu