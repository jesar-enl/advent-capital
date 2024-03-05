export async function getData(endpoint) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const res = await fetch(`${baseUrl}/api/${endpoint}`, {
      cache: 'no-store',
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Network Error:', error);
    return null;
  }
}
