import { motion as Motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaUserAstronaut, FaRocket, FaBullseye, 
         FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import '../styles/About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const aboutCards = [
    {
      icon: <FaUserAstronaut />,
      title: "Who I Am",
      content: "A passionate Software Engineer with 2+ years of experience crafting robust web applications",
      highlights: [
        "Full-Stack Development Expert",
        "Problem-Solving Enthusiast",
        "Clean Code Advocate"
      ],
      stats: {
        "Personal Projects": "20+",
        "Collaborative Repositories": "5+",
        "Client Projects": "5+"
      }
    },
    {
      icon: <FaLaptopCode />,
      title: "What I Do",
      content: "Build scalable web applications with modern technologies",
      highlights: [
        "Frontend Development with React",
        "Backend Systems with Node.js",
        "Database Design & Optimization"
      ],
      stats: {
        "Code Quality": "70%",
        "On-time Delivery": "75%",
        "Test Coverage": "60%"
      }
    },
    {
      icon: <FaCode />,
      title: "My Approach",
      content: "Combine technical excellence with user-centric design",
      highlights: [
        "Agile Development",
        "Test-Driven Development",
        "Continuous Integration"
      ],
      stats: {
        "Code Reviews": "20+",
        "Best Practices": "15+",
        "Team Collaborations": "10+"
      }
    },
    {
      icon: <FaRocket />,
      title: "Current Focus",
      content: "Expanding expertise in modern software architecture",
      highlights: [
        "System Design Patterns",
        "Cloud Architecture",
        "Performance Optimization"
      ],
      stats: {
        "Learning Hours": "300+",
        "Certifications": "5+",
        "Tech Articles": "10+"
      }
    },
    {
      icon: <FaBullseye />,
      title: "My Goal",
      content: "Create impactful solutions while growing as a tech leader",
      highlights: [
        "Technical Leadership",
        "Mentorship",
        "Innovation"
      ],
      stats: {
        "Team Lead Projects": "5+",
        "Mentored Devs": "10+",
        "Innovation Awards": "3+"
      }
    },
    {
      icon: <FaHeart />,
      title: "What I Value",
      content: "Principles and values that guide my professional journey",
      highlights: [
        "Continuous Learning",
        "Collaborative Growth",
        "Code Quality"
      ],
      stats: {
        "Core Values": "3+",
        "Team Success": "100%",
        "Growth Mindset": "∞"
      }
    }
  ];

  return (
    <section id="about" className="about-container">
      <div className="content-wrapper">
        <Motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Motion.h2 className="section-title" variants={itemVariants}>
            About Me
          </Motion.h2>

          <div className="about-grid">
            {aboutCards.map((card, index) => (
              <Motion.div 
                className="about-card" 
                key={index}
                variants={itemVariants}
              >
                <div className="card-header">
                  <span className="card-icon">{card.icon}</span>
                  <h3>{card.title}</h3>
                </div>
                <p className="card-content">{card.content}</p>
                
                <div className="card-highlights">
                  {card.highlights.map((highlight, idx) => (
                    <div key={idx} className="highlight-item">
                      <span className="highlight-bullet">•</span>
                      {highlight}
                    </div>
                  ))}
                </div>

                <div className="card-stats">
                  {Object.entries(card.stats).map(([key, value], idx) => (
                    <div key={idx} className="stat-item">
                      <span className="stat-value">{value}</span>
                      <span className="stat-label">{key}</span>
                    </div>
                  ))}
                </div>
              </Motion.div>
            ))}
          </div>

          <Motion.div className="social-proof" variants={itemVariants}>
            <a href="https://github.com/kinglui2" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub /> View My Work
            </a>
            <a href="https://www.linkedin.com/in/lewis-manyasa-209020298/" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin /> Connect With Me
            </a>
          </Motion.div>
        </Motion.div>
      </div>
    </section>
  );
};

export default About; 