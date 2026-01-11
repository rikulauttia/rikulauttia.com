import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const TimelineItem = ({ role, company, period, description, url, isLast }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[7px] top-6 bottom-0 w-px bg-dark-800" />
      )}

      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-accent-500 border-2 border-dark-950" />

      {/* Content */}
      <div className="bg-dark-900/50 border border-dark-800 rounded-xl p-6 hover:bg-dark-900/70 hover:border-dark-700 transition-all duration-300">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <h3 className="text-xl font-semibold text-dark-50 mb-1">{role}</h3>
            <div className="flex items-center gap-2">
              {url ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-400 hover:text-accent-300 transition-colors inline-flex items-center gap-1"
                >
                  {company}
                  <FiExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="text-accent-400">{company}</span>
              )}
            </div>
          </div>
          <span className="text-sm text-dark-400 whitespace-nowrap">{period}</span>
        </div>

        <p className="text-dark-300 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

const Timeline = ({ items }) => {
  return (
    <div className="relative">
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          {...item}
          isLast={index === items.length - 1}
        />
      ))}
    </div>
  );
};

export default Timeline;
