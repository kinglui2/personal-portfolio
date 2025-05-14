import '../styles/Services.css';

function Services() {
  return (
    <div className="container section services">
      <h1>Services</h1>
      <div className="services-grid">
        <div className="service-card">
          <h3>Front end Developer</h3>
          <p>I specialize in building responsive, user-friendly websites using HTML, CSS, and JavaScript. My focus is on delivering seamless experiences across all devices with clean, optimized code. I ensure fast load times and cross-browser compatibility, creating digital solutions that engage users and drive results.</p>
        </div>
        
        <div className="service-card">
          <h3>Back End Developer</h3>
          <p>I build reliable, scalable back-end systems using Node.js, PHP, and databases. My focus is on efficient data management, seamless server-side operations, and secure integrations. I ensure smooth functionality that supports business growth and enhances the overall user experience.</p>
        </div>
        
        <div className="service-card">
          <h3>Freelance Writer</h3>
          <p>I create engaging, well-researched content tailored to your needs. Whether it's blog posts, articles, or website copy, I deliver high-quality writing that informs, inspires, and resonates with readers. My work is focused on clarity, creativity, and meeting deadlines to help your brand connect with its audience.</p>
        </div>
      </div>
    </div>
  );
}

export default Services; 