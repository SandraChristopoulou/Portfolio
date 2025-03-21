"use client"

import Swal from "sweetalert2"
import Link from "next/link"
import { AiOutlineInstagram, AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai"
import { MapPin , Phone , Mail } from "lucide-react"

const ContactForm = () => {
  async function onSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target)

    formData.append("access_key", "53e91aca-902f-429d-bc01-45d6034b3076")

    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
    const result = await response.json()
    if (result.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      })
    }
  }

  return (
    <div id="contact" className="min-h-screen flex items-center justify-center px-4 py-12 sm:px-8 lg:px-16 " style={{ backgroundImage: "url('/images/bg.png')" ,
      backgroundSize: "cover", // Ensures the image covers the entire div
      backgroundPosition: "center", // Centers the image
      backgroundRepeat: "no-repeat", // Prevents repeating
      backgroundBlendMode: "overlay", // Optional: blends image with the form's background
}}>
      <div className="w-full max-w-7xl mx-auto " >
        <div className="flex flex-col-reverse md:flex-row gap-8 sm:gap-12 md:gap-24 lg:gap-32 items-center text-center md:text-left">
          
          {/* Left Section - Contact Information */}
          <div className="w-full md:w-[48%] lg:w-[45%] p-6 sm:p-8 md:p-10 rounded-3xl " >
            <div className="space-y-12 sm:space-y-16">
              <div className="space-y-6">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-8 ">
                  Contact Information
                </h2>
                <div className="space-y-12 text-white text-center">
                  <div className="flex items-center gap-3 text-base sm:text-lg">
                    <MapPin className="h-5 w-5 text-[#ffffff]" /> <span>Loutraki, Greece 20300</span>
                  </div>
                  <div className="flex items-center gap-3 text-base sm:text-lg">
                    <Phone className="h-5 w-5 text-[#ffffff]" /> <span>+30 694 7633 560</span>
                  </div>
                  <div className="flex items-center gap-3 text-base sm:text-lg">
                    <Mail className="h-5 w-5 text-[#ffffff]" /> <span>christopalexandra@gmail.com</span>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex gap-8">
                  <Link href="https://www.instagram.com/christopoyloyyy/" className="text-white hover:transition-all duration-200 transform hover:scale-110">
                    <AiOutlineInstagram size={32} />
                  </Link>
                  <Link href="https://github.com/SandraChristopoulou" className="text-white hover:text-[#ba53e1] transition-all duration-200 transform hover:scale-110">
                    <AiOutlineGithub size={32} />
                  </Link>
                  <Link href="https://www.linkedin.com/in/alexandra-christopoulou-8ba4052b3/" className="text-white hover:text-[#ba53e1] transition-all duration-200 transform hover:scale-110">
                    <AiOutlineLinkedin size={32} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="w-full md:w-[48%] lg:w-[45%] p-6 sm:p-8 md:p-10 bg-[#1111118c] rounded-3xl border border-transparent backdrop-blur-lg  ">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 text-center md:text-left">
                Contact Me
              </h2>
              <form onSubmit={onSubmit} className="space-y-6 sm:space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <input type="text" name="firstName" placeholder="First Name" className="w-full px-4 py-3 bg-[#74747470] border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ffffff] text-white placeholder-gray-400 transition-all duration-200" required />
                  <input type="text" name="lastName" placeholder="Last Name" className="w-full px-4 py-3 bg-[#74747470] border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ffffff] text-white placeholder-gray-400 transition-all duration-200" required />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <input type="email" name="email" placeholder="Mail" className="w-full px-4 py-3 bg-[#74747470] border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ffffff] text-white placeholder-gray-400 transition-all duration-200" required />
                  <input type="tel" name="phone" placeholder="Phone" className="w-full px-4 py-3 bg-[#74747470] border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ffffff] text-white placeholder-gray-400 transition-all duration-200" required />
                </div>
                <textarea name="message" placeholder="Message" rows={6} className="w-full px-4 py-3 bg-[#74747470] border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ffffff] text-white placeholder-gray-400 transition-all duration-200 resize-none" required></textarea>
                <button type="submit" className="w-full sm:w-fit px-6 py-3 bg-[#ffffff] hover:bg-[#c9c9c967] hover:text-white text-black rounded-xl font-semibold transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ContactForm


