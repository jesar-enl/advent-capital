import { Button } from '@/components/ui/button';
import { redirect } from 'next/navigation';
import { TiTick } from 'react-icons/ti';

export function AcceptButton({params: {id}}) {
  const handleUpdateStatus = async () => {
    try {
      const response = await fetch(`/api/application/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'APPROVED' }),
      });

      if (response.ok) {
        toast.success('Status updated successfully.');
        redirect('/accept-letter');
      } else {
        toast.error('Error updating status');
        console.error('Error updating status:', response.status);
      }
    } catch (error) {
      toast.error('Error updating status');
      console.error('Error updating status:', error);
    }
  };

  return (
    <Button
      type="button"
      onClick={redirect('/accept-letter')}
      className="inline-flex items-center px-4 py-2 text-xl font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
    >
      <TiTick className="me-2 text-green-600 text-xl" />
      Approve
    </Button>
  );
}
