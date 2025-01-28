import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { SideNav } from "@/components/SideNav";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen">
            <SideNav />
            <div className="flex-1 pl-16">
              <header className="flex justify-between items-center p-4 border-b border-border">
                <h1 className="text-2xl font-bold text-purple-600">
                  HireReady
                </h1>
                <ThemeToggle />
              </header>
              <main className="h-[calc(100vh-65px)] overflow-y-auto">
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
