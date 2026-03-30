import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.03, delayChildren: 0.3 },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: 'spring', damping: 12, stiffness: 100 },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const Hero = () => {
  const name = 'Tushar Ravaliya';

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 overflow-hidden"
    >
      {/* Decorative floating elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[80px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] animate-float-delayed" />

      {/* Hero Content */}
      <div className="container-custom relative z-10 flex flex-col items-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs sm:text-sm text-white/70 font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for new projects
          </div>
        </motion.div>

        {/* Title Section */}
        <div className="text-center mb-8">
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-4 leading-[0.9]"
          >
            {name.split('').map((char, i) => (
              <motion.span
                key={i}
                variants={letterVariants}
                className={char === ' ' ? 'inline-block w-4 md:w-8' : 'inline-block hover:text-primary transition-colors duration-300'}
                style={{ perspective: '1000px' }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            custom={0.6}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text tracking-tight mt-4">
              Full Stack Architect
            </h2>
          </motion.div>
        </div>

        {/* Description */}
        <motion.p
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          custom={0.8}
          className="max-w-2xl text-center text-white/50 text-lg sm:text-xl leading-relaxed mb-12 px-4"
        >
          Building high-performance, scalable web solutions with precision and passion. 
          Bridging the gap between complex logic and elegant user interfaces.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          custom={1.0}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center"
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-white text-dark font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </a>
          
          <a
            href="#contact"
            className="px-8 py-4 glass text-white font-bold rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-white/20 active:scale-95"
          >
            Let's Talk
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-white/10 rounded-full flex justify-center p-1"
        >
          <div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
export default Hero;
