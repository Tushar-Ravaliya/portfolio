import { motion } from 'framer-motion';
import { HiCode, HiLightningBolt, HiSparkles } from 'react-icons/hi';

const stats = [
  { icon: HiCode, value: '10+', label: 'Projects Built' },
  { icon: HiLightningBolt, value: '5+', label: 'Technologies' },
  { icon: HiSparkles, value: '2+', label: 'Years Learning' },
];

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image/Visual side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden glass p-2 aspect-square max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img 
                src="/portfolio.png" 
                alt="Profile" 
                className="w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              />
            </div>
            
            {/* Decorative background for image */}
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-primary/20 rounded-3xl -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
            <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-secondary/20 rounded-3xl -z-10 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
          </motion.div>

          {/* Right: Content side */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Designing the <span className="gradient-text">Future</span> of Web.
              </h2>
              <p className="text-white/50 text-lg leading-relaxed mb-8">
                I'm a Full Stack Architect who loves turning complex problems into simple, beautiful digital experiences. 
                With a deep focus on performance and user-centric design, I build applications that don't just work—they feel right.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass p-6 rounded-2xl hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon size={20} />
                  </div>
                  <div className="text-2xl font-bold font-display">{stat.value}</div>
                  <div className="text-xs text-white/40 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5"
            >
              <div className="flex -space-x-3">
                {[1,2,3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-dark bg-gradient-to-br from-primary/40 to-secondary/40" />
                ))}
              </div>
              <p className="text-sm text-white/60">
                Joined by <span className="text-white font-bold">50+</span> satisfied clients and collaborators.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
