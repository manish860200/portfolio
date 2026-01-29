import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, GraduationCap, Briefcase, Award, Calendar } from 'lucide-react';

const Resume = () => {
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

    const education = [
        {
            degree: "Bachelor of Technology in Computer Science",
            institution: "University Name",
            period: "2020 - 2024",
            description: "Focused on AI/ML, Data Structures, and Software Engineering"
        }
    ];

    const experience = [
        {
            title: "Software Engineer",
            company: "Self-Driven Projects",
            period: "Jan 2026 - Present",
            description: "Building production-grade AI systems with LLMs, LangChain, and RAG techniques. Implementing containerized solutions with Docker and deploying scalable applications.",
            achievements: [
                "Developed end-to-end Generative AI systems",
                "Implemented RAG-based document processing",
                "Created agent-based AI assistants",
                "Built modern web applications with React"
            ]
        }
    ];

    const certifications = [
        "LangChain & Vector Databases",
        "Advanced Python Programming",
        "Docker & Containerization",
        "React & Modern Web Development"
    ];

    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={containerVariants}
            style={{
                padding: '120px 20px 80px',
                maxWidth: '1000px',
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

            {/* Header */}
            <motion.header
                variants={itemVariants}
                style={{ textAlign: 'center', marginBottom: '48px' }}
            >
                <h1 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                    fontWeight: '800',
                    marginBottom: '16px',
                    letterSpacing: '-0.04em'
                }}>
                    Resume
                </h1>
                <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1.2rem',
                    marginBottom: '32px'
                }}>
                    My professional journey and qualifications
                </p>

                <button
                    className="btn-primary"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}
                    onClick={() => window.open('/resume.pdf', '_blank')}
                >
                    <Download size={18} />
                    Download Resume
                </button>
            </motion.header>

            {/* Education */}
            <motion.section variants={itemVariants} style={{ marginBottom: '64px' }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    marginBottom: '32px'
                }}>
                    <div style={{
                        width: '48px',
                        height: '48px',
                        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: 'var(--glow-primary)'
                    }}>
                        <GraduationCap size={24} strokeWidth={2} />
                    </div>
                    <h2 style={{ fontSize: '2rem', fontWeight: '700' }}>Education</h2>
                </div>

                {education.map((edu, idx) => (
                    <div key={idx} className="glass-card" style={{ padding: '32px' }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            marginBottom: '16px',
                            flexWrap: 'wrap',
                            gap: '12px'
                        }}>
                            <div>
                                <h3 style={{
                                    fontSize: '1.4rem',
                                    fontWeight: '700',
                                    marginBottom: '8px'
                                }}>
                                    {edu.degree}
                                </h3>
                                <p style={{
                                    color: 'var(--accent-primary)',
                                    fontSize: '1.05rem',
                                    fontWeight: '500'
                                }}>
                                    {edu.institution}
                                </p>
                            </div>
                            <div className="badge" style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}>
                                <Calendar size={16} />
                                {edu.period}
                            </div>
                        </div>
                        <p style={{
                            color: 'var(--text-secondary)',
                            lineHeight: '1.7',
                            fontSize: '1rem'
                        }}>
                            {edu.description}
                        </p>
                    </div>
                ))}
            </motion.section>

            {/* Experience */}
            <motion.section variants={itemVariants} style={{ marginBottom: '64px' }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    marginBottom: '32px'
                }}>
                    <div style={{
                        width: '48px',
                        height: '48px',
                        background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 16px rgba(59, 130, 246, 0.3)'
                    }}>
                        <Briefcase size={24} strokeWidth={2} />
                    </div>
                    <h2 style={{ fontSize: '2rem', fontWeight: '700' }}>Experience</h2>
                </div>

                {experience.map((exp, idx) => (
                    <div key={idx} className="glass-card" style={{ padding: '32px' }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            marginBottom: '16px',
                            flexWrap: 'wrap',
                            gap: '12px'
                        }}>
                            <div>
                                <h3 style={{
                                    fontSize: '1.4rem',
                                    fontWeight: '700',
                                    marginBottom: '8px'
                                }}>
                                    {exp.title}
                                </h3>
                                <p style={{
                                    color: 'var(--accent-primary)',
                                    fontSize: '1.05rem',
                                    fontWeight: '500'
                                }}>
                                    {exp.company}
                                </p>
                            </div>
                            <div className="badge" style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}>
                                <Calendar size={16} />
                                {exp.period}
                            </div>
                        </div>

                        <p style={{
                            color: 'var(--text-secondary)',
                            lineHeight: '1.7',
                            fontSize: '1rem',
                            marginBottom: '20px'
                        }}>
                            {exp.description}
                        </p>

                        <div style={{
                            paddingLeft: '20px',
                            borderLeft: '2px solid var(--accent-primary)'
                        }}>
                            <h4 style={{
                                fontSize: '1rem',
                                fontWeight: '600',
                                marginBottom: '12px',
                                color: 'var(--text-primary)'
                            }}>
                                Key Achievements:
                            </h4>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '8px'
                            }}>
                                {exp.achievements.map((achievement, i) => (
                                    <li key={i} style={{
                                        color: 'var(--text-secondary)',
                                        fontSize: '0.95rem',
                                        paddingLeft: '20px',
                                        position: 'relative'
                                    }}>
                                        <span style={{
                                            position: 'absolute',
                                            left: 0,
                                            color: 'var(--accent-primary)'
                                        }}>
                                            ✓
                                        </span>
                                        {achievement}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </motion.section>

            {/* Certifications */}
            <motion.section variants={itemVariants}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    marginBottom: '32px'
                }}>
                    <div style={{
                        width: '48px',
                        height: '48px',
                        background: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 16px rgba(16, 185, 129, 0.3)'
                    }}>
                        <Award size={24} strokeWidth={2} />
                    </div>
                    <h2 style={{ fontSize: '2rem', fontWeight: '700' }}>Certifications & Skills</h2>
                </div>

                <div className="glass-card" style={{ padding: '32px' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '16px'
                    }}>
                        {certifications.map((cert, idx) => (
                            <div key={idx} style={{
                                padding: '16px 20px',
                                background: 'rgba(99, 102, 241, 0.05)',
                                border: '1px solid rgba(99, 102, 241, 0.2)',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px'
                            }}>
                                <div style={{
                                    width: '8px',
                                    height: '8px',
                                    background: 'var(--gradient-primary)',
                                    borderRadius: '50%',
                                    flexShrink: 0
                                }} />
                                <span style={{
                                    fontSize: '0.95rem',
                                    fontWeight: '500'
                                }}>
                                    {cert}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.section>
        </motion.div>
    );
};

export default Resume;
