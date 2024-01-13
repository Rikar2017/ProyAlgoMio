import { createContext, useState } from "react";

export const ThemeContext = createContext();

// eslint-disable-next-line react/prop-types
export default function ThemeProvider({ children }) {
  const themeScheme = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  return <ThemeContext.Provider value={themeScheme}>{children}</ThemeContext.Provider>;
}
