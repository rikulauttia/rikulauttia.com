# Content Model Schema Documentation

## Overview

The site uses a data-driven content model with JSON files as the single source of truth. All content is stored in `src/content/` and consumed through the `src/lib/content.js` utility.

---

## File Structure

```
src/content/
├── profile.json      # Personal information, bio, skills, education
├── roles.json        # Work experience and professional roles
├── projects.json     # Projects, ventures, and initiatives
├── writing.json      # Articles, blog posts, publications
└── SCHEMA.md         # This file
```

---

## 1. profile.json

**Purpose**: Personal information, biography, skills, education, certifications, and social links.

### Schema

```json
{
  "personal": {
    "name": "string",
    "tagline": "string",
    "bio": "string (short bio for hero sections)",
    "bioLong": "string (detailed bio for about page)",
    "email": "string",
    "location": {
      "city": "string",
      "region": "string",
      "country": "string",
      "countryCode": "string (ISO 3166-1 alpha-2)"
    },
    "availability": {
      "status": "available | unavailable",
      "forConsulting": "boolean",
      "forPartnerships": "boolean",
      "message": "string"
    }
  },
  "education": [
    {
      "institution": "string",
      "degree": "string",
      "field": "string",
      "startDate": "YYYY-MM | TODO",
      "endDate": "YYYY-MM | TODO",
      "url": "string (institution website)",
      "thesis": {
        "title": "string",
        "url": "string"
      }
    }
  ],
  "certifications": [
    {
      "name": "string",
      "issuer": "string",
      "date": "MMMM YYYY",
      "credentialUrl": "string"
    }
  ],
  "skills": {
    "categories": [
      {
        "name": "string (category name)",
        "skills": ["string (skill name)"]
      }
    ]
  },
  "social": [
    {
      "platform": "string",
      "url": "string",
      "username": "string"
    }
  ],
  "meta": {
    "seo": {
      "title": "string",
      "description": "string",
      "keywords": ["string"]
    },
    "lastUpdated": "YYYY-MM-DD"
  }
}
```

### Example

```json
{
  "personal": {
    "name": "Riku Lauttia",
    "tagline": "AI Engineer & Co-Founder",
    "bio": "AI Engineer and serial co-founder based in Turku, Finland...",
    "email": "riku@lauttia.com",
    "location": {
      "city": "Turku",
      "country": "Finland"
    },
    "availability": {
      "forConsulting": true,
      "message": "Open to consulting opportunities..."
    }
  }
}
```

---

## 2. roles.json

**Purpose**: Professional work experience, roles, and employment history.

### Schema

```json
{
  "roles": [
    {
      "id": "string (unique identifier, kebab-case)",
      "title": "string (job title)",
      "company": {
        "name": "string",
        "url": "string",
        "description": "string"
      },
      "type": "full-time | part-time | contract | founder",
      "startDate": "YYYY-MM",
      "endDate": "YYYY-MM | null",
      "current": "boolean",
      "location": {
        "city": "string",
        "country": "string",
        "remote": "boolean"
      },
      "description": "string (detailed description)",
      "highlights": ["string (key accomplishment)"],
      "technologies": ["string (technology/tool used)"]
    }
  ]
}
```

### Example

```json
{
  "roles": [
    {
      "id": "teleste-software-engineer",
      "title": "Software Engineer",
      "company": {
        "name": "Teleste",
        "url": "https://www.teleste.com"
      },
      "type": "full-time",
      "startDate": "2025-04",
      "endDate": null,
      "current": true,
      "description": "Contributing to Teleste's broadband R&D team...",
      "highlights": [
        "Developed scalable software components",
        "Optimized caching systems"
      ]
    }
  ]
}
```

---

## 3. projects.json

**Purpose**: Portfolio of projects, ventures, and initiatives.

### Schema

```json
{
  "projects": [
    {
      "id": "string (unique identifier, kebab-case)",
      "name": "string",
      "tagline": "string (short description)",
      "description": "string (medium description)",
      "longDescription": "string (detailed description)",
      "url": "string",
      "role": "string (your role)",
      "status": "active | completed | archived",
      "featured": "boolean (show on homepage)",
      "startDate": "YYYY-MM",
      "endDate": "YYYY-MM | null",
      "category": "string (project category)",
      "technologies": ["string"],
      "highlights": ["string (key achievement)"],
      "metrics": {
        "key": "value (any relevant metrics)"
      },
      "image": "string | TODO",
      "links": [
        {
          "type": "website | github | demo",
          "url": "string"
        }
      ]
    }
  ]
}
```

