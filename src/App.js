import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Cursor = () => {
  const [cursorPos, setCursorPos] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const moveCursor = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      className="fixed w-6 h-6 rounded-full bg-white mix-blend-difference pointer-events-none z-50"
      style={{ left: cursorPos.x - 12, top: cursorPos.y - 12 }}
    />
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

const Section = ({
  id,
  title,
  children,
  bgColor = "bg-black",
  textColor = "text-white",
}) => (
  <section id={id} className={`py-20 ${bgColor} ${textColor}`}>
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-8">{title}</h2>
      {children}
    </div>
  </section>
);

const App = () => {
  const skills = [
    "AI & Machine Learning",
    "Fullstack Development",
    "Blockchain Technology",
    "Cloud Architecture",
    "UI/UX Design",
    "Data Analytics",
  ];
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
      <Cursor />
      <Navbar />

      <section className="h-screen flex items-center justify-center bg-black text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold mb-4">Riku Lauttia</h1>
          <p className="text-xl mb-8">
            Entrepreneur | AI Innovator | Fullstack Developer
          </p>
        </motion.div>
      </section>

      <Section
        id="about"
        title="About Me"
        bgColor="bg-white"
        textColor="text-black"
      >
        <p className="text-xl leading-relaxed">
          As a visionary entrepreneur and AI innovator, I push the boundaries of
          technology to create impactful solutions. My expertise in fullstack
          development allows me to bring cutting-edge ideas to life,
          transforming industries and shaping the future.
        </p>
      </Section>

      <Section id="skills" title="Skills">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              className="p-4 border border-white rounded"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </Section>

      <Section
        id="projects"
        title="Projects"
        bgColor="bg-white"
        textColor="text-black"
      >
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="p-6 border border-black rounded"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p>{project.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <div className="max-w-lg mx-auto">
          <p className="mb-6 text-lg">
            I'm always open to new opportunities and collaborations. Feel free
            to reach out!
          </p>
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Get in touch</h3>
            <p className="mb-2">
              <span className="font-bold">Email:</span>{" "}
              <a
                href="mailto:riku@lauttia.com"
                className="text-white hover:text-blue-400"
              >
                riku@lauttia.com
              </a>
            </p>
          </div>
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Connect with me</h3>
            <div className="flex space-x-6">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-white hover:text-blue-400"
                  aria-label={link.label}
                >
                  <link.icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Location</h3>
            <p>Helsinki, Finland</p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default App;
