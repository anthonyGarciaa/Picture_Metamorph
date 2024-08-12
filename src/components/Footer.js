'use client'
import { LanguageContext } from "@/Context";
import { useContext } from "react";

const Footer = () => {
  const {texts} = useContext(LanguageContext)
  return (
    <footer className="w-full h-full">
        <div className="box__copyright">
            <hr />
            {texts.allRightsReserved}
        </div>
    </footer>
  );
};

export default Footer;
