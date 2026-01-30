import React, { useState, useEffect } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import {
    ArrowRight, TrendingUp, Mail, Linkedin, Github, ExternalLink,
    Brain, Code2, Layers, Sparkles, Bot, Rocket, Send, CheckCircle, AlertCircle,
    ChevronDown, Menu, X, Star
} from 'lucide-react';

const SinglePagePortfolio = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const { scrollYProgress } = useScroll();

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'skills', 'projects', 'contact'];
            const scrollPosition = window.scrollY + 200;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        // Web3Forms Access Key
        const accessKey = "ba185174-2740-4c13-b805-083f14f00bfd";

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: accessKey,
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject || "New Portfolio Contact",
                    message: formData.message,
                    from_name: "Manish Portfolio"
                }),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                console.error('Web3Forms Error:', result);
                setStatus({ type: 'error', message: result.message || 'Something went wrong. Please try again.' });
            }
        } catch (error) {
            console.error('Submit Error:', error);
            setStatus({ type: 'error', message: 'Failed to send message. Please check your connection or try again later.' });
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setStatus({ type: '', message: '' }), 6000);
        }
    };

    const BackgroundLines = () => (
        <div className="bg-lines-container">
            {[20, 40, 60, 80].map((pos) => (
                <React.Fragment key={`h-${pos}`}>
                    <div className="bg-line bg-line-h" style={{ top: `${pos}%` }} />
                    <div className="light-traveler light-traveler-h" style={{ top: `${pos}%`, animationDelay: `${pos * 0.1}s` }} />
                </React.Fragment>
            ))}
            {[25, 50, 75].map((pos) => (
                <React.Fragment key={`v-${pos}`}>
                    <div className="bg-line bg-line-v" style={{ left: `${pos}%` }} />
                    <div className="light-traveler light-traveler-v" style={{ left: `${pos}%`, animationDelay: `${pos * 0.12}s` }} />
                </React.Fragment>
            ))}
        </div>
    );

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' }
    ];

    // Skills with SVG logos
    const skillCategories = [
        {
            title: 'AI & ML',
            skills: [
                { name: 'OpenAI', logo: '🤖', bg: '#000' },
                { name: 'LangChain', logo: '🦜', bg: '#1a1a2e' },
                { name: 'HuggingFace', logo: '🤗', bg: '#ffcc00' },
            ]
        },
        {
            title: 'Programming',
            skills: [
                { name: 'Python', logo: '🐍', bg: '#3776ab' },
                { name: 'JavaScript', logo: 'JS', bg: '#f7df1e', textColor: '#000' },
                { name: 'TypeScript', logo: 'TS', bg: '#3178c6' },
            ]
        },
        {
            title: 'Databases',
            skills: [
                { name: 'PostgreSQL', logo: '🐘', bg: '#336791' },
                { name: 'MongoDB', logo: '🍃', bg: '#47a248' },
                { name: 'FAISS', logo: '⚡', bg: '#1a1a2e' },
            ]
        },
        {
            title: 'Frameworks',
            skills: [
                { name: 'React', logo: '⚛️', bg: '#20232a' },
                { name: 'FastAPI', logo: '⚡', bg: '#009688' },
                { name: 'Node.js', logo: '🟢', bg: '#339933' },
            ]
        },
        {
            title: 'DevOps & Tools',
            skills: [
                { name: 'Docker', logo: '🐳', bg: '#2496ed' },
                { name: 'Git', logo: '📦', bg: '#f05032' },
                { name: 'AWS', logo: '☁️', bg: '#232f3e' },
            ]
        },
        {
            title: 'AI Tools',
            skills: [
                { name: 'RAG', logo: '📚', bg: '#7c3aed' },
                { name: 'Vector DB', logo: '🔷', bg: '#1a1a2e' },
                { name: 'Agents', logo: '🤖', bg: '#10b981' },
            ]
        }
    ];

    const projects = [
        {
            title: 'Gemini-Like GenAI System',
            tech: ['Python', 'LangChain', 'RAG'],
            description: 'Production-grade AI system with advanced RAG techniques and vector databases',
            icon: Brain,
            gradient: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
            github: 'https://github.com/manish860200'
        },
        {
            title: 'Agent-Based AI Assistant',
            tech: ['Python', 'LLMs', 'LangChain'],
            description: 'Intelligent agent system for automated research and data analysis',
            icon: Bot,
            gradient: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
            github: 'https://github.com/manish860200'
        },
        {
            title: 'Modern Portfolio Website',
            tech: ['React', 'Framer Motion'],
            description: 'Stunning portfolio with smooth animations and modern design',
            icon: Rocket,
            gradient: 'linear-gradient(135deg, #ec4899 0%, #f472b6 100%)',
            github: 'https://github.com/manish860200'
        },
        {
            title: 'AI-Powered Code Assistant',
            tech: ['Python', 'FastAPI'],
            description: 'AI assistant for code generation and debugging',
            icon: Sparkles,
            gradient: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
            github: 'https://github.com/manish860200'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 80
            }
        }
    };

    const cardHoverVariants = {
        rest: { y: 0, scale: 1, rotate: 0 },
        hover: {
            y: -15,
            scale: 1.02,
            rotate: 1,
            transition: {
                type: "spring",
                stiffness: 150,
                damping: 15
            }
        },
        tap: { scale: 0.98, y: -5 }
    };

    // Skill Logo Card Component
    const SkillCard = ({ skill }) => (
        <motion.div
            whileHover={{ y: -8, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
                width: '70px',
                height: '70px',
                background: skill.bg || '#1a1a2e',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: skill.logo.length <= 2 ? '1.8rem' : '1.5rem',
                fontWeight: skill.logo.length <= 2 ? '700' : '400',
                color: skill.textColor || '#fff',
                cursor: 'pointer',
                border: '1px solid rgba(255,255,255,0.08)',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
            }}
            title={skill.name}
        >
            {skill.logo}
        </motion.div>
    );

    return (
        <div style={{ background: '#000000', color: 'white', minHeight: '100vh', position: 'relative' }}>
            <BackgroundLines />
            {/* Animated Background Particles */}
            <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
                {[...Array(25)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.05, 0.2, 0.05], y: [0, -40, 0], x: [0, Math.random() * 20 - 10, 0] }}
                        transition={{ duration: 5 + Math.random() * 5, repeat: Infinity, delay: Math.random() * 4 }}
                        style={{
                            position: 'absolute', left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
                            width: '2px', height: '2px', background: '#a855f7', borderRadius: '50%',
                            boxShadow: '0 0 8px rgba(168, 85, 247, 0.4)'
                        }}
                    />
                ))}
            </div>

            {/* Mouse Glow */}
            <motion.div
                animate={{ x: mousePosition.x - 200, y: mousePosition.y - 200 }}
                transition={{ type: 'spring', damping: 30, stiffness: 200 }}
                style={{
                    position: 'fixed', width: '400px', height: '400px',
                    background: 'radial-gradient(circle, rgba(124, 58, 237, 0.06) 0%, transparent 70%)',
                    borderRadius: '50%', pointerEvents: 'none', zIndex: 1
                }}
            />

            {/* Progress Bar */}
            <motion.div style={{
                position: 'fixed', top: 0, left: 0, right: 0, height: '3px',
                background: 'linear-gradient(90deg, #7c3aed, #a855f7, #c084fc)',
                transformOrigin: '0%', scaleX: scrollYProgress, zIndex: 1001
            }} />

            {/* Navigation */}
            <nav className="navbar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto' }}>
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <motion.div whileHover={{ rotate: 10, scale: 1.1 }} whileTap={{ scale: 0.95 }}
                        style={{
                            width: '32px', height: '32px', borderRadius: '50%', overflow: 'hidden',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            boxShadow: '0 4px 15px rgba(124, 58, 237, 0.3)', cursor: 'pointer'
                        }}>
                        <img src="/favicon.png" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </motion.div>
                    <span style={{ fontWeight: '600', fontSize: '0.95rem' }}>Manish Parmar</span>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                    style={{ display: 'flex', gap: '4px' }} className="desktop-nav">
                    {navItems.map((item, idx) => (
                        <motion.a key={item.id} href={`#${item.id}`} className={`nav-link ripple ${activeSection === item.id ? 'active' : ''}`}
                            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + idx * 0.05 }}>{item.label}</motion.a>
                    ))}
                </motion.div>

                <motion.a href="#contact" className="btn-primary ripple" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} style={{ padding: '10px 20px', fontSize: '0.8rem' }}>
                    Get in Touch <ArrowRight size={14} />
                </motion.a>

                <motion.button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} whileTap={{ scale: 0.9 }}
                    style={{ display: 'none', padding: '8px', color: 'white', background: 'transparent' }}>
                    {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </motion.button>
            </nav>

            {/* Hero Section */}
            <section id="home" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '100px' }}>
                <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', opacity: 0.4, pointerEvents: 'none' }}>
                    {[30, 70].map((pos, i) => (
                        <React.Fragment key={i}>
                            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.5, delay: i * 0.3 }}
                                style={{
                                    position: 'absolute', top: `${pos}%`, left: 0, right: 0, height: '1px',
                                    background: 'linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.35) 30%, rgba(124, 58, 237, 0.35) 70%, transparent)', transformOrigin: 'center'
                                }} />
                            <motion.div animate={{ x: i === 0 ? ['-100%', '200%'] : ['200%', '-100%'] }}
                                transition={{ duration: 4 + i, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
                                style={{
                                    position: 'absolute', top: `${pos}%`, width: '200px', height: '2px',
                                    background: 'linear-gradient(90deg, transparent, #a855f7, transparent)', filter: 'blur(1px)',
                                    boxShadow: '0 0 20px rgba(168, 85, 247, 0.7)'
                                }} />
                        </React.Fragment>
                    ))}
                </div>

                <motion.div variants={containerVariants} initial="hidden" animate="visible" style={{ maxWidth: '850px', textAlign: 'center', zIndex: 2, padding: '0 24px' }}>
                    <motion.div variants={itemVariants}>
                        <motion.div className="status-badge" whileHover={{ scale: 1.05 }} style={{ marginBottom: '28px' }}>
                            <div className="status-badge-inner">
                                <TrendingUp size={14} style={{ color: '#a855f7' }} />
                                <span style={{ background: 'linear-gradient(135deg, #a855f7, #c084fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: '600' }}>Available</span>
                                <span style={{ color: '#a0a0a0' }}>for new opportunities</span>
                                <ArrowRight size={12} style={{ color: '#666666' }} />
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.p variants={itemVariants} style={{ fontSize: '0.95rem', color: '#a0a0a0', marginBottom: '16px' }}>
                        Hi, I'm <span style={{ fontSize: '1.1rem', fontWeight: '600', background: 'linear-gradient(135deg, #ffffff, #c084fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Manish Parmar</span>
                    </motion.p>

                    <motion.h1 variants={itemVariants} style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: '700', marginBottom: '20px', lineHeight: '1.2', letterSpacing: '-0.03em' }}>
                        Building the future with <span className="gradient-text">AI-Powered Insights</span>
                    </motion.h1>

                    <motion.p variants={itemVariants} style={{ fontSize: '1rem', color: '#a0a0a0', marginBottom: '36px', maxWidth: '550px', margin: '0 auto 36px', lineHeight: '1.7' }}>
                        Software Engineer specialized in LLMs, LangChain, and production-grade AI systems
                    </motion.p>

                    <motion.div variants={itemVariants} style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
                        <motion.div className="ai-icon" whileHover={{ scale: 1.15, rotate: 5 }} whileTap={{ scale: 0.95 }}>AI</motion.div>
                    </motion.div>

                    <motion.div variants={itemVariants} style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <motion.a href="#projects" className="btn-secondary ripple" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <ChevronDown size={16} /> View Projects
                        </motion.a>
                        <motion.a href="#contact" className="btn-primary ripple" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            Get in Touch <ArrowRight size={16} />
                        </motion.a>
                    </motion.div>
                </motion.div>
            </section>

            {/* About Section */}
            <section id="about" className="section" style={{ background: 'rgba(5, 5, 5, 1)', position: 'relative', overflow: 'hidden', padding: '100px 0' }}>
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ duration: 0.8 }} style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>

                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '60px' }}>
                        {/* Text Content */}
                        <div style={{ flex: '1', minWidth: '320px' }}>
                            <motion.p initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
                                style={{ color: '#a0a0a0', fontSize: '1.1rem', marginBottom: '12px', fontWeight: '500' }}>
                                Myself
                            </motion.p>

                            <motion.h2 initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
                                style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', fontWeight: '900', lineHeight: '0.9', margin: '0 0 30px 0', letterSpacing: '-0.04em', textTransform: 'uppercase', color: '#f0f0f0' }}>
                                Manish <br /> <span style={{ color: '#a855f7' }}>Parmar</span>
                            </motion.h2>

                            <motion.p initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
                                style={{ fontSize: '1.1rem', color: '#888', maxWidth: '480px', lineHeight: '1.6', marginBottom: '40px' }}>
                                I'm a <span style={{ color: '#ffffff', fontWeight: '500' }}>Software Engineer</span> specialized in building production-grade AI systems,
                                focusing on Large Language Models, LangChain, and RAG techniques.
                            </motion.p>

                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                                style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '40px' }}>
                                {['Python', 'LangChain', 'FastAPI', 'LLM', 'RAG', 'Docker', 'AI/ML'].map((tech, idx) => (
                                    <span key={idx} style={{
                                        padding: '8px 20px', borderRadius: '30px', border: '1px solid rgba(168, 85, 247, 0.3)',
                                        color: '#a855f7', fontSize: '0.85rem', fontWeight: '500'
                                    }}>{tech}</span>
                                ))}
                            </motion.div>

                            <motion.a href="#projects" className="btn-primary ripple" style={{ padding: '16px 32px' }}
                                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                View Projects <ArrowRight size={18} style={{ marginLeft: '10px' }} />
                            </motion.a>
                        </div>

                        {/* Image Content */}
                        <div style={{ flex: '1', minWidth: '320px', position: 'relative', display: 'flex', justifyContent: 'center' }}>
                            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
                                style={{
                                    position: 'relative', width: '100%', maxWidth: '380px', aspectRatio: '1/1',
                                    borderRadius: '24px', overflow: 'hidden',
                                    background: '#e0f2d8', // The light green background from reference
                                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                                }}>
                                <img src="/profile.jpg" alt="Manish Parmar"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                                />
                            </motion.div>

                            {/* Floating Icons */}
                            <div style={{ position: 'absolute', bottom: '40px', left: '-20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                {[
                                    { icon: Github, href: 'https://github.com/manish860200' },
                                    { icon: Linkedin, href: 'https://linkedin.com/in/manish-parmar-8a30b33a6' }
                                ].map((item, i) => (
                                    <motion.a key={i} href={item.href} target="_blank" rel="noreferrer"
                                        whileHover={{ scale: 1.2, rotate: 5 }}
                                        style={{
                                            width: '50px', height: '50px', background: 'white', borderRadius: '50%',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'black',
                                            boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
                                        }}>
                                        <item.icon size={22} />
                                    </motion.a>
                                ))}
                                <motion.div whileHover={{ scale: 1.2 }}
                                    style={{
                                        width: '50px', height: '50px', background: '#333', borderRadius: '50%',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'
                                    }}>
                                    <ArrowRight size={22} style={{ transform: 'rotate(-45deg)' }} />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Skills Section - Grid Layout Like Reference */}
            <section id="skills" className="section">
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }} style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <h2 className="section-title">Skills</h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '40px', marginTop: '48px' }}>
                        {skillCategories.map((category, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                                <h3 style={{ fontSize: '0.9rem', fontWeight: '600', color: '#a0a0a0', marginBottom: '20px', textAlign: 'center' }}>
                                    {category.title}
                                </h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
                                    {category.skills.map((skill, i) => (
                                        <SkillCard key={i} skill={skill} />
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="section" style={{ background: 'rgba(10, 10, 10, 0.8)' }}>
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }} style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
                    <p className="section-subtitle">Some of my recent work</p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                        {projects.map((project, idx) => (
                            <motion.div key={idx} className="glass-card" variants={cardHoverVariants} initial="rest" whileHover="hover" whileTap="tap"
                                style={{ padding: '28px' }}>
                                <motion.div className="icon-wrapper" whileHover={{ rotate: 10, scale: 1.15 }}
                                    style={{ width: '52px', height: '52px', background: project.gradient, marginBottom: '20px' }}>
                                    <project.icon size={24} />
                                </motion.div>
                                <h3 style={{ fontSize: '1.05rem', fontWeight: '600', marginBottom: '10px' }}>{project.title}</h3>
                                <p style={{ color: '#a0a0a0', marginBottom: '18px', lineHeight: '1.7', fontSize: '0.88rem' }}>{project.description}</p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                                    {project.tech.map((tech, i) => (
                                        <motion.span key={i} className="badge" whileHover={{ scale: 1.1 }} style={{ fontSize: '0.7rem', padding: '6px 12px' }}>{tech}</motion.span>
                                    ))}
                                </div>
                                <motion.a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary ripple"
                                    whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} style={{ width: '100%', fontSize: '0.8rem', padding: '12px' }}>
                                    <Github size={16} /> View on GitHub
                                </motion.a>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section >

            {/* Contact Section */}
            < section id="contact" className="section" >
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }} style={{ maxWidth: '700px', margin: '0 auto' }}>
                    <h2 className="section-title">Get in <span className="gradient-text">Touch</span></h2>
                    <p className="section-subtitle">Have a project in mind? Let's talk!</p>

                    <motion.div className="glass-card" variants={cardHoverVariants} initial="rest" whileHover="hover" style={{ padding: '36px' }}>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                                {['name', 'email'].map((field) => (
                                    <div key={field}>
                                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.8rem', fontWeight: '500', color: '#a0a0a0', textTransform: 'capitalize' }}>{field}</label>
                                        <input type={field === 'email' ? 'email' : 'text'} name={field} value={formData[field]}
                                            onChange={(e) => setFormData({ ...formData, [field]: e.target.value })} required className="input-field" placeholder={`Your ${field}`} />
                                    </div>
                                ))}
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.8rem', fontWeight: '500', color: '#a0a0a0' }}>Subject</label>
                                <input type="text" name="subject" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    required className="input-field" placeholder="What's this about?" />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.8rem', fontWeight: '500', color: '#a0a0a0' }}>Message</label>
                                <textarea name="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required rows="5" className="input-field" style={{ resize: 'vertical' }} placeholder="Tell me about your project..." />
                            </div>
                            <motion.button type="submit" disabled={isSubmitting} className="btn-primary ripple" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                                style={{ width: '100%', padding: '16px', opacity: isSubmitting ? 0.7 : 1 }}>
                                {isSubmitting ? (<><div style={{ width: '18px', height: '18px', border: '2px solid white', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />Sending...</>) : (<><Send size={18} /> Send Message</>)}
                            </motion.button>

                            <AnimatePresence>
                                {status.message && (
                                    <motion.div initial={{ opacity: 0, y: -10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                        style={{
                                            padding: '14px 18px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.85rem',
                                            background: status.type === 'success' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                                            border: `1px solid ${status.type === 'success' ? 'rgba(16, 185, 129, 0.25)' : 'rgba(239, 68, 68, 0.25)'}`,
                                            color: status.type === 'success' ? '#10b981' : '#ef4444'
                                        }}>
                                        {status.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                                        {status.message}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </motion.div>
                </motion.div>
            </section >

            {/* Footer - Simplified */}
            < footer style={{ padding: '40px 24px', textAlign: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.04)', background: 'rgba(0, 0, 0, 0.9)' }}>
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} style={{ color: '#666666', fontSize: '0.85rem' }}>
                    © 2026 Manish Parmar. All rights reserved.
                </motion.p>
            </footer >

            <style>{`
                @media (max-width: 768px) {
                    .desktop-nav { display: none !important; }
                    .mobile-menu-btn { display: block !important; }
                }
            `}</style>
        </div >
    );
};

export default SinglePagePortfolio;
