import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export const ScrollReveal = ({ children, delay = 0 }) => {
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

export const Section = ({ id, title, children, className = "" }) => (
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

export const ExperienceCard = ({ experience, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const truncateLength = 150;
  const shouldTruncate = experience.description.length > truncateLength;
  const displayDescription =
    shouldTruncate && !isExpanded
      ? experience.description.substring(0, truncateLength) + "..."
      : experience.description;

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

      <div>
        <p className="text-white/60 leading-relaxed text-base group-hover:text-white/70 transition-colors duration-300">
          {displayDescription}
        </p>

        {shouldTruncate && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-3 text-white/80 hover:text-white text-sm font-medium transition-colors duration-300 flex items-center gap-1"
          >
            {isExpanded ? (
              <>
                See less
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  className="transform rotate-180 transition-transform duration-200"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </>
            ) : (
              <>
                See more
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  className="transition-transform duration-200"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </>
            )}
          </button>
        )}
      </div>
    </motion.div>
  );
};

export const ArticleCard = ({ article, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.23, 1, 0.32, 1],
      }}
      className="group relative p-8 rounded-2xl backdrop-blur-xl bg-white/[0.02] border border-white/[0.08] hover:bg-white/[0.04] transition-all duration-700"
    >
      <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white tracking-tight group-hover:text-white/90 transition-colors duration-300">
        {article.title}
      </h3>
      <motion.a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300 font-medium text-sm tracking-wider uppercase"
        whileHover={{ x: 5 }}
      >
        Read Article
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
      </motion.a>
    </motion.div>
  );
};

export const SkillCategory = ({ title, skills, index }) => {
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
