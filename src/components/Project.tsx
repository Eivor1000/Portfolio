import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/eivor1000/payment-app" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/eivor1000/payment-app" target="_blank" rel="noreferrer"><h2>Payment Application</h2></a>
                <p>Developed a secure payment platform with Next-Auth and atomic P2P transactions ensuring reliability. Built a responsive analytics dashboard showing weekly financial trends. Containerized the application using Docker and implemented CI/CD pipelines with GitHub Actions, enabling faster, more reliable, and automated deployments.</p>
                <div style={{marginTop: '10px'}}>
                    <strong>Tech Stack:</strong> Next.js, Express, PostgreSQL, Turborepo
                </div>
            </div>
            <div className="project">
                <a href="https://github.com/Eivor1000/NL_TO_SQL" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Eivor1000/NL_TO_SQL" target="_blank" rel="noreferrer"><h2>Natural Language to SQL Query Generator</h2></a>
                <p>Engineered an LLM-powered NL-to-SQL system with schema validation and safety filters, enabling accurate and reliable query generation from natural language inputs. Implemented few-shot prompting for accurate JOIN and aggregation queries. Created an interactive interface with real-time execution, syntax highlighting, and CSV export functionality.</p>
                <div style={{marginTop: '10px'}}>
                    <strong>Tech Stack:</strong> Python, LangChain, Groq LLM, SQLite
                </div>
            </div>
        </div>
    </div>
    );
}

export default Project;