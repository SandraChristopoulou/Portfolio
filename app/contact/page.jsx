'use client'
import React from 'react';
import Swal from 'sweetalert2';
import Link from 'next/link';
import { AiOutlineInstagram , AiOutlineGithub , AiOutlineLinkedin} from 'react-icons/ai';

const ContactForm = () => {
  async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "53e91aca-902f-429d-bc01-45d6034b3076");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    });
    const result = await response.json();
    if (result.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
      });
    }
  }

  return (

<div className="min-h-screen flex items-center justify-center ">
      <div className="w-full max-w-6xl mx-auto  shadow-lg rounded-lg p-8 flex flex-col md:flex-row">

        {/* Left Section */}
        <div className="md:w-1/2 p-6 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
        
          <div className="flex items-center space-x-4">
            <div className="p-3 text-white rounded-full">
              <span>
              <Link href="https://www.instagram.com/christopoyloyyy/"><AiOutlineInstagram size={30} className="cursor-pointer" /></Link>
              </span>
            </div>
            <span className="text-white font-bold ">Follow my Instagram</span>
          </div>


        <div className="flex items-center space-x-4 mt-4">
          <div className="p-3  text-white rounded-full">
              <span>
              <Link href="https://github.com/yumeko1232"><AiOutlineGithub size={30} className="cursor-pointer" /></Link>
              </span>
           </div>
            <span className="text-white font-bold ">Find my code here</span>
          </div>


          <div className="flex items-center space-x-4 mt-4">
          <div className="p-3  text-white rounded-full">
              <span>
              <Link href="https://www.linkedin.com/in/alexandra-christopoulou-8ba4052b3/"><AiOutlineLinkedin size={30} className="cursor-pointer" /></Link>
              </span>
           </div>
            <span className="text-white font-bold ">Hire me!</span>
          </div>
           
        </div>

      

          <div>
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" name="name" placeholder="Name" className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2A2356] text-white placeholder-gray-500" required />
                <input type="email" name="email" placeholder="Email" className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2A2356] text-white placeholder-gray-500" required />
              </div>
              <textarea name="message" placeholder="Message" rows={6} className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2A2356] text-white placeholder-gray-500" required></textarea>
              <button type="submit" className="px-6 py-2 bg-gradient-to-r from-[#586AE2] to-[#C252E1]  rounded-md font-semibold w-full">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    
  );
};

export default ContactForm;