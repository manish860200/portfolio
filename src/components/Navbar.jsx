import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Detect active section
            const sections = ['home', 'about', 'skills', 'projects', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setMobileMenuOpen(false);
    };

    const navLinks = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Skills', id: 'skills' },
        { name: 'Projects', id: 'projects' },
        { name: 'Contact', id: 'contact' }
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 100,
                    padding: '16px 24px',
                    background: scrolled
                        ? 'rgba(10, 10, 10, 0.8)'
                        : 'transparent',
                    backdropFilter: scrolled ? 'blur(20px)' : 'none',
                    WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
                    borderBottom: scrolled
                        ? '1px solid rgba(255, 255, 255, 0.1)'
                        : '1px solid transparent',
                    transition: 'all 0.3s ease'
                }}
            >
                <div style={{
                    maxWidth: '1400px',
                    margin: '0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    {/* Logo */}
                    <button
                        onClick={() => scrollToSection('home')}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: 0
                        }}
                    >
                        <div style={{
                            width: '40px',
                            height: '40px',
                            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 4px 16px rgba(99, 102, 241, 0.3)'
                        }}>
                            <Sparkles size={20} color="white" />
                        </div>
                        <span style={{
                            fontSize: '1.2rem',
                            fontWeight: '700',
                            background: 'linear-gradient(135deg, #ffffff, #a78bfa)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>
                            Manish Parmar
                        </span>
                    </button>

                    {/* Desktop Navigation */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
                        <div style={{
                            display: 'flex',
                            gap: '4px',
                            '@media (max-width: 768px)': {
                                display: 'none'
                            }
                        }} className="desktop-nav">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    style={{
                                        padding: '8px 16px',
                                        background: 'none',
                                        border: 'none',
                                        color: activeSection === link.id ? '#ffffff' : '#a1a1aa',
                                        fontSize: '0.95rem',
                                        fontWeight: '500',
                                        cursor: 'pointer',
                                        position: 'relative',
                                        transition: 'color 0.3s ease',
                                        borderRadius: '8px'
                                    }}
                                    onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                                    onMouseLeave={(e) => e.target.style.color = activeSection === link.id ? '#ffffff' : '#a1a1aa'}
                                >
                                    {link.name}
                                    {activeSection === link.id && (
                                        <motion.div
                                            layoutId="activeSection"
                                            style={{
                                                position: 'absolute',
                                                bottom: '4px',
                                                left: '16px',
                                                right: '16px',
                                                height: '2px',
                                                background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
                                                borderRadius: '2px'
                                            }}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => scrollToSection('contact')}
                            className="btn-primary desktop-nav"
                            style={{
                                marginLeft: '16px',
                                fontSize: '0.9rem',
                                padding: '10px 20px'
                            }}
                        >
                            Get in Touch
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="mobile-menu-btn"
                            style={{
                                display: 'none',
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '8px',
                                padding: '8px',
                                cursor: 'pointer',
                                color: 'white'
                            }}
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.3 }}
                        style={{
                            position: 'fixed',
                            top: '73px',
                            right: 0,
                            bottom: 0,
                            width: '280px',
                            background: 'rgba(10, 10, 10, 0.98)',
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                            borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
                            padding: '24px',
                            zIndex: 99,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px'
                        }}
                    >
                        {navLinks.map((link, index) => (
                            <motion.button
                                key={link.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                onClick={() => scrollToSection(link.id)}
                                style={{
                                    padding: '14px 16px',
                                    background: activeSection === link.id
                                        ? 'rgba(99, 102, 241, 0.1)'
                                        : 'transparent',
                                    border: activeSection === link.id
                                        ? '1px solid rgba(99, 102, 241, 0.3)'
                                        : '1px solid transparent',
                                    borderRadius: '12px',
                                    color: activeSection === link.id ? '#ffffff' : '#a1a1aa',
                                    fontSize: '1rem',
                                    fontWeight: '500',
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                {link.name}
                            </motion.button>
                        ))}
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="btn-primary"
                            style={{
                                marginTop: '16px',
                                width: '100%',
                                fontSize: '0.95rem'
                            }}
                        >
                            Get in Touch
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                @media (max-width: 768px) {
                    .desktop-nav {
                        display: none !important;
                    }
                    .mobile-menu-btn {
                        display: block !important;
                    }
                }
            `}</style>
        </>
    );
};

export default Navbar;
