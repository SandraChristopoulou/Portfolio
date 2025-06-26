"use client";
import { useRef } from "react";
import Swal from "sweetalert2";
import Link from "next/link";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

export default function ContactPage() {
  const formRef = useRef(null);

  function handleSend(e) {
    e.preventDefault();
    Swal.fire({
      title: "Thank you!",
      text: "Your message has been sent.",
      icon: "success",
      confirmButtonColor: "#ea1d6f",
    });
    formRef.current.reset();
  }

  function handleCancel(e) {
    e.preventDefault();
    formRef.current.reset();
  }

  return (
    <section
      id="contact"
      className="page-container font-montserrat font-bold tracking-wider"
    >
      <div className="content-container ">
        <div className="rounded-xl flex flex-col w-full max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto">
          {/* Neon Glow Container */}
          <div className="relative">
            {/* Outer glow - static */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a3c] via-[#2e5cff] to-[#e252e1] rounded-2xl blur-2xl opacity-75"></div>
            
            {/* Main card */}
            <div className="relative rounded-2xl bg-gray-900/95 backdrop-blur-xl overflow-hidden border-2 border-[#2e5cff] shadow-[0_0_50px_rgba(46,92,255,0.8)]">
            {/* Header */}
            <div className="relative z-10 flex items-center px-3 sm:px-5 py-2 bg-gray-800 rounded-t-2xl border-b border-[#2e5cff]/30">
              <div className="flex items-center mr-auto space-x-1.5">
                <span className="inline-block w-2 h-2 rounded-full bg-[#2e5cff] shadow-[0_0_5px_rgba(46,92,255,0.8)]" />
                <span className="inline-block w-2 h-2 rounded-full bg-[#e252e1] shadow-[0_0_5px_rgba(226,82,225,0.6)]" />
                <span className="inline-block w-2 h-2 rounded-full bg-[#0a1a3c] shadow-[0_0_5px_rgba(10,26,60,0.4)]" />
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="inline-block w-1 h-1 rounded-full bg-gray-400" />
                <span className="inline-block w-1 h-1 rounded-full bg-gray-400" />
                <span className="inline-block w-1 h-1 rounded-full bg-gray-400" />
              </div>
            </div>
            {/* Body */}
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-start">
              {/* Left */}
              <div className="flex flex-col px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:w-1/2 lg:px-12 lg:py-16 xl:px-16 xl:py-20">
                <div className="flex flex-col text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold relative mb-6 sm:mb-8">
                  <span className="bg-white bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(46,92,255,1)]">CONTACT</span>
                  <span className="bg-gradient-to-r from-[#2e5cff] to-[#e252e1] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(226,82,225,1)]">ME</span>
                  <span className="absolute left-0 -bottom-2 w-6 h-1 bg-gradient-to-r from-[#2e5cff] to-[#e252e1] rounded shadow-[0_0_10px_rgba(46,92,255,0.8)]" />
                </div>
                <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <div className="text-[#fff]">
                    PHONE NUMBER : +30 694 7633 560
                  </div>
                  <div className="text-[#fff]">
                    ADDRESS : LEOFOROS ATHINON 76 LOUTRAKI , GREECE
                  </div>
                  <div className="text-[#fff]">
                    EMAIL : CHRISTOPALEXANDRA@GMAIL.COM
                  </div>
                </div>
                <div className="pt-6 sm:pt-8">
                  <div className="flex gap-6 sm:gap-8">
                    <Link
                      href="https://github.com/SandraChristopoulou"
                      className="text-[#2e5cff] hover:text-[#e252e1] transition-all duration-200 transform hover:scale-110 drop-shadow-[0_0_8px_rgba(46,92,255,0.8)]"
                    >
                      <AiOutlineGithub size={28} className="sm:w-8 sm:h-8" />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/alexandra-christopoulou-8ba4052b3/"
                      className="text-[#2e5cff] hover:text-[#e252e1] transition-all duration-200 transform hover:scale-110 drop-shadow-[0_0_8px_rgba(46,92,255,0.8)]"
                    >
                      <AiOutlineLinkedin size={28} className="sm:w-8 sm:h-8" />
                    </Link>
                  </div>
                </div>
              </div>
              {/* Right */}
              <div className="lg:w-1/2 px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-12 lg:py-16 xl:px-16 xl:py-20">
                <form
                  ref={formRef}
                  autoComplete="off"
                  onSubmit={handleSend}
                  className="flex flex-col gap-y-6 sm:gap-y-8 md:gap-y-10"
                >
                  <div>
                    <input
                      className="w-full bg-transparent border-0 border-b-2 border-[#2e5cff] text-white text-xs sm:text-sm md:text-base uppercase py-2 sm:py-3 px-0 outline-none focus:border-[#fffeff] transition-all duration-300 placeholder:text-[#2e5cff]/70"
                      placeholder="NAME"
                      name="name"
                      required
                    />
                  </div>
                  <div>
                    <input
                      className="w-full bg-transparent border-0 border-b-2 border-[#2e5cff] text-white text-xs sm:text-sm md:text-base uppercase py-2 sm:py-3 px-0 outline-none focus:border-[#ffffff] transition-all duration-300 placeholder:text-[#2e5cff]/70"
                      placeholder="EMAIL"
                      name="email"
                      type="email"
                      required
                    />
                  </div>
                  <div>
                    <input
                      className="w-full bg-transparent border-0 border-b-2 border-[#2e5cff] text-white text-xs sm:text-sm md:text-base uppercase py-2 sm:py-3 px-0 outline-none focus:border-[#ffffff] transition-all duration-300 placeholder:text-[#2e5cff]/70"
                      placeholder="PHONE NUMBER"
                      name="contact"
                    />
                  </div>
                  <div>
                    <input
                      className="w-full bg-transparent border-0 border-b-2 border-[#2e5cff] text-white text-xs sm:text-sm md:text-base uppercase py-2 sm:py-3 px-0 outline-none focus:border-[#ffffff] transition-all duration-300 placeholder:text-[#2e5cff]/70"
                      placeholder="MESSAGE"
                      name="message"
                      required
                    />
                  </div>
                  <div className="flex justify-start lg:justify-end space-x-4 pt-2 sm:pt-4">
                    <button
                      className="bg-transparent border-none text-white text-xs sm:text-sm md:text-base cursor-pointer hover:text-cyan-300 transition-all duration-300"
                      onClick={handleCancel}
                      type="button"
                    >
                      CANCEL
                    </button>
                    <button
                      className="border-none text-xs sm:text-sm md:text-base cursor-pointer text-white hover:text-cyan-300 transition-all duration-300"
                      type="submit"
                    >
                      SEND
                    </button>
                  </div>
                </form>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}