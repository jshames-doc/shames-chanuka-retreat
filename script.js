// Smooth scroll for nav links (fallback for older browsers)
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Scroll reveal animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('section, .event-card, .day').forEach((el) => {
  el.classList.add('reveal');
  observer.observe(el);
});

// Countdown to check-in (Mon Dec 7, 2026, 3:00 PM Israel Standard Time)
(function initCountdown() {
  const countdownEl = document.getElementById('countdown');
  const pastEl = document.getElementById('countdown-past');
  if (!countdownEl || !pastEl) return;

  const target = new Date('2026-12-07T15:00:00+02:00').getTime();
  let timer;

  const setUnit = (name, value) => {
    const el = countdownEl.querySelector('[data-unit="' + name + '"]');
    if (el) el.textContent = value;
  };

  const update = () => {
    const diff = target - Date.now();
    if (diff <= 0) {
      clearInterval(timer);
      countdownEl.hidden = true;
      pastEl.hidden = false;
      return;
    }
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    setUnit('days', days);
    setUnit('hours', String(hours).padStart(2, '0'));
    setUnit('minutes', String(minutes).padStart(2, '0'));
    setUnit('seconds', String(seconds).padStart(2, '0'));
    countdownEl.hidden = false;
  };

  update();
  timer = setInterval(update, 1000);
})();
