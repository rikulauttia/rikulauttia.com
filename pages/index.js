import { motion } from 'framer-motion';
import { FiArrowRight, FiExternalLink, FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import Layout from '../components/layout/Layout';
import Container from '../components/layout/Container';
import Section from '../components/layout/Section';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import SEO, { getPersonSchema } from '../components/SEO';
import { getProfile, getFeaturedProjects, getFeaturedArticles, getSocialLinks } from '../src/lib/content';
import profileData from '../src/content/profile.json';

const HomePage = () => {
  const profile = getProfile();
  const featuredProjects = getFeaturedProjects();
  const featuredArticles = getFeaturedArticles();
  const socialLinks = getSocialLinks();

  // Icon mapping for social platforms
  const getIcon = (platform) => {
    const icons = {
      'GitHub': FiGithub,
      'LinkedIn': FiLinkedin,
      'X (Twitter)': FiTwitter,
    };
    return icons[platform] || FiExternalLink;
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <Layout>
      <SEO jsonLd={getPersonSchema(profileData.personal)} />

      {/* Hero Section - Above the Fold */}
      <Section size="lg" className="min-h-[calc(100vh-5rem)] flex items-center">
        <Container>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-4xl"
          >
            {/* Badge */}
            <motion.div variants={item} className="mb-8">
              <Badge variant="accent">
                {profile.availability.forConsulting ? 'Available for consulting' : 'Currently unavailable'}
              </Badge>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={item}
              className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]"
            >
              <span className="gradient-text">
                AI engineer.
                <br />
                Serial co-founder.
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={item}
              className="text-xl md:text-2xl text-dark-300 leading-relaxed mb-12 max-w-2xl"
            >
              I build production AI systems at Teleste, serving millions of broadband customers.
              <br />
              Co-founded four companies focused on automation, recruiting, and AI innovation in the Nordics.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={item}
              className="flex flex-wrap items-center gap-4 mb-16"
            >
              <Button href="/work" size="lg">
                View My Work
                <FiArrowRight className="w-5 h-5" />
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Get in Touch
              </Button>
            </motion.div>

            {/* Social Proof / Stats */}
            <motion.div
              variants={item}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-dark-800"
            >
              <div>
                <div className="text-3xl md:text-4xl font-semibold text-dark-50 mb-1">
                  4+
                </div>
                <div className="text-sm text-dark-400">Companies Founded</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-semibold text-dark-50 mb-1">
                  5+
                </div>
                <div className="text-sm text-dark-400">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-semibold text-dark-50 mb-1">
                  AI/ML
                </div>
                <div className="text-sm text-dark-400">Specialization</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-semibold text-dark-50 mb-1">
                  {profile.location.city}
                </div>
                <div className="text-sm text-dark-400">Based in {profile.location.country}</div>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Selected Work */}
      <Section className="bg-dark-900/30">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold mb-4">
                Selected Work
              </h2>
              <p className="text-xl text-dark-400 max-w-2xl mx-auto">
                Companies and platforms built
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {featuredProjects.map((project, index) => (
                <motion.a
                  key={project.id}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-dark-900/50 border border-dark-800 rounded-2xl p-8 hover:bg-dark-900/70 hover:border-dark-700 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-dark-50 mb-2 group-hover:text-accent-400 transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-sm text-dark-400 mb-3">{project.role}</p>
                    </div>
                    <FiArrowRight className="w-6 h-6 text-dark-600 group-hover:text-accent-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </div>
                  <p className="text-dark-300 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  {project.metrics && Object.values(project.metrics).some(v => v !== "TODO") && (
                    <div className="flex flex-wrap gap-2">
                      {project.metrics.participants && project.metrics.participants !== "TODO" && (
                        <Badge variant="subtle">{project.metrics.participants} participants</Badge>
                      )}
                    </div>
                  )}
                </motion.a>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button href="/projects" variant="outline" size="lg">
                View All Projects
                <FiArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Featured Writing */}
      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold mb-4">
                Featured Writing
              </h2>
              <p className="text-xl text-dark-400 max-w-2xl mx-auto">
                Latest insights on AI, technology, and innovation
              </p>
            </div>

            <div className="space-y-4 max-w-3xl mx-auto">
              {featuredArticles.slice(0, 3).map((article, index) => (
                <motion.a
                  key={article.id}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group block bg-dark-900/50 border border-dark-800 rounded-2xl p-6 hover:bg-dark-900/70 hover:border-dark-700 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold text-dark-50 group-hover:text-accent-400 transition-colors leading-tight flex-1">
                      {article.title}
                    </h3>
                    <FiExternalLink className="w-5 h-5 text-dark-600 group-hover:text-accent-400 flex-shrink-0 mt-1 transition-colors" />
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button href="/writing" variant="outline" size="lg">
                View All Articles
                <FiArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Connect */}
      <Section className="bg-dark-900/30">
        <Container size="sm">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-semibold mb-4">
              Connect
            </h2>
            <p className="text-xl text-dark-400 mb-12 max-w-xl mx-auto">
              Find me on these platforms
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.filter(link => ['GitHub', 'LinkedIn', 'X (Twitter)'].includes(link.platform)).map((link, index) => {
                const Icon = getIcon(link.platform);
                return (
                  <motion.a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex items-center gap-3 px-6 py-4 rounded-xl bg-dark-900/50 border border-dark-800 hover:bg-dark-900 hover:border-dark-600 transition-all duration-300"
                  >
                    <Icon className="w-6 h-6 text-dark-400 group-hover:text-accent-400 transition-colors" />
                    <span className="font-medium text-dark-200 group-hover:text-dark-50 transition-colors">
                      {link.platform}
                    </span>
                  </motion.a>
                );
              })}
              <motion.a
                href={`mailto:${profile.email}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="group flex items-center gap-3 px-6 py-4 rounded-xl bg-dark-900/50 border border-dark-800 hover:bg-dark-900 hover:border-dark-600 transition-all duration-300"
              >
                <FiMail className="w-6 h-6 text-dark-400 group-hover:text-accent-400 transition-colors" />
                <span className="font-medium text-dark-200 group-hover:text-dark-50 transition-colors">
                  Email
                </span>
              </motion.a>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Quick Links / CTA */}
      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">
              Available for consulting
            </h2>
            <p className="text-xl text-dark-400 mb-12">
              AI strategy and implementation. MLOps infrastructure. Production ML systems.
              <br />
              Reach out if you're building in AI or enterprise tech.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" size="lg">
                Get in Touch
                <FiArrowRight className="w-5 h-5" />
              </Button>
              <Button href="/work" variant="secondary" size="lg">
                View Experience
              </Button>
            </div>
          </motion.div>
        </Container>
      </Section>
    </Layout>
  );
};

export default HomePage;
