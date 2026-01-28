import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Code, Terminal, Cpu, Database, Network, GitBranch, Github, Layers, ShieldCheck, Zap, Search, MessageSquare, Box, PenTool, Layout, BarChart3, Globe, Palette, Settings } from 'lucide-react';

const Skills = () => {
    const [clickedSkill, setClickedSkill] = useState(null);

    const handleSkillClick = (categoryIdx, skillIdx) => {
        const key = `${categoryIdx}-${skillIdx}`;
        setClickedSkill(key);
        setTimeout(() => setClickedSkill(null), 600);
    };

    const skillCategories = [
        {
            title: "Programming Languages",
            skills: [
                {
                    name: "Python",
                    icon: (
                        <svg viewBox="0 0 24 24" width="60" height="60" fill="currentColor">
                            <path d="M11.666 0c-1.802 0-1.683.784-1.683.784l.003 1.638h3.424v.482h-4.79S7 3.018 7 5.795c0 2.778 1.488 2.671 1.488 2.671l.89.001v-1.24s-.044-1.486 1.442-1.486h2.894s1.442-.016 1.442-1.425V1.45s.127-1.45-1.489-1.45H11.666zM7.17 3.738a.56.56 0 0 0-.56.56.56.56 0 0 0 .56.56.56.56 0 0 0 .56-.56.56.56 0 0 0-.56-.56zm5.161 4.603c-1.802 0-3.37.016-3.37.016s-1.488-.107-1.488 2.67c0 2.778 1.616 2.88 1.616 2.88l1.62-.001v-3.424h4.79s1.617.114 1.617-2.662c0-2.776-1.443-2.663-1.443-2.663h-2.894s-1.442-.016-1.442 1.425v2.881s-.127 1.442 1.489 1.442h1.492s1.442.016 1.442-1.425v-1.63H12.331s-.666 0-.666.012zm3.17 6.467a.56.56 0 0 0-.56.56.56.56 0 0 0 .56.56.56.56 0 0 0 .56-.56.56.56 0 0 0-.56-.56z" />
                        </svg>
                    ),
                    color: "#00d9ff"
                },
                { name: "SQL", Icon: Database, color: "#336791" },
                { name: "C++", Icon: Terminal, color: "#00599C" }
            ]
        },
        {
            title: "Frontend Development",
            skills: [
                { name: "React", Icon: Globe, color: "#61DAFB" },
                { name: "JavaScript", Icon: Code, color: "#F7DF1E" },
                { name: "HTML5", Icon: Layout, color: "#E34F26" },
                { name: "CSS3", Icon: Palette, color: "#1572B6" },
                { name: "Vite", Icon: Zap, color: "#646CFF" },
                { name: "Framer Motion", Icon: Box, color: "#FF0055" }
            ]
        },
        {
            title: "Backend & Tools",
            skills: [
                { name: "FastAPI", Icon: Zap, color: "#009688" },
                { name: "PostgreSQL", Icon: Database, color: "#336791" },
                { name: "MongoDB", Icon: Database, color: "#47A248" },
                { name: "Docker", Icon: Box, color: "#2496ED" },
                { name: "Git", Icon: GitBranch, color: "#F05032" },
                { name: "GitHub", Icon: Github, color: "#ffffff" }
            ]
        },
        {
            title: "AI & Machine Learning",
            skills: [
                { name: "LangChain", Icon: Layers, color: "#00d9ff" },
                { name: "PyTorch", Icon: Code, color: "#EE4C2C" },
                { name: "TensorFlow", Icon: Cpu, color: "#FF6F00" },
                { name: "Hugging Face", Icon: MessageSquare, color: "#FFD21E" },
                { name: "RAG", Icon: Search, color: "#00f0ff" },
                { name: "LLMs", Icon: Cpu, color: "#ff00ff" }
            ]
        },
        {
            title: "AI Concepts",
            skills: [
                { name: "Prompt Engineering", Icon: PenTool, color: "#00F0FF" },
                { name: "Vector Databases", Icon: Database, color: "#FFFF00" },
                { name: "AI Safety", Icon: ShieldCheck, color: "#FF6B6B" },
                { name: "Agentic AI", Icon: Cpu, color: "#00FF00" },
                { name: "ReAct Reasoning", Icon: Terminal, color: "#9C27B0" },
                { name: "Evaluation", Icon: BarChart3, color: "#FF9800" }
            ]
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            style={{
                padding: '60px 20px',
                maxWidth: '1200px',
                margin: '0 auto',
                minHeight: '100vh',
                color: '#fff'
            }}
        >
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#888', marginBottom: '40px' }}>
                <ArrowLeft size={20} /> Back to Home
            </Link>

            <h1 style={{
                fontSize: '3rem',
                marginBottom: '50px',
                fontWeight: '400',
                textAlign: 'center',
                letterSpacing: '0.1em'
            }}>
                Skills
            </h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
                {skillCategories.map((category, categoryIdx) => (
                    <motion.div
                        key={categoryIdx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: categoryIdx * 0.1, duration: 0.4 }}
                    >
                        <h2 style={{
                            fontSize: '1.5rem',
                            marginBottom: '25px',
                            fontFamily: 'var(--font-body)',
                            fontWeight: '600',
                            letterSpacing: '0.02em',
                            color: '#fff'
                        }}>
                            {category.title}
                        </h2>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
                            gap: '20px'
                        }}>
                            {category.skills.map((skill, skillIdx) => {
                                const isClicked = clickedSkill === `${categoryIdx}-${skillIdx}`;

                                return (
                                    <motion.div
                                        key={skillIdx}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => handleSkillClick(categoryIdx, skillIdx)}
                                        transition={{ duration: 0.2 }}
                                        style={{
                                            background: 'transparent',
                                            border: '1px solid rgba(255, 255, 255, 0.05)',
                                            borderRadius: '20px',
                                            padding: '25px 15px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            gap: '15px',
                                            cursor: 'pointer',
                                            position: 'relative',
                                            overflow: 'hidden'
                                        }}
                                    >
                                        {/* Light Effect on Click */}
                                        <AnimatePresence>
                                            {isClicked && (
                                                <>
                                                    <motion.div
                                                        initial={{ scale: 0, opacity: 1 }}
                                                        animate={{ scale: 3, opacity: 0 }}
                                                        exit={{ opacity: 0 }}
                                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                                        style={{
                                                            position: 'absolute',
                                                            top: '50%',
                                                            left: '50%',
                                                            transform: 'translate(-50%, -50%)',
                                                            width: '100px',
                                                            height: '100px',
                                                            borderRadius: '50%',
                                                            background: 'radial-gradient(circle, rgba(0, 217, 255, 0.6), transparent)',
                                                            pointerEvents: 'none',
                                                            zIndex: 10
                                                        }}
                                                    />
                                                    <motion.div
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: [0, 1, 0] }}
                                                        transition={{ duration: 0.6 }}
                                                        style={{
                                                            position: 'absolute',
                                                            inset: 0,
                                                            borderRadius: '20px',
                                                            boxShadow: '0 0 40px rgba(0, 217, 255, 0.8), inset 0 0 40px rgba(0, 217, 255, 0.3)',
                                                            pointerEvents: 'none',
                                                            zIndex: 9
                                                        }}
                                                    />
                                                </>
                                            )}
                                        </AnimatePresence>

                                        {/* Icon Container */}
                                        <div style={{
                                            width: '80px',
                                            height: '80px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: skill.color || '#fff',
                                            filter: 'drop-shadow(0 0 10px rgba(0, 217, 255, 0.2))'
                                        }}>
                                            {skill.icon ? skill.icon : <skill.Icon size={48} />}
                                        </div>

                                        {/* Skill Name */}
                                        <span style={{
                                            fontSize: '0.95rem',
                                            fontWeight: '500',
                                            textAlign: 'center',
                                            color: '#fff',
                                            fontFamily: 'var(--font-body)'
                                        }}>
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Skills;
