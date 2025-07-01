import { getServerSession } from 'next-auth';
import { authConfig } from '@/auth/config';
import { Session } from 'next-auth';

export default async function DashboardPage() {
  const session = await getServerSession(authConfig) as Session | null;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      {session ? (
        <p className="text-green-600">Welcome, {session.user?.name}!</p>
      ) : (
        <p className="text-red-600">Access Denied</p>
      )}
    </div>
  );
}