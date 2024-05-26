import { createContext, useState } from 'react';

// Crear el contexto
export const GlobalStateContext = createContext();

// Crear el proveedor del contexto
export const GlobalStateProvider = ({ children }) => {
  const [tasks, setTasks] = useState(
    ["Tarea 1", "Tarea 2", "Tarea 3"]
  );
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <GlobalStateContext.Provider value={{ tasks, setTasks, isAuthenticated, setIsAuthenticated }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
