export function validateLogin(email, password, name = "") {
  if (!name.trim()) return "Name is required";
  if (!email.trim()) return "Email is required";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Enter a valid email";
  if (!password.trim()) return "Password is required";
  return null;
}

export function validateTask(title, priority) {
  if (!title || !title.trim()) return "Title is required";
  if (!priority || !priority.trim()) return "Priority is required";
  return null;
}

export function validateResource(title, category, url) {
  if (!title || !title.trim()) return "Title is required";
  if (!category || !category.trim()) return "Category is required";
  if (!url || !url.trim()) return "URL is required";
  return null;
}