import { motion } from 'framer-motion';
import '../styles/About.css';

const MotionDiv = motion.div;

function About() {
  const skills = [
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 80 },
    { name: 'JavaScript', level: 60 },
    { name: 'Python', level: 65 },
    { name: 'PHP', level: 60 }
  ];

  return (
    <div className="about-container container">
      <MotionDiv
        className="about-content"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">About Me</h2>
        
        <div className="about-grid">
          <div className="about-text">
            <h3>Who I Am</h3>
            <p>
              I'm a passionate Software Engineer based in Nairobi, Kenya, with a strong foundation in both front-end and back-end development. I love turning complex problems into simple, beautiful, and intuitive solutions.
            </p>
            <p>
              When I'm not coding, you can find me writing technical articles or exploring new technologies to expand my skill set.
            </p>
          </div>

          <div className="skills-section">
            <h3>My Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <MotionDiv
                  key={skill.name}
                  className="skill-item"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>

          <div className="education-section">
            <h3>Education</h3>
            <div className="timeline">
              <div className="timeline-item">
                <h4>Bachelor's Degree in Computer Science</h4>
                <p>Kenyatta University</p>
                <span className="timeline-date">2019 - 2023</span>
              </div>
            </div>
          </div>

          <div className="interests-section">
            <h3>Interests</h3>
            <ul className="interests-list">
              <li>Web Development</li>
              <li>Technical Writing</li>
              <li>Problem Solving</li>
              <li>UI/UX Design</li>
            </ul>
          </div>
        </div>
      </MotionDiv>
    </div>
  );
}

export default About; 