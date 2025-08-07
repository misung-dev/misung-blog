import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';

export default function BlogPostLoading() {
  return (
    <div className="container mb-16">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_240px] md:gap-8">
        <section>
          {/* 블로그 헤더 스켈레톤 */}
          <div className="space-y-4">
            <div className="space-y-2">
              {/* 태그들 */}
              <div className="flex gap-2">
                <Skeleton className="h-6 w-16 rounded-full" />
                <Skeleton className="h-6 w-20 rounded-full" />
                <Skeleton className="h-6 w-14 rounded-full" />
              </div>
              {/* 제목 */}
              <Skeleton className="h-10 w-3/4" />
            </div>

            {/* 메타 정보 */}
            <div className="flex gap-4">
              <Skeleton className="h-5 w-24" />
            </div>
          </div>

          <Separator className="my-8" />

          {/* 블로그 본문 스켈레톤 */}
          <div className="space-y-4">
            {/* 첫 번째 문단 */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>

            {/* 두 번째 문단 */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>

            {/* 제목 스켈레톤 */}
            <Skeleton className="mt-8 h-8 w-1/2" />

            {/* 세 번째 문단 */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>

            {/* 코드 블록 스켈레톤 */}
            <Skeleton className="mt-6 h-32 w-full rounded-lg" />

            {/* 네 번째 문단 */}
            <div className="mt-6 space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
            </div>

            {/* 또 다른 제목 */}
            <Skeleton className="mt-8 h-8 w-2/3" />

            {/* 다섯 번째 문단 */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/5" />
            </div>
          </div>
        </section>

        {/* 사이드바 목차 스켈레톤 */}
        <aside className="relative">
          <div className="sticky top-[var(--sticky-top)]">
            <div className="bg-muted/60 space-y-4 rounded-lg p-6 backdrop-blur-sm">
              <Skeleton className="h-6 w-16" />
              <nav className="space-y-3">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="ml-4 h-4 w-28" />
                <Skeleton className="h-4 w-36" />
                <Skeleton className="ml-4 h-4 w-24" />
                <Skeleton className="h-4 w-30" />
                <Skeleton className="ml-4 h-4 w-26" />
              </nav>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
