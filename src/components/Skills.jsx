import { motion } from 'framer-motion';
import {
    SiReact,
    SiNodedotjs,
    SiTailwindcss,
    SiMongodb,
    SiPostgresql,
    SiJavascript,
    SiDocker,
    SiTypescript,
    SiGit,
    SiExpress,
} from 'react-icons/si';

const skills = [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'Express', icon: SiExpress, color: '#FFFFFF' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: 'spring', stiffness: 100, damping: 12 },
    },
};

const Skills = () => {
    return (
        <section id="skills" className="section-padding relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="container-custom">
                <div className="flex flex-col items-center text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            My <span className="gradient-text">Expertise</span>
                        </h2>
                        <p className="text-white/50 max-w-2xl text-lg">
                            I specialize in building high-performance applications using a modern, scalable tech stack.
                        </p>
                    </motion.div>
                </div>

                {/* Skills Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
                >
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.name}
                            variants={itemVariants}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="group relative"
                        >
                            <div className="glass p-8 rounded-3xl flex flex-col items-center gap-4 hover:border-primary/30 transition-all duration-500 overflow-hidden">
                                {/* Hover Glow */}
                                <div 
                                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                                    style={{ backgroundColor: skill.color }}
                                />
                                
                                <div className="relative z-10 p-4 rounded-2xl bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
                                    <skill.icon
                                        size={40}
                                        style={{ color: skill.color }}
                                        className="filter drop-shadow-sm group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transition-all duration-300"
                                    />
                                </div>
                                
                                <span className="relative z-10 font-bold text-white/40 group-hover:text-white transition-colors duration-300">
                                    {skill.name}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 p-8 rounded-3xl glass text-center border-dashed border-white/10"
                >
                    <p className="text-white/40 italic">
                        "Continuously exploring new horizons in software engineering and cloud architecture."
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
