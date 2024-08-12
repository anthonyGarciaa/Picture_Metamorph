"use client";
import { LanguageContext } from "@/Context";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import DropDownMenu from "./DropDownMenu";
import SimpleNavMenu from "./SimpleNavMenu";
import { useMediaQuery } from "rsuite/esm/useMediaQuery/useMediaQuery";

const Header = ({ active }) => {
  const { setLanguage, setTexts, textTemplates } = useContext(LanguageContext);
  const [isMobile] = useMediaQuery("(max-width:489px)");
  const handleLanguage = (e) => {
    setLanguage(e.target.value);
    setTexts(textTemplates[e.target.value]);
  };

  return (
    <>
    {isMobile && <DropDownMenu active={active} handleLanguage={handleLanguage} />}
    <header className="nav-header h-20 w-full opacity-90 backdrop-opacity-100 bg-primary-700 text-primary-300 text-xl flex justify-center">
      <div className={`container flex flex-wrap ${!isMobile?'justify-between':'justify-center'} `}>
        <div className="w-20 h-full logo flex relative">
          <Image
            className="opacity-100"
            src="/images/pim.png"
            layout="fill"
            alt="picture_metamorh_logo"
          />
        </div>

        {!isMobile && (<SimpleNavMenu active={active} handleLanguage={handleLanguage} />)}
      </div>
    </header>
    </>
  );
};

export default Header;
