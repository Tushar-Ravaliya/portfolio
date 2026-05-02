import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-32 pb-16">
      <div className="container-custom relative z-10 flex flex-col md:flex-row items-end justify-between gap-12">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-sm tracking-[0.2em] uppercase text-primary font-bold mb-6">Tushar Ravaliya</p>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-[0.9] text-dark tracking-tighter"
          >
            Full Stack<br />
            <span className="italic text-primary font-normal">Architect.</span>
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-sm"
        >
          <p className="text-dark/70 text-lg leading-relaxed mb-8">
            Building high-performance, scalable web solutions with precision and passion. 
            Bridging the gap between complex logic and elegant user interfaces.
          </p>
          
          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-dark text-light font-medium hover:bg-primary transition-colors duration-300"
            >
              Selected Works
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-dark/20 text-dark font-medium hover:border-dark transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-12 left-6 right-6 lg:left-12 lg:right-12 h-[1px] bg-dark/10 origin-left"
      />
    </section>
  );
}

export default Hero;
