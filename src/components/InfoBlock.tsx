import { Lightbulb, SquareArrowOutUpRight } from "lucide-react";

interface InfoBlockLink {
  title: string;
  href: string;
}

interface InfoBlockProps {
  title: string;
  body: string;
  links?: InfoBlockLink[];
}

export const InfoBlock = ({ title, body, links }: InfoBlockProps) => {
  return (
    <div className="mb-10 p-4 rounded border border-foreground/40 bg-foreground/5 flex gap-5">
      <div className="mt-5">
        <Lightbulb size={30} />
      </div>
      <div className="flex flex-col">
        <p className="flex flex-col gap-2">
          <span>
            <b>{title}</b>
          </span>
          {body}
        </p>
        {links?.length && (
          <ul className="mt-4 flex flex-col gap-3">
            {links?.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  className="p-2 rounded border border-foreground/20 hover:bg-foreground/10 flex items-center gap-4 w-fit"
                >
                  <b>{link.title}</b>
                  <SquareArrowOutUpRight size={16} />
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
