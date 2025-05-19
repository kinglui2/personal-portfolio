import { motion } from 'framer-motion';
import Typed from 'typed.js';
import { useEffect, useRef, memo, useMemo } from 'react';
import '../styles/Home.css';
import profileImgWebp from '../assets/images/ME.webp';
import profileImgJpeg from '../assets/images/ME.optimized.jpeg';
import liveBackground from '../assets/images/live.png';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaLaptopCode } from 'react-icons/fa';

const MotionDiv = motion.div;
const MotionH1 = motion.h1;
const MotionH2 = motion.h2;
const MotionP = motion.p;
const MotionButton = motion.button;
const MotionImg = motion.img;

// Memoize animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Home = memo(() => {
  const typedRef = useRef(null);
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Software Engineer',
        'Full-Stack Developer',
        'Problem Solver',
        'Tech Enthusiast',
        'Creative Coder'
      ],
      typeSpeed: 40,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    });

    typedRef.current = typed;

    return () => {
      typed.destroy();
    };
  }, []);

  const scrollToSection = useMemo(() => ({
    contact: () => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    },
    projects: () => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }
  }), []);

  return (
    <div className="home">
      <div className="home-content">
        <MotionDiv 
          className="hero-text"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <MotionH2 variants={itemVariants} className="greeting">
            Hi, It's Lewis! 👋
          </MotionH2>
          <MotionH1 variants={itemVariants} className="title">
            <span className="static-text">I'm a</span>
            <span ref={el} className="typed-text"></span>
          </MotionH1>
          <MotionP variants={itemVariants} className="description">
            I bring creativity, logic, and vision into every line of code. I love turning ideas into meaningful, user-centered experiences. Ready to create something amazing?
          </MotionP>
          <MotionDiv variants={itemVariants} className="cta-buttons">
            <MotionButton 
              className="cta-button hire-btn"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToSection.projects}
            >
              <FaLaptopCode className="button-icon" /> View My Work
            </MotionButton>
            <MotionButton 
              className="cta-button contact-btn"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToSection.contact}
            >
              <FaEnvelope className="button-icon" /> Let's Talk
            </MotionButton>
          </MotionDiv>
          <MotionDiv 
            variants={itemVariants}
            className="social-links"
          >
            <motion.a 
              href="https://github.com/kinglui2" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a 
              href="https://twitter.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTwitter />
            </motion.a>
          </MotionDiv>
        </MotionDiv>

        <MotionDiv 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="image-wrapper">
            <picture>
              <source srcSet={profileImgWebp} type="image/webp" />
              <MotionImg 
                src={profileImgJpeg}
                alt="Lewis Manyasa"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                loading="lazy"
              />
            </picture>
          </div>
          <MotionDiv
            className="background-shape"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
          />
        </MotionDiv>
      </div>
    </div>
  );
});

Home.displayName = 'Home';
export default Home; 