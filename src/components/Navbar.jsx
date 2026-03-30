import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaGithub, FaXTwitter } from 'react-icons/fa6';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

const socialLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com', label: 'LinkedIn' },
    { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FaXTwitter, href: 'https://twitter.com', label: 'Twitter' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsScrolled(currentScrollY > 20);
            
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: isVisible ? 0 : -100 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
            >
                <div className={`mx-auto mt-4 transition-all duration-500 ${isScrolled ? 'max-w-4xl px-4' : 'max-w-7xl px-6 lg:px-16'}`}>
                    <div className={`relative flex items-center justify-between transition-all duration-500 rounded-2xl ${isScrolled ? 'glass-strong shadow-2xl shadow-primary/5 py-3 px-6' : 'py-6 px-0'}`}>
                        {/* Logo */}
                        <motion.a
                            href="#hero"
                            className="group flex items-center gap-2"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all duration-300">
                                T
                            </div>
                            <span className="text-xl font-bold tracking-tight hidden sm:block">
                                Ravaliya<span className="text-primary">.</span>
                            </span>
                        </motion.a>

                        {/* Desktop Nav Links */}
                        <div className="hidden md:flex items-center bg-white/5 rounded-xl px-2 py-1 border border-white/5">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="px-4 py-2 text-sm font-medium text-white/60 hover:text-white transition-all duration-300 rounded-lg hover:bg-white/5"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        {/* Social Icons + Mobile Toggle */}
                        <div className="flex items-center gap-3">
                            <div className="hidden sm:flex items-center gap-2">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/50 hover:text-primary hover:border-primary/30 transition-all duration-300"
                                    >
                                        <social.icon size={18} />
                                    </a>
                                ))}
                            </div>
                            
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="md:hidden w-10 h-10 rounded-xl glass flex items-center justify-center text-white/70"
                            >
                                {isMobileMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                        animate={{ opacity: 1, backdropFilter: 'blur(12px)' }}
                        exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                        className="fixed inset-0 z-40 bg-dark/60 md:hidden"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="absolute right-0 top-0 bottom-0 w-3/4 max-w-sm glass-strong border-l border-white/10 p-8 flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex flex-col gap-6 mt-16">
                                {navLinks.map((link, i) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-2xl font-bold text-white/60 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </motion.a>
                                ))}
                            </div>
                            
                            <div className="mt-auto flex gap-4">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-white/50"
                                    >
                                        <social.icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
