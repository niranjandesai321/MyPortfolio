// Intersection Observer for scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.1 });
document.querySelectorAll(".container").forEach(c => observer.observe(c));

// Dark Mode Toggle
document.getElementById('toggle-mode').addEventListener('click', () =>
  document.body.classList.toggle('dark-mode')
);

// Project Modal Handlers
document.querySelectorAll('.project-card').forEach(card => {
  const modal = document.getElementById(card.dataset.modal);
  card.addEventListener('click', () => modal.style.display = 'flex');
});
document.querySelectorAll('.close').forEach(el => {
  const modal = document.getElementById(el.dataset.modal);
  el.addEventListener('click', () => modal.style.display = 'none');
});
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) e.target.style.display = 'none';
});
