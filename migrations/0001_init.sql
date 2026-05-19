-- Cloudflare D1 Database Initialization Schema
CREATE TABLE IF NOT EXISTS blogs (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  category TEXT,
  readTime TEXT,
  date TEXT,
  tags TEXT,
  slug TEXT UNIQUE NOT NULL,
  icon TEXT,
  isFeatured INTEGER DEFAULT 0
);

CREATE TABLE IF NOT EXISTS services (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  price TEXT,
  description TEXT,
  features TEXT,
  icon TEXT,
  visualTitle TEXT,
  visualDescription TEXT,
  reverseLayout INTEGER DEFAULT 0,
  "order" INTEGER DEFAULT 0
);
