export async function Loan(id) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const response = await fetch(`${baseUrl}/api/application/${id}`, {
    cache: 'no-store',
  });
  const application = await response.json();
  return application;
}
