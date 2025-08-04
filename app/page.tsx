import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import Link from 'next/link';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const mockTags = [
  { name: '전체', count: 20 },
  { name: 'HTML', count: 10 },
  { name: 'CSS', count: 5 },
  { name: 'JavaScript', count: 3 },
  { name: 'React', count: 3 },
  { name: 'Next.js', count: 3 },
];

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/misung-dev',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/misungdev',
  },
  {
    icon: Mail,
    href: 'mailto:misung.dev@gmail.com',
  },
  {
    icon: Instagram,
    href: 'https://www.instagram.com/ryumnii',
  },
];

export default function Home() {
  return (
    <div className="container py-8">
      <div className="grid grid-cols-[200px_1fr_220px] gap-6">
        {/* 좌측 사이드바 */}
        <aside>
          <Card>
            <CardHeader>
              <CardTitle>태그 목록</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-3">
                {mockTags.map((tag) => (
                  <Link href={`?tag=${tag.name}`} key={tag.name}>
                    <div className="hover:bg-muted-foreground/10 text-muted-foreground flex items-center justify-between rounded-md p-1.5 text-sm transition-colors">
                      <span>{tag.name}</span>
                      <span>{tag.count}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </aside>
        <div className="space-y-8">
          {/* 섹션 제목 */}
          <h2 className="text-3xl font-bold tracking-tight">블로그 목록</h2>

          {/* 블로그 카드 그리드 */}
          <div className="grid gap-4">
            {/* 블로그 카드 반복 */}
            {[1, 2, 3].map((i) => (
              <Link href={`/blog/${i}`} key={i}>
                <Card key={i}>
                  <CardHeader>
                    <CardTitle>블로그 제목 {i}</CardTitle>
                    <CardDescription>
                      이것은 블로그 포스트에 대한 간단한 설명입니다. 여러 줄의 텍스트가 있을 수
                      있습니다.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* 우측 사이드바 */}
        <aside>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex justify-center">
                  <div className="bg-muted rounded-full p-2">
                    <div className="h-36 w-36 overflow-hidden rounded-full">
                      <Image
                        src="/images/profile-light.png"
                        alt="프로필 이미지"
                        width={144}
                        height={144}
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-lg font-bold">류미성</h3>
                  <p className="text-primary text-sm">Frontend Developer</p>
                </div>

                <div className="flex justify-center gap-2">
                  {socialLinks.map((item, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className="bg-primary/10"
                      size="icon"
                      asChild
                    >
                      <a href={item.href} target="_blank" rel="noopener noreferrer">
                        <item.icon className="h-4 w-4" />
                      </a>
                    </Button>
                  ))}
                </div>

                <p className="bg-primary/10 rounded p-2 text-center text-sm">Keep Coding 🛼</p>
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
