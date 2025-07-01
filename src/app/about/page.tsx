export const metadata = {
  title: 'About | My Next.js App',
  description: 'This page tells you about our project.',
};

export default function AboutPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-2">About</h1>
      <p>This is a sample app with Next.js 15, TypeScript, Tailwind, Auth, and Routing.</p>
    </div>
  );
}