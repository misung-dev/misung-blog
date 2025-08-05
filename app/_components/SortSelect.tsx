'use client';

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SortSelect() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const sort = searchParams.get('sort') || 'latest';

  const handleSortChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('sort', value);

    router.push(`/?${params.toString()}`);
  };

  return (
    <Select value={sort} defaultValue="latest" onValueChange={handleSortChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="정렬 방식 선택" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="latest">최신순</SelectItem>
        <SelectItem value="oldest">오래된순</SelectItem>
      </SelectContent>
    </Select>
  );
}
