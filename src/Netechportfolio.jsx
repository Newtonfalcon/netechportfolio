import React, { useState, useEffect, useRef } from "react";

import emailjs from '@emailjs/browser';
import {
  Mail,
  Instagram,
  X as LucideX,
  Menu,
  Phone,
  Twitter,
} from "lucide-react";
import { motion } from "framer-motion";
import "./NetechPortfolio.css";

export default function NetechPortfolio() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

    const handleEmailSend = (e) => {
    e.preventDefault();
    
    const serviceID = import.meta.env.VITE_SERVICE_ID // Replace with your EmailJS service ID
    const templateID =  import.meta.env.VITE_TEMPLATE_ID // Replace with your EmailJS template ID
    const publicKey = import.meta.env.VITE_PUBLIC_KEY // Replace with your EmailJS user ID

    console.log("public key ----", publicKey, serviceID, templateID)

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Netech',
      message: message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        setName("");
        setEmail("");
        setMessage("");
      }, (err) => {
        console.log('FAILED...', err);
        alert('Failed to send message. Please try again later.');
      });
  }
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
  };

  return (
    <div className="portfolio-container">
      <header className={`portfolio-header ${scrolled ? "scrolled" : ""}`}>
        <nav className="portfolio-nav">
          <div className="nav-left" onClick={(e) => handleNavClick(e, "home")}>
            <div className="logo">N</div>
            <h1 className="brand-text">netech</h1>
          </div>

          <ul className="nav-links">
            <li><a href="#skills" onClick={(e) => handleNavClick(e, "skills")}>Skills</a></li>
            <li><a href="#about" onClick={(e) => handleNavClick(e, "about")}>About</a></li>
            <li><a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>Contact</a></li>
          </ul>

          <div className="nav-right">
            <div className="socials">
              <a href="https://x.com/voxnewton" target="_blank" rel="noreferrer"><Twitter size={18}/></a>
              <a href="https://instagram.com/voxnewton" target="_blank" rel="noreferrer"><Instagram size={18}/></a>
              <a href="mailto:newtonoyagha@gmail.com"><Mail size={18}/></a>
            </div>
            <button className="hamburger" onClick={() => setOpen(!open)}>
              {open ? <LucideX /> : <Menu />}
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <motion.aside className="mobile-menu" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <ul>
            <li><a href="#skills" onClick={(e) => handleNavClick(e, "skills")}>Skills</a></li>
            <li><a href="#about" onClick={(e) => handleNavClick(e, "about")}>About</a></li>
            <li><a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>Contact</a></li>
            <div className="mobile-socials">
              <a href="https://x.com/voxnewton" target="_blank" rel="noreferrer"><Twitter size={16}/> @voxnewton</a>
              <a href="https://instagram.com/voxnewton" target="_blank" rel="noreferrer"><Instagram size={16}/> @voxnewton</a>
              <a href="https://wa.me/2348071649591" target="_blank" rel="noreferrer"><Phone size={16}/> +234 807 164 9591</a>
              <a href="mailto:newtonoyagha@gmail.com"><Mail size={16}/> newtonoyagha@gmail.com</a>
            </div>
          </ul>
        </motion.aside>
      )}

      <main id="home" className="portfolio-main">
        <section className="hero-section">
          <motion.div className="hero-text" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h2>Hello, I am <span className="highlight">newton</span></h2>
            <p>Electrical Engineering graduate (CGPA 3.52 — Distinction) from Edo State (Fugar), Nigeria . I build modern web apps, AI agents, and performant server-side tools. I specialize in React, Next.js, Tailwind, Node/Express and AI agent creation.</p>
            <div className="hero-buttons">
              <a href="#contact" onClick={(e) => handleNavClick(e, "contact")} className="btn-primary">Hire / Contact</a>
              <a href="#skills" onClick={(e) => handleNavClick(e, "skills")} className="btn-outline">See Skills</a>
            </div>
          </motion.div>

          <motion.div className="hero-image" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}>
            <img src="/logo.png" alt="Your portrait" />
            <div className="icon-card">
              <div className="icon">N</div>
              <div className="icon-text">
                <p>Netech — Fullstack & AI</p>
                <span>Edo State • Fugar</span>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="skills" className="skills-section">
          <motion.h3>Skills</motion.h3>
          <div className="skills-list">
            {["CSS","JavaScript","React","Next.js","Tailwind CSS","Node.js","Express","AI agent creation", "react-native"].map(skill => (
              <span key={skill} className="skill-item">{skill}</span>
            ))}
          </div>
        </section>

        <section id="about" className="about-section">
          <motion.h3>About Me</motion.h3>
          <div className="about-content">
            <div className="about-text">
              <p>I graduated with a B.Eng in Electrical Engineering with a GPA of 3.52 (Distinction). I enjoy solving complex problems with clean code and building AI-driven systems that automate tasks. I’m from Fugar, Edo State, and I combine strong engineering fundamentals with modern web and agent architectures.</p>
              <ul>
                <li>• Strong fundamentals in electronics & embedded systems</li>
                <li>• Frontend engineering with React & Next.js</li>
                <li>• Backend services with Node.js & Express</li>
                <li>• Building AI agents and integrating ML toolchains</li>
                <li>• Build mobile apps with React-native and Expo</li>
              </ul>
            </div>
            <div className="about-extra">
              <div style={{display:"flex", justifyContent:"right"}}><img src="/myimage.png" style={{width:"50%"}}/></div>
             
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <motion.h3>Contact</motion.h3>
          <div className="contact-grid">
            <div className="contact-info">
              <h4>Get in touch</h4>
              <p>I’m available for freelancing and collaborations. Message me on any platform below.</p>
              <div className="contact-links">
                <a href="https://x.com/voxnewton" target="_blank" rel="noreferrer"><Twitter size={18}/> @voxnewton</a>
                <a href="https://instagram.com/voxnewton" target="_blank" rel="noreferrer"><Instagram size={18}/> @voxnewton</a>
                <a href="https://wa.me/2348071649591" target="_blank" rel="noreferrer"><Phone size={18}/> +234 807 164 9591</a>
                <a href="mailto:newtonoyagha@gmail.com"><Mail size={18}/> newtonoyagha@gmail.com</a>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleEmailSend} >
              <input placeholder="Your name" required value={name} onChange={(e)=> setName(e.target.value) } />
              <input type="email" placeholder="Your email" required  value={email} onChange={(e)=> setEmail(e.target.value)}/>
              <textarea placeholder="Brief message" required value={message} onChange={(e)=> setMessage(e.target.value)}></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </section>

        <footer className="footer">
          <p>© {new Date().getFullYear()} Netech — Born for Excelence</p>
          <div className="footer-links">
            <a href="mailto:newtonoyagha@gmail.com"><Mail size={16}/> newtonoyagha@gmail.com</a>
            <a href="https://wa.me/2348071649591"><Phone size={16}/> +234 807 164 9591</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
