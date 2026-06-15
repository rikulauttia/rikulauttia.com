# Content Model

Content is data-driven. JSON files in `src/content/` are the single source of
truth, consumed through `src/lib/content.js`.

```
src/content/
├── profile.json   # Name, intro, about text, focus areas, education, links
├── roles.json     # Selected work list
├── writing.json   # Articles
└── SCHEMA.md      # This file
```

## profile.json

```json
{
  "personal": {
    "name": "string",
    "email": "string",
    "intro": "string (homepage tagline under the name)",
    "description": "string (neutral meta description / Person schema)"
  },
  "about": ["string (about paragraph)"],
  "focusAreas": ["string"],
  "education": [
    {
      "field": "string",
      "institution": "string",
      "url": "string"
    }
  ],
  "social": [{ "platform": "string", "url": "string" }]
}
```

Education is stored without a degree label so an in-progress program is not
presented as a completed degree.

## roles.json — Selected work

Ordered list; Teleste first as the primary engineering employment.

```json
{
  "roles": [
    {
      "id": "string (kebab-case)",
      "name": "string (organization)",
      "area": "string (concise work area)",
      "description": "string (one short factual sentence)",
      "url": "string (external link)"
    }
  ]
}
```

No personal job titles are stored here, and the list avoids calculated
durations. Use a neutral work area instead of a title.

## writing.json

```json
{
  "articles": [
    {
      "id": "string (kebab-case)",
      "title": "string",
      "slug": "string (URL-friendly)",
      "url": "string (source article URL)",
      "platform": "string",
      "publishedDate": "YYYY-MM-DD | TODO",
      "featured": "boolean (homepage shows up to 3)",
      "category": "string",
      "tags": ["string"]
    }
  ]
}
```

## Guidelines

- Keep descriptions factual and concise; do not invent facts, dates, or titles.
- Use `TODO` for unknown values; the article template hides missing dates and
  never fabricates summaries.
- Use kebab-case, unique IDs.
- Mark up to three articles `featured: true` for the homepage.
