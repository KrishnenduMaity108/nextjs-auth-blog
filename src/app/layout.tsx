// app/layout.tsx
import Link from 'next/link';
import './globals.css'; // import global styles if you have them
import type { ReactNode } from 'react';

export const metadata = {
  title: 'My App',
  description: 'A simple Next.js 13+ app with shared layout',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="p-4 bg-gray-900 text-white flex justify-between items-center">
          <h1 className="text-xl font-bold">My App</h1>
          <nav className="space-x-4">
            <Link href="/about">About</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/admin">Admin</Link>
          </nav>
        </header>
        <main className="p-8">{children}</main>
        <footer className="p-4 text-center text-sm text-gray-500">
          &copy; 2025 My App. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
