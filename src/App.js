/* App.js */
import React, { useRef, useState } from "react";

import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);
  const textY = useTransform(scrollY, [0, 300], [0, 100]);

  return (
    <div className="absolute inset-0 w-full h-full">
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y, scale }}
      >
        <img
          src="/rikulauttia.jpg"
          alt="Riku Lauttia"
          className="w-full h-full object-cover object-center filter brightness-[0.4] contrast-125"
          loading="eager"
          decoding="async"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/30 to-black/90"
          style={{ opacity }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
      </motion.div>

      <motion.div
        className="relative z-10 h-full w-full flex items-center justify-center text-center px-4"
        style={{ opacity, y: textY }}
      >
        <div className="relative max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold mb-8 tracking-tight leading-none"
            style={{
              fontFamily:
                "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
              background:
                "linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.8) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Riku Lauttia
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-lg md:text-xl lg:text-2xl font-medium tracking-wide"
            style={{ color: "rgba(255, 255, 255, 0.8)" }}
          >
            <span className="relative">
              AI Engineer
              <span className="mx-4 text-white/30 hidden md:inline">·</span>
            </span>
            <span className="relative">
              Co-Founder
              <span className="mx-4 text-white/30 hidden md:inline">·</span>
            </span>
            <span className="relative">Technology Innovator</span>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"
          />
        </div>
      </motion.div>

      <div className="pointer-events-none absolute inset-0 noise mix-blend-overlay opacity-[0.02]" />
    </div>
  );
};

const ScrollReveal = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 40, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
      transition={{
        duration: 1,
        delay: delay,
        ease: [0.23, 1, 0.32, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.23, 1, 0.32, 1],
      }}
      className="group relative p-8 rounded-2xl backdrop-blur-xl bg-white/[0.02] border border-white/[0.08] hover:bg-white/[0.04] transition-all duration-700 cursor-pointer"
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white tracking-tight group-hover:text-white/90 transition-colors duration-300">
            {experience.role}
          </h3>
          {experience.url ? (
            <a
              href={experience.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white font-medium text-lg mb-1 transition-colors duration-300 inline-flex items-center gap-2"
            >
              {experience.company}
              <svg
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="opacity-60"
              >
                <path
                  d="M7 17L17 7M17 7H8M17 7V16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </a>
          ) : (
            <p className="text-white/70 font-medium text-lg mb-1">
              {experience.company}
            </p>
          )}
          <p className="text-white/50 text-sm font-medium">
            {experience.period}
          </p>
        </div>
      </div>
      <p className="text-white/60 leading-relaxed text-base group-hover:text-white/70 transition-colors duration-300">
        {experience.description}
      </p>
    </motion.div>
  );
};

