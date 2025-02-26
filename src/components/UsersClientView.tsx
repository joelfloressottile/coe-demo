"use client";

import { ScrollText } from "lucide-react";
import Loading from "@/components/Loading";
import UserList from "@/components/UserList";
import { User } from "@/app/types/user";
import { useQuery } from "@tanstack/react-query";
import { getUsersAction } from "@/app/server-actions/actions";

export const UsersClientView = () => {
  const { data: users , isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getUsersAction,
  });
  return (
    <>
      <div className="flex items-center gap-3 mb-10">
        <div className="p-2">
          <ScrollText />
        </div>
        <h1 className="font-bold text-2xl">Listado de usuarios</h1>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <UserList users={users as User[]} demoBaseUrl="tanstack-query-demo" />
      )}
    </>
  );
};
