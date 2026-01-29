import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Code2, Database, Cloud, Brain, Cpu, Layers } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            category: "AI & Machine Learning",
            icon: Brain,
            gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
            skills: [
                { name: "Large Language Models (LLMs)", level: 90 },
                { name: "LangChain & RAG", level: 95 },
                { name: "Generative AI", level: 90 },
                { name: "Agent-Based Systems", level: 85 }
            ]
        },
        {
            category: "Backend Development",
            icon: Code2,
            gradient: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
            skills: [
                { name: "Python", level: 95 },
                { name: "FastAPI", level: 85 },
                { name: "RESTful APIs", level: 90 },
                { name: "Microservices", level: 80 }
            ]
        },
        {
            category: "Databases & Vector Stores",
            icon: Database,
            gradient: "linear-gradient(135deg, #10b981 0%, #34d399 100%)",
            skills: [
                { name: "FAISS", level: 85 },
                { name: "Pinecone", level: 80 },
                { name: "PostgreSQL", level: 85 },
                { name: "MongoDB", level: 80 }
            ]
        },
        {
            category: "DevOps & Cloud",
            icon: Cloud,
            gradient: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)",
            skills: [
                { name: "Docker", level: 90 },
                { name: "AWS", level: 75 },
                { name: "CI/CD", level: 80 },
                { name: "Linux", level: 85 }
            ]
        },
        {
            category: "Frontend Development",
            icon: Layers,
            gradient: "linear-gradient(135deg, #ec4899 0%, #f472b6 100%)",
            skills: [
                { name: "React", level: 90 },
                { name: "JavaScript/ES6+", level: 90 },
                { name: "CSS3 & Animations", level: 85 },
                { name: "Framer Motion", level: 85 }
            ]
        },
        {
            category: "Tools & Frameworks",
            icon: Cpu,
            gradient: "linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)",
            skills: [
                { name: "Git & GitHub", level: 95 },
                { name: "Vite", level: 85 },
                { name: "OpenAI API", level: 90 },
                { name: "Hugging Face", level: 80 }
            ]
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

    const categoryVariants = {
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
                    Technical <span className="gradient-text">Skills</span>
                </h1>
                <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1.2rem',
                    maxWidth: '600px',
                    margin: '0 auto'
                }}>
                    Expertise in AI, backend development, and modern web technologies.
                </p>
            </motion.header>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '24px'
            }}>
                {skillCategories.map((category, idx) => (
                    <motion.div
                        key={idx}
                        variants={categoryVariants}
                        className="glass-card"
                        style={{
                            padding: '32px',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Category Header */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px',
                            marginBottom: '24px'
                        }}>
                            <div style={{
                                width: '48px',
                                height: '48px',
                                background: category.gradient,
                                borderRadius: '14px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 4px 16px rgba(99, 102, 241, 0.2)'
                            }}>
                                <category.icon size={24} strokeWidth={2} />
                            </div>
                            <h3 style={{
                                fontSize: '1.3rem',
                                fontWeight: '700',
                                color: 'var(--text-primary)'
                            }}>
                                {category.category}
                            </h3>
                        </div>

                        {/* Skills List */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            {category.skills.map((skill, skillIdx) => (
                                <div key={skillIdx}>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        marginBottom: '8px'
                                    }}>
                                        <span style={{
                                            fontSize: '0.95rem',
                                            fontWeight: '500',
                                            color: 'var(--text-primary)'
                                        }}>
                                            {skill.name}
                                        </span>
                                        <span style={{
                                            fontSize: '0.9rem',
                                            fontWeight: '600',
                                            color: 'var(--accent-primary)'
                                        }}>
                                            {skill.level}%
                                        </span>
                                    </div>

                                    {/* Progress Bar */}
                                    <div style={{
                                        width: '100%',
                                        height: '6px',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        borderRadius: '10px',
                                        overflow: 'hidden',
                                        position: 'relative'
                                    }}>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${skill.level}%` }}
                                            transition={{
                                                duration: 1,
                                                delay: 0.3 + (idx * 0.1) + (skillIdx * 0.05),
                                                ease: [0.16, 1, 0.3, 1]
                                            }}
                                            style={{
                                                height: '100%',
                                                background: category.gradient,
                                                borderRadius: '10px',
                                                position: 'relative'
                                            }}
                                        >
                                            {/* Shimmer Effect */}
                                            <div style={{
                                                position: 'absolute',
                                                inset: 0,
                                                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                                                animation: 'shimmer 2s infinite'
                                            }} />
                                        </motion.div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Additional Info */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="glass-card"
                style={{
                    marginTop: '48px',
                    padding: '40px',
                    textAlign: 'center'
                }}
            >
                <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    marginBottom: '16px'
                }}>
                    Always Learning
                </h3>
                <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1rem',
                    lineHeight: '1.7',
                    maxWidth: '700px',
                    margin: '0 auto'
                }}>
                    I'm constantly exploring new technologies and improving my skills. Currently diving deeper into
                    advanced AI architectures, distributed systems, and cloud-native development.
                </p>
            </motion.div>
        </motion.div>
    );
};

export default Skills;
