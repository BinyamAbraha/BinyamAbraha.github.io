/* ============================================================
   projects.js | Project Filter & Lightbox
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── GLightbox Init ───────────────────────────────────────
  const lightbox = GLightbox({
    touchNavigation: true,
    loop: true,
    autoplayVideos: true,
    openEffect: 'zoom',
    closeEffect: 'fade',
  });

  // ── Project Filter ───────────────────────────────────────
  const filterBtns   = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const emptyState   = document.getElementById('emptyState');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      let visibleCount = 0;

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category') || '';

        if (filter === 'all' || categories.includes(filter)) {
          card.classList.remove('hidden');
          visibleCount++;
          // Re-trigger fade animation
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          requestAnimationFrame(() => {
            card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          });
        } else {
          card.classList.add('hidden');
        }
      });

      // Show empty state if no results
      if (emptyState) {
        emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
      }
    });
  });

  // ── Image Overlay Click → Lightbox ──────────────────────
  // For project cards without real images, clicking the overlay
  // can open a simple info popup or be linked to a real image later.
  document.querySelectorAll('.project-img').forEach(imgWrap => {
    imgWrap.addEventListener('click', function() {
      const card = this.closest('.project-card');
      const title = card.querySelector('.project-title')?.textContent;
      const desc  = card.querySelector('.project-desc')?.textContent;

      // If there's a real image, lightbox opens automatically via GLightbox.
      // For placeholder cards, show a quick tooltip instead.
      const hasRealImg = this.querySelector('img');
      if (!hasRealImg) {
        showPlaceholderToast(title);
      }
    });
  });

  function showPlaceholderToast(title) {
    // Remove existing toast
    document.querySelector('.project-toast')?.remove();

    const toast = document.createElement('div');
    toast.className = 'project-toast';
    toast.innerHTML = `<i class="fas fa-image"></i> Screenshot for <strong>${title}</strong> coming soon`;
    toast.style.cssText = `
      position: fixed;
      bottom: 32px;
      left: 50%;
      transform: translateX(-50%) translateY(20px);
      background: var(--bg-card);
      border: 1px solid var(--border);
      color: var(--text-secondary);
      padding: 12px 24px;
      border-radius: 100px;
      font-family: var(--font-display);
      font-size: 0.85rem;
      box-shadow: var(--shadow-md);
      z-index: 3000;
      opacity: 0;
      transition: all 0.3s ease;
      white-space: nowrap;
    `;

    document.body.appendChild(toast);

    requestAnimationFrame(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateX(-50%) translateY(0)';
    });

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(10px)';
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

});
