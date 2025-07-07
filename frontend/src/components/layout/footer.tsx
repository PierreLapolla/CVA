import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="w-full border-t border-secondary bg-card py-6">
            <div className="container mx-auto text-center text-sm text-muted-foreground">
                &copy; 2025 Designed and developed by
                <Link
                    target="_blank"
                    href="https://fr.linkedin.com/in/pierrelapolla"
                    className="text-primary transition-all border-primary hover:border-b-2 ml-1"
                >
                    Pierre Lapolla
                </Link>
            </div>
        </footer>
    );
};
