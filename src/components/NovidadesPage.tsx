import { useEffect } from "react";
import { EXPRESS_APP_URL, flow, modules, roles, ui } from "../data";
import { useI18n } from "../i18n";
import { SiteLink } from "./SiteLink";

export function NovidadesPage() {
  const { t, lang } = useI18n();

  useEffect(() => {
    document.title = lang === "pt" ? "Novidades | CocapecExpress" : "What's new | CocapecExpress";
  }, [lang]);

  return (
    <main id="conteudo" className="novidades">
      <section className="page-banner">
        <div className="wrap">
          <p className="crumb">
            <SiteLink href="/">{t(ui.home)}</SiteLink>
            <span aria-hidden="true"> / </span>
            {t(ui.novidadesCrumb)}
          </p>
          <h1>{t(ui.novidadesCrumb)}</h1>
        </div>
      </section>

      <section className="novidades-body">
        <div className="wrap">
          <article className="spotlight">
            <div className="spotlight-copy">
              <p className="kicker">{t(ui.novidadesKicker)}</p>
              <h2>{t(ui.novidadesTitle)}</h2>
              <p className="lead">{t(ui.novidadesLead)}</p>
              <p>{t(ui.novidadesIntro)}</p>
              <a className="pill pill-green" href={EXPRESS_APP_URL} target="_blank" rel="noreferrer">
                {t(ui.ctaButton)}
              </a>
            </div>
            <div className="spotlight-mark">
              <img src="/media/express-logo.png" alt="Cocapec Express" />
            </div>
          </article>

          <div className="block-head">
            <h2>{t(ui.whatTitle)}</h2>
          </div>
          <div className="module-grid">
            {modules.map((item, index) => (
              <article key={t(item.title)} className="module-card">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{t(item.title)}</h3>
                <p>{t(item.text)}</p>
              </article>
            ))}
          </div>

          <div className="block-head">
            <h2>{t(ui.flowTitle)}</h2>
          </div>
          <ol className="flow">
            {flow.map((step, index) => (
              <li key={t(step.title)}>
                <strong>{index + 1}</strong>
                <h3>{t(step.title)}</h3>
                <p>{t(step.text)}</p>
              </li>
            ))}
          </ol>

          <div className="block-head">
            <h2>{t(ui.rolesTitle)}</h2>
            <p>{t(ui.rolesLead)}</p>
          </div>
          <div className="role-grid">
            {roles.map((role) => (
              <article key={t(role.name)}>
                <h3>{t(role.name)}</h3>
                <p>{t(role.text)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="slogan cta-band">
        <div className="wrap">
          <h2>{t(ui.ctaTitle)}</h2>
          <p>{t(ui.ctaText)}</p>
          <a className="pill pill-white" href={EXPRESS_APP_URL} target="_blank" rel="noreferrer">
            {t(ui.ctaButton)}
          </a>
        </div>
      </section>
    </main>
  );
}
