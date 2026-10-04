import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { events, footerColumns, modules, navItems, news, ui } from "../data";
import { useI18n, type Copy } from "../i18n";
import { SiteLink } from "./SiteLink";

type Result = {
  href: string;
  internal?: boolean;
  kind: Copy;
  title: Copy;
  text: Copy;
};

function normalize(value: string) {
  return value.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();
}

export function SearchPage() {
  const { t, lang } = useI18n();
  const [params] = useSearchParams();
  const query = params.get("q")?.trim() ?? "";

  const results = useMemo(() => {
    const index: Result[] = [
      {
        href: "/novidades",
        internal: true,
        kind: ui.resultPage,
        title: ui.novidadesTitle,
        text: ui.novidadesLead,
      },
      ...modules.map((item) => ({
        href: "/novidades",
        internal: true,
        kind: ui.resultPage,
        title: item.title,
        text: item.text,
      })),
      ...news.map((item) => ({
        href: item.href,
        kind: ui.resultNews,
        title: item.title,
        text: item.excerpt,
      })),
      ...events.map((item) => ({
        href: item.href,
        kind: ui.resultEvent,
        title: item.title,
        text: item.text,
      })),
      ...navItems.flatMap((item) =>
        (item.children ?? [{ label: item.label, href: item.href }]).map((child) => ({
          href: item.internal ? item.href : child.href,
          internal: item.internal,
          kind: ui.resultLink,
          title: child.label,
          text: item.label,
        })),
      ),
      ...footerColumns.flatMap((column) =>
        column.links.map((link) => ({
          href: link.href,
          internal: link.internal,
          kind: ui.resultLink,
          title: link.label,
          text: column.title,
        })),
      ),
    ];

    if (!query) return [];
    const needle = normalize(query);
    const seen = new Set<string>();
    return index.filter((item) => {
      const haystack = normalize(`${item.title.pt} ${item.title.en} ${item.text.pt} ${item.text.en}`);
      const key = `${item.href}|${item.title.pt}`;
      if (!haystack.includes(needle) || seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }, [query]);

  useEffect(() => {
    document.title = query ? `${t(ui.searchTitle)}: ${query}` : t(ui.searchTitle);
  }, [lang, query, t]);

  return (
    <main id="conteudo" className="search-page">
      <section className="page-banner">
        <div className="wrap">
          <p className="crumb">
            <SiteLink href="/">{t(ui.home)}</SiteLink>
            <span aria-hidden="true"> / </span>
            {t(ui.searchTitle)}
          </p>
          <h1>{query ? `${t(ui.searchFor)} “${query}”` : t(ui.searchTitle)}</h1>
        </div>
      </section>
      <section className="search-results">
        <div className="wrap">
          {!query && <p className="search-hint">{t(ui.searchHint)}</p>}
          {query && results.length === 0 && <p className="search-hint">{t(ui.searchEmpty)}</p>}
          <ul>
            {results.map((item) => (
              <li key={`${item.href}-${t(item.title)}`}>
                <SiteLink href={item.href} internal={item.internal}>
                  <small>{t(item.kind)}</small>
                  <strong>{t(item.title)}</strong>
                  <span>{t(item.text)}</span>
                </SiteLink>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