### Example

```json
{
  "projects": [
    {
      "id": "since-ai",
      "name": "Since AI",
      "tagline": "Northern Europe's premier AI innovation platform",
      "url": "https://sinceai.fi/",
      "role": "Co-Founder",
      "status": "active",
      "featured": true,
      "startDate": "2025-01",
      "category": "AI Innovation",
      "highlights": [
        "Strategic partnerships with global tech leaders",
        "Community-driven AI advancement"
      ]
    }
  ]
}
```

---

## 4. writing.json

**Purpose**: Published articles, blog posts, and thought leadership content.

### Schema

```json
{
  "articles": [
    {
      "id": "string (unique identifier, kebab-case)",
      "title": "string",
      "slug": "string (URL-friendly)",
      "excerpt": "string | TODO",
      "url": "string (full URL to article)",
      "platform": "Substack | Medium | Personal Blog | etc",
      "publishedDate": "YYYY-MM-DD | TODO",
      "featured": "boolean (show on homepage)",
      "category": "string (article category)",
      "tags": ["string"],
      "readingTime": "string | TODO",
      "image": "string | TODO"
    }
  ]
}
```

### Example

```json
{
  "articles": [
    {
      "id": "selling-ai-without-hype",
      "title": "Selling AI Without the Hype: A Playbook for Turning Interest Into Partnerships",
      "url": "https://open.substack.com/pub/rikulauttia/p/selling-ai-without-the-hype-a-playbook",
      "platform": "Substack",
      "publishedDate": "TODO",
      "featured": true,
      "category": "AI Strategy",
      "tags": ["AI", "Sales", "Partnerships"]
    }
  ]
}
```

---

## Usage in Code

### Import content functions

```javascript
import {
  getProfile,
  getSkills,
  getRoles,
  getProjects,
  getFeaturedProjects,
  getArticles,
  getFeaturedArticles,
  getSocialLinks
} from '../src/lib/content';
```

### Use in components

```javascript
const HomePage = () => {
  const profile = getProfile();
  const featuredProjects = getFeaturedProjects();
  const featuredArticles = getFeaturedArticles();

  return (
    <div>
      <h1>{profile.name}</h1>
      <p>{profile.bio}</p>
      {/* ... */}
    </div>
  );
};
```

---

## Content Guidelines

### DO

- ✅ Use TODO for unknown/missing information
- ✅ Keep descriptions factual and concise
- ✅ Use consistent date formats (YYYY-MM-DD or YYYY-MM)
- ✅ Include URLs for all external references
- ✅ Set `featured: true` for 3-5 best projects/articles
- ✅ Update `meta.lastUpdated` when making changes
- ✅ Use kebab-case for IDs (e.g., "since-ai", "aws-certified")

### DON'T

- ❌ Invent facts or dates
- ❌ Leave required fields empty (use "TODO" instead)
- ❌ Use inconsistent date formats
- ❌ Duplicate IDs across items
- ❌ Feature too many items (dilutes impact)
- ❌ Include sensitive information (passwords, API keys, etc.)

---

## Featured Content Strategy

### Homepage displays:
- **Projects**: Top 4 featured projects (`featured: true`)
- **Writing**: Top 3 featured articles (`featured: true`)

### Criteria for featuring:
- Recent (within last 1-2 years)
- Significant impact or scale
- Best represents your work
- Has public visibility/URL

---

## Adding New Content

### 1. Add to appropriate JSON file

```json
{
  "id": "unique-kebab-case-id",
  "title": "Your Title",
  // ... other required fields
  "featured": true  // if you want it on homepage
}
```

### 2. Update `meta.lastUpdated` in profile.json

```json
{
  "meta": {
    "lastUpdated": "2026-01-11"
  }
}
```

### 3. Build and verify

```bash
npm run build
npm run dev  # Check locally
```

---

## Data Flow

```
JSON Files → src/lib/content.js → Pages → Rendered Site
    ↓              ↓                  ↓
(Source of    (Utilities)       (Consumption)
  Truth)
```

All pages now consume data through `src/lib/content.js`, ensuring a single source of truth and making updates easy and consistent.
