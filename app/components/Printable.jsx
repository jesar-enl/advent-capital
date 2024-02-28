"use client"
import PreviewLoan from '@/app/components/PreviewLoan'
import { useRef } from 'react';

const Printable = ({app}) => {
  const printForm = useRef();
  return (
    <div ref={printForm}>
      <PreviewLoan data={app} />
      </div>
  )
}

export default Printable;