import { NextResponse } from 'next/server';
import db from '../../../libs/db';

export async function GET(request, {params:{id}}) {
  try {
    const letter = await db.letter.findUnique({
      where: {
        id: parseInt(id),
      }
    });

    return NextResponse.json(letter);
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Failed to retrieve letter from database',
        error,
      },
      { status: 500 }
    );
  }
}