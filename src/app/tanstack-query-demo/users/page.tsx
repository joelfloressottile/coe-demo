import QueryProvider from "@/app/providers/QueryProvider";
import { UsersClientView } from "@/components/UsersClientView";

const Page = async () => {
  return (
    <QueryProvider>
      <UsersClientView />
    </QueryProvider>
  );
};

export default Page;
