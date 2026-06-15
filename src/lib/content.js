import profileData from '../content/profile.json';
import rolesData from '../content/roles.json';
import writingData from '../content/writing.json';

// Profile
export const getProfile = () => profileData.personal;
export const getAbout = () => profileData.about;
export const getEducation = () => profileData.education;
export const getSocialLinks = () => profileData.social;

// Selected work
export const getWork = () => rolesData.roles;

// Writing (newest first)
const byNewest = (a, b) =>
  new Date(b.publishedDate) - new Date(a.publishedDate);

export const getArticles = () => [...writingData.articles].sort(byNewest);
export const getFeaturedArticles = () =>
  getArticles().filter((a) => a.featured);
export const getArticleBySlug = (slug) =>
  writingData.articles.find((article) => article.slug === slug);
