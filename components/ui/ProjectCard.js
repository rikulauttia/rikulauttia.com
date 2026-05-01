import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

const ProjectCard = ({ name, description, url, role, period }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group border border-dark-800/60 rounded-xl p-7 hover:border-dark-700 transition-colors"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-xl font-semibold text-dark-50">{name}</h3>
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-600 hover:text-dark-400 transition-colors"
                aria-label={`Visit ${name}`}
              >
                <FiArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-3 text-sm text-dark-500">
            {role && <span>{role}</span>}
            {period && (
              <>
                <span className="text-dark-700">&middot;</span>
                <span>{period}</span>
              </>
            )}
          </div>

          <p className="text-dark-400 text-[15px] leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
