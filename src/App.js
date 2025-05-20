import React, { useRef, useState } from "react";

import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  FaGithub,
  FaGlobe,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.2]);
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
          className="w-full h-full object-cover object-center filter brightness-[0.6] contrast-125"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/80"
          style={{ opacity }}
        />
        {/* Modern geometric overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_100%)]" />
      </motion.div>

      <motion.div
        className="relative z-10 h-full w-full flex items-center justify-center text-center text-white px-4"
        style={{ opacity, y: textY }}
      >
        <div className="relative">
          {/* Decorative elements */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border border-white/20 rounded-full"
          />
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.15 }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] border border-white/20 rounded-full"
          />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl lg:text-9xl font-black mb-8 tracking-tighter"
          >
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/70 [-webkit-text-stroke:1px_rgba(255,255,255,0.1)]">
              RIKU LAUTTIA
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight"
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="text-white/90 relative"
            >
              ENTREPRENEUR
              <span className="mx-3 text-white/20 hidden md:inline">|</span>
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="text-white/90 relative"
            >
              AI INNOVATOR
              <span className="mx-3 text-white/20 hidden md:inline">|</span>
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="text-white/90 relative"
            >
              FULLSTACK DEVELOPER
            </motion.span>
          </motion.div>

          {/* Subtle animated line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"
          />
        </div>
      </motion.div>

      {/* Dynamic grain overlay */}
      <div className="pointer-events-none absolute inset-0 noise mix-blend-overlay" />
    </div>
  );
};

const ScrollReveal = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
      transition={{
        duration: 1,
        delay: delay,
        ease: [0.21, 0.45, 0.32, 0.9],
      }}
    >
      {children}
    </motion.div>
  );
};

const SkillCategory = ({ title, skills, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-8 backdrop-blur-lg bg-white/[0.02] rounded-none border border-white/[0.05] hover:bg-white/[0.04] transition-all duration-500"
    >
      <h3 className="text-xl md:text-2xl font-bold mb-6 text-white tracking-tight">
        {title}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            className="group relative"
          >
            <div className="relative p-2 text-white/70 hover:text-white transition-colors duration-300 text-sm md:text-base tracking-wider">
              {skill}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="group relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <div className="p-8 backdrop-blur-lg bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-all duration-500">
        <h3 className="text-2xl font-bold mb-4 text-white tracking-tight group-hover:translate-x-2 transition-transform duration-300">
          {project.title}
        </h3>
        <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

const ParallaxText = ({ children }) => {
  return (
    <div className="relative flex overflow-hidden bg-transparent">
      <div className="animate-scroll-left whitespace-nowrap flex items-center py-8">
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="mx-6 text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter uppercase"
          >
            <span className="text-white hover:text-opacity-80 transition-opacity">
              INNOVATE
            </span>
            <span className="mx-2 text-white/30">•</span>
            <span className="text-white hover:text-opacity-80 transition-opacity">
              CREATE
            </span>
            <span className="mx-2 text-white/30">•</span>
            <span className="text-white hover:text-opacity-80 transition-opacity">
              TRANSFORM
            </span>
            <span className="mx-2 text-white/30">•</span>
          </span>
        ))}
      </div>
      <div className="absolute top-0 animate-scroll-left2 whitespace-nowrap flex items-center py-8">
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="mx-6 text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter uppercase"
          >
            <span className="text-white hover:text-opacity-80 transition-opacity">
              INNOVATE
            </span>
            <span className="mx-2 text-white/30">•</span>
            <span className="text-white hover:text-opacity-80 transition-opacity">
              CREATE
            </span>
            <span className="mx-2 text-white/30">•</span>
            <span className="text-white hover:text-opacity-80 transition-opacity">
              TRANSFORM
            </span>
            <span className="mx-2 text-white/30">•</span>
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
    <header className="fixed top-0 left-0 w-full z-40 bg-black/50 backdrop-blur-sm">
      <nav className="flex justify-between items-center py-4 px-4 md:px-8">
        <motion.div
          className="text-2xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          RL
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
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

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {["About", "Skills", "Projects", "Contact"].map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-gray-400 transition-colors"
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <motion.div
          className={`absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg md:hidden ${
            isMenuOpen ? "block" : "hidden"
          }`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: isMenuOpen ? 1 : 0, y: 0 }}
        >
          <ul className="py-4">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <li key={item} className="px-4 py-2">
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block text-lg hover:text-gray-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </nav>
      <motion.div className="h-0.5 bg-white" style={{ scaleX }} />
    </header>
  );
};

const Section = ({ id, title, children }) => (
  <section id={id} className="py-12 md:py-20">
    <div className="container mx-auto px-4">
      {title && (
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-8 md:mb-12 text-center text-white">
          {title}
        </h2>
      )}
      {children}
    </div>
  </section>
);

