import React from "react";

const Footer = () => {
  return (
    <div className="text-center p-4 text-neutral-500 text-sm">
      <p>
        &copy; {new Date().getFullYear()} Tushar Ravaliya. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
