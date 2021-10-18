import Drupal from 'drupal';

Drupal.behaviors.backToTop = {
  attach(context, settings) {
    const threshold = settings.gesso.backToTopThreshold || 200;
    const smoothScroll = settings.gesso.backToTopSmoothScroll || true;

    const backToTop = context.querySelector('.back-to-top');
    if (backToTop) {
      if (!Number.isNaN(threshold)) {
        backToTop.setAttribute('aria-hidden', 'true');
        backToTop.setAttribute('tabIndex', '-1');
        const scrollHandler = () => {
          if (
            window.scrollY >= threshold &&
            backToTop.getAttribute('aria-hidden') === 'true'
          ) {
            backToTop.setAttribute('aria-hidden', 'false');
            backToTop.removeAttribute('tabIndex');
          } else if (
            window.scrollY < threshold &&
            backToTop.getAttribute('aria-hidden', 'false')
          ) {
            backToTop.setAttribute('aria-hidden', 'true');
            backToTop.setAttribute('tabIndex', '-1');
          }
        };
        let stillScrolling = false;
        window.addEventListener('scroll', () => {
          if (stillScrolling !== false) {
            clearTimeout(stillScrolling);
          }
          stillScrolling = setTimeout(scrollHandler, 60);
        });
      }
      if (smoothScroll) {
        backToTop.addEventListener('click', event => {
          const targetId = backToTop.getAttribute('href');
          const target = document.querySelector(targetId);
          if (target) {
            event.preventDefault();
            const coords = target.getBoundingClientRect();
            window.scrollTo({
              top: coords.top,
              behavior: 'smooth',
            });
          }
        });
      }
    }
  },
}
