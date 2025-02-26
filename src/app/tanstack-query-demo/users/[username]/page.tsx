import { MoveLeft } from "lucide-react";
import Link from "next/link";
import UserClientView from "@/components/UserClientView";
import QueryProvider from "@/app/providers/QueryProvider";

const Page = async (props: { params: Promise<{ username: string }> }) => {
  const { username } = await props.params;

  return (
    <>
      <div className="flex items-center gap-3 mb-10">
        <Link
          href="/tanstack-query-demo/users"
          className="p-2 hover:bg-foreground/5 rounded"
        >
          <MoveLeft />
        </Link>
        <h1 className="font-bold text-2xl">Perfil de {username}</h1>
      </div>
      <QueryProvider>
        <UserClientView username={username} />
      </QueryProvider>
    </>
  );
};

export default Page;
