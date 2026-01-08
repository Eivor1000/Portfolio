import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Node.js",
    "Express",
    "REST APIs"
];

const labelsSecond = [
    "PostgreSQL",
    "MySQL",
    "Prisma ORM",
    "MongoDB",
    "Docker",
    "Turborepo",
    "CI/CD",
    "Git",
    "JWT",
    "Postman"
];

const labelsThird = [
    "Python",
    "LangChain",
    "Groq LLM API",
    "Pandas",
    "Machine Learning",
    "LLM Integration"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>Experienced in building secure, scalable web applications using modern technologies like React, Next.js, Node.js, and Express. Strong proficiency in both frontend and backend development with a focus on creating responsive, user-friendly interfaces.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Database & DevOps</h3>
                    <p>Proficient in database design and management with PostgreSQL, MySQL, and MongoDB. Experienced in containerization with Docker and implementing CI/CD pipelines with GitHub Actions for automated deployments.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>AI & Machine Learning</h3>
                    <p>Skilled in developing AI-driven solutions with LangChain and Groq LLM API. Experience in building intelligent applications that leverage large language models for natural language processing and automated query generation.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;