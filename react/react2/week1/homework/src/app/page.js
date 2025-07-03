"use client"
import { useTheme } from "@/context/themeContext";

export default function Home() {
  const { isDark, toggleTheme } = useTheme()
  return (
    <div className={`w-full min-h-screen ${isDark ? "bg-black text-white" : "bg-white"}`}>
      <h1>Hello, this is theme toggling demo in root page  </h1>
      <button onClick={toggleTheme} className={`${isDark ? "text-white " : ""} border rounded p-2`}>Toggle Theme</button>

    </div>
  );
}
