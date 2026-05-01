import { motion } from 'framer-motion';
import { FiArrowRight, FiExternalLink } from 'react-icons/fi';
import Layout from '../components/layout/Layout';
import Container from '../components/layout/Container';
import Section from '../components/layout/Section';
import Button from '../components/ui/Button';
import SEO, { getPersonSchema } from '../components/SEO';
import { getProfile, getFeaturedProjects, getFeaturedArticles } from '../src/lib/content';
import profileData from '../src/content/profile.json';

const HomePage = () => {
  const profile = getProfile();
  const featuredProjects = getFeaturedProjects();
  const featuredArticles = getFeaturedArticles();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] } },
  };

  return (
    <Layout>
      <SEO jsonLd={getPersonSchema(profileData.personal)} />

      {/* Hero */}
      <section className="min-h-[calc(100vh-4rem)] flex items-center py-16 md:py-20">
        <Container>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-3xl"
          >
            <motion.h1
              variants={item}
              className="text-[2rem] leading-[1.15] sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 md:mb-8 text-dark-50"
            >
              AI engineer and entrepreneur building intelligent systems.
            </motion.h1>

            <motion.p
              variants={item}
              className="text-base sm:text-lg md:text-xl text-dark-400 leading-relaxed mb-10 md:mb-12 max-w-2xl"
            >
              Working at the intersection of AI engineering, commercial strategy, and product development.
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-wrap items-center gap-3 mb-14 md:mb-16"
            >
              <Button href="/work" size="lg">
                View work
                <FiArrowRight className="w-4 h-4" />
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Get in touch
              </Button>
            </motion.div>

            {/* Stat row */}
            <motion.div
              variants={item}
              className="grid grid-cols-3 gap-6 md:gap-10 pt-8 border-t border-dark-800/60"
            >
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-dark-50 mb-1">
                  4+
                </div>
                <div className="text-xs sm:text-sm text-dark-500 leading-tight">Companies founded</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-dark-50 mb-1">
                  10+
                </div>
                <div className="text-xs sm:text-sm text-dark-500 leading-tight">Years building</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-dark-50 mb-1">
                  AI/ML
                </div>
                <div className="text-xs sm:text-sm text-dark-500 leading-tight">Specialization</div>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Selected Work */}
      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-dark-50">
                Selected work
              </h2>
              <p className="text-dark-500 max-w-xl text-[15px]">
                Companies, systems, and communities built across AI, software, and automation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-4xl">
              {featuredProjects.map((project, index) => (
                <motion.a
                  key={project.id}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  className="group border border-dark-800/60 rounded-xl p-5 md:p-6 hover:border-dark-700 active:bg-dark-900/30 transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-2.5">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-semibold text-dark-100 group-hover:text-dark-50 transition-colors truncate">
                        {project.name}
                      </h3>
                      <p className="text-xs text-dark-600 mt-0.5">{project.role}</p>
                    </div>
                    <FiArrowRight className="w-4 h-4 text-dark-700 group-hover:text-dark-500 flex-shrink-0 mt-0.5 ml-3 transition-colors" />
                  </div>
                  <p className="text-dark-500 text-[13px] leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </motion.a>
              ))}
            </div>

            <div className="mt-8">
              <Button href="/projects" variant="ghost" size="md">
                All projects
                <FiArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Writing */}
      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-dark-50">
                Writing
              </h2>
              <p className="text-dark-500 text-[15px]">
                Notes on AI, software, systems, and company building.
              </p>
            </div>

            <div className="max-w-2xl">
              {featuredArticles.slice(0, 3).map((article, index) => (
                <motion.a
                  key={article.id}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  className="group flex items-start justify-between gap-4 py-5 border-b border-dark-800/40 hover:border-dark-700/60 active:opacity-70 transition-all"
                >
                  <h3 className="text-[15px] font-medium text-dark-300 group-hover:text-dark-100 transition-colors leading-snug flex-1">
                    {article.title}
                  </h3>
                  <FiExternalLink className="w-3.5 h-3.5 text-dark-700 group-hover:text-dark-500 flex-shrink-0 mt-0.5 transition-colors" />
                </motion.a>
              ))}
            </div>

            <div className="mt-8">
              <Button href="/writing" variant="ghost" size="md">
                All writing
                <FiArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Contact */}
      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-lg"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-dark-50">
              Get in touch
            </h2>
            <p className="text-dark-500 text-[15px] mb-7 leading-relaxed">
              For AI systems, software, partnerships, or company-building discussions, reach out directly.
            </p>
            <Button href="/contact" size="lg">
              Contact
              <FiArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </Container>
      </Section>
    </Layout>
  );
};

export default HomePage;