const SkillCategory = ({ title, skills, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.23, 1, 0.32, 1],
      }}
      className="p-8 rounded-2xl backdrop-blur-xl bg-white/[0.02] border border-white/[0.08] hover:bg-white/[0.04] transition-all duration-700 text-center"
    >
      <h3 className="text-xl font-semibold mb-6 text-white tracking-tight">
        {title}
      </h3>
      <div className="space-y-3">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: idx * 0.05,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="text-white/70 hover:text-white transition-colors duration-300 text-base"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const ParallaxText = () => {
  return (
    <div className="relative flex overflow-hidden bg-transparent py-8">
      <div className="animate-scroll-left whitespace-nowrap flex items-center">
        {[...Array(8)].map((_, i) => (
          <span
            key={i}
            className="mx-8 text-4xl md:text-5xl lg:text-6xl font-light tracking-wider uppercase text-white/10"
          >
            Innovate · Create · Transform ·
          </span>
        ))}
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/[0.08]">
      <nav className="flex justify-between items-center py-4 px-6 md:px-8 max-w-7xl mx-auto">
        <motion.div
          className="text-2xl font-semibold text-white tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          RIKU LAUTTIA
        </motion.div>

        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/[0.05] transition-colors duration-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <ul className="hidden md:flex space-x-8">
          {["About", "Experience", "Skills", "Education", "Contact"].map(
            (item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.23, 1, 0.32, 1],
                }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-white/70 hover:text-white transition-colors duration-300 font-medium text-base tracking-wide relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              </motion.li>
            )
          )}
        </ul>

        <motion.div
          className={`absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/[0.08] md:hidden ${
            isMenuOpen ? "block" : "hidden"
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isMenuOpen ? 1 : 0, y: 0 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        >
          <ul className="py-6">
            {["About", "Experience", "Skills", "Education", "Contact"].map(
              (item) => (
                <li key={item} className="px-6 py-3">
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="block text-lg text-white/70 hover:text-white transition-colors duration-300 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </motion.div>
      </nav>
      <motion.div className="h-px bg-white/20" style={{ scaleX }} />
    </header>
  );
};

const Section = ({ id, title, children, className = "" }) => (
  <section id={id} className={`py-20 md:py-32 ${className}`}>
    <div className="max-w-7xl mx-auto px-6 md:px-8">
      {title && (
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-16 text-center text-white">
            {title}
          </h2>
        </ScrollReveal>
      )}
      {children}
    </div>
  </section>
);

const App = () => {
  const experiences = [
    {
      role: "Software Engineer (R&D)",
      company: "Teleste",
      period: "April 2025 - Present",
      description:
        "Contributing to Teleste's broadband R&D team, driving practical improvements that enhance product performance, reliability, and deployment efficiency across our access-network solutions. Development of scalable software components and optimized caching systems that significantly reduce configuration latency for enterprise customers. Building comprehensive testing frameworks and automated quality assurance processes that ensure robust product delivery while accelerating development cycles. Contributing to CI/CD pipeline optimization and implementing advanced debugging methodologies to support critical field trials and customer demonstrations. Focused on delivering clean, maintainable solutions that enable superior broadband experiences for millions of end users worldwide.",
      url: "https://www.teleste.com",
    },
    {
      role: "Co-Founder",
      company: "Since AI",
      period: "May 2025 - Present",
      description:
        "Leading strategic partnerships and business development for Since AI, an innovative AI hackathon. Spearheading collaboration opportunities with global technology leaders and driving community engagement in the rapidly evolving AI ecosystem. Positioning Since AI as Northern Europe's premier AI innovation platform through strategic partnership development and cutting-edge program design focused on practical AI advancement.",
      url: "https://sinceai.fi/",
    },
    {
      role: "Co-Founder",
      company: "Root",
      period: "March 2025 - Present",
      description:
        "Co-founded Root, the Nordic region's premier innovative recruiting event connecting top talent with Europe's leading technology companies. Built strategic relationships with Nordic's biggest IT companies and featured Europe's most influential IT career speakers, creating unprecedented networking opportunities for 1000+ participants establishing Root as the definitive platform for elite tech talent acquisition and career advancement.",
      url: "https://rootexpo.fi/",
    },
    {
      role: "Co-Founder",
      company: "Kolt",
      period: "July 2024 - Present",
      description:
        "Co-founded Kolt to develop innovative automation solutions addressing complex operational challenges through advanced technology integration. Leading comprehensive product development across multiple technical domains, building robust platforms designed for mission-critical applications. Spearheading architectural decisions and technical implementation strategies that enable autonomous operation, real-time data processing, and seamless remote management capabilities. Designing scalable backend infrastructure with secure connectivity and dynamic APIs to support sophisticated user interfaces and operational dashboards. Directing early-stage R&D initiatives, technology evaluation, and systems integration to ensure optimal performance under demanding operational requirements. Collaborating with multidisciplinary teams to accelerate product development cycles, validate market opportunities, and establish strategic direction for scalable deployment across diverse environments.",
      url: "https://kolt.fi/",
    },
    {
      role: "AI & Innovation Lead",
      company: "Boost",
      period: "April 2025 - Present",
      description:
        "Leading AI innovation initiatives and securing long-term strategic partnerships with FAANG companies and global technology leaders. Spearheading the organization of AI hackathon, designed to attract top-tier talent and create transformative AI solutions. Establishing Boost Turku as a key player in the European AI landscape through innovative program development and strategic partnership cultivation with industry pioneers.",
      url: "https://www.boostturku.com/",
    },
  ];

  const skills = [
    {
      category: "Artificial Intelligence",
      items: [
        "Machine Learning",
        "Deep Learning",
        "Neural Networks",
        "Computer Vision",
        "Natural Language Processing",
        "MLOps & AI Strategy",
      ],
    },
    {
      category: "Software Engineering",
      items: [
        "Python, C++ & JavaScript",
        "React & Full-Stack Development",
        "Cloud Infrastructure (AWS)",
        "Microservices Architecture",
        "DevOps & CI/CD",
        "System Design",
      ],
    },
    {
      category: "Leadership & Strategy",
      items: [
        "Startup Co-Founding",
        "Strategic Partnerships",
        "Business Development",
        "Technology Innovation",
        "Team Leadership",
        "Product Strategy",
      ],
    },
  ];

  const socialLinks = [
    {
      icon: FaLinkedinIn,
      url: "https://www.linkedin.com/in/rikulauttia",
      label: "LinkedIn Profile",
    },
    {
      icon: FaGithub,
      url: "https://github.com/rikulauttia",
      label: "GitHub Profile",
    },
    {
      icon: FaTwitter,
      url: "https://x.com/rikulauttia",
      label: "X (Twitter) Profile",
    },
  ];

  return (
    <div
      className="min-h-screen bg-black text-white"
      style={{
        fontFamily:
          "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <div className="noise" />
      <Navbar />

      {/* Hero Section */}
      <motion.section className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroSection />
      </motion.section>

      {/* About Section */}
      <Section id="about">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-white tracking-tight">
                About
              </h2>
              <p className="text-xl leading-relaxed text-white/70 mb-6">
                Based in Turku, Finland, I am an AI Engineer and serial
                co-founder of innovative technology ventures. I work at the
                intersection of AI engineering, commercial strategy, and product
                development.
              </p>
              <p className="text-lg leading-relaxed text-white/60">
                I specialize in building intelligent systems that bridge the gap
                between cutting-edge AI research and practical business
                applications. My work focuses on scalable solutions, enterprise
                AI implementation, and fostering innovation in the Nordic
                technology ecosystem.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="space-y-6">
              <ParallaxText />
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="Experience" className="bg-black/50">
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Expertise">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <SkillCategory
              key={skillGroup.category}
              title={skillGroup.category}
              skills={skillGroup.items}
              index={index}
            />
          ))}
        </div>
      </Section>

      {/* Education & Certifications Section */}
      <Section
        id="education"
        title="Education & Certifications"
        className="bg-black/50"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <ScrollReveal>
            <motion.div className="p-8 rounded-2xl backdrop-blur-xl bg-white/[0.02] border border-white/[0.08] hover:bg-white/[0.04] transition-all duration-700">
              <h3 className="text-2xl font-semibold mb-8 text-white tracking-tight">
                Education
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Information and Communication Technology
                  </h4>
                  <p className="text-white/70 font-medium text-lg mb-2">
                    University of Turku
                  </p>

                  <div className="mt-6 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <a
                      href="https://github.com/rikulauttia/AI-Commercial-DecisionMaking"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-white/90 transition-colors duration-300 inline-flex items-center gap-2"
                    >
                      <h5 className="text-lg font-medium mb-2">
                        Bachelor's Thesis
                      </h5>
                      <svg
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="opacity-60"
                      >
                        <path
                          d="M7 17L17 7M17 7H8M17 7V16"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        />
                      </svg>
                    </a>
                    <p className="text-white/60 text-base leading-relaxed">
                      The Role of Artificial Intelligence in Analyzing Large
                      Datasets and Its Utilization in Commercial Decision-Making
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Certifications */}
          <ScrollReveal delay={0.2}>
            <motion.div className="p-8 rounded-2xl backdrop-blur-xl bg-white/[0.02] border border-white/[0.08] hover:bg-white/[0.04] transition-all duration-700">
              <h3 className="text-2xl font-semibold mb-8 text-white tracking-tight">
                Certifications
              </h3>

              <div className="space-y-8">
                <div>
                  <a
                    href="https://www.credly.com/badges/28a5319a-2126-42fd-b607-5c6772c7745e/public_url"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-white/90 transition-colors duration-300 inline-flex items-center gap-2"
                  >
                    <h4 className="text-xl font-semibold mb-2">
                      AWS Certified Cloud Practitioner
                    </h4>
                    <svg
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="opacity-60"
                    >
                      <path
                        d="M7 17L17 7M17 7H8M17 7V16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                  </a>
                  <p className="text-white/70 font-medium text-lg mb-2">
                    Amazon Web Services
                  </p>
                  <p className="text-white/50 text-sm font-medium">
                    March 2025
                  </p>
                </div>

                <div>
                  <a
                    href="https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/cb1bea9373697a44f69e6f7a20726896"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-white/90 transition-colors duration-300 inline-flex items-center gap-2"
                  >
                    <h4 className="text-xl font-semibold mb-2">
                      Full Stack Open
                    </h4>
                    <svg
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="opacity-60"
                    >
                      <path
                        d="M7 17L17 7M17 7H8M17 7V16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                  </a>
                  <p className="text-white/70 font-medium text-lg mb-2">
                    University of Helsinki
                  </p>
                  <p className="text-white/50 text-sm font-medium">
                    November 2024
                  </p>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Let's Connect" className="bg-black/30">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl leading-relaxed text-white/70 mb-12 max-w-2xl mx-auto">
              Open to discussing AI innovation, strategic partnerships, and
              opportunities in enterprise technology solutions.
            </p>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="mb-12"
            >
              <a
                href="mailto:riku@lauttia.com"
                className="inline-block text-2xl font-medium text-white hover:text-white/80 transition-colors duration-300 px-8 py-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.08] backdrop-blur-xl border border-white/[0.08]"
              >
                riku@lauttia.com
              </a>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-6">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-14 h-14 rounded-full bg-white/[0.05] hover:bg-white/[0.1] backdrop-blur-xl border border-white/[0.08] flex items-center justify-center text-white/70 hover:text-white transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/[0.08] text-center">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <p className="text-white/40 text-sm font-medium">
            © 2025 Riku Lauttia. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
