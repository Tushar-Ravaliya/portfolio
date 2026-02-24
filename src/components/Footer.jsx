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
    <footer className="relative">
      {/* Gradient Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 lg:px-16 max-w-7xl py-10"
      >
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-5">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/40 hover:text-cyan-400 hover:border-cyan-400/20 transition-all duration-300"
              >
                <social.icon className="text-lg" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-white/30 flex items-center gap-1">
            &copy; {new Date().getFullYear()} Tushar Ravaliya. Made with
            <HiHeart className="text-rose-400/60 text-xs" />
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
