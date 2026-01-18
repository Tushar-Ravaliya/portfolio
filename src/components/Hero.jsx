
import React from 'react';

const Hero = () => {
    return (
        <div id="hero" className="border-b border-neutral-900 pb-4 lg:mb-35 mt-40">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-full">
                    <div className="flex flex-col items-center lg:items-center">
                        <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                            Tushar Ravaliya
                        </h1>
                        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                            Full Stack Developer
                        </span>
                        <p className="my-2 max-w-xl py-6 font-light tracking-tighter text-center">
                            I am a passionate Full Stack Developer with a knack for crafting robust and scalable web applications. As a dedicated fresher, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

