export async function Loan(id) {
  const response = await fetch(`http://localhost:3000/api/application/${id}`, {
    cache: 'no-store',
  });
  const application = await response.json();
  return application;
}
