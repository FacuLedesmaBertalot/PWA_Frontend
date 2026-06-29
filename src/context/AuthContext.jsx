import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    if (token) {
      fetch('https://pwa-backend-two.vercel.app/api/auth/me', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(res => res.ok ? res.json() : null)
      .then(data => {
        if (data && data.usuario) {
          setUsuario(data.usuario);
        }
      })
      .catch(err => console.error("Error al cargar los datos del usuario", err));
    }
  }, [token]);

  // Función auxiliar
  const iniciarSesion = (nuevoToken, datosUsuario) => {
    localStorage.setItem('token', nuevoToken);
    setToken(nuevoToken);
    setUsuario(datosUsuario);
  };


  const logout = async () => {
    try {
      if (token) {
        await fetch('https://pwa-backend-two.vercel.app/api/auth/logout', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
      }
    } catch (error) {
      console.error('Error al cerrar sesión en el servidor:', error);
    } finally {
      localStorage.removeItem('token');
      setToken(null);
      setUsuario(null);
    }
  };

  return (
    <AuthContext.Provider value={{ token, usuario, iniciarSesion, logout }}>
      {children}
    </AuthContext.Provider>
  );
};