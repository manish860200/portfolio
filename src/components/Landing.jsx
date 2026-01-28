import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, Code, Brain, Zap, Database, Network } from 'lucide-react';

const Landing = () => {
    const [currentSkill, setCurrentSkill] = useState(0);
    const skills = ["Python", "Generative AI"];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSkill((prev) => (prev + 1) % skills.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    const containerVariants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        },
        exit: { opacity: 0, transition: { duration: 0.4 } }
    };

    const itemVariants = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } }
    };

    // Technical code snippets for background
    const codeSnippets = [
        { text: "import langchain", top: "10%", left: "5%", delay: 0 },
        { text: "from openai import GPT", top: "20%", right: "8%", delay: 0.5 },
        { text: "model.generate()", top: "70%", left: "10%", delay: 1 },
        { text: "vector_db.search()", bottom: "15%", right: "12%", delay: 1.5 },
        { text: "def train_model():", top: "45%", left: "3%", delay: 2 },
        { text: "embeddings.encode()", top: "60%", right: "5%", delay: 2.5 }
    ];

    // Floating technical icons
    const techIcons = [
        { Icon: Brain, top: "15%", left: "15%", delay: 0, color: "#00d9ff" },
        { Icon: Code, top: "25%", right: "18%", delay: 0.5, color: "#ff00ff" },
        { Icon: Zap, bottom: "25%", left: "12%", delay: 1, color: "#ffff00" },
        { Icon: Database, bottom: "35%", right: "15%", delay: 1.5, color: "#00ff00" },
        { Icon: Network, top: "55%", left: "8%", delay: 2, color: "#ff6b6b" }
    ];

    return (
        <motion.div
            className="landing-container"
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                background: '#000000',
                padding: '20px',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Animated Grid Background */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `
                    linear-gradient(rgba(0, 217, 255, 0.03) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0, 217, 255, 0.03) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px',
                zIndex: 0
            }} />

            {/* Floating Code Snippets */}
            {codeSnippets.map((snippet, idx) => (
                <motion.div
                    key={idx}
                    animate={{
                        opacity: [0.1, 0.2, 0.1],
                        y: [0, -10, 0]
                    }}
                    transition={{
                        duration: 4 + idx * 0.5,
                        repeat: Infinity,
                        delay: snippet.delay,
                        ease: "easeInOut"
                    }}
                    style={{
                        position: 'absolute',
                        fontSize: '0.85rem',
                        fontFamily: 'monospace',
                        color: '#00d9ff',
                        zIndex: 0,
                        ...snippet
                    }}
                >
                    {snippet.text}
                </motion.div>
            ))}

            {/* Floating Technical Icons */}
            {techIcons.map((item, idx) => (
                <motion.div
                    key={idx}
                    animate={{
                        y: [0, -15, 0],
                        opacity: [0.15, 0.3, 0.15]
                    }}
                    transition={{
                        duration: 3 + idx * 0.4,
                        repeat: Infinity,
                        delay: item.delay,
                        ease: "easeInOut"
                    }}
                    style={{
                        position: 'absolute',
                        zIndex: 0,
                        ...item
                    }}
                >
                    <item.Icon size={32} color={item.color} strokeWidth={1.5} filter="drop-shadow(0 0 8px rgba(0,217,255,0.3))" />
                </motion.div>
            ))}

            <motion.div
                className="intro-section"
                variants={itemVariants}
                style={{ position: 'relative', zIndex: 1 }}
            >
                {/* Animated Greeting */}
                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{
                        fontSize: '4rem',
                        fontWeight: '400',
                        marginBottom: '10px',
                        letterSpacing: '0.1em'
                    }}
                >
                    Hello, there!
                </motion.h1>

                {/* Animated Name with Gradient */}
                <motion.h1
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    style={{
                        fontSize: '4rem',
                        fontWeight: '400',
                        marginBottom: '30px',
                        letterSpacing: '0.1em',
                        background: 'linear-gradient(135deg, #00d9ff, #ff00ff)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}
                >
                    This is Manish Parmar!
                </motion.h1>

                {/* "I specialize in" Section - Only Python & Gen AI */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '15px',
                        marginBottom: '50px',
                        minHeight: '80px',
                        flexDirection: 'column'
                    }}
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                        style={{
                            color: '#aaa',
                            fontSize: '1.2rem',
                            fontFamily: 'var(--font-body)',
                            fontWeight: '300',
                            letterSpacing: '0.05em'
                        }}
                    >
                        I specialize in
                    </motion.span>
                    <div style={{
                        minWidth: '280px',
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSkill}
                                initial={{ y: 30, opacity: 0, rotateX: -90 }}
                                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                                exit={{ y: -30, opacity: 0, rotateX: 90 }}
                                transition={{
                                    duration: 0.6,
                                    ease: [0.4, 0, 0.2, 1],
                                    opacity: { duration: 0.4 }
                                }}
                                style={{
                                    background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.2), rgba(255, 0, 255, 0.2))',
                                    padding: '12px 30px',
                                    borderRadius: '12px',
                                    border: '2px solid rgba(0, 217, 255, 0.7)',
                                    fontSize: '1.8rem',
                                    color: '#00d9ff',
                                    fontWeight: '700',
                                    fontFamily: 'var(--font-heading)',
                                    letterSpacing: '0.08em',
                                    display: 'inline-block',
                                    boxShadow: '0 0 30px rgba(0, 217, 255, 0.4), inset 0 0 20px rgba(0, 217, 255, 0.1)',
                                    textShadow: '0 0 10px rgba(0, 217, 255, 0.5)'
                                }}
                            >
                                {skills[currentSkill]}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div
                className="nav-buttons"
                variants={itemVariants}
                style={{
                    display: 'flex',
                    gap: '15px',
                    marginBottom: '20px',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    position: 'relative',
                    zIndex: 1
                }}
            >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link to="/projects" className="glass-card" style={{ padding: '10px 25px', color: '#fff' }}>
                        Projects
                    </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link to="/about" className="glass-card" style={{ padding: '10px 25px', color: '#fff' }}>
                        About Me
                    </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link to="/skills" className="glass-card" style={{ padding: '10px 25px', color: '#fff' }}>
                        Skills
                    </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link to="/contact" className="glass-card" style={{ padding: '10px 25px', color: '#fff' }}>
                        Contact
                    </Link>
                </motion.div>
            </motion.div>

            <motion.div
                variants={itemVariants}
                style={{ position: 'relative', zIndex: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Link to="/resume" className="glass-card" style={{
                    padding: '10px 25px',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                }}>
                    Resume <FileText size={18} />
                </Link>
            </motion.div>
        </motion.div>
    );
};

export default Landing;
