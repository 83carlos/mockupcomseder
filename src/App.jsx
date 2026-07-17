import { useEffect, useRef, useState } from "react";
import { Footer, Header } from "./components.jsx";
import { currentRoutePath, replaceRoute, usesHashRouting } from "./paths.js";
import {
  AnsPage,
  AtendimentosPage,
  ContatoPage,
  HomePage,
  IdssPage,
  InstitucionalPage,
  PlanosPage,
  PrestadorPage,
  PrivacyPage,
} from "./pages.jsx";

const ROUTES = {
  "/": { component: HomePage, title: "COMSEDER" },
  "/institucional": { component: InstitucionalPage, title: "Institucional | COMSEDER" },
  "/planos": { component: PlanosPage, title: "Planos | COMSEDER" },
  "/atendimentos": { component: AtendimentosPage, title: "Atendimentos | COMSEDER" },
  "/prestador": { component: PrestadorPage, title: "Prestador | COMSEDER" },
  "/ans": { component: AnsPage, title: "Espaço ANS | COMSEDER" },
  "/idss": { component: IdssPage, title: "IDSS | COMSEDER" },
  "/politicas-de-privacidade": { component: PrivacyPage, title: "Políticas de Privacidade | COMSEDER" },
  "/contato": { component: ContatoPage, title: "Contato | COMSEDER" },
};

function normalizePath(pathname) {
  if (pathname === "/") return pathname;
  return pathname.replace(/\/+$/, "");
}

export function App() {
  const [pathname, setPathname] = useState(() => normalizePath(currentRoutePath()));
  const mainRef = useRef(null);
  const route = ROUTES[pathname] || ROUTES["/"];
  const Page = route.component;

  useEffect(() => {
    function handleNavigation() {
      const nextPath = normalizePath(currentRoutePath());
      if (!ROUTES[nextPath]) {
        replaceRoute("/");
        setPathname("/");
        return;
      }
      setPathname(nextPath);
    }
    const eventName = usesHashRouting ? "hashchange" : "popstate";
    window.addEventListener(eventName, handleNavigation);
    handleNavigation();
    return () => window.removeEventListener(eventName, handleNavigation);
  }, []);

  useEffect(() => {
    document.title = route.title;
    window.scrollTo({ top: 0, behavior: "instant" });
    mainRef.current?.focus({ preventScroll: true });
  }, [pathname, route.title]);

  return (
    <>
      <a className="skip-link" href="#main-content">Ir para o conteúdo</a>
      <Header pathname={pathname} />
      <main id="main-content" ref={mainRef} tabIndex="-1">
        <Page key={pathname} />
      </main>
      <Footer />
    </>
  );
}
