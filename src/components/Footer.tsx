import { COOPERADO_URL, footerColumns, ui } from "../data";
import { useI18n } from "../i18n";
import { InstagramIcon, LinkedinIcon, UserCheckIcon, YoutubeIcon } from "./Icons";
import { SiteLink } from "./SiteLink";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer>
      <section className="cooperative-band">
        <a href="https://www.cocapec.com.br/cooperativismo" target="_blank" rel="noreferrer">
          <h2>{t(ui.becomeMember)}</h2>
        </a>
      </section>
      <div className="footer-links">
        <div className="wrap footer-grid">
          {footerColumns.map((column) => (
            <section key={t(column.title)}>
              <h3>{t(column.title)}</h3>
              <ul>
                {column.links.map((link) => (
                  <li key={link.href + t(link.label)}>
                    <SiteLink href={link.href} internal={link.internal}>
                      {t(link.label)}
                    </SiteLink>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <div className="footer-badges">
          <img src="/media/cocapec-mark.webp" alt="COCAPEC - O melhor café está aqui" width={140} height={36} />
          <img src="/media/somoscoop.webp" alt="SomosCoop" width={120} height={36} />
        </div>
      </div>
      <div className="footer-bar">
        <div className="wrap footer-bar-row">
          <address>
            <a href="https://maps.app.goo.gl/YxbmPDXbPKhFcYwx6" target="_blank" rel="noreferrer">
              Av. Wilson Sabio de Mello, 3100 – Distrito Industrial - Franca /SP
            </a>
            <a href="tel:+1637116200">(16) 3711-6200</a>
          </address>
          <a className="pill pill-white" href={COOPERADO_URL} target="_blank" rel="noreferrer">
            <span>{t(ui.member)}</span>
            <UserCheckIcon />
          </a>
          <div className="social">
            <span>{t(ui.follow)}</span>
            <a href="https://www.instagram.com/cocapecaltamogiana/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="https://www.linkedin.com/company/cocapec" target="_blank" rel="noreferrer" aria-label="Linkedin">
              <LinkedinIcon />
            </a>
            <a href="https://www.youtube.com/@Cocapec" target="_blank" rel="noreferrer" aria-label="YouTube">
              <YoutubeIcon />
            </a>
            <a href="https://senhorcafe.com.br/" target="_blank" rel="noreferrer" aria-label="Senhor Café">
              <img src="/media/senhorcafe-logo.png" alt="" width={78} height={28} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-credit">
        <a href="https://tnb.studio/" target="_blank" rel="noreferrer">
          {t(ui.powered)} TNB.studio
        </a>
      </div>
    </footer>
  );
}
