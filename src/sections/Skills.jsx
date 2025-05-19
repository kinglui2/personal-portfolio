import { motion as Motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaServer, FaDatabase, FaPalette } from 'react-icons/fa';
import '../styles/Skills.css';

const CircularProgress = ({ percentage, name }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="circular-progress">
      <svg width="100" height="100" viewBox="0 0 100 100">
        <circle
          className="progress-ring-bg"
          cx="50"
          cy="50"
          r={radius}
          strokeWidth="4"
          fill="transparent"
        />
        <Motion.circle
          className="progress-ring"
          cx="50"
          cy="50"
          r={radius}
          strokeWidth="4"
          fill="transparent"
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          strokeDasharray={circumference}
        />
        <text x="50" y="45" className="progress-text">
          {percentage}%
        </text>
        <text x="50" y="60" className="progress-label">
          {name}
        </text>
      </svg>
    </div>
  );
};

const Skills = () => {
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

  const techStack = [
    'React.js', 'Node.js', 'Express', 'MongoDB',
    'JavaScript', 'TypeScript', 'HTML5', 'CSS3',
    'Git', 'REST APIs', 'SQL', 'Python'
  ];

  const skills = {
    "Frontend Development": {
      icon: <FaLaptopCode />,
      skills: [
        { name: "React.js", level: 70 },
        { name: "JavaScript", level: 80 },
        { name: "HTML5/CSS3", level: 90 },
        { name: "Responsive", level: 80 }
      ]
    },
    "Backend Development": {
      icon: <FaServer />,
      skills: [
        { name: "Node.js", level: 65 },
        { name: "Express.js", level: 65 },
        { name: "REST APIs", level: 70 },
        { name: "Python", level: 75 }
      ]
    },
    "Database & Tools": {
      icon: <FaDatabase />,
      skills: [
        { name: "MongoDB", level: 75 },
        { name: "Git/GitHub", level: 70 },
        { name: "SQL", level: 80 },
        { name: "DevOps", level: 70 }
      ]
    },
    "Design & Others": {
      icon: <FaPalette />,
      skills: [
        { name: "UI/UX", level: 70 },
        { name: "System Design", level: 75 },
        { name: "Problem Solving", level: 80 },
        { name: "Tech Writing", level: 80 }
      ]
    }
  };

  return (
    <section id="skills" className="skills-section">
      <Motion.div
        className="skills-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Motion.h2 className="section-title" variants={itemVariants}>
          Skills & Expertise
        </Motion.h2>

        <div className="skills-grid">
          {Object.entries(skills).map(([category, { icon, skills }]) => (
            <Motion.div 
              className="skills-card" 
              key={category}
              variants={itemVariants}
            >
              <div className="card-header">
                <span className="category-icon">{icon}</span>
                <h3>{category}</h3>
              </div>
              <div className="skills-rings">
                {skills.map((skill) => (
                  <CircularProgress
                    key={skill.name}
                    percentage={skill.level}
                    name={skill.name}
                  />
                ))}
              </div>
            </Motion.div>
          ))}
          <Motion.div 
            className="tech-stack-card"
            variants={itemVariants}
          >
            <div className="card-header">
              <span className="category-icon"><FaCode /></span>
              <h3>Tech Stack</h3>
            </div>
            <div className="tech-tags">
              {techStack.map((tech, index) => (
                <Motion.span 
                  key={index} 
                  className="tech-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {tech}
                </Motion.span>
              ))}
            </div>
          </Motion.div>
        </div>
      </Motion.div>
    </section>
  );
};

export default Skills; 