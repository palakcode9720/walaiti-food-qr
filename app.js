/* ============================================
   WALAITI FOOD – JavaScript
   ============================================ */

// ===== MENU DATA =====
// TODO: Replace with actual menu items when provided
const menuItems = [
  {
    emoji: '🍕',
    name: 'Margherita Pizza',
    desc: 'Classic tomato sauce, fresh mozzarella, and basil',
    price: '₹199',
    category: 'pizza',
    tag: 'Best Seller'
  },
  {
    emoji: '🍕',
    name: 'Pepperoni Special',
    desc: 'Loaded with premium pepperoni and three-cheese blend',
    price: '₹249',
    category: 'pizza',
    tag: 'Popular'
  },
  {
    emoji: '🍕',
    name: 'Veggie Delight',
    desc: 'Fresh vegetables, olives, mushrooms on herb-infused base',
    price: '₹229',
    category: 'pizza',
    tag: null
  },
  {
    emoji: '☕',
    name: 'Café Latte',
    desc: 'Rich espresso with velvety steamed milk',
    price: '₹99',
    category: 'cafe',
    tag: null
  },
  {
    emoji: '🧋',
    name: 'Iced Mocha',
    desc: 'Chilled espresso, chocolate syrup, and fresh milk',
    price: '₹129',
    category: 'cafe',
    tag: 'Must Try'
  },
  {
    emoji: '🍟',
    name: 'Loaded Fries',
    desc: 'Crispy golden fries with spicy seasoning',
    price: '₹89',
    category: 'sides',
    tag: null
  },
  {
    emoji: '🧄',
    name: 'Garlic Bread',
    desc: 'Toasted artisan bread with herb garlic butter',
    price: '₹79',
    category: 'sides',
    tag: null
  },
  {
    emoji: '🥗',
    name: 'Fresh Garden Salad',
    desc: 'Seasonal greens with house dressing',
    price: '₹109',
    category: 'sides',
    tag: null
  }
];

// ===== RENDER MENU ITEMS =====
function renderMenu(filter = 'all') {
  const grid = document.getElementById('menuGrid');
  if (!grid) return;

  const filtered = filter === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === filter);

  grid.innerHTML = filtered.map(item => `
    <div class="menu-item" data-category="${item.category}">
      ${item.tag ? `<span class="menu-item-tag">${item.tag}</span>` : ''}
      <div class="menu-item-emoji">${item.emoji}</div>
      <h3 class="menu-item-name">${item.name}</h3>
      <p class="menu-item-desc">${item.desc}</p>
      <span class="menu-item-price">${item.price}</span>
    </div>
  `).join('');
}

// ===== MENU TABS =====
function initMenuTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderMenu(tab.dataset.tab);
    });
  });
}

// ===== ACTIVE NAV PILL ON SCROLL =====
function initScrollSpy() {
  const sections = ['menu', 'locations', 'reviews', 'social'];
  const pills = document.querySelectorAll('.nav-pill');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        pills.forEach(p => {
          p.classList.toggle('active', p.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-40% 0px -40% 0px' });

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
}

// ===== SMOOTH SCROLL FOR NAV PILLS =====
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ===== ENTRANCE ANIMATIONS =====
function initAnimations() {
  const animatedEls = document.querySelectorAll(
    '.location-card, .review-card, .social-card, .menu-item, .stat'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  animatedEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

// ===== PDF MENU BUTTON =====
function initPdfButton() {
  const btn = document.getElementById('menuPdfBtn');
  if (btn) {
    btn.addEventListener('click', (e) => {
      // TODO: Replace '#' with actual PDF URL when available
      if (btn.getAttribute('href') === '#') {
        e.preventDefault();
        btn.innerHTML = '<i class="fa-solid fa-clock"></i> Coming Soon!';
        btn.style.opacity = '0.7';
        setTimeout(() => {
          btn.innerHTML = '<i class="fa-solid fa-download"></i> Download';
          btn.style.opacity = '1';
        }, 2000);
      }
    });
  }
}

// ===== INIT ALL =====
document.addEventListener('DOMContentLoaded', () => {
  renderMenu('all');
  initMenuTabs();
  initScrollSpy();
  initSmoothScroll();
  initPdfButton();
  // Small delay so DOM paints first
  requestAnimationFrame(() => {
    setTimeout(initAnimations, 200);
  });
});
