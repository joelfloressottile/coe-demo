"use client";

import { getUserAction } from "@/app/server-actions/actions";
import { useQuery } from "@tanstack/react-query";
import { Mail, Tags, MessageSquareText } from "lucide-react";
import Loading from "./Loading";

const UserClientView = ({ username }: { username: string }) => {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user", username],
    queryFn: () => getUserAction(username),
  });
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="py-5 px-4 border border-foreground/50 rounded-xl max-w-[30rem] mx-auto flex flex-col gap-4 [&_svg]:text-foreground/70">
          <p className="flex gap-2 items-center">
            {" "}
            <Mail size={20} />
            {user.email}
          </p>
          <p className="flex gap-2 items-center">
            <Tags size={20} />
            {user.role.join(" - ")}
          </p>
          <p className="flex gap-2 items-center">
            <MessageSquareText size={20} />
            {user.feedbacks?.length
              ? "Ha entregado feedback"
              : "No ha entregado feedback"}
          </p>
        </div>
      )}
    </div>
  );
};

export default UserClientView;
