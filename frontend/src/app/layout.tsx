import type {Metadata} from "next";
import "./globals.css";
import {cn} from "@/lib/utils";
import {Navbar} from "@/components/layout/navbar";
import {Footer} from "@/components/layout/footer";
import {ThemeProvider} from "@/components/layout/theme-provider";

export const metadata: Metadata = {
  title: "Pierre Lapolla",
  description: "Personal Website Tech Demo",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body className={cn("flex flex-col min-h-screen bg-background")}>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Navbar/>
      <main className="flex-1 flex flex-col justify-between w-full">
        {children}
      </main>
      <Footer/>
    </ThemeProvider>
    </body>
    </html>
  );
}
