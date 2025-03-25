export const dynamic = "force-dynamic";
import { Suspense } from "react";
import UserList from "@/components/UserList";
import { ScrollText } from "lucide-react";
import Loading from "@/components/Loading";
import { BASE_API_URL } from "@/utilities/constants";

const Page = async () => {
  if (!BASE_API_URL) {
    return null;
  }
  const response = await fetch(`${BASE_API_URL}/api/users`);
  const users = await response.json();

  return (
    <>
      <div className="flex items-center gap-3 mb-10">
        <div className="p-2">
          <ScrollText />
        </div>
        <h1 className="font-bold text-2xl">Listado de usuarios</h1>
      </div>
      <Suspense fallback={<Loading />}>
        <UserList users={users} demoBaseUrl="api-routes-demo" />
      </Suspense>
    </>
  );
};

export default Page;
