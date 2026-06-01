"use client";

const experiences = [
  {
    role: "Laravel Developer Intern",
    company: "Dcoded Innovations",
    period: "Dec 2023 – Mar 2024",
    description:
      "Developed a real-time chat application using Laravel and WebSockets, enabling instant messaging between users. Implemented mobile number OTP authentication using Twilio, improving user verification and security.",
    technologies: ["Laravel", "WebSockets", "Twilio", "PHP"],
  },
  {
    role: "B.Tech in Computer Engineering",
    company: "School of Engineering, RK University",
    period: "Jul 2024 – Present",
    description:
      "Pursuing Bachelor of Technology in Computer Engineering with a current CGPA of 7.68. Building full-stack projects and participating in national-level hackathons.",
    technologies: [
      "MERN Stack",
      "Data Structures",
      "Algorithms",
      "System Design",
    ],
  },
  {
    role: "Diploma in Computer Engineering",
    company: "School of Diploma Studies, RK University",
    period: "Sep 2021 – May 2024",
    description:
      "Completed Diploma in Computer Engineering with CGPA 8.43. Built foundational skills in web development, databases, and programming.",
    technologies: ["JavaScript", "HTML/CSS", "PHP", "MySQL"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-[100px] border-t border-border">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <div className="inline-flex items-center gap-2 mb-3 text-xs font-medium tracking-[1px] text-text-secondary uppercase">
          <span className="w-2 h-2 bg-accent rounded-full inline-block" />
          CAREER PATH
        </div>
        <h2 className="font-heading text-[clamp(28px,4vw,40px)] font-bold tracking-[-1px] mb-12">
          EXPERIENCE & EDUCATION
        </h2>

        {/* Timeline */}
        <div className="flex flex-col">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 py-8 border-t border-border transition-all duration-300 hover:bg-accent/[0.02]"
            >
              {/* Period */}
              <div className="text-[13px] font-medium text-accent tracking-[0.5px] pt-1">
                {exp.period}
              </div>

              {/* Details */}
              <div>
                <h3 className="font-heading text-xl font-bold mb-1">
                  {exp.role}
                </h3>
                <div className="text-sm text-text-muted mb-3 font-medium">
                  {exp.company}
                </div>
                <p className="text-sm text-text-secondary leading-[1.7] mb-4 max-w-[600px]">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-semibold tracking-[0.5px] px-3 py-[5px] border border-border rounded-md text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
