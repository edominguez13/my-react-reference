import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
 const [theme, setTheme] = useState("light");

 const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light")

 const value = { theme, toggleTheme };

 return (
   <ThemeContext.Provider
     value={value}
   >
     {children}
   </ThemeContext.Provider>
 );
};


export const useTheme = () => useContext(ThemeContext);
