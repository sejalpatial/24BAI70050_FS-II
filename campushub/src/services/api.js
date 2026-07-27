const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function getPosts() {
  const response = await fetch(`${BASE_URL}/posts`);
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  const data = await response.json();
  return data.slice(0, 10);
}

export async function getUsers() {
  const response = await fetch(`${BASE_URL}/users`);
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return await response.json();
}