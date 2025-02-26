import { InfoBlock } from "@/components/InfoBlock";

const UsersLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="container mx-auto">
      <InfoBlock
        title="Sobre fetching con API Routes"
        body="Requiere menos importaciones y es más fácil de entender que otros métodos de fetching, pero es más lento y ofrece peor experiencia de desarrollo debido a la estructura rígida que debe seguir."
        links={[
          {
            title: "CodeWithGuillaume - API Routes con NextJS",
            href: "https://www.youtube.com/watch?v=gEB3ckYeZF4",
          },
          {
            title: "Code Ryan - NextJS Route Handlers",
            href: "https://www.youtube.com/watch?v=xThOII9T4i4",
          },
        ]}
      />
      {children}
    </section>
  );
};

export default UsersLayout;
