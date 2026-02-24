import { motion } from 'framer-motion';
import { HiExternalLink, HiCode } from 'react-icons/hi';

const projects = [
    {
        title: 'Portfolio Website',
        image: 'portfolio.png',
        description:
            'A personal portfolio website showcasing skills and projects, built with modern web technologies and responsive design.',
        technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
        liveUrl: '#',
        codeUrl: '#',
    },
    {
        title: 'Paper Trading Website',
        image: 'trading.png',
        description:
            'A paper trading platform to practice trading strategies without real money, featuring interactive charts.',
        technologies: ['MERN Stack', 'Lightweight Charts'],
        liveUrl: '#',
        codeUrl: '#',
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay: i * 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    }),
};

const Projects = () => {
    return (
        <section id="projects" className="py-24 lg:py-32">
            {/* Section Heading */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="section-heading">
                    Featured <span className="gradient-text">Projects</span>
                </h2>
                <p className="section-subheading">
                    A selection of projects that showcase my skills and passion for building
                </p>
            </motion.div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {projects.map((project, i) => (
                    <motion.div
                        key={project.title}
                        custom={i}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-50px' }}
                        whileHover={{ y: -8 }}
                        className="glass rounded-2xl overflow-hidden group hover:border-white/15 transition-all duration-500 relative"
                    >
                        {/* Gradient glow on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        {/* Image Container */}
                        <div className="relative h-52 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent" />

                            {/* Overlay buttons */}
                            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <motion.a
                                    href={project.liveUrl}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-10 h-10 rounded-full glass-strong flex items-center justify-center text-white hover:text-cyan-400 transition-colors"
                                    aria-label="Live demo"
                                >
                                    <HiExternalLink className="text-lg" />
                                </motion.a>
                                <motion.a
                                    href={project.codeUrl}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-10 h-10 rounded-full glass-strong flex items-center justify-center text-white hover:text-purple-400 transition-colors"
                                    aria-label="Source code"
                                >
                                    <HiCode className="text-lg" />
                                </motion.a>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 relative">
                            <h3 className="text-xl font-bold font-['Space_Grotesk'] mb-3 group-hover:text-white transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-white/40 text-sm leading-relaxed mb-5">
                                {project.description}
                            </p>

                            {/* Tech Badges */}
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-cyan-300/70 border border-white/5"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
