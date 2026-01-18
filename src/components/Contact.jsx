import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="border-b border-neutral-900 pb-20">
      <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
      <div className="text-center tracking-tighter">
        <p className="my-4 text-neutral-400">Rajkot, India</p>
        <p className="my-4 text-neutral-400">+91 234 567 890</p>
        <a
          href="mailto:tushar.ravaliya18@gmail.com"
          className="border-b border-neutral-500 my-4 text-neutral-400 hover:text-white transition-colors"
        >
          tushar.ravaliya18@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Contact;
