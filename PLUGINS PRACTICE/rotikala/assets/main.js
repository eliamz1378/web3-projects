import Isotope from 'isotope-layout';

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid');
  if (!grid) return;

  const iso = new Isotope(grid, {
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
  });

  const filterButtons = document.querySelectorAll('[data-filter]');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filterValue = btn.getAttribute('data-filter');
      iso.arrange({ filter: filterValue });

      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
});
