import React from 'react';
import { AcceptLetter } from '../../../libs/letter';

export const metadata = {
  title: 'Loan Acceptance Letter',
  description: 'This is the acceptance letter from Advent Capital for your loan application.'
}

// TODO: design the full letter that is to be sent ot the client when the application is accepted.
export default async function Letter({ params: { id } }) {
  const acceptLetter = await AcceptLetter(id)
  console.log(acceptLetter);
  return (
    <div className="container">
      Accept letter
    </div>
  );
}
