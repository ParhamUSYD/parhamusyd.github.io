document.documentElement.classList.add('js');

const revealItems = document.querySelectorAll('.reveal');
const navLinks = document.querySelectorAll('.desktop-nav a');
const sections = [...document.querySelectorAll('main section[id]')];
const mediaShells = document.querySelectorAll('.media-shell');
const navShell = document.querySelector('.nav-shell');
const navToggle = document.querySelector('.nav-toggle');

/* Make all content visible immediately.
   This removes the risk of the whole page staying hidden. */
revealItems.forEach((item) => item.classList.add('revealed'));

const setActiveNav = () => {
  if (!sections.length || !navLinks.length) return;

  const scrollY = window.scrollY + 150;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    navLinks.forEach((link) => {
      const href = link.getAttribute('href') || '';
      const hash = href.includes('#') ? `#${href.split('#').pop()}` : href;
      link.classList.toggle(
        'active',
        hash === `#${id}` && scrollY >= top && scrollY < top + height
      );
    });
  });
};

window.addEventListener('scroll', setActiveNav);
window.addEventListener('load', setActiveNav);

if (navToggle && navShell) {
  navToggle.addEventListener('click', () => {
    const isOpen = navShell.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navShell.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

mediaShells.forEach((shell) => {
  const img = shell.querySelector('img');
  if (!img) return;

  const markMissing = () => {
    const fallback = shell.querySelector('.media-fallback');
    const filename = shell.dataset.filename || 'chart image';

    if (fallback && !fallback.hasChildNodes()) {
      const title = document.createElement('strong');
      title.textContent = 'Chart image unavailable';

      const code = document.createElement('code');
      code.textContent = filename;

      const message = document.createElement('p');
      message.textContent = 'The analysis remains available, but this figure could not be loaded in the current page view.';

      fallback.append(title, code, message);
    }

    shell.classList.add('is-missing');
  };

  img.addEventListener('error', markMissing);

  if (img.complete && typeof img.naturalWidth === 'number' && img.naturalWidth === 0) {
    markMissing();
  }
});
