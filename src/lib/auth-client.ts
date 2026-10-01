/**
 * Client-side authentication helpers for storing JWT and attaching headers
 */

export function getAuthToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("in_token") || null;
}

export function getClientUser(): any | null {
  if (typeof window === "undefined") return null;
  const user = localStorage.getItem("in_user");
  try {
    return user ? JSON.parse(user) : null;
  } catch {
    return null;
  }
}

export function setClientAuth(token: string, user?: any): void {
  if (typeof window === "undefined") return;
  localStorage.setItem("in_token", token);
  if (user) {
    localStorage.setItem("in_user", JSON.stringify(user));
  }
}

export function clearClientAuth(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem("in_token");
  localStorage.removeItem("in_user");
}

export function isClientAuthenticated(): boolean {
  return Boolean(getAuthToken());
}

/**
 * Merges Authorization: Bearer <token> into given headers
 */
export function getAuthHeaders(customHeaders: Record<string, string> = {}): Record<string, string> {
  const token = getAuthToken();
  if (token) {
    return {
      ...customHeaders,
      Authorization: `Bearer ${token}`,
    };
  }
  return { ...customHeaders };
}
