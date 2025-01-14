import React, { useEffect, useState } from "react";

import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.2]);

  return (
    <motion.section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div className="absolute inset-0 z-0" style={{ y, scale }}>
        <img
          src="/rikulauttia.jpg"
          alt="Riku Lauttia"
          className="w-full h-full object-cover filter brightness-75"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"
          style={{ opacity }}
        />
      </motion.div>

      <motion.div
        className="relative z-10 text-center text-white"
        style={{ opacity }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-8xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
        >
          Riku Lauttia
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-3xl font-light"
        >
          <span className="text-white">Entrepreneur</span> |{" "}
          <span className="text-white">AI Innovator</span> |{" "}
          <span className="text-white">Fullstack Developer</span>
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

const GlowingCard = ({ children, className }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const background = useMotionTemplate`radial-gradient(
    circle at ${mouseX}px ${mouseY}px,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 20%,
    rgba(255, 255, 255, 0) 50%
  )`;

  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl ${className}`}
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ background }}
      />
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
      className="p-6 backdrop-blur-lg bg-white/5 rounded-xl border border-white/10"
    >
      <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        {title}
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded opacity-0 group-hover:opacity-50 blur transition duration-500" />
            <div className="relative p-2 bg-black/50 rounded text-sm hover:text-white transition-colors">
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
    <GlowingCard className="bg-white/5">
      <motion.div
        className="p-8 rounded-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          {project.title}
        </h3>
        <p className="text-gray-300">{project.description}</p>
      </motion.div>
    </GlowingCard>
  );
};

const ParallaxText = ({ children, baseVelocity = 100 }) => {
  const [scope, setScope] = useState(null);

  useEffect(() => {
    if (scope) {
      animate(scope, {
        x: [0, -1000],
        transition: {
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        },
      });
    }
  }, [scope]);

  return (
    <div className="parallax">
      <div ref={setScope} className="scroller">
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
      </div>
    </div>
  );
};

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <header className="fixed top-0 left-0 w-full z-40">
      <nav className="flex justify-between items-center py-4 px-8">
        <motion.div
          className="text-2xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          RL
        </motion.div>
        <ul className="flex space-x-6">
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
      </nav>
      <motion.div className="h-0.5 bg-white" style={{ scaleX }} />
    </header>
  );
};

const Section = ({ id, title, children }) => (
  <section id={id} className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        {title}
      </h2>
      {children}
    </div>
  </section>
);

const App = () => {
  // Define state for the entire app
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
      icon: FaLinkedinIn,
      url: "https://www.linkedin.com/in/rikulauttia",
      label: "LinkedIn",
    },
    { icon: FaGithub, url: "https://github.com/rikulauttia", label: "GitHub" },
    { icon: FaTwitter, url: "https://x.com/rikulauttia", label: "Twitter" },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/rikulauttia/",
      label: "Instagram",
    },
  ];

  return (
    <div className="font-sans bg-black text-white">
      <Navbar />
      <HeroSection />

      <Section id="about">
        <ParallaxText baseVelocity={-5}>
          INNOVATE • CREATE • TRANSFORM •
        </ParallaxText>
        <div className="max-w-4xl mx-auto px-4 py-20">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-20" />
            <div className="relative p-8 bg-black rounded-lg">
              <p className="text-2xl leading-relaxed">
                Pioneering the intersection of AI and entrepreneurship, I
                transform innovative ideas into impactful solutions. Based in
                Turku, Finland, I collaborate with forward-thinking teams
                globally to shape the future of technology.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section id="skills" title="Technical Expertise">
        <div className="grid md:grid-cols-2 gap-6">
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

      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <div className="max-w-3xl mx-auto px-4">
          <div className="backdrop-blur-lg bg-white/5 rounded-2xl border border-white/10 p-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* Get in Touch */}
              <div>
                <p className="text-xl mb-6">
                  I'm always open to new opportunities and collaborations.
                  <br /> Feel free to reach out!
                </p>
                <motion.div
                  className="relative inline-block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-20" />
                  <a
                    href="mailto:riku@lauttia.com"
                    className="relative bg-black/50 hover:bg-black/70 text-white px-6 py-3 rounded-lg inline-block transition-colors"
                  >
                    riku@lauttia.com
                  </a>
                </motion.div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Connect with me
                </h3>
                <div className="flex justify-center space-x-8">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-white hover:text-blue-400 transition-colors"
                      aria-label={link.label}
                    >
                      <link.icon size={28} />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div>
                <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Location
                </h3>
                <motion.p className="text-lg" whileHover={{ scale: 1.05 }}>
                  📍 Turku, Finland
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default App;
