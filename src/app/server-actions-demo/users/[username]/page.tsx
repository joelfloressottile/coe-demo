import { Mail, MessageSquareText, MoveLeft, Tags } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "@/components/Loading";
import { getUserAction } from "@/app/server-actions/actions";

const Page = async (props: { params: Promise<{ username: string }> }) => {
  const { username } = await props.params;
  const user = await getUserAction(username);

  return (
    <>
      <div className="flex items-center gap-3 mb-10">
        <Link
          href="/server-actions-demo/users"
          className="p-2 hover:bg-foreground/5 rounded"
        >
          <MoveLeft />
        </Link>
        <h1 className="font-bold text-2xl">Perfil de {username}</h1>
      </div>
      <Suspense fallback={<Loading />}>
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
      </Suspense>
    </>
  );
};

export default Page;
