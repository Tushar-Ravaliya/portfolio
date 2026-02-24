import { motion } from 'framer-motion';
import { HiCode, HiLightningBolt, HiSparkles } from 'react-icons/hi';

const stats = [
  { icon: HiCode, value: '10+', label: 'Projects Built' },
  { icon: HiLightningBolt, value: '5+', label: 'Technologies' },
  { icon: HiSparkles, value: '2+', label: 'Years Learning' },
];

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-heading">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="flex justify-center mb-12">
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500"></div>
        </div>
      </motion.div>

      {/* About Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-3xl mx-auto mb-16"
      >
        <div className="glass rounded-2xl p-8 md:p-10 relative overflow-hidden group hover:border-white/15 transition-all duration-500">
          {/* Subtle glow effect */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-all duration-700"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl group-hover:bg-purple-500/10 transition-all duration-700"></div>

          <p className="relative text-white/60 text-lg leading-relaxed text-center">
            I am a dedicated and versatile Full Stack Developer with a passion
            for creating efficient and user-friendly web applications. With a
            strong foundation in both front-end and back-end technologies, I
            have worked on various personal and academic projects to hone my
            skills. My journey in web development is driven by curiosity and a
            desire to build impactful solutions. I thrive in collaborative
            environments and enjoy solving complex problems to deliver
            high-quality solutions. Outside of coding, I enjoy staying active
            and exploring new technologies.
          </p>
        </div>
      </motion.div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="glass rounded-2xl p-6 text-center group hover:border-white/15 transition-all duration-300 cursor-default"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 mb-4 group-hover:from-cyan-500/20 group-hover:to-purple-500/20 transition-all duration-300">
              <stat.icon className="text-2xl gradient-text" />
            </div>
            <p className="text-3xl font-bold font-['Space_Grotesk'] gradient-text mb-1">
              {stat.value}
            </p>
            <p className="text-sm text-white/40">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
