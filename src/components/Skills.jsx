import React from 'react';

const Skills = () => {
    const skills = [
        "React", "Node.js", "Tailwind CSS", "MongoDB", "PostgreSQL", "JavaScript", "Docker", "Framer Motion"
    ];

    return (
        <div id="skills" className="border-b border-neutral-900 pb-24">
            <h2 className="my-20 text-center text-4xl">Technologies</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                {skills.map((skill, index) => (
                    <div key={index} className="rounded-2xl border-4 border-neutral-800 p-4 transform transition-transform hover:scale-110 hover:border-cyan-500 hover:text-cyan-500 cursor-pointer">
                        <span className="text-xl font-bold">{skill}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