const App = () => {
  const [skills] = useState([
    {
      category: "Languages & Core",
      items: ["Python", "JavaScript", "TypeScript", "Java", "C++", "Rust"],
    },
    {
      category: "Frontend Development",
      items: ["React", "Redux", "Angular", "Vue", "HTML/CSS", "GraphQL"],
    },
    {
      category: "Backend & Databases",
      items: ["Node.js", "Express", "MongoDB", "SQL", "NoSQL", "gRPC"],
    },
    {
      category: "DevOps & Tools",
      items: ["Git", "Docker", "CI/CD", "AWS", "Jest", "Unit Testing"],
    },
    {
      category: "AI & ML",
      items: [
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "Data Structures",
        "Algorithms",
      ],
    },
    {
      category: "Architecture",
      items: [
        "Microservices",
        "Distributed Systems",
        "System Architecture",
        "Cloud Infrastructure",
        "Scalable Solutions",
      ],
    },
  ]);

  const projects = [
    {
      title: "AI-Powered Analytics Platform",
      description:
        "Revolutionizing business intelligence with cutting-edge machine learning algorithms.",
    },
    {
      title: "Blockchain-based Supply Chain Solution",
      description:
        "Enhancing transparency and efficiency in global supply chains through decentralized technology.",
    },
    {
      title: "Next-Gen Cloud Infrastructure",
      description:
        "Building scalable and resilient cloud solutions for enterprise applications.",
    },
    {
      title: "Advanced UI/UX Framework",
      description:
        "Creating intuitive and engaging user experiences with modern design principles.",
    },
  ];

  const socialLinks = [
    {
      icon: FaGlobe,
      url: "https://rikulauttia.com",
      label: "Personal Website – Riku Lauttia",
    },
    {
      icon: FaLinkedinIn,
      url: "https://www.linkedin.com/in/rikulauttia",
      label: "LinkedIn Profile – Riku Lauttia",
    },
    {
      icon: FaGithub,
      url: "https://github.com/rikulauttia",
      label: "GitHub – Open-source Projects by Riku Lauttia",
    },
    {
      icon: FaTwitter,
      url: "https://x.com/rikulauttia",
      label: "Twitter (X) – Follow Riku Lauttia",
    },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/rikulauttia/",
      label: "Instagram – Photos and Stories by Riku Lauttia",
    },
    {
      icon: FaTiktok,
      url: "https://www.tiktok.com/@rikulauttia",
      label: "TikTok – Short Videos by Riku Lauttia",
    },
    {
      icon: FaYoutube,
      url: "https://www.youtube.com/@rikulauttia",
      label: "YouTube – Videos by Riku Lauttia",
    },
  ];

  return (
    <div className="font-sans bg-black text-white min-h-screen">
      <div className="noise" />
      <Navbar />

      {/* Hero Section */}
      <motion.section className="relative h-screen flex items-center justify-center overflow-hidden snap-section">
        <HeroSection />
      </motion.section>

      {/* About Section */}
      <Section id="about">
        <div className="h-full flex flex-col justify-center">
          <div className="h-16 md:h-20 mb-8">
            <ParallaxText>INNOVATE • CREATE • TRANSFORM •</ParallaxText>
          </div>
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/20 rounded-lg blur opacity-20" />
              <div className="relative p-8 bg-black/80 backdrop-blur-sm rounded-lg">
                <p className="text-2xl leading-relaxed text-white/90">
                  Pioneering the intersection of AI and entrepreneurship, I
                  transform innovative ideas into impactful solutions. Based in
                  Turku, Finland, I collaborate with forward-thinking teams
                  globally to shape the future of technology.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Technical Expertise">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {skills.map((skillGroup, index) => (
              <SkillCategory
                key={skillGroup.category}
                title={skillGroup.category}
                skills={skillGroup.items}
                index={index}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Projects">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Contact">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <div className="backdrop-blur-lg bg-white/[0.02] border border-white/[0.05] p-12 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-12"
              >
                <div>
                  <p className="text-2xl font-light mb-8 text-white/90">
                    I'm always open to new opportunities and collaborations.
                    <br /> Feel free to reach out!
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <a
                      href="mailto:riku@lauttia.com"
                      className="inline-block text-xl tracking-wide text-white hover:text-white/90 transition-colors"
                    >
                      riku@lauttia.com
                    </a>
                  </motion.div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-8 text-white">
                    Connect
                  </h3>
                  <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 max-w-md mx-auto">
                    {socialLinks.map((link) => (
                      <motion.a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-white hover:text-white/80 transition-colors p-2"
                        aria-label={link.label}
                      >
                        <link.icon
                          size={24}
                          className="sm:text-2xl md:text-3xl"
                        />
                      </motion.a>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    Location
                  </h3>
                  <motion.p
                    className="text-xl text-white/90"
                    whileHover={{ scale: 1.05 }}
                  >
                    Turku, Finland
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>
      </Section>
    </div>
  );
};

export default App;
