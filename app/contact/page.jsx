'use client'
import React from 'react';
import Swal from 'sweetalert2'




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
    <div>
      <section  id="contact" className="flex justify-center items-center  min-h-screen " >
        <form className=" bg-gradient-to-br from-[#2D1C7F] to-[#C8B3F6] max-w-[600px] w-full bg-white p-[25px] sm:p-[30px] rounded-lg shadow-md text-[#333] my-[25px]" onSubmit={onSubmit}>
          <h2 className=" text-white text-[30px] font-bold text-center">Contact Me</h2>

          <div className="input-box mt-5">
            <label className="block font-medium text-white">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
               name='name' required
              className="bg-transparent w-full h-[50px] border-2 border-white outline-none rounded-md p-[15px] text-[16px] text-white mt-2"
            />
          </div>

          <div className="input-box mt-5">
            <label className="block font-medium text-white">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              name='name' required
              className="bg-transparent w-full h-[50px] border-2 border-white outline-none rounded-md p-[15px] text-[16px] text-white mt-2"
            />
          </div>

          <div className="input-box mt-5">
            <label className="block font-medium text-white">Your Message</label>
            <textarea
               name='message' className=" bg-transparent w-full h-[200px] border-2 border-white outline-none rounded-md p-[15px] text-[16px] text-white mt-2 resize-none"
              placeholder="Write your message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full h-[55px] bg-[#0D0E20] border-none rounded-md shadow-md cursor-pointer text-white font-medium text-[16px] mt-6 transition duration-500 hover:bg-[#2D1C7F]"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactForm;
