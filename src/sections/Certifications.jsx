import { motion } from 'framer-motion';
import { FaCertificate, FaCheckCircle } from 'react-icons/fa';
import '../styles/Certifications.css';
import plpSafCert from '../assets/certs/plp-saf.jpg';
import teltonikaCert from '../assets/certs/teltonika.jpg';
import threeCxCert from '../assets/certs/3cx cert.jpg';
import completionCert from '../assets/certs/completion_cert.jpeg';

const MotionDiv = motion.div;

function Certifications() {
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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const certificationsData = [
    {
      title: "Software Engineering",
      organization: "Power Learn Project & Safaricom",
      date: "2024",
      description: "Intensive software engineering program covering full-stack development, agile methodologies, and modern software practices. Collaborated on real-world projects.",
      imageJpg: plpSafCert,
      skills: ["Full-Stack Development", "Agile", "Software Engineering", "Project Management"],
      verified: true
    },
    {
      title: "Teltonika Networks Academy",
      organization: "Teltonika Networks",
      date: "2024",
      description: "Advanced certification in networking technologies, focusing on industrial networking solutions, remote management, and secure connectivity implementations.",
      imageJpg: teltonikaCert,
      skills: ["Networking", "Remote Management", "Industrial IoT", "Network Security"],
      verified: true
    },
    {
      title: "3CX Basic Certified Engineer",
      organization: "3CX",
      date: "2024",
      description: "Completed comprehensive training in 3CX phone system deployment, configuration, and maintenance. Gained expertise in VoIP technologies and unified communications.",
      imageJpg: threeCxCert,
      skills: ["VoIP", "Unified Communications", "Network Configuration", "PBX Systems"],
      verified: true
    },
    {
      title: "Course Completion Certificate",
      organization: "Safaricom PLP Academy",
      date: "2025",
      description: "Successfully completed the comprehensive software engineering curriculum, demonstrating proficiency in modern development practices and technologies.",
      imageJpg: completionCert,
      skills: ["Software Development", "Programming", "Problem Solving", "Technical Skills"],
      verified: true
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <MotionDiv
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="certifications-container"
      >
        <h2 className="section-title">Professional Certifications</h2>
        <div className="certifications-grid">
          {certificationsData.map((cert, index) => (
            <MotionDiv
              key={index}
              className="certification-card"
              variants={itemVariants}
            >
              <div className={`cert-image-container ${cert.organization === "Teltonika Networks" ? 'teltonika-cert-container' : ''}`}>
                <img 
                  src={cert.imageJpg}
                  alt={`${cert.title} Certificate`} 
                  className={`cert-image ${cert.organization === "Teltonika Networks" ? 'teltonika-cert' : ''}`}
                  loading="lazy"
                />
                <div className="cert-overlay">
                  <FaCertificate className="cert-icon" />
                </div>
              </div>
              <div className="cert-content">
                <div className="cert-header">
                  <h3>{cert.title}</h3>
                  {cert.verified && (
                    <span className="verified-badge">
                      <FaCheckCircle /> Verified
                    </span>
                  )}
                </div>
                <h4>{cert.organization}</h4>
                <p className="cert-date">{cert.date}</p>
                <p className="cert-description">{cert.description}</p>
                <div className="cert-skills">
                  {cert.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </MotionDiv>
    </section>
  );
}

export default Certifications; 