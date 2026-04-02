document.documentElement.classList.add('js');

const revealItems = document.querySelectorAll('.reveal');
const navLinks = document.querySelectorAll('.desktop-nav a');
const sections = [...document.querySelectorAll('main section[id]')];
const mediaShells = document.querySelectorAll('.media-shell');

if (revealItems.length) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}

const setActiveNav = () => {
  if (!sections.length || !navLinks.length) return;

  const scrollY = window.scrollY + 150;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
};

window.addEventListener('scroll', setActiveNav);
window.addEventListener('load', setActiveNav);

mediaShells.forEach((shell) => {
  const img = shell.querySelector('img');
  if (!img) return;

  const markMissing = () => shell.classList.add('is-missing');

  img.addEventListener('error', markMissing);

  if (img.complete && (typeof img.naturalWidth === 'number') && img.naturalWidth === 0) {
    markMissing();
  }
});
