"use client";
import { LanguageContext } from "@/Context";
import Header from "@/components/Header";
import { useContext, useEffect, useRef, useState } from "react";
import FormMessage from "@/components/FormMessage";
import Image from "next/image";
import { Loader } from "rsuite";
import "rsuite/dist/rsuite-no-reset.min.css";

const initialForm = { name: "", email: "", comments: "" };

const Contact = () => {
  const [Message, setMessage] = useState({ err: false, text: "" });
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(initialForm);

  const button = useRef();

  const { texts } = useContext(LanguageContext);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name.length === 0)
      setMessage({ err: true, text: texts.contactNameIsRequired });
    else if (form.email.length === 0)
      setMessage({ err: true, text: texts.contactEmailIsRequired });
    else if (form.email.length === 0)
      setMessage({ err: true, text: texts.contactCommentIsRequired });
    else if (!new RegExp(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/).exec(form.name))
      setMessage({
        err: true,
        text: texts.contactInvalidName
      });
    else if (
      !new RegExp(
        /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/
      ).exec(form.email)
    )
      setMessage({ err: true, text: texts.contactInvalidEmail });
    else setMessage({ err: false, text: "" });
  };
  useEffect(() => {
    const send = async () => {
      button.current.setAttribute("disabled", "true");
      setLoading(true);
      try {
        const res = await fetch("https://picture-metamorph-smail.vercel.app/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            comments: form.comments,
          }),
        });

        if(res.ok){
      
          setMessage({ err: false, text: texts.contactSuccessMessage}),
          setForm(initialForm),
          setTimeout(() => setMessage({ err: false, text: "" }), 3000)
        }
      else throw res
        
        
      } catch (err) {
        setMessage({
          err: true,
          text: texts.contactFailedMessage,
        });
      }
      setLoading(false);
      button.current.removeAttribute("disabled");
    };
    if (!Message.err && form.name) {
      send();
    }
  }, [Message]);

  return (
    <>
      <Header active="contact" />
      <main className="h-96vh mb-16 flex justify-center align-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col h-full w-8/12 h-70 mt-9 mx-auto"
          encType="application/x-www-form-urlencoded"
        >
          <input
            className="pl-2 text-center text-xl mb-2 border-b-2 rounded-t-md border-primary-600 bg-primary-50 focus:outline-none focus:bg-primary-100"
            type="text"
            name="name"
            id="name"
            value={form.name}
            placeholder={texts.contactNameLabel}
            required
            onChange={handleChange}
          />
          <input
            className="pl-2 text-center text-xl mb-2 border-b-2 rounded-t-md border-primary-600 bg-primary-50 focus:outline-none focus:bg-primary-100"
            type="email"
            name="email"
            id="email"
            value={form.email}
            placeholder={texts.contactEmailLabel}
            required
            onChange={handleChange}
          />
          <textarea
            className="pl-2 text-xl h-48 resize-none border-t-2 rounded-md border-primary-600 bg-primary-50 focus:outline-none focus:bg-primary-100"
            name="comments"
            id="comments"
            value={form.comments}
            onChange={handleChange}
            cols="50"
            rows="10"
            placeholder={texts.contactTextareaLabel}
            required
          ></textarea>
          <div className="form-message-container flex justify-center mt-1.5 h-10">
            {loading && <Loader size="md" className="mx-auto" />}
            {Message.text !== "" && (
              <FormMessage text={Message.text} err={Message.err} />
            )}
          </div>
          <button
            ref={button}
            className="roboto-black flex justify-between items-center p-2 relative border-2 border-primary-400 mt-4 w-24 mx-auto bg-primary-200 p-1 rounded-md transition-colors cursor-pointer hover:bg-primary-300"
            type="submit"
          >
            {texts.contactSend}
            <Image src={"/images/send_message.png"} width={20} height={20} alt="send_message_picture"/>
          </button>
        </form>
      </main>
    </>
  );
};
export default Contact;
