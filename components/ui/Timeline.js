import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const TimelineItem = ({ role, company, period, description, url, isLast }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="relative pl-5 pb-10 last:pb-0"
    >
      {!isLast && (
        <div className="absolute left-[3px] top-3 bottom-0 w-px bg-dark-800/60" />
      )}

      <div className="absolute left-0 top-[7px] w-[7px] h-[7px] rounded-full bg-dark-600" />

      <div>
        {/* Role + period: stacked on mobile, inline on sm+ */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-0.5 sm:gap-4 mb-1.5">
          <h3 className="text-base font-medium text-dark-50 leading-snug">{role}</h3>
          <span className="text-xs text-dark-600 sm:whitespace-nowrap sm:mt-0.5 shrink-0">{period}</span>
        </div>

        <div className="mb-3">
          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-dark-400 hover:text-dark-200 transition-colors"
            >
              {company}
              <FiExternalLink className="w-3 h-3" />
            </a>
          ) : (
            <span className="text-sm text-dark-400">{company}</span>
          )}
        </div>

        <p className="text-dark-500 text-[14px] leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

const Timeline = ({ items }) => {
  return (
    <div className="relative max-w-2xl">
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
