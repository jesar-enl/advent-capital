import { NextResponse } from 'next/server';
import db from '../../../libs/db';

export async function GET(request, {params:{id}}) {
  try {
    const application = await db.application.findUnique({
      where: {
        id: parseInt(id),
      }
    });

    return NextResponse.json(application);
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Failed to retrieve application from database',
        error,
      },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params: { id } }) {
  try {
    const updateStatus = await db.application.update({
      where: {
        id: parseInt(id),
      },
      data: {
        status: 'APPROVED', // Update the status to APPROVED
      },
    });

    return NextResponse.json(updateStatus);
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Failed to update application in database',
        error,
      },
      { status: 500 }
    );
  }
}