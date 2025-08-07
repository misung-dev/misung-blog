'use client'; // Error boundaries must be Client Components

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-md flex-col items-center gap-4 text-center">
        <Image src="/images/500.png" alt="500" width={150} height={150} />
        <h1 className="text-2xl font-semibold tracking-tight">오류가 발생했습니다 (500)</h1>
        <p className="text-muted-foreground">오류가 발생했습니다. 잠시 후 다시 시도해주세요.</p>
        <Button onClick={() => reset()} className="mt-4">
          다시 시도
        </Button>
      </div>
    </div>
  );
}
