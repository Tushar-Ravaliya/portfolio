import { motion } from 'framer-motion';
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi';

const contactInfo = [
  {
    icon: HiLocationMarker,
    label: 'Location',
    value: 'Rajkot, India',
    href: null,
  },
  {
    icon: HiPhone,
    label: 'Phone',
    value: '+91 234 567 890',
    href: 'tel:+91234567890',
  },
  {
    icon: HiMail,
    label: 'Email',
    value: 'tushar.ravaliya18@gmail.com',
    href: 'mailto:tushar.ravaliya18@gmail.com',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 lg:py-32">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-heading">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="section-subheading">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>
      </motion.div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
        {contactInfo.map((info, i) => (
          <motion.div
            key={info.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="glass rounded-2xl p-6 text-center group hover:border-white/15 transition-all duration-300"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 mb-4 group-hover:from-cyan-500/20 group-hover:to-purple-500/20 transition-all duration-300">
              <info.icon className="text-xl text-cyan-400" />
            </div>
            <p className="text-xs text-white/30 uppercase tracking-wider mb-1">
              {info.label}
            </p>
            {info.href ? (
              <a
                href={info.href}
                className="text-sm text-white/60 hover:text-cyan-400 transition-colors duration-300 break-all"
              >
                {info.value}
              </a>
            ) : (
              <p className="text-sm text-white/60">{info.value}</p>
            )}
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center"
      >
        <motion.a
          href="mailto:tushar.ravaliya18@gmail.com"
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(6, 182, 212, 0.3)' }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold text-sm tracking-wide shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-shadow duration-300"
        >
          <HiMail className="text-lg" />
          Send Me an Email
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Contact;
