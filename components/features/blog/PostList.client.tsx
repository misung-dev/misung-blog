'use client';

import { Post } from '@/types/blog';
import { PostCard } from './PostCard';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/posts');
      const data = await response.json();
      setPosts(data.posts);
    };

    fetchPosts();
  }, []);

  return (
    <div className="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2">
      {posts.map((post, index) => (
        <Link href={`/blog/${post.slug}`} key={post.id}>
          <PostCard key={post.id} post={post} isFirst={index === 0} />
        </Link>
      ))}
    </div>
  );
}
