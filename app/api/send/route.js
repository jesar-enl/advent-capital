import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import AcceptLetterTemplate from '../../components/AcceptLetterTemplate';
import db from '../../libs/db';
import * as z from 'zod';

const letterSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: 'Name must be at least 3 characters long',
    })
    .max(50, {
      message: 'Name must be at most 50 characters long',
    }),
  email: z.string().email('Invalid email').min(2, 'Email is required'),
  date: z.string(),
  bustype: z.string(),
  busLocation: z.string(),
  loanType: z.string(),
  loanInterest: z.string(),
  purpose: z.string(),
  loanAmount: z.string(),
  amountInWords: z.string(),
  loanPeriod: z.string(),
  security: z
    .string()
    .min(10, {
      message: 'Security detaitls must be at least 10 characters.',
    })
    .max(160, {
      message: 'Security details must not be longer than 30 characters.',
    }),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const formdata = await request.json();
    const { name, email, date, bustype, busLocation, loanType, loanAmount, loanPeriod, loanInterest, amountInWords } = letterSchema.parse(formdata);

    const letter = await db.letter.create({
      data: {
        name,
        email,
        date: `${date}T00:00:00Z`,
        bustype,
        busLocation,
        loanType,
        purpose,
        loanAmount,
        loanInterest,
        security,
      },
    });

    console.log(letter);

    const emailData = await resend.emails.send({
      from: 'Advent Capital <info@adventcapital-uganda.com>',
      to: email,
      subject: 'Loan Appication Accepted',
      reply_to: 'adventcapital2023@gmail.com',
      react: AcceptLetterTemplate({
        name: name,
        email: email,
        loanType,
        loanAmount,
        loanPeriod,
        loanInterest,
        amountInWords,
      }),
    });

    const response = { data: letter, emailData };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: 500 });
  }
}
