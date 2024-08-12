import { LanguageContext } from "@/Context"
import Link from "next/link"
import { useContext } from "react"

const SimpleNavMenu=({active,handleLanguage})=>{
    const{ texts,language }=useContext(LanguageContext);
    return(
        <nav>
        <ul className="roboto-medium flex h-full items-center text-2xl">
        <li><Link className={`hover:text-primary-100 ${active==='use' && 'active'} transition-colors mx-1`} href='/use'>{texts.headerUse}</Link></li>
        <li><Link className={`hover:text-primary-100 ${active==='api' && 'active'} transition-colors mx-1`} href='/api'>{texts.headerApi}</Link></li>
        <li><Link className={`hover:text-primary-100 ${active==='contact' && 'active'} transition-colors mx-2`} href='/contact'>{texts.headerContact}</Link></li>
        <li>           
                <select value={language} onChange={handleLanguage} className="lang border-none bg-primary-700 text-primary-200 text-sm rounded-lg py-1">
                <option value='es'>{texts.headerEs}</option>
                <option value='en'>{texts.headerEn}</option>
                </select>
        </li>
        </ul>
        </nav>
    )
}
export default SimpleNavMenu