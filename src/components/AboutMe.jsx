import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Linkedin, Github, Briefcase, Award, Code } from 'lucide-react';

const AboutMe = () => {
    const containerVariants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        },
        exit: { opacity: 0 }
    };

    const itemVariants = {
        initial: { opacity: 0, y: 20 },
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
                maxWidth: '1100px',
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

            {/* Hero Section */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1.5fr 1fr',
                gap: '64px',
                marginBottom: '80px',
                alignItems: 'center'
            }}>
                <motion.div variants={itemVariants}>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                        fontWeight: '800',
                        marginBottom: '24px',
                        letterSpacing: '-0.04em'
                    }}>
                        About <span className="gradient-text">Manish</span>
                    </h1>

                    <p style={{
                        fontSize: '1.2rem',
                        lineHeight: '1.8',
                        color: 'var(--text-secondary)',
                        marginBottom: '32px'
                    }}>
                        Passionate Software Engineer with expertise in <span style={{ color: 'var(--accent-primary)', fontWeight: '600' }}>Generative AI</span>,
                        Large Language Models, and end-to-end AI system development. Currently focused on building reliable,
                        modular, and production-style AI systems using Python, LangChain, and RAG techniques.
                    </p>

                    {/* Social Links */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {[
                            { icon: Mail, label: 'manish55555parmar@gmail.com', href: 'mailto:manish55555parmar@gmail.com' },
                            { icon: Linkedin, label: 'LinkedIn Profile', href: 'https://linkedin.com/in/manish-parmar-8a30b33a6' },
                            { icon: Github, label: 'Github/manish860200', href: 'https://github.com/manish860200' }
                        ].map((item, idx) => (
                            <a
                                key={idx}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-card"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '16px',
                                    padding: '16px 20px',
                                    fontSize: '0.95rem',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <div style={{
                                    width: '40px',
                                    height: '40px',
                                    background: 'var(--gradient-primary)',
                                    borderRadius: '10px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <item.icon size={20} strokeWidth={2} />
                                </div>
                                <span style={{ fontWeight: '500' }}>{item.label}</span>
                            </a>
                        ))}
                    </div>
                </motion.div>

                {/* Profile Image */}
                <motion.div
                    variants={itemVariants}
                    style={{ position: 'relative' }}
                >
                    <div className="glow" style={{
                        position: 'relative',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        border: '2px solid var(--border-medium)',
                        aspectRatio: '1'
                    }}>
                        <img
                            src="/profile.jpg"
                            alt="Manish Parmar"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    </div>
                </motion.div>
            </div>

            {/* Experience Section */}
            <motion.div variants={itemVariants}>
                <h2 style={{
                    fontSize: '2.5rem',
                    marginBottom: '32px',
                    fontWeight: '700'
                }}>
                    Experience
                </h2>

                <div className="glass-card" style={{ padding: '40px', marginBottom: '32px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px', marginBottom: '24px' }}>
                        <div style={{
                            width: '56px',
                            height: '56px',
                            background: 'var(--gradient-primary)',
                            borderRadius: '14px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            boxShadow: 'var(--glow-primary)'
                        }}>
                            <Briefcase size={28} strokeWidth={2} />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '6px' }}>
                                Software Engineer
                            </h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '16px' }}>
                                Self-Driven Projects • Jan 2026 – Present
                            </p>
                        </div>
                    </div>

                    <p style={{
                        lineHeight: '1.8',
                        color: 'var(--text-secondary)',
                        marginBottom: '24px',
                        fontSize: '1.05rem'
                    }}>
                        Working on containerization with Docker, AI systems, and various development projects to build
                        scalable cloud infrastructure and automate deployment pipelines. Focused on creating production-ready
                        AI applications using modern frameworks and best practices.
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        {['Python', 'LangChain', 'RAG', 'Docker', 'AI Systems', 'LLMs', 'FastAPI', 'React'].map((tech, i) => (
                            <span key={i} className="badge" style={{
                                padding: '8px 16px',
                                background: 'rgba(99, 102, 241, 0.1)',
                                border: '1px solid rgba(99, 102, 241, 0.3)',
                                borderRadius: '10px',
                                fontSize: '0.85rem',
                                fontWeight: '500'
                            }}>
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Highlights */}
            <motion.div variants={itemVariants}>
                <h2 style={{
                    fontSize: '2.5rem',
                    marginBottom: '32px',
                    fontWeight: '700'
                }}>
                    Highlights
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '24px'
                }}>
                    {[
                        {
                            icon: Code,
                            title: 'AI Development',
                            description: 'Expert in building production-grade AI systems with LLMs and RAG',
                            gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
                        },
                        {
                            icon: Award,
                            title: 'Best Practices',
                            description: 'Following industry standards for code quality and architecture',
                            gradient: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)'
                        },
                        {
                            icon: Briefcase,
                            title: 'Full Stack',
                            description: 'Proficient in both frontend and backend development',
                            gradient: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)'
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="glass-card" style={{ padding: '32px' }}>
                            <div style={{
                                width: '48px',
                                height: '48px',
                                background: item.gradient,
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '20px',
                                boxShadow: '0 4px 16px rgba(99, 102, 241, 0.2)'
                            }}>
                                <item.icon size={24} strokeWidth={2} />
                            </div>
                            <h3 style={{
                                fontSize: '1.3rem',
                                fontWeight: '700',
                                marginBottom: '12px'
                            }}>
                                {item.title}
                            </h3>
                            <p style={{
                                color: 'var(--text-secondary)',
                                lineHeight: '1.6',
                                fontSize: '0.95rem'
                            }}>
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </motion.div>

            <style>{`
                @media (max-width: 768px) {
                    div[style*="gridTemplateColumns: 1.5fr 1fr"] {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </motion.div>
    );
};

export default AboutMe;
