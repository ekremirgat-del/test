export async function getHealth() {
  const response = await fetch('/api/health');

  if (!response.ok) {
    throw new Error('Backend yanıt vermedi.');
  }

  return response.json();
}
