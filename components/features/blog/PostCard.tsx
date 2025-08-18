'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Post } from '@/types/blog';
import { formatDate } from '@/lib/date';
import { Calendar } from 'lucide-react';
import Image from 'next/image';

interface PostCardProps {
  post: Post;
  isFirst?: boolean;
}

export function PostCard({ post, isFirst = false }: PostCardProps) {
  return (
    <Card className="group bg-card/50 hover:border-primary/20 flex h-full flex-col gap-0 overflow-hidden border py-0 backdrop-blur-sm transition-all duration-300">
      {post.coverImage && (
        <div className="relative aspect-[2/1] overflow-hidden">
          <div className="from-background/20 absolute inset-0 z-10 bg-gradient-to-t to-transparent" />
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={isFirst}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      <CardContent className="flex flex-1 flex-col justify-between gap-2 p-4 pt-[14px]">
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex flex-wrap gap-2">
            {post.tags?.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-primary/10 text-primary text-[13px] font-semibold transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <h2 className="group-hover:text-primary text-xl font-bold tracking-tight transition-colors">
            {post.title}
          </h2>
          {post.description && (
            <p className="text-muted-foreground line-clamp-2 text-sm leading-normal">
              {post.description}
            </p>
          )}
        </div>
        <div className="text-muted-foreground flex items-center gap-x-4 text-sm">
          {post.date && (
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              <time>{formatDate(post.date)}</time>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
