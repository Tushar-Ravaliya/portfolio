import { motion } from 'framer-motion';

const projects = [
    {
        title: 'Portfolio Website',
        image: 'portfolio.png',
        description: 'A personal portfolio website showcasing skills and projects, built with modern web technologies and responsive design.',
        technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
        liveUrl: '#',
        codeUrl: '#',
    },
    {
        title: 'Paper Trading Website',
        image: 'trading.png',
        description: 'A paper trading platform to practice trading strategies without real money, featuring interactive charts.',
        technologies: ['MERN Stack', 'Lightweight Charts'],
        liveUrl: '#',
        codeUrl: '#',
    },
];

const Projects = () => {
    return (
        <section id="projects" className="section-padding editorial-border bg-dark text-light">
            <div className="container-custom">
                <div className="flex justify-between items-end mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-7xl">
                        Selected Works.
                    </h2>
                    <a href="https://github.com" className="uppercase tracking-widest text-sm font-bold pb-2 border-b border-light/30 hover:border-light transition-colors">
                        View Archive
                    </a>
                </div>

                <div className="flex flex-col gap-24">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="group grid md:grid-cols-[3fr_2fr] gap-12 items-center"
                        >
                            <div className={`order-2 md:order-1 aspect-[4/3] bg-light/5 overflow-hidden ${i % 2 !== 0 ? 'md:order-2' : ''}`}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                />
                            </div>

                            <div className={`order-1 md:order-2 flex flex-col gap-6 ${i % 2 !== 0 ? 'md:order-1' : ''}`}>
                                <h3 className="text-4xl md:text-5xl lg:text-6xl font-display">{project.title}</h3>
                                <div className="flex flex-wrap gap-3 mb-4">
                                    {project.technologies.map(tech => (
                                        <span key={tech} className="text-xs uppercase tracking-widest font-bold border border-light/20 px-4 py-2">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-lg text-light/70 leading-relaxed mb-6">
                                    {project.description}
                                </p>
                                <div className="flex gap-6">
                                    <a href={project.liveUrl} className="uppercase tracking-widest text-sm font-bold pb-1 border-b border-light hover:text-primary hover:border-primary transition-colors">Live Site</a>
                                    <a href={project.codeUrl} className="uppercase tracking-widest text-sm font-bold pb-1 border-b border-light hover:text-primary hover:border-primary transition-colors">Source Code</a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
