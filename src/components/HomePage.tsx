import { useEffect, useState } from "react";
import { events, news, quotes, sideBanners, slides, ui, weatherCities, type ForecastIcon } from "../data";
import { useI18n } from "../i18n";
import { ArrowIcon, ClockIcon, PinIcon } from "./Icons";

const icons: Record<ForecastIcon, string> = {
  rain: "/media/wx-rain.png",
  cloud: "/media/wx-cloud.png",
  sun: "/media/wx-sun.png",
};

function useAutoIndex(length: number) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % length), 6500);
    return () => window.clearInterval(timer);
  }, [length, paused]);

  return {
    index,
    setPaused,
    go(next: number) {
      setIndex((next + length) % length);
    },
  };
}

export function HomePage() {
  const { t } = useI18n();
  const hero = useAutoIndex(slides.length);
  const [city, setCity] = useState(0);
  const [quoteStart, setQuoteStart] = useState(0);
  const visibleQuotes = [quotes[quoteStart % quotes.length], quotes[(quoteStart + 1) % quotes.length]];
  const forecast = weatherCities[city];

  useEffect(() => {
    document.title = "Início | Cocapec - O melhor café está aqui";
  }, []);

  return (
    <main id="conteudo">
      <section className="hero" aria-roledescription="carousel" aria-label="Destaques" onMouseEnter={() => hero.setPaused(true)} onMouseLeave={() => hero.setPaused(false)}>
        <div className="hero-layout">
          <div className="hero-main">
            {slides.map((slide, index) => (
              <img key={slide.src} src={slide.src} alt={slide.alt} className={index === hero.index ? "is-active" : undefined} />
            ))}
            <div className="hero-controls">
              <button type="button" aria-label={t(ui.previous)} onClick={() => hero.go(hero.index - 1)}>
                <ArrowIcon direction="left" />
              </button>
              <button type="button" aria-label={t(ui.next)} onClick={() => hero.go(hero.index + 1)}>
                <ArrowIcon />
              </button>
            </div>
            <div className="hero-dots">
              {slides.map((slide, index) => (
                <button key={slide.src} type="button" className={index === hero.index ? "is-active" : undefined} aria-label={`${index + 1}`} aria-current={index === hero.index ? "true" : undefined} onClick={() => hero.go(index)} />
              ))}
            </div>
          </div>
          <div className="hero-side">
            {sideBanners.map((banner) => (
              <a key={banner.src} href={banner.href} target="_blank" rel="noreferrer">
                <img src={banner.src} alt={banner.alt} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="slogan">
        <div className="wrap">
          <h1>{t(ui.slogan)}</h1>
        </div>
      </section>

      <section className="news-section">
        <div className="wrap">
          <div className="section-head">
            <h2>{t(ui.newsTitle)}</h2>
            <p>{t(ui.newsLead)}</p>
            <a className="pill pill-green" href="https://www.cocapec.com.br/noticias" target="_blank" rel="noreferrer">
              {t(ui.moreNews)}
            </a>
          </div>
          <div className="news-grid">
            {news.map((item) => (
              <a key={item.href} className="news-card" href={item.href} target="_blank" rel="noreferrer">
                <img src={item.image} alt="" />
                <div className="news-body">
                  <div className="news-meta">
                    <span>
                      <em>{t(item.category)}</em> {item.date}
                    </span>
                    <span className="news-time">
                      <ClockIcon /> {item.minutes} {t(ui.minutes)}
                    </span>
                  </div>
                  <h3>{t(item.title)}</h3>
                  <p>{t(item.excerpt)}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="forecast-section" style={{ backgroundImage: "url(/media/bg-weather.webp)" }}>
        <div className="wrap forecast-grid">
          <article className="panel">
            <div className="panel-head">
              <h2>{t(ui.weather)}</h2>
              <div className="round-nav">
                <button type="button" aria-label={t(ui.previous)} onClick={() => setCity((current) => (current - 1 + weatherCities.length) % weatherCities.length)}>
                  <ArrowIcon direction="left" />
                </button>
                <button type="button" aria-label={t(ui.next)} onClick={() => setCity((current) => (current + 1) % weatherCities.length)}>
                  <ArrowIcon />
                </button>
              </div>
            </div>
            <div className="city-line">
              <h3>{forecast.name}</h3>
              <p>{t(ui.weatherLead)}</p>
            </div>
            <div className="days">
              {forecast.days.map((day) => (
                <article key={day.date} className="day-card">
                  <strong>{t(day.name)}</strong>
                  <span>{day.date}</span>
                  <img src={icons[day.icon]} alt="" width={64} height={64} />
                  <b>{day.max}</b>
                  <small>{day.min}</small>
                </article>
              ))}
            </div>
          </article>
          <article className="panel">
            <div className="panel-head">
              <h2>{t(ui.quotes)}</h2>
              <div className="round-nav">
                <button type="button" aria-label={t(ui.previous)} onClick={() => setQuoteStart((current) => (current - 1 + quotes.length) % quotes.length)}>
                  <ArrowIcon direction="left" />
                </button>
                <button type="button" aria-label={t(ui.next)} onClick={() => setQuoteStart((current) => (current + 1) % quotes.length)}>
                  <ArrowIcon />
                </button>
              </div>
            </div>
            <div className="quote-row">
              {visibleQuotes.map((quote) => (
                <article key={quote.name} className="quote-card">
                  <h3>{quote.name}</h3>
                  <p className="quote-price">{quote.price}</p>
                  <p className={quote.change < 0 ? "quote-change is-down" : "quote-change"}>
                    {`${quote.change < 0 ? "▼" : "▲"} ${quote.change > 0 ? "+" : ""}${quote.change.toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}%`}
                  </p>
                  <small>
                    {t(ui.updated)} {quote.updated}
                  </small>
                </article>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="magazine" style={{ backgroundImage: "url(/media/bg-magazine.webp)" }}>
        <div className="wrap magazine-inner">
          <div>
            <h2>{t(ui.magazineTitle)}</h2>
            <p>{t(ui.magazineLead)}</p>
            <a className="pill pill-green" href="https://www.cocapec.com.br/revista" target="_blank" rel="noreferrer">
              {t(ui.magazines)}
            </a>
          </div>
          <img src="/media/revista-151.webp" alt="Revista Cocapec - nº 151" width={220} height={270} />
        </div>
      </section>

      <section className="events-section">
        <div className="wrap">
          <div className="section-head is-stacked">
            <h2>{t(ui.agenda)}</h2>
            <a className="text-link" href="https://www.cocapec.com.br/agenda" target="_blank" rel="noreferrer">
              {t(ui.allEvents)}
            </a>
            <p>{t(ui.agendaLead)}</p>
          </div>
          <div className="event-grid">
            {events.map((event) => (
              <article key={event.alt} className="event-card">
                <a href={event.href} target="_blank" rel="noreferrer">
                  <figure>
                    <img src={event.image} alt={event.alt} />
                  </figure>
                  <div className="event-body">
                    <div className="event-when">
                      <span>
                        <strong>{event.day}</strong>
                        {t(event.month)}
                      </span>
                      <em>
                        <PinIcon /> {t(event.place)}
                      </em>
                    </div>
                    <h3>{t(event.title)}</h3>
                    <p>{t(event.text)}</p>
                    <span className="more">{t(ui.knowMore)} ›</span>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
