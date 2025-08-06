import PostList from '@/components/features/blog/PostList';
import { getTags } from '@/lib/notion';
import TagSection from './_components/TagSection';
import ProfileSection from './_components/ProfileSection';
import HeaderSection from './_components/HeaderSection';
import PostListClient from '@/components/features/blog/PostList.client';

interface HomeProps {
  searchParams: Promise<{
    tag?: string;
    sort?: string;
  }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const { tag, sort } = await searchParams;
  const selectedTag = tag || '전체';
  // const selectedSort = sort || 'latest';
  // const [tags] = await Promise.all([getPublishedPosts(selectedTag, selectedSort), getTags()]);

  // const [posts, tags] = await Promise.all([
  //   getPublishedPosts(selectedTag, selectedSort),
  //   getTags(),
  // ]);

  return (
    <div className="container py-8">
      <div className="grid grid-cols-[180px_1fr_180px] gap-6">
        <aside>{/* <TagSection tags={tags} selectedTag={selectedTag} /> */}</aside>

        <div className="space-y-8">
          <PostListClient />
        </div>

        <aside>
          <ProfileSection />
        </aside>
      </div>
    </div>
  );
}
