import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Briefcase, Mail, Phone, Linkedin, Github, Download } from 'lucide-react';

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            style={{
                padding: '60px 20px',
                maxWidth: '900px',
                margin: '0 auto',
                minHeight: '100vh',
                color: '#fff'
            }}
        >
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#888', marginBottom: '40px' }}>
                <ArrowLeft size={20} /> Back to Home
            </Link>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: '400', letterSpacing: '0.1em' }}>Resume & Experience</h1>
                <button className="glass-card" style={{ padding: '10px 20px', display: 'flex', alignItems: 'center', gap: '8px', color: '#fff' }}>
                    Download CV <Download size={18} />
                </button>
            </div>

            <h2 style={{ fontSize: '1.8rem', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Briefcase /> Professional Experience
            </h2>

            <div className="glass-card" style={{ padding: '30px', marginBottom: '40px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', flexWrap: 'wrap', gap: '10px' }}>
                    <div>
                        <h3 style={{ fontSize: '1.4rem', fontWeight: '600', background: 'linear-gradient(135deg, #00f0ff, #ff00ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Software Engineer</h3>
                        <p style={{ color: '#888' }}>January 2026 – Present</p>
                    </div>
                </div>
                <p style={{ lineHeight: '1.8', color: '#ccc' }}>
                    Designed and implemented multiple Generative AI and LLM-based systems independently as part of internship and self-learning initiatives. Built end-to-end Generative AI applications using Python and LangChain, applied Retrieval-Augmented Generation (RAG) techniques to ground LLM responses using external documents, implemented agent-based reasoning workflows using ReAct-style loops, and worked on LLM evaluation, safety guardrails, and conversational memory to improve response reliability and consistency.
                </p>
            </div>

            <h2 style={{ fontSize: '1.8rem', marginBottom: '25px' }}>Contact Information</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                <motion.a
                    href="mailto:manish55555parmar@gmail.com"
                    className="glass-card"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}
                >
                    <Mail size={24} color="#00f0ff" />
                    <span style={{ fontSize: '0.8rem', color: '#aaa' }}>Email</span>
                    <span style={{ fontSize: '0.9rem' }}>manish55555parmar@gmail.com</span>
                </motion.a>
                <motion.a
                    href="https://linkedin.com/in/manish-parmar-8a30b33a6"
                    target="_blank"
                    className="glass-card"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}
                >
                    <Linkedin size={24} color="#ff00ff" />
                    <span style={{ fontSize: '0.8rem', color: '#aaa' }}>LinkedIn</span>
                    <span style={{ fontSize: '0.9rem' }}>manish-parmar</span>
                </motion.a>
                <motion.a
                    href="https://github.com/manish860200"
                    target="_blank"
                    className="glass-card"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}
                >
                    <Github size={24} color="#ffff00" />
                    <span style={{ fontSize: '0.8rem', color: '#aaa' }}>GitHub</span>
                    <span style={{ fontSize: '0.9rem' }}>manish860200</span>
                </motion.a>
            </div>
        </motion.div>
    );
};

export default Resume;
