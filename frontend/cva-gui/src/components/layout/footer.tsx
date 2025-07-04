import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="w-full border-t border-secondary bg-card py-6 mt-12">
            <div className="container mx-auto text-center text-sm text-muted-foreground">
                &copy; 2024 Designed and developed by
                <Link
                    target="_blank"
                    href="https://github.com/leoMirandaa"
                    className="text-primary transition-all border-primary hover:border-b-2 ml-1"
                >
                    Leo Miranda
                </Link>
            </div>
        </footer>
    );
};
