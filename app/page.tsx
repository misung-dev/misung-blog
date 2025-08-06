import PostList from '@/components/features/blog/PostList';
import { getPublishedPosts, getTags } from '@/lib/notion';
import TagSection from './_components/TagSection';
import ProfileSection from './_components/ProfileSection';
import HeaderSection from './_components/HeaderSection';

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

  const [posts, tags] = await Promise.all([
    getPublishedPosts(selectedTag, selectedSort),
    getTags(),
  ]);

  return (
    <div className="container py-8">
      <div className="grid grid-cols-[180px_1fr_180px] gap-6">
        <aside>
          <TagSection tags={tags} selectedTag={selectedTag} />
        </aside>

        <div className="space-y-8">
          <HeaderSection selectedTag={selectedTag} />
          <PostList posts={posts} />
        </div>

        <aside>
          <ProfileSection />
        </aside>
      </div>
    </div>
  );
}
