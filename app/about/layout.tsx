import { ReactNode } from 'react';
import { User, Code2, Briefcase, Link } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface AboutLayoutProps {
  children: ReactNode;
}

export default function AboutLayout({ children }: AboutLayoutProps) {
  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[200px_1fr]">
        <aside className="md:sticky md:top-[var(--sticky-top)] md:h-fit">
          <Card>
            <CardHeader className="gap-0 px-4">
              <CardTitle>목차</CardTitle>
            </CardHeader>
            <CardContent className="px-4">
              <div className="flex flex-col gap-2">
                <a href="#intro">
                  <div className="text-muted-foreground hover:bg-muted-foreground/10 flex items-center gap-2 rounded-md p-1.5 text-sm transition-colors">
                    <User className="h-4 w-4" />
                    <span>소개</span>
                  </div>
                </a>
                <a href="#links">
                  <div className="text-muted-foreground hover:bg-muted-foreground/10 flex items-center gap-2 rounded-md p-1.5 text-sm transition-colors">
                    <Link className="h-4 w-4" />
                    <span>링크</span>
                  </div>
                </a>
                <a href="#skills">
                  <div className="text-muted-foreground hover:bg-muted-foreground/10 flex items-center gap-2 rounded-md p-1.5 text-sm transition-colors">
                    <Code2 className="h-4 w-4" />
                    <span>기술 스택</span>
                  </div>
                </a>
                <a href="#projects">
                  <div className="text-muted-foreground hover:bg-muted-foreground/10 flex items-center gap-2 rounded-md p-1.5 text-sm transition-colors">
                    <Briefcase className="h-4 w-4" />
                    <span>프로젝트</span>
                  </div>
                </a>
              </div>
            </CardContent>
          </Card>
        </aside>

        {/* 메인 콘텐츠 */}
        <main>{children}</main>
      </div>
    </div>
  );
}
