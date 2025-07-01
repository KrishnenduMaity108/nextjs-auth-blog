'use client'; // must be client component

export default function Error({ error }: { error: Error }) {
  return (
    <div className="p-8 text-center text-red-600">
      <h1 className="text-3xl font-bold">Something went wrong</h1>
      <p>{error.message}</p>
    </div>
  );
}
