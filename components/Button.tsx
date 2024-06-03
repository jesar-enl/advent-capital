import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';
import Link from 'next/link';

export function SignOutButton() {
  return (
    <Button variant="destructive" onClick={() => signOut()}>
      Log out
    </Button>
  );
}

export function SignInButton() {
  return (
    <Button asChild>
      <Link href="/login">Get Started</Link>
    </Button>
  );
}

