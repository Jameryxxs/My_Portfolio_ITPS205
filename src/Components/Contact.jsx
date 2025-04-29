import React from "react";

function Contact() {
  return (
    <section id="contact" className="p-10 bg-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
      <form className="flex flex-col gap-6 max-w-xl mx-auto bg-gray-700 p-8 rounded-lg">
        <input type="text" placeholder="Your Name" className="p-3 rounded bg-gray-600 text-white" required />
        <input type="email" placeholder="Your Email" className="p-3 rounded bg-gray-600 text-white" required />
        <textarea placeholder="Your Message" className="p-3 rounded bg-gray-600 text-white" rows="5" required></textarea>
        <button type="submit" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
