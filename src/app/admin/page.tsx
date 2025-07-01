import { getServerSession } from "next-auth";
import { authConfig } from "@/auth/config";
import {redirect} from "next/navigation"
import { Session } from 'next-auth';

export default async function AdminPage() {
  const session: Session | null = await getServerSession   (authConfig);
  const isAdmin = session?.user?.email === process.env.ADMIN_EMAIL;

  if(!isAdmin){
    redirect('/not-authorized');
  }

  return(
    <div className="p-8">
      <h1 className="text-3xl font-bold text-red-600">Admin Dashboard</h1>
      <p>Welcome, admin: {session?.user?.name}</p>
    </div>
  )
}