const fetch = require('node-fetch');
export default async <T>(
  url: string,
  options: RequestInit = {}
): Promise<T> => {
  const response = await fetch(url, options);
  if (!response.ok) {
    console.log(response);
    throw new Error('Error while fetching');
  }
  const json = (await response.json()) as T;
  return json;
};
