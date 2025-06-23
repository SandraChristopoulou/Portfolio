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
    <div
      id="contact"
      className=" min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-16 py-8 sm:py-12 lg:py-24 font-montserrat font-bold tracking-wider text-[12px]"
  
    >
      <div className="flex flex-col w-full max-w-3xl lg:max-w-5xl mx-auto px-4 sm:px-8 py-8 sm:py-12 lg:px-24 lg:py-32">
        <div className="relative rounded-2xl bg-[#0a1a3c]/90 backdrop-blur-md shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center px-5 py-2 bg-[#122f6d] rounded-t-2xl">
            <div className="flex items-center mr-auto space-x-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-[#C252E1]" />
              <span className="inline-block w-2 h-2 rounded-full bg-[#586AE2]" />
              <span className="inline-block w-2 h-2 rounded-full bg-[#9288ee]" />
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="inline-block w-1 h-1 rounded-full bg-[#999]" />
              <span className="inline-block w-1 h-1 rounded-full bg-[#999]" />
              <span className="inline-block w-1 h-1 rounded-full bg-[#999]" />
            </div>
          </div>
          {/* Body */}
          <div className="flex flex-col md:flex-row md:items-start">
            {/* Left */}
           
           <div className="flex flex-col px-4 py-8 md:w-2/3 md:px-12 md:py-16 lg:w-1/2 lg:px-16 lg:py-24">
  <div className="flex flex-col bg-gradient-to-r from-[#e252e1] to-[#C252E1] bg-clip-text text-transparent text-[26px] font-bold relative mb-8">
    <span>CONTACT</span>
    <span>ME</span>
    <span className="absolute left-0 -bottom-2 w-6 h-1 bg-[#C252E1] rounded" />
  </div>
  <div className="text-[10px] text-[#888] mb-4">
    PHONE NUMBER : +30 694 7633 560
  </div>
  <div className="text-[10px] text-[#888] mb-4">
    ADDRESS : LEOFOROS ATHINON 76 LOUTRAKI , GREECE
  </div>
  <div className="text-[10px] text-[#888] mb-8">
    EMAIL : CHRISTOPALEXANDRA@GMAIL.COM
  </div>
  <div className="space-y-8">
    <div className="flex gap-8">
      <Link
        href="https://github.com/SandraChristopoulou"
        className="text-[#888] hover:text-[#ba53e1] transition-all duration-200 transform hover:scale-110"
      >
        <AiOutlineGithub size={32} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/alexandra-christopoulou-8ba4052b3/"
        className="text-[#888] hover:text-[#ba53e1] transition-all duration-200 transform hover:scale-110"
      >
        <AiOutlineLinkedin size={32} />
      </Link>
    </div>
  </div>
</div>
            
            {/* Right */}
            <div className="md:w-1/2 px-8 py-12 md:px-12 md:py-16 lg:px-16 lg:py-24">
              <form
                ref={formRef}
                autoComplete="off"
                onSubmit={handleSend}
                className="flex flex-col gap-y-8 md:gap-y-12"
              >
                <div>
                  <input
                    className="w-full bg-transparent border-0 border-b border-[#666] text-[#ddd] text-[14px] uppercase py-3 px-0 outline-none focus:border-[#ddd] placeholder:text-[#666] transition-colors"
                    placeholder="NAME"
                    name="name"
                    required
                  />
                </div>
                <div>
                  <input
                    className="w-full bg-transparent border-0 border-b border-[#666] text-[#ddd] text-[14px] uppercase py-3 px-0 outline-none focus:border-[#ddd] placeholder:text-[#666] transition-colors"
                    placeholder="EMAIL"
                    name="email"
                    type="email"
                    required
                  />
                </div>
                <div>
                  <input
                    className="w-full bg-transparent border-0 border-b border-[#666] text-[#ddd] text-[14px] uppercase py-3 px-0 outline-none focus:border-[#ddd] placeholder:text-[#666] transition-colors"
                    placeholder="PHONE NUMBER"
                    name="contact"
                  />
                </div>
                <div>
                  <input
                    className="w-full bg-transparent border-0 border-b border-[#666] text-[#ddd] text-[14px] uppercase py-3 px-0 outline-none focus:border-[#ddd] placeholder:text-[#666] transition-colors"
                    placeholder="MESSAGE"
                    name="message"
                    required
                  />
                </div>
                <div className="flex justify-start md:justify-end space-x-4 pt-4">
                  <button
                    className="bg-transparent border-none bg-gradient-to-r from-[#586AE2] to-[#C252E1] bg-clip-text text-transparent text-[14px] cursor-pointer hover:text-[#ba53e1] transition-colors"
                    onClick={handleCancel}
                    type="button"
                  >
                    CANCEL
                  </button>
                  <button
                    className="bg-transparent border-none text-[14px] cursor-pointer bg-gradient-to-r from-[#586AE2] to-[#C252E1] bg-clip-text text-transparent hover:text-[#ba53e1] transition-colors"
                    type="submit"
                  >
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Credits */}
      </div>
      {/* Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Roboto+Condensed&display=swap"
        rel="stylesheet"
      />
      <style jsx global>{`
        .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }
        .font-roboto {
          font-family: 'Roboto Condensed', sans-serif;
        }
        html {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </div>
  );
}