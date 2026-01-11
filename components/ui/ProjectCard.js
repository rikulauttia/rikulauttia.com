import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import Badge from './Badge';
import TextLink from './TextLink';

const ProjectCard = ({ name, description, url, role, period, tags = [] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative bg-dark-900/50 border border-dark-800 rounded-2xl p-6 md:p-8 hover:bg-dark-900/70 hover:border-dark-700 transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <h3 className="text-2xl font-semibold text-dark-50">{name}</h3>
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-400 hover:text-accent-400 transition-colors"
                aria-label={`Visit ${name}`}
              >
                <FiArrowUpRight className="w-5 h-5" />
              </a>
            )}
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {role && <Badge variant="accent">{role}</Badge>}
            {period && <Badge variant="subtle">{period}</Badge>}
          </div>

          <p className="text-dark-300 text-base leading-relaxed mb-4">
            {description}
          </p>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <Badge key={index} variant="default">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
