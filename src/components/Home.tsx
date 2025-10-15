import React, { useState, useEffect } from 'react';
import { Button, Layout, Typography } from 'antd';
import PartnerOnboarding from './PartnerOnboarding';
import { HomeOutlined, SearchOutlined, HeartOutlined, BellOutlined, StarFilled, SafetyCertificateOutlined, MobileOutlined, GlobalOutlined, CheckCircleOutlined, AppleOutlined, AndroidOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const Home: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Reveal on scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.15 }
    );

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <Layout className="app">
      {/* Header - Dark Glass */}
      <Header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="header-content">
            <a href="#" className="logo">
              <img src="/mainIcon.png" alt="Swift Stay Logo" />
              <span className="logo-text">Swift Stay</span>
              <span className="logo-text-mobile">SS</span>
            </a>
            
            <nav className="header-nav">
              <a href="#features">Features</a>
              <a href="#benefits">Benefits</a>
              <a href="#download">Download</a>
            </nav>
            
          </div>
        </div>
      </Header>

      <Content>
        {/* Hero Section - Dark Premium */}
        <section id="home" className="hero-section">
          <div className="floating-element"></div>
          <div className="floating-element"></div>
          <div className="floating-element"></div>
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          
          <div className="container">
            <div className="hero-content">
              <div className="hero-text reveal-on-scroll">
                <h1>
                  Stay Smart. <span>Live Better.</span>
                </h1>
                <p>
                  Discover curated stays, instant booking, and seamless support. A modern
                  accommodation experience built for comfort, convenience, and confidence.
                </p>
                <div className="hero-buttons">
                  <Button
                    type="primary"
                    size="large"
                    icon={<MobileOutlined />}
                    className="btn-primary hero-cta"
                    onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Started
                  </Button>
                  <Button
                    type="default"
                    size="large"
                    icon={<GlobalOutlined />}
                    className="btn-secondary"
                    onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Download App
                  </Button>
                  <Button
                    type="default"
                    size="large"
                    icon={<HomeOutlined />}
                    className="btn-secondary"
                    onClick={() => document.getElementById('partner')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Become a Partner
                  </Button>
                </div>
              </div>
              
              <div className="hero-image reveal-on-scroll">
                <div className="phone-mockup">
                  <div className="phone-header">
                    <div className="phone-dots">
                      <div className="phone-dot red"></div>
                      <div className="phone-dot yellow"></div>
                      <div className="phone-dot green"></div>
                    </div>
                  </div>
                  <div className="phone-content">
                    <div className="phone-image"></div>
                    <div className="phone-title">Skyline Studio</div>
                    <div className="phone-location">Accra, Ghana</div>
                    <div className="phone-footer">
                      <div className="phone-price">$85/night</div>
                      <div className="phone-rating">
                        <StarFilled style={{ color: '#f39c12' }} />
                        4.8
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="container">
            <Title level={1} className="section-title">
              Trusted by Thousands
            </Title>
            <Paragraph className="section-subtitle">
              Join thousands of travelers and hosts who trust Swift Stay.
            </Paragraph>
            
            <div className="stats-grid">
              <div className="stat-item reveal-on-scroll">
                <span className="number">50K+</span>
                <div className="label">Happy Users</div>
              </div>
              <div className="stat-item reveal-on-scroll" style={{ transitionDelay: '0.06s' }}>
                <span className="number">10K+</span>
                <div className="label">Properties</div>
              </div>
              <div className="stat-item reveal-on-scroll" style={{ transitionDelay: '0.12s' }}>
                <span className="number">95%</span>
                <div className="label">Satisfaction Rate</div>
              </div>
              <div className="stat-item reveal-on-scroll" style={{ transitionDelay: '0.18s' }}>
                <span className="number">24/7</span>
                <div className="label">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="features-section">
          <div className="container">
            <Title level={1} className="section-title">
              Why Choose Swift Stay?
            </Title>
            <Paragraph className="section-subtitle">
              Experience the difference with our innovative features designed to make your stay perfect
            </Paragraph>
            
            <div className="features-grid">
              <div className="feature-card reveal-on-scroll">
                <div className="feature-icon">
                  <SearchOutlined />
                </div>
                <h3 className="feature-title">Smart Search</h3>
                <p className="feature-description">
                  Find exactly what you need with intelligent filters and relevant results.
                </p>
              </div>
              
              <div className="feature-card reveal-on-scroll" style={{ transitionDelay: '0.06s' }}>
                <div className="feature-icon">
                  <HeartOutlined />
                </div>
                <h3 className="feature-title">Favorites</h3>
                <p className="feature-description">
                  Save your favorite properties and get notified about special offers
                </p>
              </div>
              
              <div className="feature-card reveal-on-scroll" style={{ transitionDelay: '0.12s' }}>
                <div className="feature-icon">
                  <BellOutlined />
                </div>
                <h3 className="feature-title">Instant Notifications</h3>
                <p className="feature-description">
                  Real-time alerts for bookings, updates, and exclusive offers.
                </p>
              </div>
              
              <div className="feature-card reveal-on-scroll" style={{ transitionDelay: '0.18s' }}>
                <div className="feature-icon">
                  <SafetyCertificateOutlined />
                </div>
                <h3 className="feature-title">Secure Booking</h3>
                <p className="feature-description">
                  Book with confidence with strong verification and secure payments.
                </p>
              </div>
              
              <div className="feature-card reveal-on-scroll" style={{ transitionDelay: '0.24s' }}>
                <div className="feature-icon">
                  <MobileOutlined />
                </div>
                <h3 className="feature-title">Mobile First</h3>
                <p className="feature-description">
                  Designed for mobile users with an intuitive and responsive interface
                </p>
              </div>
              
              <div className="feature-card reveal-on-scroll" style={{ transitionDelay: '0.30s' }}>
                <div className="feature-icon">
                  <GlobalOutlined />
                </div>
                <h3 className="feature-title">Global Reach</h3>
                <p className="feature-description">
                  Access stays worldwide through our growing host network.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="benefits-section">
          <div className="container">
            <div className="benefits-content">
              <div className="benefits-text reveal-on-scroll">
                <h2>Everything You Need for the Perfect Stay</h2>
                <p>
                  From the moment you start searching to the day you check out, 
                  Swift Stay provides everything you need for an unforgettable experience.
                </p>
                
                <div className="benefits-list">
                  <div className="benefit-item">
                    <div className="benefit-check">
                      <CheckCircleOutlined />
                    </div>
                    <span>Verified Properties</span>
                  </div>
                  <div className="benefit-item">
                    <div className="benefit-check">
                      <CheckCircleOutlined />
                    </div>
                    <span>24/7 Customer Support</span>
                  </div>
                  <div className="benefit-item">
                    <div className="benefit-check">
                      <CheckCircleOutlined />
                    </div>
                    <span>Secure Payments</span>
                  </div>
                  <div className="benefit-item">
                    <div className="benefit-check">
                      <CheckCircleOutlined />
                    </div>
                    <span>Instant Booking</span>
                  </div>
                </div>
              </div>
              
              <div className="benefits-card reveal-on-scroll">
                <div className="icon">
                  <HomeOutlined />
                </div>
                <h3>Your Home, Anywhere</h3>
                <p>
                  Whether you're traveling for business or pleasure, find a place 
                  that feels like home with our carefully curated selection of properties.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section id="download" className="download-section">
          <div className="container">
            <h2>Ready to Start Your Journey?</h2>
            <p>
              Download Swift Stay today and discover amazing properties around the world. 
              Available on both iOS and Android devices.
            </p>
            
            <div className="download-buttons">
              <Button className="download-btn reveal-on-scroll" size="large" icon={<AppleOutlined />}>
                Download for iOS
              </Button>
              <Button className="download-btn reveal-on-scroll" size="large" icon={<AndroidOutlined />} style={{ transitionDelay: '0.06s' }}>
                Download for Android
              </Button>
            </div>
          </div>
        </section>
      </Content>

      {/* Partner Onboarding CTA */}
      <div id="partner-cta" style={{ background: '#0f172a' }}>
        <div className="container" style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ padding: '60px 20px' }}>
            <Title level={1} style={{ color: '#fff', textAlign: 'center' }}>List Your Property on Swift Stay</Title>
            <Paragraph style={{ color: 'rgba(255,255,255,0.8)', textAlign: 'center', marginBottom: 32 }}>
              Join our network of hosts and reach thousands of travelers.
            </Paragraph>
          </div>
        </div>
      </div>

      <PartnerOnboarding />

      {/* Footer - Simplified with Contact Info */}
      <Footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <img src="/mainIcon.png" alt="Swift Stay Logo" />
                <span className="name">Swift Stay</span>
              </div>
              <p>
                Making accommodation search simple, secure, and satisfying for travelers worldwide.
              </p>
            </div>
            
            <div className="footer-section">
              <h4>Product</h4>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#download">Download</a></li>
                <li><a href="#pricing">Pricing</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Contact Us</h4>
              <ul>
                <li>
                  <a href="mailto:kwesiselasi476@gmail.com" className="contact-link">
                    <MailOutlined /> kwesiselasi476@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+233240333837" className="contact-link">
                    <PhoneOutlined /> +233 24 033 3837
                  </a>
                </li>
                <li><a href="#about">About</a></li>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/delete-account">Delete Account</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2025 Swift Stay. All rights reserved.</p>
          </div>
        </div>
      </Footer>
    </Layout>
  );
};

export default Home;
