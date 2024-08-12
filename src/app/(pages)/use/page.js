"use client";
import { LanguageContext } from "@/Context";
import Header from "@/components/Header";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import useMessageEffect from "@/hooks/useMessageEffect";
import Image from "next/image";
import {saveAs} from 'file-saver'
let zip = require('jszip')();

const Use = () => {
  const { texts, language, textTemplates } = useContext(LanguageContext);
  const [message, setMessage] = useState(texts.depositLabelText);
  const [data, setData] = useState([]);

useMessageEffect(message,setMessage)

  const handleConvert = (e) => {
    setData([]);
    e.preventDefault();

    const dataFormulario = new FormData(e.target);

    setMessage(texts.depositLabelTextLoading);

    fetch("http://localhost:5000/getPicture", {
      method: "POST",
      body: dataFormulario,

    })
      .then((res) => {
        if (res.ok) {
          setMessage(texts.depositLabelText);
          return res.json();
        }
      })
      .then((json) => {
        if (json.data.length) {
          setData([...json.data]);
          setMessage(texts.depositLabelText);
        }
      })
      .catch((err) => {
        console.log(err)
        setMessage(texts.depositLabelTextServerError);
      });
  };

  const exportZip = (e)=> {
    data.forEach(file=>{
      zip.file(file.name,file.base64,{base64:true});
    })
    zip.generateAsync({type:'blob'}).then(content=>{
      saveAs(content, 'pim.zip')
    })
    zip = require('jszip')();
    setData([]);
  }

  return (
    <>
      <Header active="use" />

      <main className="w-full mb-32">
        <div className="h-80 m-auto flex flex-col justify-end items-center  w-screen use-container">
          <form
            className="flex-col w-82 justify-center items-center"
            onSubmit={handleConvert}
            method="post"
            action="http://localhost:5000/getPicture"
            encType="multipart/form-data"
          >
            <div className="mb-2.5">
              <label className="roboto-bold" htmlFor="format">{texts.useLabel} </label>
              <select
                name="format"
                className="format"
                id="format"
              >
                <option value="image/jpeg">.JPG</option>
                <option value="image/png">.PNG</option>
                <option value="image/gif">.GIF</option>
                <option value="image/tiff">.TIFF</option>
                <option value="image/webp">.WEBP</option>
              </select>
            </div>
            <label className="roboto-bold" htmlFor="files">{message} </label>
            <input className="roboto-bold-italic hover:file:bg-primary-50 file:bg-primary-200 file:text-primary-900 file:p-1.5 file:rounded-2xl"
              name="file"
              type="file"
              id="files"
              accept=".jpeg, .png, .webp, .gif, .tiff"
              multiple
            ></input>
            <button className="submit-btn block mt-8 m-auto" role="button">
              {texts.submitBtn}
            </button>
          </form>
        <div className="downloading-container w-full flex justify-center content-center">
        {data.length>0 && <button className="downloading-btn relative h-16 w-16"><Image onClick={exportZip} className="mt-10 transition-colors hover:bg-primary-400 rounded-full" src={'/images/downloading.png'} layout="fill" alt="download_picture" /></button>}
        </div>
        </div>
      </main>
    </>
  );
};

export default Use;
