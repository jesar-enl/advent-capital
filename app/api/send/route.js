import { Resend } from 'resend';
import AcceptLetterTemplate from '../../components/AcceptLetterTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const {
    name,
    email,
    loanType,
    loanAmount,
    amountInWords,
    loanPeriod,
    loanInterest,
  } = await request.json();
  try {
    const data = await resend.emails.send({
      from: 'Advent Capital <info@adventcapital-uganda.com>',
      to: email,
      subject: 'Loan Appication Accepted',
      reply_to: 'adventcapital2023@gmail.com',
      react: AcceptLetterTemplate({
        name,
        email,
        loanType,
        loanAmount,
        amountInWords,
        loanPeriod,
        loanInterest,
      }),
    });
    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
