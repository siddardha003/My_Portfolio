"use client";
import { useState, useRef } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ArrowuprightIcon from "../../public/assets/icons/arrow-up-right.svg";
import grainImage from "../../public/assets/images/grain.jpg";
import emailjs from '@emailjs/browser';

export const ContactSection = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const handleContactClick = () => {
    setFormVisible(true);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_qj2q7qk', 'template_0jd6k6l', form.current, '8VDp0qPgXpe2ya-uS')
        .then(
          (result) => {
            console.log('SUCCESS!', result.text);
            toast.success('Email sent successfully!', {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          },
          (error) => {
            console.log('FAILED...', error.text);
            toast.error('Failed to send email. Please try again.', {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }
        );
    }
    setFormVisible(false);
  };

  return (
    <section className="py-24">
      <ToastContainer />
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <p className="uppercase  font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400  bg-clip-text text-transparent text-center">
            Contact</p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-4">Connect with me</h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-3xl mx-auto">I'm just a message away! Whether it's for a project, or just a chat, feel free to contact me. I'd love to hear from you!</p>
        <div className="relative mt-24">
          <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
            <div
              className="absolute inset-0 opacity-5 -z-10"
              style={{
                backgroundImage: `url(${grainImage.src})`,
              }}
            ></div>

            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl">
                  Let's create something amazing together.
                </h2>
                <p className="text-sm md:text-base mt-2">
                  Ready to bring your next project to life? Let's connect and
                  discuss how I can help you achieve your goals.
                </p>
              </div>
              <div className="">
                <button
                  className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900"
                  onClick={handleContactClick}
                >
                  <span className="font-semibold">Contact me</span>
                  <ArrowuprightIcon className="size-4" />
                </button>
              </div>
            </div>
          </div>
          {isFormVisible && (
            <div className="mt-10 flex flex-col md:flex-row gap-8 items-start border border-white/20 rounded-3xl overflow-hidden">
              <div className="md:w-1/2 px-8">
                <h2 className="font-serif text-2xl md:text-3xl mt-24 mb-2 bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
                  Contact me for collaboration
                </h2>
                <p className="text-sm md:text-base mb-6">
                  Reach out today to discuss your project needs and start
                  collaborating on something amazing!
                </p>
              </div>
              <div className="md:w-1/2 bg-gray-900 text-white p-8 rounded-lg">
                <form ref={form} className="flex flex-col gap-4" onSubmit={sendEmail}>
                  <div className="flex flex-col md:flex-row gap-4">
                    <input
                      type="text"
                      placeholder="Name"
                      name="from_name"
                      className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      name="from_email"
                      className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white"
                    />
                  </div>
                  <textarea
                    placeholder="Message"
                    className="px-4 py-2 rounded-lg bg-gray-800 text-white"
                    name="message"
                    rows={4}
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-blue-500 px-6 py-2 rounded-lg bg-gradient-to-r from-emerald-300 to-sky-400 text-[#000] font-semibold"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
