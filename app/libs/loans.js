export async function Loans() {
  const response = await fetch('http://localhost:3000/api/application', {
    cache: 'no-store',
  });
  const applications = await response.json();
  return applications;
}
