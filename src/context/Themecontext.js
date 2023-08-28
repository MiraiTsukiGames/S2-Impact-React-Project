import { createContext, useContext, useState } from "react";

// Create a new context for the theme
export const ThemeContext = createContext();

// ThemeContextProvider component to provide the theme context to its children
export const ThemeContextProvider = ({ children }) => {
  // State to track the current theme
  const [contextTheme, setContextTheme] = useState("Light");

  // Create an object with the values to be provided in the context
  const values = { contextTheme, setContextTheme };

  return (
    // Provide the values to the context
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

// Custom hook to easily access the theme context values
export const useThemeContext = () => {
  // Use the useContext hook to access the theme context
  const context = useContext(ThemeContext);
  return context;
};
