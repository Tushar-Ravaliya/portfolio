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
        <section id="projects" className="section-padding relative">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Selected <span className="gradient-text">Works</span>
                        </h2>
                        <p className="text-white/50 text-lg">
                            A collection of projects where I've pushed the boundaries of web development and design.
                        </p>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <a href="https://github.com" className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors font-bold">
                            View All Projects 
                            <HiExternalLink className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                    </motion.div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="group relative flex flex-col gap-6"
                        >
                            {/* Project Image Container */}
                            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden glass p-2 group-hover:border-primary/30 transition-all duration-500">
                                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                    />
                                    
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                                        <a href={project.liveUrl} className="w-12 h-12 rounded-2xl glass-strong flex items-center justify-center text-white hover:scale-110 transition-transform">
                                            <HiExternalLink size={24} />
                                        </a>
                                        <a href={project.codeUrl} className="w-12 h-12 rounded-2xl glass-strong flex items-center justify-center text-white hover:scale-110 transition-transform">
                                            <HiCode size={24} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="flex flex-col gap-3 px-2">
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map(tech => (
                                        <span key={tech} className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-white/5 text-white/40 border border-white/5">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-white/50 line-clamp-2 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
