import { NextResponse } from 'next/server';
import db from '../../libs/db';

export async function POST(req) {
  try {
    const formdata = await req.json();

    const application = await db.application.create({
      data: {
        surname: formdata.surname,
        othername: formdata.othername,
        email: formdata.email,
        dob: `${formdata.dob}T00:00:00Z`,
        gender: formdata.gender,
        marital: formdata.marital,
        mobile: formdata.mobile,
        nin: formdata.nin,
        nindate: `${formdata.nindate}T00:00:00Z`,
        type: formdata.type,
        owner: formdata.owner,
        period: formdata.period,
        district: formdata.district,
        village: formdata.village,
        role: formdata.role,
        child: formdata.child,
        spoucename: formdata.spoucename,
        spoucemobile: formdata.spoucemobile,
        spouceemail: formdata.spouceemail,
        purpose: formdata.purpose,
        loantype: formdata.loantype,
        amount: formdata.amount,
        duration: formdata.duration,
        words: formdata.words,
        source: formdata.source,
        bustype: formdata.bustype,
        permonth: formdata.permonth,
        collateral: formdata.collateral,
        appname: formdata.appname,
        appdate: `${formdata.appdate}T00:00:00Z`,
      },
    });

    return NextResponse.json(application, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}

export async function GET(request) {
  try {
    const applications = await db.application.findMany();

    return NextResponse.json(applications);
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Failed to retrieve applications from database',
        error,
      },
      { status: 500 }
    );
  }
}
