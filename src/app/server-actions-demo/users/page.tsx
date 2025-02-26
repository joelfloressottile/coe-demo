import { getUsersAction } from "@/app/server-actions/actions";
import { User } from "@/app/types/user";
import { InfoBlock } from "@/components/InfoBlock";
import Loading from "@/components/Loading";
import UserList from "@/components/UserList";
import { ScrollText } from "lucide-react";
import { Suspense } from "react";


const Page = async () => {
  const users = await getUsersAction() as User[];
  return (
    <>
      <div className="flex items-center gap-3 mb-10">
        <div className="p-2">
          <ScrollText />
        </div>
        <h1 className="font-bold text-2xl">Listado de usuarios</h1>
      </div>
      <Suspense fallback={<Loading />}>
        <UserList users={users} demoBaseUrl="server-actions-demo" />
      </Suspense>
    </>
  );
};

export default Page;
