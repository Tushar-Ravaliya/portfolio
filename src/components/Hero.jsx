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
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16"
    >
      {/* Decorative floating orbs */}
      <div className="absolute top-20 left-10 w-3 h-3 rounded-full bg-cyan-400/40 animate-float" />
      <div className="absolute top-40 right-20 w-2 h-2 rounded-full bg-purple-400/40 animate-float-delayed" />
      <div className="absolute bottom-40 left-1/4 w-4 h-4 rounded-full bg-pink-400/20 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-cyan-400/30 animate-float-delayed" style={{ animationDelay: '3s' }} />

      {/* Pre-heading tag */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-6"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-white/60 font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Available for opportunities
        </span>
      </motion.div>

      {/* Animated Name */}
      <motion.h1
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-center font-['Space_Grotesk'] mb-6"
      >
        {name.split('').map((char, i) => (
          <motion.span
            key={i}
            variants={letterVariants}
            className={char === ' ' ? 'inline-block w-4 md:w-6' : 'inline-block'}
            style={{ perspective: '500px' }}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>

      {/* Subtitle */}
      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        animate="visible"
        custom={0.8}
        className="mb-8"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold gradient-text tracking-tight">
          Full Stack Developer
        </h2>
      </motion.div>

      {/* Description */}
      <motion.p
        variants={fadeUpVariants}
        initial="hidden"
        animate="visible"
        custom={1.0}
        className="max-w-2xl text-center text-white/50 text-base sm:text-lg leading-relaxed mb-12 px-4"
      >
        I craft robust, scalable web applications with modern technologies.
        Passionate about creating innovative solutions that drive growth and
        deliver exceptional user experiences.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        animate="visible"
        custom={1.3}
        className="flex flex-col sm:flex-row gap-4"
      >
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(6, 182, 212, 0.3)' }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold text-sm tracking-wide shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-shadow duration-300"
        >
          Get In Touch
        </motion.a>
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3.5 rounded-full glass text-white/80 font-semibold text-sm tracking-wide hover:text-white hover:border-white/20 transition-all duration-300"
        >
          View Projects
        </motion.a>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-white/30 hover:text-white/50 transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <HiArrowDown className="text-lg" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
