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
      "Pursuing Bachelor of Technology in Computer Engineering with a current CGPA of 7.42. Building full-stack projects and participating in national-level hackathons.",
    technologies: ["MERN Stack", "Data Structures", "Algorithms", "System Design"],
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
    <section
      id="experience"
      style={{
        padding: "100px 0",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Section Header */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "12px",
            fontSize: "12px",
            fontWeight: 500,
            letterSpacing: "1px",
            color: "var(--color-text-secondary)",
            textTransform: "uppercase",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              backgroundColor: "var(--color-accent)",
              borderRadius: "50%",
              display: "inline-block",
            }}
          />
          CAREER PATH
        </div>
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 700,
            letterSpacing: "-1px",
            marginBottom: "48px",
          }}
        >
          EXPERIENCE & EDUCATION
        </h2>

        {/* Timeline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0",
          }}
        >
          {experiences.map((exp, index) => (
            <div
              key={index}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "24px",
                padding: "32px 0",
                borderTop: "1px solid var(--color-border)",
                transition: "all 0.3s ease",
              }}
              className="md:!grid-cols-[200px_1fr]"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(163, 230, 53, 0.02)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              {/* Period */}
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "var(--color-accent)",
                  letterSpacing: "0.5px",
                  paddingTop: "4px",
                }}
              >
                {exp.period}
              </div>

              {/* Details */}
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "20px",
                    fontWeight: 700,
                    marginBottom: "4px",
                  }}
                >
                  {exp.role}
                </h3>
                <div
                  style={{
                    fontSize: "14px",
                    color: "var(--color-text-muted)",
                    marginBottom: "12px",
                    fontWeight: 500,
                  }}
                >
                  {exp.company}
                </div>
                <p
                  style={{
                    fontSize: "14px",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.7,
                    marginBottom: "16px",
                    maxWidth: "600px",
                  }}
                >
                  {exp.description}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontSize: "11px",
                        fontWeight: 600,
                        letterSpacing: "0.5px",
                        padding: "5px 12px",
                        border: "1px solid var(--color-border)",
                        borderRadius: "6px",
                        color: "var(--color-text-secondary)",
                      }}
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
