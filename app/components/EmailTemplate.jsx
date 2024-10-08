import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const EmailTemplate = ({ name, redirectUrl = '/login' }) => (
  <Html>
    <Head />
    <Preview>
      A fine-grained personal access token has been added to your account
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${baseUrl}/images/adventcapital_logo.png`}
          width="32"
          height="32"
          alt="Advent Capital logo"
        />

        <Text style={title}>
          <strong>@{name}</strong>, a personal access was created on your
          account.
        </Text>

        <Section style={section}>
          <Text style={text}>
            Hey <strong>{name}</strong>!
          </Text>
          <Text style={text}>
            We thank you for registering your account with us at Advent Capital.
            Please verify your account to ensure that your account is secure.
          </Text>

          <Link href={`${baseUrl}${redirectUrl}`} style={button}>
            Verify your Account
          </Link>
        </Section>
        <Text style={links}>
          <Link style={link}>Your security audit log</Link> ・{' '}
          <Link style={link}>Contact support</Link>
        </Text>

        <Text style={footer}>
          Advent Capital Ug. ・Makerere - Kikoni A, Adwori Road, Near MZ Guest
          House
        </Text>
      </Container>
    </Body>
  </Html>
);

export default EmailTemplate;

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  maxWidth: "480px",
  margin: "0 auto",
  padding: "20px 0 48px",
};

const title = {
  fontSize: "24px",
  lineHeight: 1.25,
};

const section = {
  padding: "24px",
  border: "solid 1px #dedede",
  borderRadius: "5px",
  textAlign: "center",
};

const text = {
  margin: "0 0 10px 0",
  textAlign: "left",
};

const button = {
  fontSize: "14px",
  backgroundColor: "#28a745",
  color: "#fff",
  lineHeight: 1.5,
  borderRadius: "0.5em",
  padding: "12px 24px",
};

const links = {
  textAlign: "center",
};

const link = {
  color: "#0366d6",
  fontSize: "12px",
};

const footer = {
  color: "#6a737d",
  fontSize: "12px",
  textAlign: "center",
  marginTop: "60px",
};
