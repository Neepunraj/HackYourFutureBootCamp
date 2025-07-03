"use client"
import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
    const [isDark, setIsDark] = useState(false)
    const toggleTheme = () => setIsDark(prev => !prev)
    return <ThemeContext.Provider value={{ isDark, setIsDark, toggleTheme }}>
        {children}
    </ThemeContext.Provider>
}
export const useTheme = () => useContext(ThemeContext)