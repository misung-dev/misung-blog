'use client';

import Link from 'next/link';
import { PostCard } from '@/components/features/blog/PostCard';
import { GetPublishedPostsResponse } from '@/lib/notion';
import { useInfiniteScroll } from '@/lib/hooks/useInfiniteScroll';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { use } from 'react';

interface PostListProps {
  postsPromise: Promise<GetPublishedPostsResponse>;
}

export default function PostList({ postsPromise }: PostListProps) {
  const initialData = use(postsPromise);
  const searchParams = useSearchParams();
  const tag = searchParams.get('tag');
  const sort = searchParams.get('sort');

  const fetchPosts = async ({ pageParam }: { pageParam: string | undefined }) => {
    const params = new URLSearchParams();
    if (tag) params.set('tag', tag);
    if (sort) params.set('sort', sort);
    if (pageParam) params.set('startCursor', pageParam);

    const response = await fetch(`/api/posts?${params.toString()}`);
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    return response.json();
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['posts', tag, sort],
    queryFn: fetchPosts,
    initialPageParam: undefined,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    initialData: {
      pages: [initialData],
      pageParams: [undefined],
    },
  });

  const loadMoreRef = useInfiniteScroll({
    hasNextPage: hasNextPage ?? false,
    isFetchingNextPage,
    fetchNextPage,
    rootMargin: '200px',
  });

  const allPosts = data?.pages.flatMap((page) => page.posts) ?? [];

  return (
    <div className="space-y-6">
      <div className="grid auto-rows-fr grid-cols-1 gap-4 lg:grid-cols-2">
        {allPosts.map((post, index) => (
          <Link href={`/blog/${post.slug}`} key={post.id}>
            <PostCard post={post} isFirst={index === 0} />
          </Link>
        ))}
      </div>

      <div ref={loadMoreRef} className="flex h-10 items-center justify-center">
        {isFetchingNextPage && (
          <div className="text-muted-foreground text-sm">게시글을 불러오는 중...</div>
        )}
        {!hasNextPage && allPosts.length > 0 && (
          <div className="text-muted-foreground text-sm">모든 게시글을 확인했어요 👋</div>
        )}
      </div>
    </div>
  );
}
