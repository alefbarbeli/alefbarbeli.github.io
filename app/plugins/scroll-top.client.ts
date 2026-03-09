export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter();

  const scrollTop = () => {
    const wrapper = document.querySelector('.wrapper') as HTMLElement | null;
    if (wrapper) {
      wrapper.scrollTop = 0;
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  };

  const forceScrollTop = () => {
    scrollTop();
    requestAnimationFrame(scrollTop);
    setTimeout(scrollTop, 50);
    setTimeout(scrollTop, 150);
  };

  router.afterEach(() => {
    forceScrollTop();
  });

  nuxtApp.hook('page:finish', () => {
    forceScrollTop();
  });
});
