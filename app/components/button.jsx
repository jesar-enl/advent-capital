'use client';

import { TiTick } from 'react-icons/ti';
import toast from 'react-hot-toast';
import { redirect } from 'next/navigation';
import { useState } from 'react';


const ApproveButton = ({ id }) => {
  const [loading, setLoading] = useState(false);

  const handleUpdateStatus = async () => {
    setLoading(true);

    try {
      const response = await fetch(`/api/application/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'APPROVED' }),
      });

      if (response.ok) {
        toast.success('Status updated successfully.');
        redirect('/accept-letter');
      }
    } catch (error) {
      toast.error('Error updating status');
      console.error('Error updating status:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleUpdateStatus}
      className="inline-flex items-center px-3 py-1 text-xl font-medium text-gray-900 bg-white border-t border-b border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-500 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:text-blue-500"
      disabled={loading}
    >
      <TiTick className="me-2 text-green-600 text-xl" />
      Approve
    </button>
  );
};

export default ApproveButton;