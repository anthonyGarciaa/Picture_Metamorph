import { LanguageContext } from "@/Context"
import { useContext } from "react"

const LanguageSelect = ({language, handleLanguage}) => {
    const {texts}=useContext(LanguageContext);
    return(
  <select
    value={language}
    onChange={handleLanguage}
    className="lang border-none bg-primary-700 text-primary-200 text-sm rounded-lg py-1"
  >
    <option value="es">{texts.headerEs}</option>
    <option value="en">{texts.headerEn}</option>
  </select>
  )
};
export default LanguageSelect;
