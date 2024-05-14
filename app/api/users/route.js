import db from '../../libs/db';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import base64url from 'base64url';
import { Resend } from 'resend';
import  {EmailTemplate} from '../../components/EmailTemplate'
// import {EmailTemplate} from '@/app/components/EmailTemplate'

export async function POST(request) {
  try {
    //extract the credentials
    const { name, email, password, role } = await request.json();
    //Check if the user Already exists in the db
    const existingUser = await db.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      return NextResponse.json(
        {
          data: null,
          message: `User with this email ( ${email})  already exists in the Database`,
        },
        { status: 409 }
      );
    }
    // Encrypt the Password =>bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);
    // Generate new token for the user
    const rawToken = uuidv4();
    console.log(rawToken);
    const token = base64url.encode(rawToken);
    console.log(token);
    //Create the user
    const newUser = await db.user.create({
      data: {
        name,
        email,
        password,
        hashedPassword,
        role,
        verificationToken: token,
      },
    });
    console.log(newUser);
    // send verification email to user
    const resend = new Resend(process.env.RESEND_API_KEY);
    const userId = newUser.id;
    const redirectUrl = `login?token=${token}&id=${userId}`
    const sendMail = await resend.emails.send({
      from: 'Advent Capital <info@adventcapital-uganda.com>',
      to: email,
      subject: 'Account Verification',
      reply_to: 'adventcapital2023@gmail.com',
      react: EmailTemplate({name, redirectUrl}),
    })
    console.log(sendMail);
    return NextResponse.json(
      {
        data: newUser,
        message: 'User Created Successfully',
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: 'Server Error: Something went wrong',
      },
      { status: 500 }
    );
  }
}
export async function GET(request) {
  try {
    const users = await db.user.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return NextResponse.json(users);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: 'Failed to Fetch Users',
        error,
      },
      { status: 500 }
    );
  }
}
