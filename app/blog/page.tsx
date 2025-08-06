import { redirect } from 'next/navigation';

interface BlogProps {
  searchParams: Promise<{
    tag?: string;
    sort?: string;
  }>;
}

export default async function Blog({ searchParams }: BlogProps) {
  const { tag, sort } = await searchParams;

  // 블로그 페이지 접근 시 홈으로 리다이렉트 (쿼리 파라미터 유지)
  const params = new URLSearchParams();
  if (tag) params.set('tag', tag);
  if (sort) params.set('sort', sort);

  const redirectUrl = params.toString() ? `/?${params.toString()}` : '/';
  redirect(redirectUrl);
}
