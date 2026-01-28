import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Code } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Gemini-Like End-to-End Generative AI System",
            tech: ["Python", "Generative AI", "LLMs", "LangChain", "RAG", "FAISS"],
            description: "Designed and implemented a Gemini-inspired end-to-end Generative AI system integrating chat, document-based RAG, agent-driven reasoning, and safety layers.",
            about: "This comprehensive AI system mimics the capabilities of Google's Gemini, featuring multi-modal interactions, intelligent document retrieval, and context-aware responses. The system uses advanced prompt engineering and safety guardrails to ensure reliable and ethical AI behavior.",
            responsibilities: [
                "Implemented intent detection for dynamic query routing",
                "Built agentic decision-making orchestration using LangChain",
                "Integrated FAISS vector databases for efficient retrieval",
                "Applied LLM evaluation and safety guardrails"
            ]
        },
        {
            title: "Agent-Based AI Research Assistant",
            tech: ["Python", "Generative AI", "LLMs", "LangChain", "ReAct"],
            description: "Developed an agent-based AI research assistant capable of planning and executing multi-step reasoning workflows.",
            about: "An intelligent research assistant that autonomously breaks down complex queries into manageable tasks, executes research strategies, and synthesizes information from multiple sources. Uses ReAct (Reasoning + Acting) framework for transparent decision-making.",
            responsibilities: [
                "Implemented ReAct-style reasoning loops for autonomous task execution",
                "Enabled dynamic tool selection and adaptive strategy updates",
                "Applied safety checks for reliable AI behavior"
            ]
        },
        {
            title: "Portfolio Website",
            tech: ["React", "Vite", "Framer Motion", "CSS3", "JavaScript"],
            description: "Built a modern, responsive portfolio website showcasing projects and skills with smooth animations and interactive UI.",
            about: "This portfolio website demonstrates proficiency in modern web development technologies. Features include smooth page transitions using Framer Motion, responsive design, glassmorphism effects, and optimized performance. Built with React and Vite for fast development and optimal bundle size.",
            responsibilities: [
                "Designed and implemented responsive UI with React components",
                "Integrated Framer Motion for smooth animations and transitions",
                "Optimized performance with code splitting and lazy loading",
                "Implemented modern CSS techniques including glassmorphism"
            ]
        }
    ];

    const containerVariants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const cardVariants = {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            style={{
                padding: '60px 20px',
                maxWidth: '1100px',
                margin: '0 auto',
                minHeight: '100vh',
                color: '#fff'
            }}
        >
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#888', marginBottom: '40px' }}>
                <ArrowLeft size={20} /> Back to Home
            </Link>

            <h1 style={{ fontSize: '3rem', marginBottom: '40px', fontWeight: '400', letterSpacing: '0.1em', textAlign: 'center' }}>Projects</h1>

            <motion.div
                variants={containerVariants}
                initial="initial"
                animate="animate"
                style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}
            >
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        variants={cardVariants}
                        whileHover={{ y: -5 }}
                        whileTap={{
                            scale: 0.96,
                            filter: 'brightness(0.3) contrast(1.5) blur(1px)',
                            transition: { duration: 0.1 }
                        }}
                        transition={{ duration: 0.2 }}
                        className="glass-card"
                        style={{
                            padding: '30px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '18px',
                            cursor: 'pointer',
                            userSelect: 'none'
                        }}
                    >
                        <h3 style={{
                            fontSize: '1.6rem',
                            fontWeight: '400',
                            fontFamily: 'var(--font-heading)',
                            letterSpacing: '0.05em',
                            color: '#00d9ff'
                        }}>
                            {project.title}
                        </h3>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {project.tech.map((t, i) => (
                                <span key={i} style={{
                                    fontSize: '0.8rem',
                                    background: 'rgba(0, 217, 255, 0.1)',
                                    padding: '4px 12px',
                                    borderRadius: '12px',
                                    border: '1px solid rgba(0, 217, 255, 0.3)',
                                    color: '#00d9ff'
                                }}>
                                    {t}
                                </span>
                            ))}
                        </div>

                        <p style={{ color: '#ccc', fontSize: '1rem', lineHeight: '1.6' }}>{project.description}</p>

                        {/* About This Project Section */}
                        <div style={{
                            background: 'rgba(0, 217, 255, 0.05)',
                            padding: '15px',
                            borderRadius: '10px',
                            borderLeft: '3px solid #00d9ff'
                        }}>
                            <h4 style={{
                                fontSize: '1rem',
                                fontFamily: 'var(--font-heading)',
                                letterSpacing: '0.05em',
                                marginBottom: '10px',
                                color: '#00d9ff'
                            }}>
                                About This Project
                            </h4>
                            <p style={{ color: '#aaa', fontSize: '0.95rem', lineHeight: '1.7' }}>
                                {project.about}
                            </p>
                        </div>

                        <div>
                            <h4 style={{
                                fontSize: '1rem',
                                fontFamily: 'var(--font-heading)',
                                letterSpacing: '0.05em',
                                marginBottom: '12px',
                                color: '#fff'
                            }}>
                                Key Responsibilities
                            </h4>
                            <ul style={{ paddingLeft: '20px', fontSize: '0.95rem', color: '#aaa', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                {project.responsibilities.map((r, i) => (
                                    <li key={i} style={{ lineHeight: '1.6' }}>{r}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Projects;
