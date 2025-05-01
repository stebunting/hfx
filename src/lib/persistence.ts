const key = "locale";

export function setStorage(value: string) {
  localStorage.setItem(key, value);
}

export function getStorage(): string | null {
  return localStorage.getItem(key);
}
