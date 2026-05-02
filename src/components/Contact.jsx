import { motion } from 'framer-motion';

const contactInfo = [
  { label: 'Location', value: 'Rajkot, India', href: null },
  { label: 'Phone', value: '+91 234 567 890', href: 'tel:+91234567890' },
  { label: 'Email', value: 'tushar.ravaliya18@gmail.com', href: 'mailto:tushar.ravaliya18@gmail.com' },
];

const Contact = () => {
  return (
    <section id="contact" className="section-padding editorial-border bg-light text-dark">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-display mb-12">
              Let's build<br />something<br />extraordinary.
            </h2>
            
            <div className="flex flex-col gap-8">
              {contactInfo.map((info) => (
                <div key={info.label}>
                  <p className="text-xs uppercase tracking-widest font-bold text-dark/40 mb-2">{info.label}</p>
                  {info.href ? (
                    <a href={info.href} className="text-2xl font-medium hover:text-primary transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-2xl font-medium">{info.value}</p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white border border-dark/10 p-8 md:p-12"
          >
            <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-dark/60">Name</label>
                <input type="text" className="w-full bg-transparent border-b border-dark/20 py-2 focus:outline-none focus:border-dark transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-dark/60">Email</label>
                <input type="email" className="w-full bg-transparent border-b border-dark/20 py-2 focus:outline-none focus:border-dark transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-dark/60">Message</label>
                <textarea rows="4" className="w-full bg-transparent border-b border-dark/20 py-2 focus:outline-none focus:border-dark transition-colors resize-none" />
              </div>
              <button className="self-start mt-4 px-10 py-4 bg-dark text-light font-medium hover:bg-primary transition-colors">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
