import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, User, MessageSquare, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
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
        setStatus({ type: '', message: '' });

        try {
            // Using Web3Forms - No email verification needed!
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    access_key: 'ba185174-2740-4c13-b805-083f14f00bfd',
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: 'New Contact Form Submission from Portfolio'
                })
            });

            const data = await response.json();

            if (data.success) {
                setStatus({
                    type: 'success',
                    message: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon!'
                });
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            setStatus({
                type: 'error',
                message: 'Oops! Something went wrong. Please try again or email me directly.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            style={{
                padding: '60px 20px',
                maxWidth: '800px',
                margin: '0 auto',
                minHeight: '100vh',
                color: '#fff'
            }}
        >
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#888', marginBottom: '40px' }}>
                <ArrowLeft size={20} /> Back to Home
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
            >
                <h1 style={{
                    fontSize: '3rem',
                    marginBottom: '20px',
                    fontWeight: '400',
                    textAlign: 'center',
                    letterSpacing: '0.1em'
                }}>
                    Get In Touch
                </h1>

                <p style={{
                    textAlign: 'center',
                    color: '#aaa',
                    marginBottom: '40px',
                    fontSize: '1.1rem',
                    lineHeight: '1.6'
                }}>
                    Have a project in mind or want to discuss opportunities?
                    <br />
                    Feel free to reach out!
                </p>
            </motion.div>

            <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                onSubmit={handleSubmit}
                className="glass-card"
                style={{
                    padding: '40px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '25px'
                }}
            >
                {/* Name Field */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <label style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: '#aaa',
                        fontSize: '0.95rem',
                        fontWeight: '500'
                    }}>
                        <User size={18} />
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '10px',
                            padding: '12px 16px',
                            color: '#fff',
                            fontSize: '1rem',
                            outline: 'none',
                            transition: 'all 0.3s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'rgba(0, 217, 255, 0.5)'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                    />
                </div>

                {/* Email Field */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <label style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: '#aaa',
                        fontSize: '0.95rem',
                        fontWeight: '500'
                    }}>
                        <Mail size={18} />
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                        style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '10px',
                            padding: '12px 16px',
                            color: '#fff',
                            fontSize: '1rem',
                            outline: 'none',
                            transition: 'all 0.3s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'rgba(0, 217, 255, 0.5)'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                    />
                </div>

                {/* Message Field */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <label style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: '#aaa',
                        fontSize: '0.95rem',
                        fontWeight: '500'
                    }}>
                        <MessageSquare size={18} />
                        Message
                    </label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell me about your project or inquiry..."
                        rows={6}
                        style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '10px',
                            padding: '12px 16px',
                            color: '#fff',
                            fontSize: '1rem',
                            outline: 'none',
                            transition: 'all 0.3s ease',
                            resize: 'vertical',
                            fontFamily: 'inherit'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'rgba(0, 217, 255, 0.5)'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                    />
                </div>

                {/* Status Message */}
                {status.message && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{
                            padding: '12px 16px',
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            background: status.type === 'success'
                                ? 'rgba(0, 255, 0, 0.1)'
                                : 'rgba(255, 0, 0, 0.1)',
                            border: `1px solid ${status.type === 'success' ? 'rgba(0, 255, 0, 0.3)' : 'rgba(255, 0, 0, 0.3)'}`,
                            color: status.type === 'success' ? '#00ff00' : '#ff6b6b'
                        }}
                    >
                        {status.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                        <span style={{ fontSize: '0.95rem' }}>{status.message}</span>
                    </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    style={{
                        background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.2), rgba(255, 0, 255, 0.2))',
                        border: '2px solid rgba(0, 217, 255, 0.7)',
                        borderRadius: '10px',
                        padding: '14px 24px',
                        color: '#00d9ff',
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        cursor: isSubmitting ? 'not-allowed' : 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        opacity: isSubmitting ? 0.6 : 1,
                        transition: 'all 0.3s ease',
                        fontFamily: 'var(--font-heading)',
                        letterSpacing: '0.05em'
                    }}
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && <Send size={20} />}
                </motion.button>
            </motion.form>

            {/* Alternative Contact Info */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                style={{
                    marginTop: '40px',
                    textAlign: 'center',
                    color: '#888',
                    fontSize: '0.95rem'
                }}
            >
                <p>Or email me directly at:</p>
                <a
                    href="mailto:manish55555parmar@gmail.com"
                    style={{
                        color: '#00d9ff',
                        textDecoration: 'none',
                        fontSize: '1.1rem',
                        fontWeight: '500'
                    }}
                >
                    manish55555parmar@gmail.com
                </a>
            </motion.div>
        </motion.div>
    );
};

export default Contact;
