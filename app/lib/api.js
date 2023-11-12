// src/lib/api.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export function getAllPosts() {
  const allPosts = fs.readdirSync(path.join(contentDirectory, 'blog'));

  return allPosts.map((slug) => getPostBySlug(slug.replace(/\.md$/, '')));
}

export function getPostBySlug(slug) {
  const fileContent = fs.readFileSync(
    path.join(contentDirectory, 'blog', `${slug}.md`),
    'utf-8'
  );
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title,
    date: data.date.toISOString(),
    body: content,
  };
}
