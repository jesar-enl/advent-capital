import db from '../../../libs/db';
import { NextResponse } from 'next/server';

export async function GET(request, { params: { id } }) {
  try {
    const user = await db.user.findUnique({
      where: {
        id,
      },
    });
    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: 'Failed to Fetch User',
        error,
      },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params: { id } }) {
  try {
    const body = await request.json();
    const { image, name, email } = body;

    // Validate the input
    if (!image || !name || !email) {
      return NextResponse.json(
        { message: 'Missing fields: image, name, or email' },
        { status: 400 }
      );
    }

    const updatedUser = await db.user.update({
      where: { id },
      data: {
        image,
        name,
        email,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: 'Failed to Update User',
        error,
      },
      { status: 500 }
    );
  }
}
