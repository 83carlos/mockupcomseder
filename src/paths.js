const BASE_URL = import.meta.env.BASE_URL || "/";

export const usesHashRouting = BASE_URL !== "/";

export function assetPath(path) {
  return `${BASE_URL}${path.replace(/^\/+/, "")}`;
}

export function routeHref(path) {
  return usesHashRouting ? `${BASE_URL}#${path}` : path;
}

export function currentRoutePath() {
  if (usesHashRouting) {
    return window.location.hash.replace(/^#/, "") || "/";
  }
  return window.location.pathname;
}

export function replaceRoute(path) {
  if (usesHashRouting) {
    window.history.replaceState({}, "", `${BASE_URL}#${path}`);
    return;
  }
  window.history.replaceState({}, "", path);
}

export function pushRoute(path) {
  if (usesHashRouting) {
    const nextHash = `#${path}`;
    if (window.location.hash !== nextHash) {
      window.location.hash = nextHash;
    } else {
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    }
    return;
  }
  if (window.location.pathname !== path) {
    window.history.pushState({}, "", path);
  }
  window.dispatchEvent(new PopStateEvent("popstate"));
}
