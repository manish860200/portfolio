import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Send, Mail, Linkedin, Github, MapPin, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setStatus({
                type: 'success',
                message: 'Thank you! Your message has been sent successfully.'
            });
            setFormData({ name: '', email: '', subject: '', message: '' });
            setIsSubmitting(false);

            setTimeout(() => setStatus({ type: '', message: '' }), 5000);
        }, 1500);
    };

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

    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: 'manish55555parmar@gmail.com',
            href: 'mailto:manish55555parmar@gmail.com',
            gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            value: 'Connect with me',
            href: 'https://linkedin.com/in/manish-parmar-8a30b33a6',
            gradient: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)'
        },
        {
            icon: Github,
            label: 'GitHub',
            value: 'manish860200',
            href: 'https://github.com/manish860200',
            gradient: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)'
        }
    ];

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

            {/* Header */}
            <motion.header
                variants={itemVariants}
                style={{ textAlign: 'center', marginBottom: '64px' }}
            >
                <h1 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                    fontWeight: '800',
                    marginBottom: '16px',
                    letterSpacing: '-0.04em'
                }}>
                    Get in <span className="gradient-text">Touch</span>
                </h1>
                <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1.2rem',
                    maxWidth: '600px',
                    margin: '0 auto'
                }}>
                    Have a project in mind or want to collaborate? Let's talk!
                </p>
            </motion.header>

            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '48px',
                alignItems: 'start'
            }}>
                {/* Contact Form */}
                <motion.div variants={itemVariants}>
                    <div className="glass-card" style={{ padding: '40px' }}>
                        <h2 style={{
                            fontSize: '1.8rem',
                            fontWeight: '700',
                            marginBottom: '24px'
                        }}>
                            Send a Message
                        </h2>

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            {/* Name Input */}
                            <div>
                                <label style={{
                                    display: 'block',
                                    marginBottom: '8px',
                                    fontSize: '0.9rem',
                                    fontWeight: '500',
                                    color: 'var(--text-secondary)'
                                }}>
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '14px 16px',
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        border: '1px solid var(--border-subtle)',
                                        borderRadius: '12px',
                                        color: 'var(--text-primary)',
                                        fontSize: '1rem',
                                        outline: 'none',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = 'var(--accent-primary)';
                                        e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = 'var(--border-subtle)';
                                        e.target.style.background = 'rgba(255, 255, 255, 0.03)';
                                    }}
                                />
                            </div>

                            {/* Email Input */}
                            <div>
                                <label style={{
                                    display: 'block',
                                    marginBottom: '8px',
                                    fontSize: '0.9rem',
                                    fontWeight: '500',
                                    color: 'var(--text-secondary)'
                                }}>
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '14px 16px',
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        border: '1px solid var(--border-subtle)',
                                        borderRadius: '12px',
                                        color: 'var(--text-primary)',
                                        fontSize: '1rem',
                                        outline: 'none',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = 'var(--accent-primary)';
                                        e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = 'var(--border-subtle)';
                                        e.target.style.background = 'rgba(255, 255, 255, 0.03)';
                                    }}
                                />
                            </div>

                            {/* Subject Input */}
                            <div>
                                <label style={{
                                    display: 'block',
                                    marginBottom: '8px',
                                    fontSize: '0.9rem',
                                    fontWeight: '500',
                                    color: 'var(--text-secondary)'
                                }}>
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '14px 16px',
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        border: '1px solid var(--border-subtle)',
                                        borderRadius: '12px',
                                        color: 'var(--text-primary)',
                                        fontSize: '1rem',
                                        outline: 'none',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = 'var(--accent-primary)';
                                        e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = 'var(--border-subtle)';
                                        e.target.style.background = 'rgba(255, 255, 255, 0.03)';
                                    }}
                                />
                            </div>

                            {/* Message Textarea */}
                            <div>
                                <label style={{
                                    display: 'block',
                                    marginBottom: '8px',
                                    fontSize: '0.9rem',
                                    fontWeight: '500',
                                    color: 'var(--text-secondary)'
                                }}>
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    style={{
                                        width: '100%',
                                        padding: '14px 16px',
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        border: '1px solid var(--border-subtle)',
                                        borderRadius: '12px',
                                        color: 'var(--text-primary)',
                                        fontSize: '1rem',
                                        outline: 'none',
                                        transition: 'all 0.3s ease',
                                        resize: 'vertical',
                                        fontFamily: 'inherit'
                                    }}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = 'var(--accent-primary)';
                                        e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = 'var(--border-subtle)';
                                        e.target.style.background = 'rgba(255, 255, 255, 0.03)';
                                    }}
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn-primary"
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '10px',
                                    opacity: isSubmitting ? 0.7 : 1,
                                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                                }}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div style={{
                                            width: '18px',
                                            height: '18px',
                                            border: '2px solid white',
                                            borderTopColor: 'transparent',
                                            borderRadius: '50%',
                                            animation: 'spin 0.8s linear infinite'
                                        }} />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send size={18} />
                                        Send Message
                                    </>
                                )}
                            </button>

                            {/* Status Message */}
                            {status.message && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    style={{
                                        padding: '14px 16px',
                                        borderRadius: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                        background: status.type === 'success'
                                            ? 'rgba(16, 185, 129, 0.1)'
                                            : 'rgba(239, 68, 68, 0.1)',
                                        border: `1px solid ${status.type === 'success'
                                            ? 'rgba(16, 185, 129, 0.3)'
                                            : 'rgba(239, 68, 68, 0.3)'}`,
                                        color: status.type === 'success'
                                            ? '#10b981'
                                            : '#ef4444'
                                    }}
                                >
                                    {status.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                                    {status.message}
                                </motion.div>
                            )}
                        </form>
                    </div>
                </motion.div>

                {/* Contact Info */}
                <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <h2 style={{
                        fontSize: '1.8rem',
                        fontWeight: '700',
                        marginBottom: '8px'
                    }}>
                        Contact Information
                    </h2>
                    <p style={{
                        color: 'var(--text-secondary)',
                        fontSize: '1rem',
                        lineHeight: '1.7',
                        marginBottom: '16px'
                    }}>
                        Feel free to reach out through any of these channels. I'm always open to discussing new projects,
                        creative ideas, or opportunities to be part of your vision.
                    </p>

                    {contactInfo.map((info, idx) => (
                        <a
                            key={idx}
                            href={info.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-card"
                            style={{
                                padding: '24px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '20px',
                                textDecoration: 'none'
                            }}
                        >
                            <div style={{
                                width: '56px',
                                height: '56px',
                                background: info.gradient,
                                borderRadius: '14px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                boxShadow: '0 4px 16px rgba(99, 102, 241, 0.2)'
                            }}>
                                <info.icon size={26} strokeWidth={2} />
                            </div>
                            <div>
                                <h3 style={{
                                    fontSize: '1.1rem',
                                    fontWeight: '600',
                                    marginBottom: '4px',
                                    color: 'var(--text-primary)'
                                }}>
                                    {info.label}
                                </h3>
                                <p style={{
                                    color: 'var(--text-secondary)',
                                    fontSize: '0.95rem'
                                }}>
                                    {info.value}
                                </p>
                            </div>
                        </a>
                    ))}

                    {/* Location */}
                    <div className="glass-card" style={{ padding: '24px' }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '20px'
                        }}>
                            <div style={{
                                width: '56px',
                                height: '56px',
                                background: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
                                borderRadius: '14px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                boxShadow: '0 4px 16px rgba(245, 158, 11, 0.2)'
                            }}>
                                <MapPin size={26} strokeWidth={2} />
                            </div>
                            <div>
                                <h3 style={{
                                    fontSize: '1.1rem',
                                    fontWeight: '600',
                                    marginBottom: '4px',
                                    color: 'var(--text-primary)'
                                }}>
                                    Location
                                </h3>
                                <p style={{
                                    color: 'var(--text-secondary)',
                                    fontSize: '0.95rem'
                                }}>
                                    Available for remote work
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <style>{`
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
                
                @media (max-width: 768px) {
                    div[style*="gridTemplateColumns: 1fr 1fr"] {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </motion.div>
    );
};

export default Contact;
