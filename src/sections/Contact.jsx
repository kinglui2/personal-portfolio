import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheck, FaTimes } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const MotionDiv = motion.div;
const MotionH2 = motion.h2;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({ show: false, type: '', message: '' });
  const [activeContact, setActiveContact] = useState('email');
  const formRef = useRef(null);

  const contactOptions = [
    {
      id: 'email',
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'manyasalewis21@gmail.com',
      action: 'mailto:manyasalewis21@gmail.com'
    },
    {
      id: 'linkedin',
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/lewis-manyasa-209020298/',
      action: 'https://www.linkedin.com/in/lewis-manyasa-209020298/'
    },
    {
      id: 'github',
      icon: <FaGithub />,
      title: 'GitHub',
      value: 'github.com/kinglui2',
      action: 'https://github.com/kinglui2'
    },
    {
      id: 'phone',
      icon: <FaPhone />,
      title: 'Phone',
      value: '+254 741 210 843',
      action: 'tel:+254741210843'
    }
  ];

  const showNotification = (type, message) => {
    setNotification({ show: true, type, message });
    setTimeout(() => {
      setNotification({ show: false, type: '', message: '' });
    }, 5000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      showNotification('error', 'Please enter your name');
      return false;
    }
    if (!formData.email.trim()) {
      showNotification('error', 'Please enter your email');
      return false;
    }
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      showNotification('error', 'Please enter a valid email address');
      return false;
    }
    if (!formData.subject.trim()) {
      showNotification('error', 'Please enter a subject');
      return false;
    }
    if (!formData.message.trim()) {
      showNotification('error', 'Please enter your message');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'kaylewis377@gmail.com'
      };

      await emailjs.send(
        'service_dq4uaw8',
        'template_bu5n8k8',
        templateParams,
        'qeKmMD5s0E5O8w5du'
      );

      showNotification('success', 'Message sent successfully! I will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      showNotification('error', 'Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="contact">
      <AnimatePresence>
        {notification.show && (
          <motion.div
            className={`notification ${notification.type}`}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
          >
            <div className="notification-content">
              {notification.type === 'success' ? <FaCheck /> : <FaTimes />}
              <span>{notification.message}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <MotionDiv 
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <MotionH2 
          className="section-title"
          variants={itemVariants}
        >
          Let's Connect
        </MotionH2>

        <MotionDiv 
          className="contact-content"
          variants={itemVariants}
        >
          <div className="contact-info">
            <div className="contact-card">
              <h3>Get in Touch</h3>
              <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
              
              <div className="contact-methods">
                {contactOptions.map(option => (
                  <motion.a
                    key={option.id}
                    href={option.action}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`contact-method ${activeContact === option.id ? 'active' : ''}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveContact(option.id)}
                  >
                    <div className="method-icon">{option.icon}</div>
                    <div className="method-info">
                      <h4>{option.title}</h4>
                      <p>{option.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="availability">
                <h4>Current Availability</h4>
                <div className="status available">
                  <span className="status-dot"></span>
                  Available for new opportunities
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form 
              ref={formRef}
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your Name"
                />
                <span className="focus-border"></span>
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Your Email"
                />
                <span className="focus-border"></span>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="Subject"
                />
                <span className="focus-border"></span>
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Your Message"
                  rows="5"
                ></textarea>
                <span className="focus-border"></span>
              </div>

              <motion.button
                type="submit"
                className="submit-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="loading">Sending...</span>
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </MotionDiv>
      </MotionDiv>
    </section>
  );
};

export default Contact; 