import { InfoBlock } from "@/components/InfoBlock";

const UsersLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="container mx-auto">
      <InfoBlock
        title="Sobre fetching con Tanstack y Server Actions"
        body="Tanstack ofrece una abstracción con muchas funcionalidades como estados de carga y error para las queries, métodos de paginación para colecciones, métodos de prefetch, métodos de retry, etc. Es una librería muy amplia que hace más rápido el consumo de servicios siendo compatible con Server Actions u otras formas de hacer fetch, pero partes de esta librería se encuentran en modo experimental con algunas funcionalidades de React o de NextJS en particular, como por ejemplo que no cuente mucha compatibilidad con Suspense de React o que tenga problemas en correr del lado de servidor en su forma por defecto, exigiendo al desarrollador de que cree y configure providers previo a la utilización de las features de la librería. Siguiendo la idea de Server Actions, no es recomendable para fetch, ya que Server Actions no corren en paralelo."
        links={[
          {
            title: "developedbyed - Combo de ReactQuery con Server Actions",
            href: "https://www.youtube.com/watch?v=yVsaCVEfPn4",
          },
          {
            title: "Tanstack con NextJS - Blog",
            href: "https://reetesh.in/blog/server-action-with-tanstack-query-in-next.js-explained",
          },
        ]}
      />
      {children}
    </section>
  );
};

export default UsersLayout;
