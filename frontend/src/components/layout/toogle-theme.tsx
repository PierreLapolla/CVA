import {useTheme} from "next-themes";
import {Moon, Sun} from "lucide-react";

export const ToggleTheme = () => {
    const {theme, setTheme} = useTheme();
    return (
        <span
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="cursor-pointer flex items-center justify-center w-full h-full group"
        >
            <Moon className="size-5 dark:hidden transition-colors group-hover:text-primary" />
            <Sun className="size-5 hidden dark:inline transition-colors group-hover:text-primary" />
            <span className="sr-only">Toggle theme</span>
        </span>
    );
};
