import { ReactNode } from 'react';
import SectionIndex from './components/SectionIndex';

interface AboutLayoutProps {
  children: ReactNode;
}

export default function AboutLayout({ children }: AboutLayoutProps) {
  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-[180px_1fr]">
        <aside className="md:sticky md:top-[var(--sticky-top)] md:h-fit">
          <SectionIndex />
        </aside>

        {/* 메인 콘텐츠 */}
        <main>{children}</main>
      </div>
    </div>
  );
}
