import { motion } from 'framer-motion';

const skillsList = [
    'React', 'Node.js', 'JavaScript', 'TypeScript', 'Tailwind CSS',
    'MongoDB', 'PostgreSQL', 'Docker', 'Express', 'Git'
];

const Skills = () => {
    return (
        <section id="skills" className="section-padding editorial-border">
            <div className="container-custom">
                <div className="grid md:grid-cols-[1fr_2fr] gap-12">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl sticky top-32">
                            Core<br />Expertise.
                        </h2>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-2xl mb-12 text-dark/70 leading-relaxed max-w-2xl">
                            Specialized in building high-performance applications using a modern, scalable tech stack.
                        </p>
                        
                        <div className="flex flex-wrap gap-4">
                            {skillsList.map((skill) => (
                                <span key={skill} className="px-6 py-3 border border-dark/20 text-dark font-medium text-lg hover:bg-dark hover:text-light transition-colors duration-300">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
