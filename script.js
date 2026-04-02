document.documentElement.classList.add('js');

const revealItems = document.querySelectorAll('.reveal');
const navLinks = document.querySelectorAll('.desktop-nav a');
const sections = [...document.querySelectorAll('main section[id]')];
const mediaShells = document.querySelectorAll('.media-shell');

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
      link.classList.toggle(
        'active',
        href === `#${id}` && scrollY >= top && scrollY < top + height
      );
    });
  });
};

window.addEventListener('scroll', setActiveNav);
window.addEventListener('load', setActiveNav);

mediaShells.forEach((shell) => {
  const img = shell.querySelector('img');
  if (!img) return;

  const markMissing = () => shell.classList.add('is-missing');

  img.addEventListener('error', markMissing);

  if (img.complete && typeof img.naturalWidth === 'number' && img.naturalWidth === 0) {
    markMissing();
  }
});