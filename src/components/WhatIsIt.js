import { LanguageContext } from "@/Context"
import { useContext } from "react"

const WhatIsIt=()=>{
    const {texts} = useContext(LanguageContext)
    return(
        <div className="wii h-max mb-64">
        <h2 className="section-title text-2xl mb-5">{texts.whatIsItSessionName}</h2>
        <p className="w-8/12 text-lg">{texts.whatIsItntroductoryp}
        </p>
        </div>
    )
}

export default WhatIsIt