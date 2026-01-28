import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, Mail, Linkedin, Github, MapPin, Briefcase } from 'lucide-react';

const AboutMe = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            style={{
                padding: '40px 20px',
                maxWidth: '1200px',
                margin: '0 auto',
                minHeight: '100vh',
                color: '#fff'
            }}
        >
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#888', marginBottom: '30px' }}>
                <ArrowLeft size={20} /> Back to Home
            </Link>

            <h1 style={{
                fontSize: '3rem',
                marginBottom: '40px',
                fontWeight: '400',
                textAlign: 'center',
                letterSpacing: '0.1em'
            }}>
                About Me
            </h1>

            {/* Profile Section */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '40px',
                marginBottom: '60px',
                alignItems: 'start'
            }}>
                {/* Left Side - Info */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                >
                    <h2 style={{
                        fontSize: '2rem',
                        marginBottom: '20px',
                        fontFamily: 'var(--font-heading)',
                        letterSpacing: '0.08em'
                    }}>
                        Manish Parmar
                    </h2>

                    <p style={{
                        fontSize: '1rem',
                        lineHeight: '1.8',
                        color: '#ccc',
                        marginBottom: '30px'
                    }}>
                        Passionate Software Engineer with expertise in Generative AI, Large Language Models, and end-to-end AI system development. Currently focused on building reliable, modular, and production-style AI systems using Python, LangChain, and RAG techniques.
                    </p>

                    {/* Contact Info */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <a href="mailto:manish55555parmar@gmail.com" style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            color: '#00d9ff',
                            fontSize: '0.95rem'
                        }}>
                            <Mail size={18} />
                            <span>manish55555parmar@gmail.com</span>
                        </a>

                        <a href="https://linkedin.com/in/manish-parmar-8a30b33a6" target="_blank" style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            color: '#00d9ff',
                            fontSize: '0.95rem'
                        }}>
                            <Linkedin size={18} />
                            <span>LinkedIn</span>
                        </a>

                        <a href="https://github.com/manish860200" target="_blank" style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            color: '#00d9ff',
                            fontSize: '0.95rem'
                        }}>
                            <Github size={18} />
                            <span>Github/manish-p01</span>
                        </a>
                    </div>
                </motion.div>

                {/* Right Side - Profile Image */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <img
                        src="/profile.jpg"
                        alt="Manish Parmar"
                        style={{
                            width: '280px',
                            height: '280px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            border: '4px solid rgba(0, 217, 255, 0.5)',
                            boxShadow: '0 0 40px rgba(0, 217, 255, 0.3)'
                        }}
                    />
                </motion.div>
            </div>

            {/* Work Experience Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
            >
                <h2 style={{
                    fontSize: '2rem',
                    marginBottom: '30px',
                    fontFamily: 'var(--font-heading)',
                    letterSpacing: '0.08em'
                }}>
                    Work Experience
                </h2>

                <div style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '15px',
                    padding: '30px',
                    backdropFilter: 'blur(10px)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                        <div style={{
                            width: '50px',
                            height: '50px',
                            background: 'linear-gradient(135deg, #00d9ff, #0099ff)',
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Briefcase size={24} />
                        </div>
                        <div>
                            <h3 style={{
                                fontSize: '1.3rem',
                                fontFamily: 'var(--font-heading)',
                                letterSpacing: '0.05em'
                            }}>
                                Software Engineer
                            </h3>
                            <p style={{ color: '#888', fontSize: '0.9rem' }}>Self-Driven Projects</p>
                        </div>
                    </div>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px',
                        marginBottom: '20px',
                        fontSize: '0.9rem',
                        color: '#aaa'
                    }}>
                        <span>📅 January 2026 – Present</span>
                        <span>🌐 Remote</span>
                    </div>

                    <p style={{
                        lineHeight: '1.8',
                        color: '#ccc',
                        marginBottom: '20px'
                    }}>
                        Working on containerization with Docker, AI systems, and various development projects to build scalable cloud infrastructure and automate deployment pipelines.
                    </p>

                    {/* Tech Stack Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {['Python', 'LangChain', 'RAG', 'Docker', 'AI Systems', 'LLMs'].map((tech, i) => (
                            <span key={i} style={{
                                padding: '5px 12px',
                                background: 'rgba(0, 217, 255, 0.1)',
                                border: '1px solid rgba(0, 217, 255, 0.3)',
                                borderRadius: '15px',
                                fontSize: '0.8rem',
                                color: '#00d9ff'
                            }}>
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default AboutMe;
