"use client";
import { User } from "@/app/types/user";
import { Mail, User as UserIcon } from "lucide-react";
import Link from "next/link";

export default function UserList({
  users,
  demoBaseUrl,
}: {
  users: User[];
  demoBaseUrl: string;
}) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 flex-wrap [&_svg]:text-foreground/70">
      {users?.map((user) => (
        <li key={user.username}>
          <div className="py-5 px-4 border border-foreground/30 rounded-xl">
            <p className="font-bold text-lg flex gap-2 items-center text-foreground">
              <UserIcon size={20} /> {user.username}{" "}
            </p>
            <p className="mb-5 flex gap-2 items-center">
              <Mail size={20} /> {user.email}{" "}
            </p>
            <Link
              href={`/${demoBaseUrl}/users/[slug]`}
              as={`/${demoBaseUrl}/users/${user.username}`}
              className="ml-auto w-fit rounded-lg border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10  px-4"
            >
              Ver más
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}
