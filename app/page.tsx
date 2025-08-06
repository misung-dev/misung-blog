import { getPublishedPosts, getTags } from '@/lib/notion';
import PostListSuspense from '@/components/features/blog/PostListSuspense';
import ProfileSection from './_components/ProfileSection';
import HeaderSection from './_components/HeaderSection';
import TagSectionClient from './_components/TagSection.client';
import TagSectionSkeleton from './_components/TagSectionSkeleton';
import PostListSkeleton from '../components/features/blog/PostListSkeleton';
import { Suspense } from 'react';

interface HomeProps {
  searchParams: Promise<{
    tag?: string;
    sort?: string;
  }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const { tag, sort } = await searchParams;
  const selectedTag = tag || '전체';
  const selectedSort = sort || 'latest';

  const tags = getTags();
  const postsPromise = getPublishedPosts({
    tag: selectedTag === '전체' ? undefined : selectedTag,
    sort: selectedSort,
    pageSize: 20,
  });

  return (
    <div className="container py-8">
      <div className="grid grid-cols-[180px_1fr_180px] gap-6">
        <aside>
          <Suspense fallback={<TagSectionSkeleton />}>
            <TagSectionClient tags={tags} selectedTag={selectedTag} />
          </Suspense>
        </aside>

        <div className="space-y-8">
          <HeaderSection selectedTag={selectedTag} />
          <Suspense fallback={<PostListSkeleton />}>
            <PostListSuspense postsPromise={postsPromise} />
          </Suspense>
        </div>

        <aside>
          <ProfileSection />
        </aside>
      </div>
    </div>
  );
}
