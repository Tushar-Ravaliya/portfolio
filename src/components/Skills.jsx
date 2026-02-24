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
        <section id="skills" className="py-24 lg:py-32">
            {/* Section Heading */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="section-heading">
                    Tech <span className="gradient-text">Stack</span>
                </h2>
                <p className="section-subheading">
                    Technologies I work with to build modern, scalable applications
                </p>
            </motion.div>

            {/* Skills Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-4xl mx-auto"
            >
                {skills.map((skill) => (
                    <motion.div
                        key={skill.name}
                        variants={itemVariants}
                        whileHover={{
                            y: -8,
                            scale: 1.05,
                            transition: { type: 'spring', stiffness: 300 },
                        }}
                        className="glass rounded-2xl p-6 flex flex-col items-center gap-3 cursor-default group hover:border-white/15 transition-all duration-300 relative overflow-hidden"
                    >
                        {/* Glow effect behind icon */}
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"
                            style={{ background: `radial-gradient(circle at center, ${skill.color}10, transparent 70%)` }}
                        />
                        <div className="relative">
                            <skill.icon
                                className="text-4xl transition-all duration-300 group-hover:drop-shadow-lg"
                                style={{ color: skill.color }}
                            />
                        </div>
                        <span className="text-sm font-medium text-white/50 group-hover:text-white/80 transition-colors duration-300 relative">
                            {skill.name}
                        </span>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;
