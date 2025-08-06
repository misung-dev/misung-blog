import { getTags } from '@/lib/notion';
import TagSection from './_components/TagSection';
import ProfileSection from './_components/ProfileSection';
import HeaderSection from './_components/HeaderSection';
import PostListSuspense from '@/components/features/blog/PostListSuspense';
import { Suspense } from 'react';
import TagSectionClient from './_components/TagSection.client';

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

  return (
    <div className="container py-8">
      <div className="grid grid-cols-[180px_1fr_180px] gap-6">
        <aside>
          <Suspense fallback={<div>Loading...</div>}>
            <TagSectionClient tags={tags} selectedTag={selectedTag} />
          </Suspense>
        </aside>

        <div className="space-y-8">
          <HeaderSection selectedTag={selectedTag} />
          {/* <PostList posts={posts} /> */}
          <Suspense fallback={<div>Loading...</div>}>
            <PostListSuspense selectedTag={selectedTag} selectedSort={selectedSort} />
          </Suspense>
        </div>

        <aside>
          <ProfileSection />
        </aside>
      </div>
    </div>
  );
}
