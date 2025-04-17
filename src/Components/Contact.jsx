import React from 'react';
import { useRef } from 'react';
import emailjs from "emailjs-com";
import { toast } from 'react-toastify';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service',
      'template_mryt2se',  
      form.current,
      'EErL-6RasJ4hGykX7'   
    )
    .then((result) => {
      toast.success("Message sent successfully");
    }, (error) => {
      toast.error("Something wrong");
    });

    e.target.reset();
  };
  return (
    <section id="contact" className="w-full py-20 bg-gradient-to-b from-white via-purple-50 to-blue-100">
      <div className="container mx-auto px-6 md:px-20">
        <h2 className="text-center text-5xl font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-indigo-600 via-teal-500 to-blue-500 mb-8">
          Contact Me
        </h2>

        <form ref={form} onSubmit={sendEmail} className="max-w-4xl mx-auto  p-8 rounded-xl  space-y-6">
          <div>
            <label className="block mb-2 text-gray-600 font-medium">Name</label>
            <input name="name"
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-teal-600"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-600 font-medium">Email</label>
            <input name="email"
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-teal-600"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-600 font-medium">Message</label>
            <textarea name="message"
              rows="5"
              placeholder="Write your message..."
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-teal-600"
            ></textarea>
          </div>

          <button
            type="submit"
            className="cursor-pointer w-full bg-teal-600 text-white py-3 rounded-md hover:bg-teal-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
