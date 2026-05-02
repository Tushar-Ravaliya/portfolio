import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: 'Works', href: '#projects' },
    { name: 'Expertise', href: '#skills' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-light/90 backdrop-blur-md border-b border-dark/10 py-4' : 'py-8'}`}
        >
            <div className="container-custom flex items-center justify-between">
                <a href="#hero" className="text-xl font-display font-bold tracking-tight text-dark uppercase">
                    Tushar.
                </a>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-dark/60 hover:text-primary transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <a
                    href="mailto:hello@example.com"
                    className="hidden md:inline-block text-sm font-bold uppercase tracking-widest text-dark hover:text-primary transition-colors"
                >
                    Available
                </a>
            </div>
        </motion.nav>
    );
};

export default Navbar;
