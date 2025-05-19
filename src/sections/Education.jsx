import { motion } from 'framer-motion';
import '../styles/Education.css';
import { FaGraduationCap } from 'react-icons/fa';

const MotionDiv = motion.div;

function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const educationData = [
    {
      degree: "Software Engineering Bootcamp",
      institution: "Safaricom Digital Academy (Remote / Nairobi)",
      year: "Nov 2024 – May 2025",
      description: "Focused on Full-Stack Development with React, Node.js, and MongoDB. Collaborated on agile sprints and real-world software projects. Built scalable applications with clean, testable code."
    },
    {
      degree: "Diploma in Information Communication Technology",
      institution: "Rift Valley Institute of Science and Technology",
      year: "2021-2024",
      description: "Successfully completed a comprehensive program in Information and Communication Technology, gaining hands-on experience in programming, system analysis, and web development."
    },
    {
      degree: "Kenya Certificate of Secondary Education",
      institution: "Secondary School",
      year: "2017-2020",
      description: "Achieved a solid foundation in academics, focusing on sciences and humanities, and earned a certificate for successfully completing secondary education."
    },
    {
      degree: "Kenya Certificate of Primary Education",
      institution: "Primary School",
      year: "2008-2016",
      description: "Accomplished primary education with distinction, laying the groundwork for future academic success."
    }
  ];

  return (
    <div className="container section education" id="education">
      <MotionDiv
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="education-container"
      >
        <h1>Education Journey</h1>
        <div className="timeline">
          {educationData.map((edu, index) => (
            <MotionDiv 
              key={index}
              className="timeline-item"
              variants={itemVariants}
            >
              <div className="timeline-icon">
                <FaGraduationCap />
              </div>
              <div className="timeline-content">
                <div className="timeline-year">{edu.year}</div>
                <h3>{edu.degree}</h3>
                <h4>{edu.institution}</h4>
                <p>{edu.description}</p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </MotionDiv>
    </div>
  );
}

export default Education; 