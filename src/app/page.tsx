import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <p className="list-inside text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] max-w-[45rem]">
          Demo de COE DEVUI para presentar a todos los usuarios de la fase 1 de{" "}
          <b>MinervAI</b> mediante distintos patrones de fetch en NextJS.
        </p>

        <p className="list-inside text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] max-w-[45rem]"> Revisa distintas formas para realizar fetch:</p>
        <div className="flex gap-4 flex-col lg:flex-row flex-wrap items-center justify-center sm:items-start">
          <Link
            href="/api-routes-demo/users"
            className="rounded-lg border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base min-h-10 sm:min-h-12 px-4 py-2 sm:px-5"
          >
            API Routes Handlers
          </Link>
          <Link
            href="/server-actions-demo/users"
            className="rounded-lg border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base min-h-10 sm:min-h-12 px-4 py-2 sm:px-5"
          >
            Server Actions
          </Link>
          <Link
            href="/tanstack-query-demo/users"
            className="rounded-lg border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base min-h-10 sm:min-h-12 px-4 py-2 sm:px-5"
          >
            Tanstack Query + Actions + Hooks
          </Link>
        </div>
      </main>
    </div>
  );
}
