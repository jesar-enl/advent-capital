export async function Loans(userId, role) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const response = await fetch(`${baseUrl}/api/application?userId=${userId}`, {
    cache: 'no-store',
  });
  if (role === 'admin') {
    return response.json();
  }

  return response.filter((loan) => loan.userId === userId);
}
