import { useEffect, useState } from "react";

function useDarkMode() {
    const [isDark, setIsDark] = useState(() => localStorage.getItem("theme"));

    useEffect(() => {
        if (isDark === "dark") {
            document.body.classList.add("dark-theme");
            localStorage.setItem("theme", "dark");
        }
        else {
            document.body.classList.remove("dark-theme");
            localStorage.setItem("theme", "light");
            
        }
    } , [isDark])
    
    return (
        <>
            <h2>{isDark === "dark" ? "Light" : "Dark"} Theme</h2>
            <button className="btn" onClick={() =>
                setIsDark(isDark => (isDark === "dark" ? "light" : "dark"))}>Change Theme</button>
            
        </>
    )
}

export default useDarkMode;