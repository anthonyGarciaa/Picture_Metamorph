"use client";
import Header from "@/components/Header";
import { useContext, useState } from "react";
import WhatIsIt from "@/components/WhatIsIt";
import GettingStarted from "@/components/GettingStarted";
import { LanguageContext, SectionContext } from "@/Context";

const Api = () => {
  const { currentSection, setCurrentSection } = useContext(SectionContext);
  const {texts} = useContext(LanguageContext)
  const sectionsSwitch = (section) => {
    switch (section) {
      case "What is it":
        return <WhatIsIt />; 
        break;
      case "Getting started":
        return <GettingStarted />;
    }
  };
  return (
    <>
      <Header active="api" />
      <main className="w-full">
        <h1 className="text-2xl float-end mt-2 mr-2 m-auto roboto-regular-italic">
          Picture metamorph API v1.0.0
        </h1>
        <section className="api-navbar w-32 pt-2 pl-2">
          <nav>
            <ul className="roboto-medium">
              <li
                className={`${
                  currentSection === "What is it"
                    ? "section-active"
                    : "cursor-pointer hover:text-primary-500"
                } w-max`}
                onClick={
                  currentSection !== "What is it"
                    ? () => {
                        setCurrentSection("What is it");
                      }
                    : null
                }
              >
                {texts.whatIsItSessionName}
              </li>
              <li
                className={`${
                  currentSection === "Getting started"
                    ? "section-active"
                    : "cursor-pointer hover:text-primary-500"
                } w-max`}
                onClick={
                  currentSection !== "Getting started"
                    ? () => {
                        setCurrentSection("Getting started");
                      }
                    : null
                }
              >
                {texts.gettingStartedSessionName}
              </li>
            </ul>
          </nav>
        </section>
        <div className="doc-container mt-6">
          {sectionsSwitch(currentSection)}
        </div>
      </main>
    </>
  );
};

export default Api;
