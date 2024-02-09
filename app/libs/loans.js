export async function Loans(userId) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const response = await fetch(`${baseUrl}/api/application?userId=${userId}`, {
    cache: 'no-store',
  });
  const applications = await response.json();
  return applications;
}
