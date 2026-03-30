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
    <section id="contact" className="section-padding relative">
      <div className="container-custom">
        <div className="glass rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
          {/* Background Gradient */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent -z-10" />
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-secondary/10 to-transparent -z-10" />

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                Let's build something <span className="gradient-text">extraordinary</span>.
              </h2>
              <p className="text-white/50 text-xl mb-12 leading-relaxed">
                Whether you have a question or just want to say hi, my inbox is always open.
              </p>

              <div className="flex flex-col gap-6">
                {contactInfo.map((info, i) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-6 group"
                  >
                    <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <info.icon size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-white/30 uppercase tracking-[0.2em] font-bold mb-1">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="text-lg font-bold text-white/80 hover:text-white transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-lg font-bold text-white/80">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="glass p-8 md:p-12 rounded-[2.5rem] relative z-10">
                <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-2">Name</label>
                      <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-colors" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-2">Email</label>
                      <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-colors" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-2">Message</label>
                    <textarea placeholder="Tell me about your project..." rows="4" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-colors resize-none" />
                  </div>
                  <button className="w-full py-5 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-primary/20">
                    Send Message
                  </button>
                </form>
              </div>
              
              {/* Decorative blobs */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-[80px] -z-10 animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-[80px] -z-10 animate-pulse" style={{ animationDelay: '2s' }} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
