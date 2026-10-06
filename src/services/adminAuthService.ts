/**
 * Admin Authentication Service
 * Manages secure token-based communication with the Express.js backend.
 * Passwords are never hard-coded in frontend code and are securely hashed on the server.
 */

export interface AdminUserSession {
  id: string;
  username: string;
  email: string;
  name: string;
  role: string;
}

const TOKEN_KEY = 'smartreview_admin_token_v1';
const ADMIN_USER_KEY = 'smartreview_admin_user_v1';

/**
 * Returns current admin session token from storage if present.
 */
export function getAdminToken(): string | null {
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch {
    return null;
  }
}

/**
 * Returns cached admin user details.
 */
export function getAdminUser(): AdminUserSession | null {
  try {
    const raw = localStorage.getItem(ADMIN_USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

/**
 * Logs in administrator against the backend API.
 */
export async function loginAdminApi(identifier: string, password: string): Promise<{
  success: boolean;
  token?: string;
  admin?: AdminUserSession;
  error?: string;
}> {
  try {
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ identifier, password }),
    });

    const data = await res.json();

    if (!res.ok || !data.success) {
      return {
        success: false,
        error: data.error || 'Authentication failed. Please check your credentials.',
      };
    }

    // Store token and user metadata in localStorage
    if (data.token) {
      localStorage.setItem(TOKEN_KEY, data.token);
    }
    if (data.admin) {
      localStorage.setItem(ADMIN_USER_KEY, JSON.stringify(data.admin));
    }

    return {
      success: true,
      token: data.token,
      admin: data.admin,
    };
  } catch (err: any) {
    console.error('Error contacting admin login API:', err);
    return {
      success: false,
      error: 'Network error or backend unreachable. Please try again.',
    };
  }
}

/**
 * Verifies current token validity with the backend.
 */
export async function verifyAdminSessionApi(): Promise<boolean> {
  const token = getAdminToken();
  if (!token) return false;

  try {
    const res = await fetch('/api/admin/verify', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.ok) {
      const data = await res.json();
      if (data.valid && data.admin) {
        localStorage.setItem(ADMIN_USER_KEY, JSON.stringify(data.admin));
        return true;
      }
    }

    // Invalid or expired
    clearAdminSession();
    return false;
  } catch (err) {
    console.warn('Session verification notice:', err);
    // If server is offline, trust valid token format temporarily
    return Boolean(token);
  }
}

/**
 * Logs out administrator, invalidates backend token, and cleans local storage.
 */
export async function logoutAdminApi(): Promise<void> {
  const token = getAdminToken();
  if (token) {
    try {
      await fetch('/api/admin/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ token }),
      });
    } catch (err) {
      console.warn('Backend logout notice:', err);
    }
  }

  clearAdminSession();
}

/**
 * Clears local credentials.
 */
export function clearAdminSession(): void {
  try {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(ADMIN_USER_KEY);
  } catch {
    // Ignore storage errors
  }
}
