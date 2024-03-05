import { NextResponse } from 'next/server';
import db from "../../../libs/db";


export async function PUT(request) {
  try{
    const {token, id} = await request.json();
    const user = await db.user.findUnique({
      where: {id}
    });

    if(!user) {
      return NextResponse.json({
        message: 'Failed to verify your account!',
        data: null,
      }, {status: 500})
    }

    const updateUser = await db.user.update(
      where: { id },
      data: {emailVerified: true}
    )

    return NextResponse.json(updatedUser);
  } catch(error){
    return NextResponse.json({
      message: 'Failed to update user',
      error
    }, {status: 500})
  }
}