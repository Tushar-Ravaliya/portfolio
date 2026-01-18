import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: "Portfolio Website",
            image: "portfolio.png",
            description: "A personal portfolio website showcasing skills and projects, built with modern web technologies and responsive design.",
            technologies: ["React", "Tailwind CSS", "Framer Motion"],
        },
        {
            title: "Paper Trading Website",
            image: "trading.png",
            description: "A paper trading platform to practice trading strategies without real money, featuring interactive charts.",
            technologies: ["MERN Stack", "Lightweight Charts"],
        },

    ];

    return (
        <div id="projects" className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">Projects</h2>
            <div>
                {projects.map((project, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <div className="w-full lg:w-1/4">
                            <div className="mb-6 rounded bg-neutral-800 h-40 w-52 flex items-center justify-center text-neutral-500">
                                <img src={project.image} alt="" />
                            </div>
                        </div>
                        <div className="w-full lg:w-3/4 max-w-xl">
                            <h6 className="mb-2 font-semibold">{project.title}</h6>
                            <p className="mb-4 text-neutral-400">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600 border border-neutral-800">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
