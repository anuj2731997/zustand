
import {useThemeStore } from "../store/themeManager"
export default function ThemePreview() {

    const theme = useThemeStore((state) => state.theme);
    console.log("Current theme in ThemePreview:", theme);
    return (
        <div className="p-4 rounded-lg"
        >
            Theme Preview

            <div
                className="mt-4 p-4 rounded w-full h-32  flex flex-col justify-center items-center border-red-500 border-2" 
                style={{
                    backgroundColor: theme === "dark" ? "#333" : "#fff",
                    color: theme === "dark" ? "#fff" : "#000",
                }}
            >
                This is a preview of the {theme} theme.
            </div>
        </div>
    );
}