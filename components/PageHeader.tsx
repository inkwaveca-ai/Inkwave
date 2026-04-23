import Link from "next/link";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumbs?: { href?: string; label: string }[];
}) {
  return (
    <section className="border-b border-slate-200 bg-gradient-to-br from-ink-50 to-white">
      <div className="container-8xl py-12 sm:py-16">
        {crumbs && crumbs.length > 0 && (
          <nav className="mb-4 text-sm text-slate-500">
            <ol className="flex flex-wrap items-center gap-x-2">
              {crumbs.map((c, i) => (
                <li key={i} className="flex items-center gap-2">
                  {c.href ? (
                    <Link href={c.href} className="hover:text-ink-700">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-slate-700">{c.label}</span>
                  )}
                  {i < crumbs.length - 1 && <span>/</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="h1 mt-2">{title}</h1>
        {subtitle && <p className="lede mt-4 max-w-3xl">{subtitle}</p>}
      </div>
    </section>
  );
}
