import { NextResponse } from "next/server";
import db from "../../libs/db";

export async function POST(req) {
  try {
    const formdata = await req.json();

    const letter = await db.letter.create({
      data: {
        name: formdata.name,
        email: formdata.email,
        date: `${formdata.date}T00:00:00Z`,
        bustype: formdata.bustype,
        busLocation: formdata.busLocation,
        loanType: formdata.loanType,
        purpose: formdata.purpose,
        loanAmount: formdata.loanAmount,
        loanInterest: formdata.loanInterest,
        security: formdata.security,
        loanPeriod: formdata.loanPeriod,
      },
    });

    return NextResponse.json(letter, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: 500 });
  }
}
