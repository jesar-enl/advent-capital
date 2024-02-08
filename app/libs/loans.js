export async function Loans() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const response = await fetch(`${baseUrl}/api/application`, {
    cache: 'no-store',
  });
  const applications = await response.json();
  return applications;
}
