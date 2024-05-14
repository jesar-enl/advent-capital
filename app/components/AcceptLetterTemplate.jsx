import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import db from '../libs/db';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export default async function AcceptLetterTemplate({
  name,
  email,
  loanType,
  loanAmount,
  amountInWords,
  loanPeriod,
  loanInterest,
}) {
  const letterId = await db.letter.findUnique({
    where: {
      id: id,
    },
  });

  return (
    <Html>
      <Head />
      <Preview>Acceptance of your loan application!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>
            <Img
              src="adventcapital_logo.png"
              width="49"
              height="21"
              alt="Advent Capital"
            />
            <Hr style={hr} />
            <Text style={paragraph}>Hello {name},</Text>
            <Text style={paragraph}>{email},</Text>
            <Text style={paragraph}>
              Hope you are doing great. We are pleased to inform you that your
              loan application {loanType} has been accepted. Below are the
              details of your loan application acceptance:
            </Text>
            <Text style={paragraph}>
              Loan Amount: UGX {loanAmount}
              {amountInWords}
              Loan Period: {loanPeriod} working days/months. Loan Interest:{' '}
              {loanInterest}%
            </Text>
            <Hr style={hr} />
            <Text style={paragraph}>
              You are required to print out this letter so that you can have
              your guarantors to sign and consent to the terms and conditions of
              the loan. You are also required to have a copy of your National ID
              and a copy of your guarantors&#39; National IDs and their passport
              photos.
              <Link
                style={anchor}
                href={`${baseUrl}/accept-letter/${letterId}`}
              >
                <Button style={button}>Acceptance letter</Button>
              </Link>
            </Text>
            <Text style={paragraph}>
              Attach the copies as mentioned above and submit them, along with
              the acceptance letter scanned, and send them to
              adventcapital2023@gmail.com
            </Text>
            <Text style={paragraph}>— Advent Capital team</Text>
            <Hr style={hr} />
            <Text style={footer}>
              Advent Capital, Makerere - Kikoni A Adwori Road, near MZ Guest
              House.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};

const box = {
  padding: '0 48px',
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

const paragraph = {
  color: '#525f7f',

  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'left',
};

const anchor = {
  color: '#556cd6',
};

const button = {
  backgroundColor: '#656ee8',
  borderRadius: '5px',
  color: '#fff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center',
  display: 'block',
  width: '100%',
  padding: '10px',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  lineHeight: '16px',
};
