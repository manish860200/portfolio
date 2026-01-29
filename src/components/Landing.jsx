import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp } from 'lucide-react';

const Landing = () => {
    const containerVariants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        },
        exit: { opacity: 0, transition: { duration: 0.5 } }
    };

    const itemVariants = {
        initial: { opacity: 0, y: 30 },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    return (
        <motion.div
            className="landing-container"
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '100px 20px 60px',
                position: 'relative',
                overflow: 'hidden',
                background: '#000000'
            }}
        >
            {/* Horizontal Glowing Lines Background - Like SignalX */}
            <div style={{
                position: 'absolute',
                inset: 0,
                overflow: 'hidden',
                opacity: 0.6
            }}>
                {/* Top horizontal line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                    style={{
                        position: 'absolute',
                        top: '30%',
                        left: 0,
                        right: 0,
                        height: '1px',
                        background: 'linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.8) 20%, rgba(99, 102, 241, 0.8) 80%, transparent)',
                        transformOrigin: 'center'
                    }}
                />

                {/* Bottom horizontal line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
                    style={{
                        position: 'absolute',
                        bottom: '30%',
                        left: 0,
                        right: 0,
                        height: '1px',
                        background: 'linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.8) 20%, rgba(99, 102, 241, 0.8) 80%, transparent)',
                        transformOrigin: 'center'
                    }}
                />

                {/* Moving light effect on lines */}
                <motion.div
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'linear',
                        repeatDelay: 1
                    }}
                    style={{
                        position: 'absolute',
                        top: '30%',
                        left: 0,
                        width: '200px',
                        height: '1px',
                        background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 1), transparent)',
                        filter: 'blur(2px)',
                        boxShadow: '0 0 20px rgba(139, 92, 246, 0.8)'
                    }}
                />

                <motion.div
                    animate={{ x: ['200%', '-100%'] }}
                    transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: 'linear',
                        repeatDelay: 1.5
                    }}
                    style={{
                        position: 'absolute',
                        bottom: '30%',
                        right: 0,
                        width: '200px',
                        height: '1px',
                        background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 1), transparent)',
                        filter: 'blur(2px)',
                        boxShadow: '0 0 20px rgba(139, 92, 246, 0.8)'
                    }}
                />
            </div>

            {/* Subtle Grid Background */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.02) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
                maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
                pointerEvents: 'none',
                zIndex: 0
            }} />

            {/* Gradient Glow Background */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1), transparent 70%)',
                filter: 'blur(80px)',
                pointerEvents: 'none',
                zIndex: 0
            }} />

            <div style={{
                maxWidth: '900px',
                width: '100%',
                textAlign: 'center',
                zIndex: 1,
                position: 'relative'
            }}>
                {/* Trending Badge with Frame */}
                <motion.div
                    variants={itemVariants}
                    style={{ marginBottom: '32px', display: 'flex', justifyContent: 'center' }}
                >
                    <div style={{
                        background: 'rgba(99, 102, 241, 0.08)',
                        border: '1px solid rgba(99, 102, 241, 0.4)',
                        borderRadius: '100px',
                        padding: '2px',
                        position: 'relative'
                    }}>
                        <div style={{
                            background: 'rgba(0, 0, 0, 0.6)',
                            borderRadius: '100px',
                            padding: '6px 16px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontSize: '0.75rem',
                            fontWeight: '500',
                            color: 'var(--accent-primary)'
                        }}>
                            <TrendingUp size={14} />
                            <span style={{
                                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontWeight: '600'
                            }}>
                                Available
                            </span>
                            <span>for new opportunities</span>
                            <ArrowRight size={12} />
                        </div>
                    </div>
                </motion.div>

                {/* Subtitle with BIGGER NAME */}
                <motion.p
                    variants={itemVariants}
                    style={{
                        fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                        color: 'var(--text-secondary)',
                        marginBottom: '24px',
                        maxWidth: '700px',
                        marginInline: 'auto',
                        fontWeight: '400',
                        lineHeight: '1.6'
                    }}
                >
                    I'm{' '}
                    <span style={{
                        fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
                        color: 'var(--text-primary)',
                        fontWeight: '700',
                        background: 'linear-gradient(135deg, #ffffff, #a78bfa)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        Manish Parmar
                    </span>
                    , a Software Engineer specialized in{' '}
                    <span style={{ color: 'var(--accent-primary)', fontWeight: '500' }}>LLMs</span>,{' '}
                    <span style={{ color: 'var(--accent-primary)', fontWeight: '500' }}>LangChain</span>, and production-grade AI systems.
                </motion.p>

                {/* Main Headline - REDUCED SIZE */}
                <motion.h1
                    variants={itemVariants}
                    style={{
                        fontSize: 'clamp(1.8rem, 5vw, 3.2rem)',
                        fontWeight: '800',
                        marginBottom: '32px',
                        lineHeight: '1.15',
                        letterSpacing: '-0.03em'
                    }}
                >
                    Building the future with{' '}
                    <span style={{
                        background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        AI-Powered Insights
                    </span>
                </motion.h1>

                {/* AI Icon with Glow */}
                <motion.div
                    variants={itemVariants}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: '40px'
                    }}
                >
                    <div className="float" style={{
                        width: '110px',
                        height: '110px',
                        background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                        borderRadius: '28px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 0 60px rgba(99, 102, 241, 0.5), 0 0 100px rgba(139, 92, 246, 0.3)',
                        border: '2px solid rgba(255, 255, 255, 0.1)',
                        position: 'relative'
                    }}>
                        <div style={{
                            fontSize: '3.2rem',
                            fontWeight: '800',
                            color: 'white'
                        }}>
                            AI
                        </div>
                        {/* Glow effect */}
                        <div style={{
                            position: 'absolute',
                            inset: '-20px',
                            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4), transparent 70%)',
                            filter: 'blur(30px)',
                            zIndex: -1
                        }} />
                    </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    variants={itemVariants}
                    style={{
                        display: 'flex',
                        gap: '14px',
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    }}
                >
                    <Link
                        to="/projects"
                        className="btn-primary"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontSize: '0.85rem',
                            padding: '12px 26px'
                        }}
                    >
                        View Projects
                        <ArrowRight size={16} />
                    </Link>
                    <Link
                        to="/contact"
                        className="btn-secondary"
                        style={{
                            fontSize: '0.85rem',
                            padding: '12px 26px'
                        }}
                    >
                        Get in Touch
                    </Link>
                </motion.div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .landing-container {
                        padding: 80px 16px 40px !important;
                    }
                    
                    .btn-primary, .btn-secondary {
                        font-size: 0.8rem !important;
                        padding: 10px 22px !important;
                    }
                    
                    .float {
                        width: 90px !important;
                        height: 90px !important;
                    }
                    
                    .float div {
                        font-size: 2.5rem !important;
                    }
                }
                
                @media (max-width: 480px) {
                    .landing-container {
                        padding: 70px 12px 30px !important;
                    }
                    
                    h1 {
                        font-size: clamp(1.5rem, 5vw, 2rem) !important;
                    }
                    
                    .btn-primary, .btn-secondary {
                        font-size: 0.75rem !important;
                        padding: 9px 20px !important;
                    }
                }
            `}</style>
        </motion.div>
    );
};

export default Landing;
