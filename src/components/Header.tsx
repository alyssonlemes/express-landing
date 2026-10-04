import { useEffect, useState, type FormEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { navItems, ui } from "../data";
import { useI18n } from "../i18n";
import { DropIcon, MenuIcon, SearchIcon, UserCheckIcon } from "./Icons";
import { SiteLink } from "./SiteLink";

export function Header() {
  const { t, lang, setLang } = useI18n();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 1180px)");
    const sync = () => setCompact(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setOpenGroup(null);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  function submitSearch(event: FormEvent) {
    event.preventDefault();
    const term = query.trim();
    if (!term) return;
    navigate(`/buscar?q=${encodeURIComponent(term)}`);
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <a className="skip-link" href="#conteudo">
        {t(ui.skip)}
      </a>
      <div className="header-top">
        <div className="wrap header-top-row">
          <form className="search-form" role="search" onSubmit={submitSearch}>
            <label className="visually-hidden" htmlFor="search">
              {t(ui.searchLabel)}
            </label>
            <input
              id="search"
              name="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t(ui.searchPlaceholder)}
              autoComplete="off"
            />
            <button type="submit" className="search-icon" aria-label={t(ui.searchLabel)}>
              <SearchIcon />
            </button>
          </form>
          <div className="header-actions">
            <a className="pill pill-white" href="https://cooperado.cocapec.com.br/" target="_blank" rel="noreferrer">
              <span>{t(ui.member)}</span>
              <UserCheckIcon />
            </a>
            <SiteLink href="/novidades" className="pill pill-express" aria-current={pathname === "/novidades" ? "page" : undefined}>
              {t(ui.express)}
            </SiteLink>
            <div className="lang-switch" role="group" aria-label="Language">
              <button type="button" className={lang === "pt" ? "is-current" : undefined} aria-pressed={lang === "pt"} onClick={() => setLang("pt")}>
                PT
              </button>
              <button type="button" className={lang === "en" ? "is-current" : undefined} aria-pressed={lang === "en"} onClick={() => setLang("en")}>
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="wrap header-bottom-row">
          <SiteLink href="/" className="brand" aria-current={pathname === "/" ? "page" : undefined}>
            <img src="/media/logo.webp" alt="COCAPEC - O melhor café está aqui." width={195} height={50} />
          </SiteLink>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="site-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <MenuIcon open={menuOpen} />
            <span className="visually-hidden">{menuOpen ? t(ui.closeMenu) : t(ui.openMenu)}</span>
          </button>
          <nav id="site-navigation" className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label={lang === "pt" ? "Principal" : "Main"}>
            <ul>
              {navItems.map((item) => {
                const active = item.internal && pathname === item.href;
                const label = t(item.label);
                if (!item.children) {
                  return (
                    <li key={label}>
                      <SiteLink href={item.href} internal={item.internal} className={active ? "nav-link is-active" : "nav-link"} aria-current={active ? "page" : undefined} onClick={() => setMenuOpen(false)}>
                        {label}
                      </SiteLink>
                    </li>
                  );
                }
                const groupOpen = openGroup === label;
                return (
                  <li
                    key={label}
                    className={groupOpen ? "has-menu is-open" : "has-menu"}
                    onMouseEnter={() => {
                      if (!compact) setOpenGroup(label);
                    }}
                    onMouseLeave={() => {
                      if (!compact) setOpenGroup(null);
                    }}
                  >
                    <button
                      type="button"
                      className="nav-link"
                      aria-expanded={groupOpen}
                      onClick={() => setOpenGroup(groupOpen ? null : label)}
                    >
                      <span>{label}</span>
                      <DropIcon />
                    </button>
                    <ul className="dropdown">
                      {item.children.map((child) => (
                        <li key={child.href + t(child.label)}>
                          <a href={child.href} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>
                            {t(child.label)}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              })}
              <li className="nav-cta">
                <a className="pill pill-green" href="https://www.cocapec.com.br/contato" target="_blank" rel="noreferrer">
                  {t(ui.contact)}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
