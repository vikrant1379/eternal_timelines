import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div>
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 Sanatan Timeline. Preserving the eternal threads of Indian civilization.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 