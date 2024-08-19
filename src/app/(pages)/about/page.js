"use client"
import Header from "@/components/Header";
import { LanguageContext } from "@/Context";
import Image from "next/image";
import { useContext } from "react";

const About = () => {
  const { texts } = useContext(LanguageContext);
  return (
    <>
      <Header active="about" />
      <main>
        <section className="w-full p-2 flex flex-col justify-center items-center content-center mt-2 mb-2">
          <h1 className="text-3xl mb-2">{texts.aboutTitle}</h1>
          {texts.aboutSubtitle}
          <article className="mt-10 mx-auto w-2/3 flex-col justify-start align-start">
            {" "}
            <h2 className="text-2xl mb-2">{texts.aboutHowItWorks}</h2>
            {texts.aboutHowItWorksText}
            <video src="/images/pim_use.webm" autoplay controls></video>
          </article>
        </section>
        <section className="mt-10 mx-auto w-2/3 flex-col justify-start align-start mb-20">
          <p className="text-3xl mb-3">{texts.allResourcesTitle}</p>
          <article className="mb-12">
            <p className="text-2xl">Picture Metamorph</p>
            <ul>
              <li className="text-sm">
                {texts.allResourcesuse}
                <a
                  className="text-primary-400 text-xs"
                  href="/use"
                  target="_blank"
                >
                  https://picture-metamorph.vercel.app/use
                </a>
              </li>
              <li className="text-sm">
                {texts.allResourcesRepository}
                <a
                  className="text-primary-400 text-xs"
                  href="https://github.com/anthonyGarciaa/Picture_Metamorph"
                  target="_blank"
                >
                  https://github.com/anthony
                  <br />
                  Garciaa/Picture_Metamorph
                </a>
              </li>
            </ul>
          </article>
          <article>
            <p className="text-xl">Picture Metamorph API</p>
            <ul>
              <li className="text-sm">
                {texts.allResourcesUrl}{" "}
                <a
                  className="text-primary-400 text-xs"
                  href="https://picture-metamorph-api.vercel.app/"
                  target="_blank"
                >
                  https://picture-metamorph-api.vercel.app/
                </a>
              </li>
              <li className="text-sm">
                {texts.allResourcesDocumentation}{" "}
                <a
                  className="text-primary-400 text-xs"
                  href="/api"
                  target="_blank"
                >
                  https://picture-metamorph.vercel.app/api
                </a>
              </li>
              <li className="text-sm">
                {texts.allResourcesRepository} <br />
                <a
                  className="text-primary-400 text-xs"
                  href="https://github.com/anthonyGarciaa/Picture_Metamorph_API"
                  target="_blank"
                >
                  https://github.com/anthony
                  <br />
                  Garciaa/Picture_Metamorph_API
                </a>
              </li>
            </ul>
          </article>
        </section>
        <section className="w-full p-2 flex flex-col justify-center items-center content-center mt-2 mb-28">
          <h3 className="text-2xl">{texts.developedBy}</h3>
          <div className="big_logo rounded-full w-full flex justify-center items-center content-center h-52 mx-auto mt-5 mb-2 relative">
            <Image
              className="object-contain"
              src="/images/anthony.jpg"
              layout="fill"
              alt="foto de Anthony"
            ></Image>
          </div>
          <p className="text-xl mb-3">Anthony Garcia</p>
          <p className="max-w-96 text-center">{texts.devDescription}</p>
          <ul>
            <li className="relative text-sm mb-4"><Image src='/images/instagram.png' width={25} height={25}></Image><a className="text-primary-400" target="_blank" href="https://www.instagram.com/developtnb/">https://www.instagram.com/developtnb/</a></li>
            <li className="relative text-sm mb-4"><Image src='/images/linkedin.png' width={25} height={25}></Image><a className="text-primary-400" target="_blank" href="https://www.linkedin.com/in/anthony-garcíaaa">https://www.linkedin.com/in/anthony-garcíaaa</a></li>
            <li className="relative text-sm mb-4"><Image src='/images/github.png' width={29} height={29}></Image><a className="text-primary-400" target="_blank" href="https://github.com/anthonyGarciaa">https://github.com/anthonyGarciaa</a></li>
          </ul>
        </section>
      </main>
    </>
  );
};
export default About;
