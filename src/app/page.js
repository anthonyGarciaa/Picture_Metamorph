"use client";
import { LanguageContext } from "@/Context";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

export default function Home() {
  const { texts } = useContext(LanguageContext);

  return (
    <>
      <header className="home-header mt-1 flex-column h-13 w-full mx-auto justify-center items-center content-center text-center mb-6">
        <div className="big_logo w-full flex justify-center items-center content-center h-80 mx-auto relative">
          <Image
            className="object-contain"
            src="/images/picture_metamorph.png"
            layout="fill"
            alt="Logo de picture_metamorh"
          />
        </div>
        <h1 className="mx-auto bottom-10 relative text-xl roboto-bold-italic text-primary-700 ">
          {texts.homeTitle}
        </h1>
      </header>
      <main className="home-main flex-col justify-center content-center h-full w-full">
        <div className="link-container w-60 relative bottom-8 mx-auto">
          <Link href="/api">
            <div className="link-card border-solid  border-primary-400 rounded-2xl border-2 p-2 mx-auto w-90 mb-2">
              <h2 className="roboto-bold text-secondary-100">{texts.apiHomeTitle}</h2>
              <h3 className="roboto-medium transition-colors transition-transform">{texts.apiHomeSubTitle}</h3>
              <div className="arrow-container">
                <div className="right-arrow transition-transform relative w-10 h-6">
                  <Image
                    className="object-contain"
                    src="/images/right-arrow.png"
                    layout="fill"
                    alt="right-arrow"
                  />
                </div>
              </div>
            </div>
          </Link>
          <Link href="/use">
            <div className="link-card border-solid  border-primary-400 rounded-2xl border-2 p-2 w-full">
              <h2 className="roboto-bold text-secondary-100">{texts.useHomeTitle}</h2>
              <h3 className="roboto-medium transition-colors transition-transform">{texts.useHomeSubtitle}</h3>
              <div className="arrow-container">
                <div className="right-arrow transition-transform relative w-10 h-6">
                  <Image
                    className="object-contain"
                    src="/images/right-arrow.png"
                    layout="fill"
                    alt="right-arrow"
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </main>
      <Footer/>
    </>
  );
}
