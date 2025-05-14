import { motion } from 'framer-motion';
import '../styles/Home.css';
import profileImg from '../assets/images/ME.jpeg';

const MotionDiv = motion.div;
const MotionH1 = motion.h1;
const MotionH2 = motion.h2;
const MotionP = motion.p;
const MotionButton = motion.button;
const MotionImg = motion.img;

function Home() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home">
      <div className="home-content container">
        <MotionDiv 
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <MotionH2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Hi, It's Lewis
          </MotionH2>
          <MotionH1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I'm a Software Engineer
          </MotionH1>
          <MotionP
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            I'm a creative problem-solver who brings ideas to life through impactful digital solutions. Passionate about innovation and delivering results. Let's create something extraordinary!
          </MotionP>
          <MotionDiv 
            className="cta-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <MotionButton 
              className="cta-button hire-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
            >
              Hire Me
            </MotionButton>
            <MotionButton 
              className="cta-button contact-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
            >
              Contact Me
            </MotionButton>
          </MotionDiv>
        </MotionDiv>

        <MotionDiv 
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="image-wrapper">
            <MotionImg 
              src={profileImg} 
              alt="Lewis Manyasa"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            />
          </div>
          <div className="background-shape"></div>
        </MotionDiv>
      </div>
    </div>
  );
}

export default Home; 