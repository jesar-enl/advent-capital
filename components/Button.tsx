'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { TiTick } from 'react-icons/ti';

export function AcceptButton() {
  const router = useRouter();
  return (
    <Button
      type="button"
      onClick={() => router.push('/accept-letter')}
      className="inline-flex items-center px-4 py-2 text-xl font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
    >
      <TiTick className="me-2 text-green-600 text-xl" />
      Approve
    </Button>
  );
}
