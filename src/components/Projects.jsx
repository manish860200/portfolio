import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Brain, Bot, Rocket, Sparkles } from 'lucide-react';

const Projects = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const projects = [
        {
            title: "Gemini-Like End-to-End Generative AI System",
            tech: ["Python", "Gen AI", "LangChain", "RAG", "FAISS"],
            description: "Designed and implemented a Gemini-inspired end-to-end Generative AI system integrating chat, document-based RAG, and agent-driven reasoning.",
            icon: Brain,
            gradient: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
            github: "#",
            demo: "#"
        },
        {
            title: "Agent-Based AI Research Assistant",
            tech: ["Python", "LLMs", "LangChain", "ReAct"],
            description: "Developed an agent-based AI research assistant capable of planning and executing multi-step reasoning workflows.",
            icon: Bot,
            gradient: "linear-gradient(135deg, #10b981 0%, #34d399 100%)",
            github: "#",
            demo: "#"
        },
        {
            title: "Modern Portfolio Website",
            tech: ["React", "Vite", "Framer Motion", "CSS3"],
            description: "Built a sleek, high-performance portfolio website with smooth animations and SignalX-inspired design.",
            icon: Rocket,
            gradient: "linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)",
            github: "#",
            demo: "#"
        },
        {
            title: "AI-Powered Code Assistant",
            tech: ["Python", "OpenAI", "FastAPI", "Docker"],
            description: "Created an intelligent code assistant that helps developers write better code with AI-powered suggestions.",
            icon: Sparkles,
            gradient: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)",
            github: "#",
            demo: "#"
        }
    ];

    const containerVariants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        },
        exit: { opacity: 0 }
    };

    const cardVariants = {
        initial: { opacity: 0, y: 30 },
        animate: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={containerVariants}
            style={{
                padding: '120px 20px 80px',
                maxWidth: '1200px',
                margin: '0 auto',
                minHeight: '100vh',
                color: 'var(--text-primary)',
                position: 'relative'
            }}
        >
            <div className="grid-bg" />

            <Link
                to="/"
                className="nav-link"
                style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '48px'
                }}
            >
                <ArrowLeft size={18} /> Back to Home
            </Link>

            <motion.header
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                style={{ textAlign: 'center', marginBottom: '64px' }}
            >
                <h1 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                    fontWeight: '800',
                    marginBottom: '16px',
                    letterSpacing: '-0.04em'
                }}>
                    Selected <span className="gradient-text">Works</span>
                </h1>
                <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1.2rem',
                    maxWidth: '600px',
                    margin: '0 auto'
                }}>
                    A collection of projects focusing on Generative AI and modern web technologies.
                </p>
            </motion.header>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '24px'
            }}>
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        variants={cardVariants}
                        onHoverStart={() => setHoveredIndex(idx)}
                        onHoverEnd={() => setHoveredIndex(null)}
                        className="glass-card"
                        style={{
                            padding: '32px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                            position: 'relative',
                            cursor: 'pointer',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Gradient Overlay on Hover */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: hoveredIndex === idx ? 0.1 : 0 }}
                            transition={{ duration: 0.3 }}
                            style={{
                                position: 'absolute',
                                inset: 0,
                                background: project.gradient,
                                pointerEvents: 'none'
                            }}
                        />

                        {/* Icon */}
                        <motion.div
                            animate={{
                                scale: hoveredIndex === idx ? 1.1 : 1,
                                rotate: hoveredIndex === idx ? 5 : 0
                            }}
                            transition={{ duration: 0.3 }}
                            style={{
                                width: '56px',
                                height: '56px',
                                background: project.gradient,
                                borderRadius: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: hoveredIndex === idx
                                    ? '0 8px 24px rgba(99, 102, 241, 0.3)'
                                    : '0 4px 12px rgba(0, 0, 0, 0.2)',
                                position: 'relative',
                                zIndex: 1
                            }}
                        >
                            <project.icon size={28} strokeWidth={2} />
                        </motion.div>

                        {/* Content */}
                        <div style={{ position: 'relative', zIndex: 1, flex: 1 }}>
                            <h3 style={{
                                fontSize: '1.4rem',
                                fontWeight: '700',
                                marginBottom: '12px',
                                lineHeight: '1.3',
                                color: 'var(--text-primary)'
                            }}>
                                {project.title}
                            </h3>
                            <p style={{
                                color: 'var(--text-secondary)',
                                fontSize: '0.95rem',
                                lineHeight: '1.6',
                                marginBottom: '20px'
                            }}>
                                {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '8px',
                                marginBottom: '20px'
                            }}>
                                {project.tech.map((t, i) => (
                                    <span key={i} className="badge" style={{
                                        fontSize: '0.75rem',
                                        fontWeight: '500',
                                        background: 'rgba(99, 102, 241, 0.1)',
                                        padding: '6px 12px',
                                        borderRadius: '8px',
                                        border: '1px solid rgba(99, 102, 241, 0.2)',
                                        color: 'var(--accent-primary)'
                                    }}>
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* Action Buttons */}
                            <div style={{
                                display: 'flex',
                                gap: '12px',
                                marginTop: 'auto'
                            }}>
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        flex: 1,
                                        padding: '10px 16px',
                                        background: 'var(--gradient-primary)',
                                        borderRadius: '10px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '6px',
                                        fontSize: '0.9rem',
                                        fontWeight: '600',
                                        transition: 'all 0.3s ease',
                                        boxShadow: '0 4px 12px rgba(99, 102, 241, 0.2)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = '0 6px 16px rgba(99, 102, 241, 0.3)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(99, 102, 241, 0.2)';
                                    }}
                                >
                                    <ExternalLink size={16} />
                                    Demo
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        padding: '10px 16px',
                                        background: 'var(--card-bg)',
                                        border: '1px solid var(--border-medium)',
                                        borderRadius: '10px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'var(--card-hover-bg)';
                                        e.currentTarget.style.borderColor = 'var(--accent-primary)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'var(--card-bg)';
                                        e.currentTarget.style.borderColor = 'var(--border-medium)';
                                    }}
                                >
                                    <Github size={18} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Projects;
