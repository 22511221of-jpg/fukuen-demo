// Header style on scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('is-scrolled', window.scrollY > 40);
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navOverlay = document.getElementById('navOverlay');

function closeNav(){
  navToggle.classList.remove('is-active');
  navMenu.classList.remove('is-active');
  navOverlay.classList.remove('is-active');
  document.body.classList.remove('no-scroll');
}
function toggleNav(){
  const isOpen = navMenu.classList.toggle('is-active');
  navToggle.classList.toggle('is-active', isOpen);
  navOverlay.classList.toggle('is-active', isOpen);
  document.body.classList.toggle('no-scroll', isOpen);
}
navToggle.addEventListener('click', toggleNav);
navOverlay.addEventListener('click', closeNav);
navMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeNav));

// Menu tabs
const tabs = document.querySelectorAll('.menu__tab');
const panels = document.querySelectorAll('.menu__panel');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => { t.classList.remove('is-active'); t.setAttribute('aria-selected','false'); });
    panels.forEach(p => p.classList.remove('is-active'));
    tab.classList.add('is-active');
    tab.setAttribute('aria-selected','true');
    document.getElementById(tab.dataset.tab).classList.add('is-active');
  });
});

// Scroll fade-in animation
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
fadeEls.forEach(el => observer.observe(el));
