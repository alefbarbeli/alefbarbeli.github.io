export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter();
  let hashHandlerAttached = false;

  const getWrapper = () => document.querySelector('.wrapper') as HTMLElement | null;

  const scrollTop = () => {
    const wrapper = getWrapper();
    if (wrapper) {
      wrapper.scrollTop = 0;
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  };

  const scrollToHash = (hash: string) => {
    const target = document.querySelector(hash) as HTMLElement | null;
    if (!target) {
      return false;
    }

    const wrapper = getWrapper();
    if (wrapper) {
      const top =
        target.getBoundingClientRect().top -
        wrapper.getBoundingClientRect().top +
        wrapper.scrollTop -
        8;

      wrapper.scrollTo({ top, left: 0, behavior: 'smooth' });
      return true;
    }

    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return true;
  };

  const applyScroll = (hash?: string) => {
    if (!hash) {
      scrollTop();
      requestAnimationFrame(scrollTop);
      setTimeout(scrollTop, 50);
      setTimeout(scrollTop, 150);
      return;
    }

    const offsets = [0, 40, 120, 240, 420];
    for (const delay of offsets) {
      setTimeout(() => {
        scrollToHash(hash);
      }, delay);
    }
  };

  const applyCurrentHashScroll = () => {
    const currentHash = window.location.hash;
    if (currentHash) {
      applyScroll(currentHash);
    }
  };

  const attachHashHandlers = () => {
    if (hashHandlerAttached) return;
    hashHandlerAttached = true;

    window.addEventListener('hashchange', () => {
      applyCurrentHashScroll();
    });

    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest('a[href]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute('href') || '';
      if (!href || href.startsWith('http') || href.startsWith('mailto:')) return;

      // Handle in-page hash links explicitly because the scroll container is `.wrapper`, not `window`.
      if (href.startsWith('#')) {
        event.preventDefault();
        const hash = href;
        if (window.location.hash !== hash) {
          window.history.pushState(null, '', hash);
        }
        applyScroll(hash);
        return;
      }

      // Also support links like "/en#about" that point to the same path + hash.
      try {
        const url = new URL(anchor.href, window.location.href);
        const isSamePage =
          url.origin === window.location.origin &&
          url.pathname === window.location.pathname &&
          url.search === window.location.search;

        if (isSamePage && url.hash) {
          event.preventDefault();
          const nextUrl = `${url.pathname}${url.search}${url.hash}`;
          if (`${window.location.pathname}${window.location.search}${window.location.hash}` !== nextUrl) {
            window.history.pushState(null, '', nextUrl);
          }
          applyScroll(url.hash);
        }
      } catch {
        // ignore malformed URLs
      }
    });
  };

  router.afterEach((to) => {
    applyScroll(to.hash || undefined);
  });

  nuxtApp.hook('app:mounted', () => {
    attachHashHandlers();
    applyCurrentHashScroll();
  });

  nuxtApp.hook('page:finish', () => {
    applyScroll(router.currentRoute.value.hash || undefined);
  });
});
