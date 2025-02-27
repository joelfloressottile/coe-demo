export const dynamic = 'force-dynamic'
import { Mail, MessageSquareText, MoveLeft, Tags } from "lucide-react";
import Link from "next/link";
import { User } from "@/app/types/user";
import { Suspense } from "react";
import Loading from "@/components/Loading";

const Page = async (props: { params: Promise<{ username: string }> }) => {
  const { username } = await props.params;
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/${username}`);
  const user: User = await data.json();

  return (
    <>
      <div className="flex items-center gap-3 mb-10">
        <Link href="/api-routes-demo/users" className="p-2 hover:bg-foreground/5 rounded">
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
