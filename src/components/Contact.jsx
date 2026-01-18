import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className="border-b border-neutral-900 pb-20">
      <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
      <div className="text-center tracking-tighter">
        <p className="my-4 text-neutral-400">123 Street, City, Country</p>
        <p className="my-4 text-neutral-400">+1 234 567 890</p>
        <a href="mailto:email@example.com" className="border-b border-neutral-500 my-4 text-neutral-400 hover:text-white transition-colors">email@example.com</a>
      </div>
    </div>
  );
};

export default Contact;
