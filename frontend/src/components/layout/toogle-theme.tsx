import {useTheme} from "next-themes";
import {Moon, Sun} from "lucide-react";

export const ToggleTheme = () => {
    const {theme, setTheme} = useTheme();
    return (
        <span
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="cursor-pointer flex items-center justify-center w-full h-full"
        >
            <Moon className="size-5 dark:hidden" />
            <Sun className="size-5 hidden dark:inline" />
            <span className="sr-only">Toggle theme</span>
        </span>
    );
};
