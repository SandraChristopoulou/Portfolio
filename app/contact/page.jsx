"use client";
import { useRef } from "react";
import Swal from "sweetalert2";
import Link from "next/link";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { BorderBeam } from "@/components/magicui/border-beam-new";

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
        <div className=" rounded-xl  flex flex-col w-full max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto">
          <div className="relative rounded-2xl bg-transparent backdrop-blur-xl  shadow-2xl overflow-hidden">
            <BorderBeam 
              size={300}
              duration={15}
              anchor={90}
              borderWidth={4}
              colorFrom="#C252E1"
              colorTo="#586AE2"
              delay={0}
            />
            {/* Header */}
            <div className="flex items-center px-3 sm:px-5 py-2 bg-white rounded-t-2xl">
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
            <div className="flex flex-col lg:flex-row lg:items-start">
              {/* Left */}
              <div className="flex flex-col px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:w-1/2 lg:px-12 lg:py-16 xl:px-16 xl:py-20">
                <div className="flex flex-col bg-gradient-to-r from-[#e252e1] to-[#C252E1] bg-clip-text text-transparent text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold relative mb-6 sm:mb-8">
                  <span>CONTACT</span>
                  <span>ME</span>
                  <span className="absolute left-0 -bottom-2 w-6 h-1 bg-[#C252E1] rounded" />
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
                      className="text-[#fff] hover:text-[#ba53e1] transition-all duration-200 transform hover:scale-110"
                    >
                      <AiOutlineGithub size={28} className="sm:w-8 sm:h-8" />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/alexandra-christopoulou-8ba4052b3/"
                      className="text-[#fff] hover:text-[#ba53e1] transition-all duration-200 transform hover:scale-110"
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
                      className="w-full bg-transparent border-0 border-b border-[#fff] text-[#ddd] text-xs sm:text-sm md:text-base uppercase py-2 sm:py-3 px-0 outline-none focus:border-[#ddd] placeholder:text-[#fff] transition-colors"
                      placeholder="NAME"
                      name="name"
                      required
                    />
                  </div>
                  <div>
                    <input
                      className="w-full bg-transparent border-0 border-b border-[#fff] text-[#ddd] text-xs sm:text-sm md:text-base uppercase py-2 sm:py-3 px-0 outline-none focus:border-[#ddd] placeholder:text-[#fff] transition-colors"
                      placeholder="EMAIL"
                      name="email"
                      type="email"
                      required
                    />
                  </div>
                  <div>
                    <input
                      className="w-full bg-transparent border-0 border-b border-[#fff] text-[#ddd] text-xs sm:text-sm md:text-base uppercase py-2 sm:py-3 px-0 outline-none focus:border-[#ddd] placeholder:text-[#fff] transition-colors"
                      placeholder="PHONE NUMBER"
                      name="contact"
                    />
                  </div>
                  <div>
                    <input
                      className="w-full bg-transparent border-0 border-b border-[#fff] text-[#ddd] text-xs sm:text-sm md:text-base uppercase py-2 sm:py-3 px-0 outline-none focus:border-[#ddd] placeholder:text-[#fff] transition-colors"
                      placeholder="MESSAGE"
                      name="message"
                      required
                    />
                  </div>
                  <div className="flex justify-start lg:justify-end space-x-4 pt-2 sm:pt-4">
                    <button
                      className="bg-transparent border-none text-[#ba53e1] text-xs sm:text-sm md:text-base cursor-pointer hover:text-[#ba53e1] transition-colors"
                      onClick={handleCancel}
                      type="button"
                    >
                      CANCEL
                    </button>
                    <button
                      className="border-none text-xs sm:text-sm md:text-base cursor-pointer text-[#ba53e1] hover:text-[#ba53e1] transition-colors"
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
    </section>
  );
}