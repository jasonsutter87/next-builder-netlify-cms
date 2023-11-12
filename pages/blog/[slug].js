// src/pages/blog/[slug].js
import React from 'react';
import { useRouter } from 'next/router';
import { getPostBySlug, getAllPosts } from '../../app/lib/api';
import ReactMarkdown from 'react-markdown';

const BlogPost = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>

      <main>
        <h1>{post.title}</h1>
        <p>{post.date}</p>
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </main>

    </div>
  );
};

export async function getStaticPaths() {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);

  return {
    props: {
      post,
    },
  };
}

export default BlogPost;
