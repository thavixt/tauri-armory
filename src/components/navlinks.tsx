import { snakeCase } from "@/utils";

export const NAV_LINK_IDENTIFIER_CLASSNAME = `navlink-${crypto.randomUUID().slice(0, 4)}`;

export function NavLink({ text }: { text: string }) {
  return (
    <h4 id={snakeCase(text)} className={NAV_LINK_IDENTIFIER_CLASSNAME} data-title={text} data-href={snakeCase(text)}>
      <div className="flex items-center gap-2">
        <a href={`#${snakeCase(text)}`} className="text-2xl opacity-50">#</a>
        <span>{text}</span>
      </div>
    </h4>
  )
}
