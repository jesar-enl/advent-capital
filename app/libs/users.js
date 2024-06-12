export async function Users() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  let url = `${baseUrl}/api/users`

  const response = await fetch(url, {
    cache: 'no-store',
  });

  const users = await response.json();
  console.log(users)
  
  return users;
}