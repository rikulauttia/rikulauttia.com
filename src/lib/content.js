import profileData from '../content/profile.json';
import rolesData from '../content/roles.json';
import projectsData from '../content/projects.json';
import writingData from '../content/writing.json';

// Profile
export const getProfile = () => profileData.personal;
export const getEducation = () => profileData.education;
export const getCertifications = () => profileData.certifications;
export const getSkills = () => profileData.skills.categories;
export const getSocialLinks = () => profileData.social;
export const getAvailability = () => profileData.personal.availability;

// Roles
export const getRoles = () => rolesData.roles;
export const getCurrentRoles = () => rolesData.roles.filter(role => role.current);
export const getRoleById = (id) => rolesData.roles.find(role => role.id === id);

// Projects
export const getProjects = () => projectsData.projects;
export const getFeaturedProjects = () => projectsData.projects.filter(project => project.featured);
export const getProjectById = (id) => projectsData.projects.find(project => project.id === id);

// Writing
export const getArticles = () => writingData.articles;
export const getFeaturedArticles = () => writingData.articles.filter(article => article.featured);
export const getArticleById = (id) => writingData.articles.find(article => article.id === id);
export const getArticleBySlug = (slug) => writingData.articles.find(article => article.slug === slug);

// Formatted data for legacy compatibility
export const experiences = rolesData.roles.map(role => ({
  role: role.title,
  company: role.company.name,
  period: formatPeriod(role.startDate, role.endDate, role.current),
  description: role.description,
  url: role.company.url,
}));

export const projects = projectsData.projects.map(project => ({
  name: project.name,
  description: project.description,
  url: project.url,
  role: project.role,
  period: formatPeriod(project.startDate, project.endDate),
}));

export const articles = writingData.articles.map(article => ({
  title: article.title,
  url: article.url,
}));

export const skills = profileData.skills.categories.map(category => ({
  category: category.name,
  items: category.skills,
}));

export const socialLinks = profileData.social.map(social => ({
  name: social.platform,
  url: social.url,
}));

// Helper function to format date periods
function formatPeriod(startDate, endDate, current = false) {
  if (!startDate) return 'TODO';

  const start = new Date(startDate);
  const end = current ? new Date() : endDate ? new Date(endDate) : null;

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const calculateDuration = (start, end) => {
    const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    if (years > 0 && remainingMonths > 0) {
      return `${years} yr ${remainingMonths} mo`;
    } else if (years > 0) {
      return `${years} yr`;
    } else {
      return `${remainingMonths} mo`;
    }
  };

  const startFormatted = formatDate(start);
  const endFormatted = current ? 'Present' : end ? formatDate(end) : 'Present';
  const duration = end ? ` · ${calculateDuration(start, end)}` : '';

  return `${startFormatted} - ${endFormatted}${duration}`;
}
