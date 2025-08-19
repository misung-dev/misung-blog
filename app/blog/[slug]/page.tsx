import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { getPostBySlug } from '@/lib/notion';
import { formatDate } from '@/lib/date';

import { UserRoundPen, CalendarDays } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSanitize from 'rehype-sanitize';
import rehypePrettyCode from 'rehype-pretty-code';
import withSlugs from 'rehype-slug';
import { compile } from '@mdx-js/mdx';
import withToc from '@stefanprobst/rehype-extract-toc';
import withTocExport from '@stefanprobst/rehype-extract-toc/mdx';

interface TocEntry {
  value: string;
  depth: number;
  id?: string;
  children?: Array<TocEntry>;
}

function TableOfContentsLink({ item }: { item: TocEntry }) {
  return (
    <div className="space-y-1">
      <Link
        href={`#${item.id}`}
        className="hover:text-foreground text-muted-foreground block font-medium transition-colors"
      >
        {item.value}
      </Link>
      {item.children && item.children.length > 0 && (
        <div className="space-y-2 pl-4">
          {item.children.map((subItem) => (
            <TableOfContentsLink key={subItem.id} item={subItem} />
          ))}
        </div>
      )}
    </div>
  );
}

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}
export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;
  const { post, markdown } = await getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  const { data } = await compile(markdown, {
    rehypePlugins: [
      withSlugs,
      rehypeSanitize,
      withToc,
      withTocExport,
      /** Optionally, provide a custom name for the export. */
      // [withTocExport, { name: 'toc' }],
    ],
  });

  return (
    <div className="mb-16 grid grid-cols-1 gap-4 md:grid-cols-[200px_1fr] md:gap-16">
      <aside className="relative md:block">
        <div className="sticky top-[var(--sticky-top)]">
          <div className="bg-muted/60 space-y-4 rounded-lg px-4 py-6 backdrop-blur-sm">
            <h3 className="text-base font-semibold">목차</h3>
            <nav className="space-y-3 text-sm">
              {data?.toc?.map((item) => (
                <TableOfContentsLink key={item.id} item={item} />
              ))}
            </nav>
          </div>
        </div>
      </aside>

      <section>
        {/* 블로그 헤더 */}
        <div className="space-y-4">
          <div className="flex gap-2">
            {post.tags?.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-primary/10 text-primary px-2 py-0.5 text-[13px] font-semibold"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-3xl font-bold md:text-4xl">{post.title}</h1>

          {/* 메타 정보 */}
          <div className="text-muted-foreground flex gap-4 text-sm">
            <div className="flex items-center gap-1">
              <UserRoundPen className="h-4 w-4" />
              <span>류미성</span>
            </div>
            <div className="flex items-center gap-1">
              <CalendarDays className="h-4 w-4" />
              <span>{formatDate(post.date)}</span>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* 블로그 본문 */}
        <div className="prose prose-slate dark:prose-invert prose-headings:scroll-mt-[var(--section-top-gap)] prose-hr:border-primary/20 max-w-none">
          <MDXRemote
            source={markdown}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [
                  withSlugs,
                  rehypeSanitize,
                  [
                    rehypePrettyCode,
                    {
                      theme: 'github-dark',
                      onVisitLine(node: { children: Array<{ type: string; value: string }> }) {
                        // Prevent lines from collapsing in `display: grid` mode
                        if (node.children.length === 0) {
                          node.children = [{ type: 'text', value: ' ' }];
                        }
                      },
                      onVisitHighlightedLine(node: { properties: { className: string[] } }) {
                        node.properties.className.push('line--highlighted');
                      },
                      onVisitHighlightedWord(node: { properties: { className: string[] } }) {
                        node.properties.className = ['word--highlighted'];
                      },
                    },
                  ],
                ],
              },
            }}
          />
        </div>
      </section>
    </div>
  );
}
