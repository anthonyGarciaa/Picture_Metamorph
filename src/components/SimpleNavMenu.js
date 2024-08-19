import { LanguageContext } from "@/Context"
import Link from "next/link"
import { useContext } from "react"
import LanguageSelect from "./LanguageSelect";

const SimpleNavMenu=({active})=>{
    const{ texts,language,handleLanguage } = useContext(LanguageContext);
    return(
        <nav>
        <ul className="roboto-medium flex h-full items-center text-2xl">
        <li><Link className={`p-1 hover:text-primary-100 ${active==='use' && 'active'} transition-colors mx-1`} href='/use'>{texts.headerUse}</Link></li>
        <li><Link className={`p-1 hover:text-primary-100 ${active==='api' && 'active'} transition-colors mx-1`} href='/api'>{texts.headerApi}</Link></li>
        <li><Link className={`p-1 hover:text-primary-100 ${active==='contact' && 'active'} transition-colors mx-2`} href='/contact'>{texts.headerContact}</Link></li>
        <li><Link className={`p-1 hover:text-primary-100 ${active==='about' && 'active'} transition-colors mr-2`} href='/about'>{texts.headerAbout}</Link></li>
        <li>           
                <LanguageSelect language={language} handleLanguage={handleLanguage}/>
        </li>
        </ul>
        </nav>
        
    )
}
export default SimpleNavMenu