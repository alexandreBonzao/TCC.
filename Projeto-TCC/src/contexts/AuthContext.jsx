// src/contexts/AuthContext.jsx
import React, { createContext, useState, useEffect, useContext } from "react";

// Criação do contexto
export const AuthContext = createContext();

// Hook personalizado para facilitar o acesso
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  // Estado inicial: tenta recuperar o usuário salvo no localStorage
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Sempre que o user mudar, salva (ou remove) do localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }


    
  }, [user]);

  // Função de login — espera um objeto com "name" e "token"
  function login(data) {
    setUser({ name: data.name, email: data.email, token: data.token });
  }

  // Função de logout — limpa o estado
  function logout() {
    setUser(null);
  }

  // Booleano que indica se o usuário está autenticado
  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
