export async function AcceptLetter(id) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const response = await fetch(`${baseUrl}/api/letter/${id}`, {
    cache: "no-store",
  });
  const letter = await response.json();
  return letter;
}
