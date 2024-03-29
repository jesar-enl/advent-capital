export async function Loans(email, role) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  let url;

  if (role === 'admin') {
    url = `${baseUrl}/api/application`
  } else {
    url = `${baseUrl}/api/application?email=${email}`
  }
  const response = await fetch(url, {
    cache: 'no-store',
  });
  const applications = await response.json();
  console.log(applications)
  return applications;
}
