import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { ThemeProvider } from "@/contexts/ThemeContext";

export const metadata: Metadata = {
  title: "Sanatan Timeline - Preserving Indian Civilization",
  description: "Explore the rich tapestry of Indian civilization through an interactive timeline spanning thousands of years. From ancient scriptures to modern reforms, discover the eternal threads that connect our past to the present.",
  keywords: "Indian history, Sanatan Dharma, timeline, civilization, culture, philosophy, scriptures",
  authors: [{ name: "Vikrant Chaudhary" }],
  openGraph: {
    title: "Sanatan Timeline - Preserving Indian Civilization",
    description: "Explore the rich tapestry of Indian civilization through an interactive timeline spanning thousands of years.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning={true}>
        <ThemeProvider>
          <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <footer className="bg-gray-950 text-white py-8">
              <div className="text-center">
                <p className="text-gray-400">
                  © 2024 Sanatan Timeline. Preserving the eternal threads of Indian civilization.
                </p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
