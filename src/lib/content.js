import profileData from '../content/profile.json';
import rolesData from '../content/roles.json';
import writingData from '../content/writing.json';

// Profile
export const getProfile = () => profileData.personal;
export const getAbout = () => profileData.about;
export const getFocusAreas = () => profileData.focusAreas;
export const getEducation = () => profileData.education;
export const getSocialLinks = () => profileData.social;

// Selected work
export const getWork = () => rolesData.roles;

// Writing
export const getArticles = () => writingData.articles;
export const getFeaturedArticles = () => writingData.articles.filter((a) => a.featured);
export const getArticleBySlug = (slug) =>
  writingData.articles.find((article) => article.slug === slug);
