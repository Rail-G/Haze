import React, { useState } from "react";

export const ThemeContext = React.createContext({theme: 'dark', toggleTheme: () => {}});
export default function ThemeProvider({children}: {children: React.ReactNode}) {
    const [theme, setTheme] = useState('dark');
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}