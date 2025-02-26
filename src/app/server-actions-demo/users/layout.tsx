import { InfoBlock } from "@/components/InfoBlock";

const UsersLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="container mx-auto">
      <InfoBlock
        title="Sobre fetching con Server Actions"
        body="Ofrece mejor experiencia de desarrollo con SWR o con useActionState, pero con el último hace
          más sentido para eventos submit de form o eventos de tipo POST en el
          request, no tanto así para fetch con get, ya que suele requerir casting adicional y no resulta legible o intuitivo. Por un lado, se parece más al uso tradicional de métodos y hooks para fetch, por lo que es fácil adaptarse a este patrón."
        links={[
          {
            title: "ByteGrad - Server Actions con useActionState",
            href: "https://www.youtube.com/watch?v=GgyP0_b-WPY&ab_channel=ByteGrad",
          },
          {
            title: "Dave Gray - Problemas con Server Actions",
            href: "https://www.youtube.com/watch?v=O8AmIELoxrc&ab_channel=DaveGray",
          },
          {
            title: "SWR Docs",
            href: "https://swr.vercel.app/docs/with-nextjs",
          },
        ]}
      />
      {children}
    </section>
  );
};

export default UsersLayout;
