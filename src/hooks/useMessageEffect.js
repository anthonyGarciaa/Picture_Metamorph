import { useContext, useEffect } from "react";
import { LanguageContext } from "@/Context";



export default function useMessageEffect(message,setMessage){
    const {language,textTemplates,texts} = useContext(LanguageContext);
  return  useEffect(() => {
        switch (message) {
          case textTemplates["en"].depositLabelText:
            setMessage(texts.depositLabelText);
            break;
          case textTemplates["en"].depositLabelTextLoading:
            setMessage(texts.depositLabelTextLoading);
            break;
          case textTemplates["en"].depositLabelTextServerError:
            setMessage(texts.depositLabelTextServerError);
          case textTemplates["es"].depositLabelText:
            setMessage(texts.depositLabelText);
            break;
          case textTemplates["es"].depositLabelTextLoading:
            setMessage(texts.depositLabelTextLoading);
            break;
          case textTemplates["es"].depositLabelTextServerError:
            setMessage(texts.depositLabelTextServerError);
        }
        //setMessage(texts.depositLabelText);
      }, [language]);
}