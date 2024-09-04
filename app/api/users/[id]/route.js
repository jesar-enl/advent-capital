import { NextResponse } from 'next/server';
import db from '../../../libs/db';

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

export async function PATCH(request, { params: { id } }) {
  try {
    const body = await request.json();

    // Validate the input
    if (!body || Object.keys(body).length === 0) {
    return NextResponse.json(
      { message: 'No updates provided' },
      { status: 400 }
    );
  }

    const updatedUser = await db.user.update({
      where: { id },
      data: body,
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
