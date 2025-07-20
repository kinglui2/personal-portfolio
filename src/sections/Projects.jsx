import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaPython, FaReact, FaDatabase, 
         FaNetworkWired, FaServer, FaChartLine, 
         FaJava, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { SiDjango, SiPostgresql, SiMongodb, SiRedis, SiDocker } from 'react-icons/si';
import '../styles/Projects.css';

const MotionDiv = motion.div;
const MotionH2 = motion.h2;

const Projects = () => {
  const scrollContainerRef = useRef(null);

  const projectsData = [
    {
      id: 1,
      title: "VoIP Monitoring Tool",
      description: "Real-time VoIP network monitoring and analytics platform with advanced metrics tracking and alert system.",
      image: "/src/assets/images/dashboard.png",
      technologies: ["javascript", "Django", "PostgreSQL", "Redis", "Docker"],
      features: [
        "Real-time SIP traffic monitoring",
        "Call quality metrics (MOS, jitter, latency)",
        "Customizable alert system",
        "Historical data analysis",
        "Interactive dashboards"
      ],
      links: {
        github: "https://github.com/kinglui2/voip-monitoring-tool.git",
        live: "https://voip-monitor.demo.com"
      },
      icons: {
        primary: <FaNetworkWired />,
        tech: [<FaJava />, <SiDjango />, <SiPostgresql />, <SiRedis />, <SiDocker />]
      }
    },
    {
      id: 2,
      title: "Numbering Plan Management System",
      description: "Enterprise-grade system for managing and organizing telecommunication numbering plans with automated validation.",
      image: "/projects/number-plan",
      technologies: ["Python", "Django", "React", "PostgreSQL", "Docker"],
      features: [
        "Automated number range validation",
        "Bulk import/export functionality",
        "Real-time conflict detection",
        "Audit logging system",
        "RESTful API integration"
      ],
      links: {
        github: "https://github.com/kinglui2/company-numbering-plan.git",
        live: "https://number-plan.demo.com"
      },
      icons: {
        primary: <FaDatabase />,
        tech: [<FaPython />, <SiDjango />, <FaReact />, <SiPostgresql />, <SiDocker />]
      }
    },
    {
      id: 3,
      title: "Traffic Management System",
      description: "Python-based traffic analysis and management system with real-time monitoring and control capabilities.",
      image: "/projects/traffic-management.webp",
      technologies: ["Python", "MongoDB", "React", "Redis", "Docker"],
      features: [
        "Real-time traffic monitoring",
        "Predictive analytics",
        "Automated routing optimization",
        "Interactive visualization",
        "API integration capabilities"
      ],
      links: {
        github: "https://github.com/yourusername/traffic-management",
        live: "https://traffic-mgmt.demo.com"
      },
      icons: {
        primary: <FaChartLine />,
        tech: [<FaPython />, <SiMongodb />, <FaReact />, <SiRedis />, <SiDocker />]
      }
    },
  ];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const cardWidth = current.offsetWidth / 3; // Since we show 3 cards
      const maxScroll = current.scrollWidth - current.offsetWidth;
      
      if (direction === 'left') {
        if (current.scrollLeft <= 0) {
          // If at the start, scroll to the end
          current.scrollTo({ left: maxScroll, behavior: 'smooth' });
        } else {
          current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        }
      } else {
        if (current.scrollLeft >= maxScroll) {
          // If at the end, scroll to the start
          current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          current.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
      }
    }
  };

  // Handle scroll events to update current index
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        // Removed unused scroll tracking logic since currentIndex is not used
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

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
    hidden: { 
      x: 50, 
      opacity: 0 
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="projects">
      <MotionDiv 
        className="projects-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <MotionH2 
          className="section-title"
          variants={itemVariants}
        >
          Featured Projects
        </MotionH2>

        <div className="projects-scroll-container">
          <button 
            className="scroll-button left"
            onClick={() => scroll('left')}
            aria-label="Scroll left"
          >
            <FaChevronLeft />
          </button>

          <div className="projects-scroll" ref={scrollContainerRef}>
            {projectsData.map(project => (
              <MotionDiv
                key={project.id}
                className="project-card"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="project-image">
                  <div className="project-icon">{project.icons.primary}</div>
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                      </a>
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-features">
                    {project.features.map((feature, index) => (
                      <span key={index} className="feature-tag">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="tech-stack">
                    {project.icons.tech.map((icon, index) => (
                      <span key={index} className="tech-icon" title={project.technologies[index]}>
                        {icon}
                      </span>
                    ))}
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>

          <button 
            className="scroll-button right"
            onClick={() => scroll('right')}
            aria-label="Scroll right"
          >
            <FaChevronRight />
          </button>
        </div>
      </MotionDiv>
    </section>
  );
};

export default Projects; 