'use client';
import { signIn, signOut } from 'next-auth/react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 p-8">
      <h1 className="text-4xl font-bold">Welcome to the Next.js 15 Auth App</h1>
      <button onClick={() => signIn('github')} className="bg-black text-white px-4 py-2 rounded">
        Sign in with GitHub
      </button>
      <button onClick={() => signOut()} className="bg-red-500 text-white px-4 py-2 rounded">
        Sign out
      </button>
    </div>
  );
}