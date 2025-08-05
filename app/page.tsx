import { PostCard } from '@/components/features/blog/PostCard';
import { getPublishedPosts, getTags } from '@/lib/notion';
import TagSection from './_components/TagSection';
import ProfileSection from './_components/ProfileSection';
import SortSelect from './_components/SortSelect';
import Link from 'next/link';

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
      <div className="grid grid-cols-[200px_1fr_220px] gap-6">
        <aside>
          <TagSection tags={tags} selectedTag={selectedTag} />
        </aside>

        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">
              {selectedTag === '전체' ? '블로그 목록' : `#${selectedTag} 관련 글`}
            </h2>
            <SortSelect />
          </div>

          <div className="grid gap-4">
            {posts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.id}>
                <PostCard key={post.id} post={post} />
              </Link>
            ))}
          </div>
        </div>

        <aside>
          <ProfileSection />
        </aside>
      </div>
    </div>
  );
}
