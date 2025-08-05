import { Post } from '@/types/blog';
import { PostCard } from './PostCard';
import Link from 'next/link';

interface PostListProps {
  posts: Post[];
}

export default function PostList({ posts }: PostListProps) {
  return (
    <div className="grid gap-4">
      {posts.map((post, index) => (
        <Link href={`/blog/${post.slug}`} key={post.id}>
          <PostCard key={post.id} post={post} isFirst={index === 0} />
        </Link>
      ))}
    </div>
  );
}
