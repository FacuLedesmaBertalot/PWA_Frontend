const BASE_URL = import.meta.env.VITE_API_URL;

const buildSignupUrl = () => {
  if (!BASE_URL) {
    return null;
  }
  return `${BASE_URL}/auth/register`;
};

const buildLoginUrl = () => {
  if (!BASE_URL) {
    return null;
  }
  return `${BASE_URL}/auth/login`;
};

export const registerUser = async ({ nombre, apellido, email, password }) => {
  const url = buildSignupUrl();

  if (!url) {
    return {
      status: null,
      data: null,
      error: 'La URL de la API no está configurada. Verifica VITE_API_URL.',
    };
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nombre, apellido, email, password }),
    });

    const contentType = response.headers.get('content-type') || '';
    const responseBody = contentType.includes('application/json') ? await response.json() : null;

    if (response.ok) {
      return { status: response.status, data: responseBody, error: null };
    }

    const errorMessage =
      responseBody?.message || responseBody?.error || `Error de backend: ${response.status}`;

    return { status: response.status, data: null, error: errorMessage };
  } catch {
    return {
      status: null,
      data: null,
      error: 'Error de conexión con el backend. Intenta nuevamente.',
    };
  }
};


export const loginUser = async ({ email, password }) => {
  const url = buildLoginUrl();

  if (!url) {
    return {
      status: null,
      data: null,
      error: 'La URL de la API no está configurada. Verifica VITE_API_URL.',
    };
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const contentType = response.headers.get('content-type') || '';
    const responseBody = contentType.includes('application/json') ? await response.json() : null;

    if (response.ok) {
      return { status: response.status, data: responseBody, error: null };
    }

    const errorMessage =
      responseBody?.message || responseBody?.error || `Error de backend: ${response.status}`;

    return { status: response.status, data: null, error: errorMessage };
  } catch {
    return {
      status: null,
      data: null,
      error: 'Error de conexión con el backend. Intenta nuevamente.',
    };
  }
};