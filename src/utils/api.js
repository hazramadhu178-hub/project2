export async function postApi(path, data) {
  let response;

  try {
    response = await fetch(`/api/${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error('Could not connect to the server. Start it with npm run server.');
    }
    throw error;
  }

  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message || `Request failed (${response.status}).`);
  }

  return result;
}
