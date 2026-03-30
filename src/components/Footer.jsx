import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaXTwitter } from 'react-icons/fa6';
import { HiHeart } from 'react-icons/hi';

const socialLinks = [
  { icon: FaLinkedin, href: 'https://www.linkedin.com', label: 'LinkedIn' },
  { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
  { icon: FaXTwitter, href: 'https://twitter.com', label: 'Twitter' },
];

const Footer = () => {
  return (
    <footer className="section-padding pb-12 relative overflow-hidden">
      <div className="container-custom">
        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#hero" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl">
                T
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Ravaliya<span className="text-primary">.</span>
              </span>
            </a>
            <p className="text-white/40 max-w-sm leading-relaxed mb-8">
              Crafting exceptional digital experiences through innovative engineering and thoughtful design. 
              Let's build the future together.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/40 hover:text-primary hover:border-primary/30 transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="flex flex-col gap-4">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-white/40 hover:text-primary transition-colors text-sm font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contact</h4>
            <ul className="flex flex-col gap-4">
              <li className="text-sm text-white/40">Rajkot, Gujarat, India</li>
              <li>
                <a href="mailto:tushar.ravaliya18@gmail.com" className="text-sm text-white/40 hover:text-primary transition-colors">
                  tushar.ravaliya18@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5">
          <p className="text-xs text-white/20 font-medium tracking-wider">
            &copy; {new Date().getFullYear()} TUSHAR RAVALIYA. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-1 text-xs text-white/20 font-medium tracking-wider uppercase">
            Built with <HiHeart className="text-primary animate-pulse" /> by Tushar
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
