import { useThemeStore } from "../store/themeManager"; 

export default function ThemeToggleButton(){
    const toggleButton = useThemeStore((state)=>(state.toggleTheme));
    console.log("Toggle button rendered");


    return (
        <button className="px-4 py-2 bg-blue-500 text-white rounded mb-4" onClick={toggleButton}>Toggle Theme</button>  
    )
}