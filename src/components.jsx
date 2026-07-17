import { useEffect, useId, useState } from "react";
import { CONTACT_GROUPS, NAV_ITEMS, QUICK_LINKS } from "./siteData.js";
import { assetPath, pushRoute, routeHref } from "./paths.js";

export function navigateTo(href) {
  pushRoute(href);
}

export function SiteLink({ href, external = false, children, className = "", ...props }) {
  if (external || /^(https?:|mailto:|tel:)/.test(href)) {
    return (
      <a
        href={href}
        className={className}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={routeHref(href)}
      className={className}
      onClick={(event) => {
        if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        navigateTo(href);
      }}
      {...props}
    >
      {children}
    </a>
  );
}

export function Header({ pathname }) {
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <SiteLink href="/" className="brand-link" aria-label="COMSEDER - Página inicial">
          <img src={assetPath("assets/pdf/1-planos-00.png")} alt="COMSEDER" width="287" height="54" />
        </SiteLink>
        <button
          type="button"
          className="menu-button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Fechar" : "Menu"}
        </button>
        <nav id="primary-navigation" className={`primary-nav ${open ? "is-open" : ""}`} aria-label="Navegação principal">
          {NAV_ITEMS.map((item) => {
            const active = !item.external && pathname === item.href;
            return (
              <SiteLink
                key={item.label}
                href={item.href}
                external={item.external}
                className={`${item.accent ? "accent" : ""} ${active ? "active" : ""}`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </SiteLink>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brands" aria-label="Organizações relacionadas">
          <img src={assetPath("assets/pdf/1-planos-17.png")} alt="ANS - Agência Nacional de Saúde Suplementar. Registro 39025-9" width="204" height="68" />
          <img src={assetPath("assets/pdf/1-planos-18.png")} alt="Somos Coop - Somos o cooperativismo no Brasil" width="204" height="68" />
        </div>
        <nav className="footer-nav" aria-label="Navegação do rodapé">
          <div>
            <SiteLink href="/institucional">Institucional</SiteLink>
            <SiteLink href="/planos">Planos</SiteLink>
            <SiteLink href="/atendimentos">Atendimentos</SiteLink>
            <SiteLink href="/prestador">Prestador</SiteLink>
          </div>
          <div>
            <SiteLink href="http://portal.comseder.net.br/" external className="accent">Portal de Serviços</SiteLink>
            <SiteLink href="/contato">Contatos</SiteLink>
            <SiteLink href="/ans">ANS</SiteLink>
            <SiteLink href="/politicas-de-privacidade">Políticas de Privacidade</SiteLink>
          </div>
        </nav>
      </div>
      <p className="copyright">COMSEDER - João Pessoa-PB © 2016 - 2026</p>
    </footer>
  );
}

export function HeroBanner({
  photo,
  title,
  subtitle,
  theme = "blue",
  photoAlt,
  mark = true,
  children,
  className = "",
}) {
  return (
    <section className={`hero-banner hero-${theme} ${className}`}>
      {photo && <img className="hero-photo" src={photo} alt={photoAlt} />}
      {mark && <img className="hero-mark" src={assetPath("assets/crops/brand-mark.png")} alt="" aria-hidden="true" />}
      <div className="hero-copy">
        {subtitle && <p>{subtitle}</p>}
        <h1>{title}</h1>
        {children}
      </div>
    </section>
  );
}

export function QuickLinks({ includePlans = true }) {
  const links = includePlans ? QUICK_LINKS : QUICK_LINKS.filter((item) => item.label !== "Planos");
  return (
    <nav className={`quick-links ${includePlans ? "five" : "four"}`} aria-label="Acessos rápidos">
      {links.map((item) => (
        <SiteLink key={item.label} href={item.href} external={item.external} aria-label={item.label}>
          <img src={assetPath(item.image)} alt={item.label} />
        </SiteLink>
      ))}
    </nav>
  );
}

export function WhatsAppCta() {
  return (
    <a
      className="whatsapp-cta"
      href="https://wa.me/558332162908"
      target="_blank"
      rel="noreferrer"
      aria-label="Entre em contato pelo WhatsApp e garanta o seu plano"
    >
      <img src={assetPath("assets/pdf/1-planos-13.png")} alt="" aria-hidden="true" />
      <span>Entre em contato agora e garanta o seu plano!</span>
    </a>
  );
}

function LinkedLine({ line }) {
  const emailMatch = line.match(/[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}/);
  if (!emailMatch) return <>{line}</>;
  const email = emailMatch[0];
  const [before, after] = line.split(email);
  return (
    <>
      {before}
      <a href={`mailto:${email}`}>{email}</a>
      {after}
    </>
  );
}

export function ContactInfo() {
  return (
    <section className="contact-info" aria-labelledby="contact-info-title">
      <h2 id="contact-info-title">Contatos Úteis:</h2>
      {CONTACT_GROUPS.map((group) => (
        <div className="contact-group" key={group.title}>
          <h3>{group.title}</h3>
          <ul>
            {group.lines.map((line) => (
              <li key={line}>
                <LinkedLine line={line} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export function ContactForm() {
  const id = useId();
  const [status, setStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const name = data.get("nome");
    const whatsapp = data.get("whatsapp");
    const statePayroll = data.get("folha");
    const subject = encodeURIComponent("Contato pelo site COMSEDER");
    const body = encodeURIComponent(`Nome Completo: ${name}\nWhatsapp: ${whatsapp}\nVocê está na folha de pagamentos do estado? ${statePayroll}`);
    setStatus("Seu aplicativo de e-mail será aberto para concluir o envio.");
    window.location.href = `mailto:comseder@comseder.net.br?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate={false}>
      <h2>Seja COMSEDER</h2>
      <label htmlFor={`${id}-name`}>Nome Completo</label>
      <input id={`${id}-name`} name="nome" type="text" autoComplete="name" required />

      <label htmlFor={`${id}-whatsapp`}>Whatsapp</label>
      <input id={`${id}-whatsapp`} name="whatsapp" type="tel" autoComplete="tel" required />

      <fieldset>
        <legend>Você está na folha de pagamentos do estado?</legend>
        <label className="choice-card">
          <input type="radio" name="folha" value="Sim" required />
          <span>Sim</span>
        </label>
        <label className="choice-card">
          <input type="radio" name="folha" value="Não" required />
          <span>Não</span>
        </label>
      </fieldset>
      <button type="submit">Enviar</button>
      <p className="form-status" role="status" aria-live="polite">{status}</p>
    </form>
  );
}

export function ContactSection({ showHeading = true }) {
  return (
    <section className={`contact-section ${showHeading ? "with-heading" : ""}`} id="contato">
      {showHeading && <h2 className="contact-title">Entre em contato<br />conosco</h2>}
      <div className="contact-grid">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
}
