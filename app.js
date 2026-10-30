/* ============================================================
   WALAITI FOOD – PIZZA & CAFÉ
   Multi-Outlet Interactive Menu & Web App
   ============================================================ */

// Outlets data
const outletsData = {
  modelTown: {
    name: "Model Town Outlet",
    address: "Plot No 615-L Mall Road, Model Town, Near Parveen Bakery, Jalandhar City",
    phones: ["+91 95177-27177", "+91 91155-94155"],
    pdf: "menus/menu-model-town.pdf",
    totalPages: 12,
    imgFolder: "menu_model_town",
    pizzas: [
      { name: "Margherita", desc: "Classic cheese pizza with rich tomato sauce", r: 170, m: 300, l: 430, tag: "Classic" },
      { name: "Cheese & Mushroom", desc: "Mozzarella and fresh sliced button mushrooms", r: 170, m: 300, l: 430 },
      { name: "Onion & Tomato", desc: "Crunchy onion and fresh juicy tomatoes with herbs", r: 170, m: 300, l: 430 },
      { name: "Cheese & Corn", desc: "Golden sweet corn kernels smothered in cheese", r: 170, m: 300, l: 430, tag: "Popular" },
      { name: "Achari Pizza", desc: "Capsicum, Corn, Paneer with zesty achari spices", r: 200, m: 340, l: 500 },
      { name: "Farm Fresh Pizza", desc: "Onion, Capsicum, Tomato, Mushroom", r: 200, m: 340, l: 500, tag: "Best Seller" },
      { name: "Tandoori Paneer", desc: "Onion, Capsicum, marinated Tandoori Paneer", r: 200, m: 340, l: 500, tag: "Chef Special" },
      { name: "Spicy Paneer Pizza", desc: "Capsicum, Red Paprika, and tender spicy Paneer", r: 230, m: 400, l: 560 },
      { name: "Pasta Pizza", desc: "Onion, Capsicum, Mushroom, and creamy pasta", r: 230, m: 400, l: 560 },
      { name: "Veg Deluxe Pizza", desc: "Onion, Capsicum, Mushroom, Corn, Paneer", r: 230, m: 400, l: 560 },
      { name: "Black & White Pizza", desc: "Jalapeno, Black Olive, Sweet Corn, and Extra Cheese", r: 230, m: 400, l: 560 },
      { name: "Mix Veg Pizza", desc: "Onion, Capsicum, Tomato, Mushroom, Corn, Black Olives, Jalapeno & Extra Cheese", r: 260, m: 480, l: 650, tag: "Signature" },
      { name: "Veg Supreme Pizza", desc: "Capsicum, Mushroom, Corn, Paneer, Jalapeno, Red Pepper & Extra Cheese", r: 260, m: 480, l: 650, tag: "Top Pick" },
      { name: "Pesto Pizza (Thin Crust)", desc: "Pesto sauce, Onion, Capsicum, Mushroom, Paneer, Mozzarella (9\" / 12\")", customPrice: "9\": ₹550 | 12\": ₹700", tag: "New Add" }
    ],
    garlicBreads: [
      { name: "Garlic Bread", desc: "Bread baked with garlic butter & herbs", price: "₹120" },
      { name: "Cheese Garlic Bread", desc: "Baked with Mozzarella cheese, butter & garlic", price: "₹170" },
      { name: "Veg Garlic Bread", desc: "Baked with onion, capsicum, mushroom & mozzarella", price: "₹190" },
      { name: "Stuffed Garlic Bread", desc: "Filled with corn, jalapeno & creamy cheese", price: "₹180", tag: "Must Try" },
      { name: "Premium Stuffed Garlic Bread", desc: "Stuffed with paneer, onion, corn, jalapeno & cheese", price: "₹210" },
      { name: "Calzone", desc: "Pocket folded pizza filled with savory stuffing & cheese", price: "₹140" },
      { name: "Taco", desc: "Crispy folded taco with spiced veg filling", price: "₹140" },
      { name: "Zingy Parcel / Paneer Parcel", desc: "Seasoned paneer wrapped in flaky pastry crust", price: "₹60 / ₹70" }
    ],
    burgersSandwiches: [
      { name: "Delight Burger", desc: "Crisp potato patty with house sauce", price: "₹60" },
      { name: "Crispy Burger", desc: "Extra crispy patty with crunchy lettuce & cheese blend", price: "₹70" },
      { name: "Achari Burger / Mint Burger", desc: "Flavoured with desi tangy pickle / cool fresh mint", price: "₹80" },
      { name: "Tandoori Paneer Burger", desc: "Char-grilled paneer slice in tandoori dressing", price: "₹90" },
      { name: "Gym Lover Burger", desc: "High protein patty with fresh raw veggies", price: "₹100" },
      { name: "Cheese Corn Grill Sandwich", desc: "Stuffed with golden corn and melted mozzarella", price: "₹150" },
      { name: "Farm Fresh Grill Sandwich", desc: "Crisp garden veggies grilled to golden perfection", price: "₹160" },
      { name: "Tandoori Paneer Grill Sandwich", desc: "Tandoori marinated paneer with capsicum & onion", price: "₹170", tag: "Popular" },
      { name: "Walaiti Special Grill Sandwich", desc: "Chef's signature jumbo triple-layer sandwich", price: "₹190", tag: "Special" },
      { name: "Tandoori Paneer Subwrap", desc: "Fresh wrapped flatbread stuffed with spiced paneer", price: "₹170" }
    ],
    snacksChinese: [
      { name: "French Fries", desc: "Golden salted crispy fries", price: "₹80" },
      { name: "Peri Peri Cheesy Fries", desc: "Tossed in fiery peri-peri and hot cheese drizzle", price: "₹99", tag: "Hot" },
      { name: "Cheese Chilli (Dry / Gravy)", desc: "Paneer cubes tossed with bell peppers & spicy sauce", price: "₹280", tag: "Best Seller" },
      { name: "Veg Manchurian", desc: "Crispy veg balls in tangy indo-chinese gravy", price: "₹220" },
      { name: "Honey Chilli Potato", desc: "Crispy sesame coated potatoes glazed in spicy honey", price: "₹200" },
      { name: "Walaiti Special Noodles", desc: "Wok-tossed noodles with fresh shredded vegetables", price: "₹200" },
      { name: "Cheese Corn Roll (6 Pcs)", desc: "Golden fried crispy rolls packed with corn & cheese", price: "₹160" },
      { name: "Paneer Pops (20 Pcs)", desc: "Bite-sized crispy paneer nuggets with dip", price: "₹160" }
    ],
    pastas: [
      { name: "Arrabiata Pasta (Mix)", desc: "Tangy red tomato basil sauce with garlic bread", price: "₹230" },
      { name: "White Sauce Pasta", desc: "Rich Alfredo cream sauce with corn, capsicum & herbs", price: "₹230" },
      { name: "Makhani Pasta", desc: "Indo-Italian fusion makhani sauce with garlic bread", price: "₹250" },
      { name: "Tandoori Paneer Pasta", desc: "Smoky tandoori paneer tossed with penne pasta", price: "₹250" },
      { name: "White Sauce Bake Pasta", desc: "Topped with extra mozzarella and baked golden", price: "₹280", tag: "Chef Pick" }
    ],
    beverages: [
      { name: "Cold Coffee", desc: "Frothy chilled coffee with rich cocoa notes", price: "₹139" },
      { name: "Caramel Coffee", desc: "Blended iced coffee with sweet caramel swirls", price: "₹149" },
      { name: "Oreo Shake", desc: "Thick shake loaded with crushed Oreo cookies", price: "₹159", tag: "Top Rated" },
      { name: "KitKat Shake", desc: "Rich milkshake blended with crispy KitKat bars", price: "₹159" },
      { name: "Brownie Shake", desc: "Fudge brownie blended with milk & chocolate sauce", price: "₹159" },
      { name: "Red Velvet Shake", desc: "Smooth red velvet cake blended milkshake", price: "₹159" },
      { name: "Blue Croco Cheesecake Shake", desc: "Signature dessert shake with cheesecake flavour", price: "₹159", tag: "Special" },
      { name: "Creamy Saffron Shake", desc: "Exotic rich kesar flavour with velvety cream", price: "₹159" },
      { name: "Virgin Mojito", desc: "Fresh mint, lime juice, and sparkling soda", price: "₹110" }
    ],
    combos: [
      { name: "Crispy Burger + Fries + Fruit Beer", desc: "Quick bite combo for 1 person", price: "₹200" },
      { name: "Farm Fresh Pizza (R) + Fries + Fruit Beer", desc: "Regular pizza meal combo", price: "₹300" },
      { name: "Veg Salad + Gym Lover Sandwich + Lemonade", desc: "Healthy fitness enthusiast special", price: "₹400" },
      { name: "Arrabiata Pasta + Stuffed Garlic Bread + Mojito", desc: "Italian feast for two", price: "₹490", tag: "Popular" },
      { name: "Farm Fresh (M) + Stuffed Garlic Bread + Mojito", desc: "Family favourite pizza combo", price: "₹580" },
      { name: "Choco Lava Cake with Ice Cream", desc: "Warm molten chocolate cake with vanilla scoop", price: "₹90", tag: "Sweet" },
      { name: "Brownie with Hot Chocolate", desc: "Warm fudge brownie drenched in hot melted fudge", price: "₹110" }
    ]
  },
  adarshNagar: {
    name: "Adarsh Nagar Outlet",
    address: "38-B, Adarsh Nagar, Opp. Inderprasth Hotel, Canal Road, Jalandhar City",
    phones: ["+91 95177-97177", "+91 91155-95155"],
    pdf: "menus/menu-adarsh-nagar.pdf",
    totalPages: 8,
    imgFolder: "menu_adarsh_nagar",
    pizzas: [
      { name: "Margherita", desc: "Classic cheese pizza with rich tomato sauce", r: 150, m: 280, l: 400, tag: "Value" },
      { name: "Cheese & Mushroom", desc: "Fresh button mushrooms with melted mozzarella", r: 150, m: 280, l: 400 },
      { name: "Onion & Tomato", desc: "Crunchy onion, ripe tomatoes, fragrant herbs", r: 150, m: 280, l: 400 },
      { name: "Cheese & Corn", desc: "Sweet juicy corn and loaded mozzarella", r: 150, m: 280, l: 400, tag: "Popular" },
      { name: "Achari Pizza", desc: "Capsicum, Corn, Paneer with zesty achari spices", r: 180, m: 320, l: 470 },
      { name: "Farm Fresh Pizza", desc: "Onion, Capsicum, Tomato, Mushroom", r: 180, m: 320, l: 470, tag: "Best Seller" },
      { name: "Tandoori Paneer", desc: "Onion, Capsicum, marinated Tandoori Paneer", r: 180, m: 320, l: 470 },
      { name: "Spicy Paneer Pizza", desc: "Capsicum, Red Paprika, and tender Paneer", r: 210, m: 380, l: 540 },
      { name: "Pasta Pizza", desc: "Onion, Capsicum, Mushroom, and creamy pasta", r: 210, m: 380, l: 540 },
      { name: "Veg Deluxe Pizza", desc: "Onion, Capsicum, Mushroom, Corn, Paneer", r: 210, m: 380, l: 540 },
      { name: "Black & White Pizza", desc: "Jalapeno, Black Olive, Sweet Corn, and Extra Cheese", r: 210, m: 380, l: 540 },
      { name: "Mix Veg Pizza", desc: "Onion, Capsicum, Tomato, Mushroom, Corn, Black Olives, Jalapeno & Extra Cheese", r: 240, m: 450, l: 620, tag: "Signature" },
      { name: "Veg Supreme Pizza", desc: "Capsicum, Mushroom, Corn, Paneer, Jalapeno, Red Pepper & Extra Cheese", r: 240, m: 450, l: 620, tag: "Top Pick" },
      { name: "Corn & Cheese Pizza Parantha", desc: "Stuffed with golden corns and melted cheese", customPrice: "₹189", tag: "Specialty" },
      { name: "Paneer Pizza Parantha", desc: "Stuffed with delicious paneer and lots of cheese", customPrice: "₹209", tag: "Specialty" }
    ],
    garlicBreads: [
      { name: "Garlic Bread", desc: "Bread baked with garlic butter & herbs", price: "₹120" },
      { name: "Cheese Garlic Bread", desc: "Baked with Mozzarella cheese, butter & garlic", price: "₹170" },
      { name: "Veg Garlic Bread", desc: "Baked with onion, capsicum, mushroom & mozzarella", price: "₹190" },
      { name: "Stuffed Garlic Bread", desc: "Corn, jalapeno & creamy melted cheese", price: "₹180", tag: "Must Try" },
      { name: "Premium Stuffed Garlic Bread", desc: "Paneer, onion, corn, jalapeno & cheese", price: "₹210" },
      { name: "Calzone", desc: "Folded Italian pizza pocket packed with cheese & veggies", price: "₹140" },
      { name: "Taco", desc: "Crispy taco shell with spiced filling", price: "₹140" },
      { name: "Zingy Parcel / Paneer Parcel", desc: "Spiced herb pocket / cottage cheese filling", price: "₹60 / ₹70" }
    ],
    burgersSandwiches: [
      { name: "Delight Burger", desc: "Crispy vegetable patty with house mayo", price: "₹60" },
      { name: "Crispy Burger", desc: "Extra crunchy golden patty with fresh lettuce", price: "₹70" },
      { name: "Achari Burger / Mint Burger", desc: "Tangy pickle / cool refreshing mint herb sauce", price: "₹80" },
      { name: "Tandoori Paneer Burger", desc: "Smoky tandoori paneer slice with onion & capsicum", price: "₹90" },
      { name: "Gym Lover Burger", desc: "Protein-packed patty with fresh greens", price: "₹100" },
      { name: "Spicy Paneer Burger", desc: "Fiery coated paneer patty with spicy dip", price: "₹110" },
      { name: "American Burger", desc: "Jumbo double patty with melted cheese slice", price: "₹130" },
      { name: "Cheese Corn Grill Sandwich", desc: "Loaded with sweet corn and melted mozzarella", price: "₹150" },
      { name: "Farm Fresh Grill Sandwich", desc: "Garden vegetables grilled crisp in multigrain bread", price: "₹160" },
      { name: "Tandoori Paneer Grill Sandwich", desc: "Tandoori spiced paneer with crunchy peppers", price: "₹170", tag: "Popular" },
      { name: "Walaiti Special Grill Sandwich", desc: "Triple decker signature jumbo sandwich", price: "₹190", tag: "Special" },
      { name: "Tandoori Paneer Subwrap", desc: "Soft tortilla wrapped with tandoori paneer", price: "₹170" }
    ],
    snacksChinese: [
      { name: "French Fries", desc: "Classic salted crispy golden potato fries", price: "₹80" },
      { name: "Peri Peri Cheesy Fries", desc: "Tossed in spicy peri peri & warm cheese sauce", price: "₹99", tag: "Hot" },
      { name: "Cheese Chilli (Dry / Gravy)", desc: "Fresh cottage cheese tossed with capsicum & chilli", price: "₹280", tag: "Best Seller" },
      { name: "Veg Manchurian", desc: "Golden fried vegetable dumplings in savoury gravy", price: "₹220" },
      { name: "Honey Chilli Potato", desc: "Crisp potato fingers glazed in honey chilli sauce", price: "₹200" },
      { name: "Walaiti Special Noodles", desc: "Stir-fried noodles with crisp veggies and sauces", price: "₹200" },
      { name: "Cheese Corn Roll (6 Pcs)", desc: "Crisp golden spring rolls with cheesy corn filling", price: "₹160" },
      { name: "Paneer Pops (20 Pcs)", desc: "Bite-size crunchy paneer snacks", price: "₹160" }
    ],
    pastas: [
      { name: "Arrabiata Pasta (Mix)", desc: "Penne pasta in spicy garlic tomato sauce + 2 Garlic Breads", price: "₹230" },
      { name: "White Sauce Pasta", desc: "Creamy rich Alfredo sauce + 2 Garlic Breads", price: "₹230" },
      { name: "Makhani Pasta", desc: "Butter makhani gravy with Italian herbs + 2 Garlic Breads", price: "₹250" },
      { name: "Tandoori Paneer Pasta", desc: "Smoky paneer infused pasta + 2 Garlic Breads", price: "₹250" },
      { name: "Mix Bake Pasta / White Bake", desc: "Oven-baked with thick melted mozzarella layer", price: "₹280", tag: "Chef Pick" }
    ],
    beverages: [
      { name: "Cold Coffee", desc: "Creamy iced coffee brewed fresh", price: "₹139" },
      { name: "Caramel Coffee", desc: "Espresso blended with rich caramel and chilled milk", price: "₹149" },
      { name: "Oreo Shake", desc: "Thick vanilla shake blended with Oreo crunch", price: "₹159", tag: "Top Rated" },
      { name: "KitKat Shake", desc: "Milkshake blended with crispy wafer KitKat", price: "₹159" },
      { name: "Brownie Shake", desc: "Fudgy brownie blended into thick chocolate shake", price: "₹159" },
      { name: "Red Velvet Shake", desc: "Velvety smooth red cake shake", price: "₹159" },
      { name: "Blue Croco Cheesecake Shake", desc: "Signature gourmet shake with cheesecake base", price: "₹159", tag: "Special" },
      { name: "Creamy Saffron Shake", desc: "Royal saffron infused creamy shake", price: "₹159" },
      { name: "Virgin Mojito", desc: "Cooling crushed mint, fresh lemon & sparkling fizz", price: "₹110" }
    ],
    combos: [
      { name: "Crispy Burger + Fries + Fruit Beer", desc: "Satisfying solo meal combo", price: "₹200" },
      { name: "Farm Fresh Pizza (R) + Fries + Fruit Beer", desc: "Regular pizza meal with beverage", price: "₹300" },
      { name: "Veg Salad + Gym Lover Sandwich + Lemonade", desc: "Wholesome fitness friendly combo", price: "₹400" },
      { name: "Arrabiata Pasta + Stuffed Garlic Bread + Mojito", desc: "Classic pasta & bread pairing", price: "₹490", tag: "Popular" },
      { name: "Farm Fresh (M) + Stuffed Garlic Bread + Mojito", desc: "Medium pizza feast with stuffed garlic bread", price: "₹580" },
      { name: "Farm Fresh (L) + Stuffed Garlic Bread + 2 Mojitos", desc: "Large family feast combo", price: "₹830", tag: "Family Pack" },
      { name: "Choco Lava Cake with Ice Cream", desc: "Warm gooey chocolate volcano cake with cold vanilla", price: "₹90" },
      { name: "Brownie with Hot Chocolate", desc: "Rich chocolate brownie with steaming chocolate fudge", price: "₹110" }
    ]
  }
};

// Current state
let currentOutlet = 'modelTown';
let currentCategory = 'pizzas';
let currentViewMode = 'grid'; // 'grid' (digital menu items) or 'cards' (official scanned menu pages)

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  setupOutletSwitcher();
  setupViewModeSwitcher();
  setupCategoryTabs();
  renderCurrentView();
  setupImageLightbox();
  setupNavLinks();
});

// Outlet switch (Model Town <-> Adarsh Nagar)
function setupOutletSwitcher() {
  const buttons = document.querySelectorAll('.outlet-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentOutlet = btn.dataset.outlet;
      updateOutletHeader();
      renderCurrentView();
    });
  });
}

function updateOutletHeader() {
  const data = outletsData[currentOutlet];
  const nameEl = document.getElementById('activeOutletName');
  const addressEl = document.getElementById('activeOutletAddress');
  const pdfBtn = document.getElementById('menuPdfBtn');

  if (nameEl) nameEl.textContent = data.name;
  if (addressEl) addressEl.textContent = data.address;
  if (pdfBtn) {
    pdfBtn.href = data.pdf;
    pdfBtn.setAttribute('download', `${currentOutlet}-menu.pdf`);
    pdfBtn.innerHTML = `<i class="fa-solid fa-download"></i> Download ${data.name.split(' ')[0]} Menu PDF`;
  }
}

// View mode switch (Digital Interactive Items vs Full Scanned Menu Cards)
function setupViewModeSwitcher() {
  const viewBtns = document.querySelectorAll('.view-mode-btn');
  viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      viewBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentViewMode = btn.dataset.view;
      renderCurrentView();
    });
  });
}

// Category tabs
function setupCategoryTabs() {
  const catBtns = document.querySelectorAll('.menu-cat-btn');
  catBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      catBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.category;
      renderDigitalItems();
    });
  });
}

// Render view based on state
function renderCurrentView() {
  const digitalView = document.getElementById('digitalMenuView');
  const cardsView = document.getElementById('menuCardsView');

  if (currentViewMode === 'grid') {
    if (digitalView) digitalView.style.display = 'block';
    if (cardsView) cardsView.style.display = 'none';
    renderDigitalItems();
  } else {
    if (digitalView) digitalView.style.display = 'none';
    if (cardsView) cardsView.style.display = 'block';
    renderMenuCards();
  }
}

// Render digital items
function renderDigitalItems() {
  const container = document.getElementById('digitalItemsContainer');
  if (!container) return;

  const data = outletsData[currentOutlet];
  const items = data[currentCategory] || [];

  if (currentCategory === 'pizzas') {
    container.innerHTML = `
      <div class="pizza-table-wrapper">
        <div class="pizza-table-header">
          <span>Pizza Name & Description</span>
          <div class="pizza-size-cols">
            <span>R</span>
            <span>M</span>
            <span>L</span>
          </div>
        </div>
        <div class="pizza-list">
          ${items.map(p => `
            <div class="pizza-row">
              <div class="pizza-info">
                <div class="pizza-title-row">
                  <span class="pizza-name">${p.name}</span>
                  ${p.tag ? `<span class="badge-tag">${p.tag}</span>` : ''}
                </div>
                <p class="pizza-desc">${p.desc}</p>
              </div>
              ${p.customPrice ? `
                <div class="pizza-custom-price">${p.customPrice}</div>
              ` : `
                <div class="pizza-prices">
                  <span class="price-val">₹${p.r}</span>
                  <span class="price-val">₹${p.m}</span>
                  <span class="price-val">₹${p.l}</span>
                </div>
              `}
            </div>
          `).join('')}
        </div>
      </div>
    `;
    return;
  }

  // Standard items grid (burgers, snacks, etc.)
  container.innerHTML = `
    <div class="items-cards-grid">
      ${items.map(item => `
        <div class="item-card">
          ${item.tag ? `<span class="badge-tag card-tag">${item.tag}</span>` : ''}
          <div class="item-card-body">
            <h4 class="item-title">${item.name}</h4>
            <p class="item-desc">${item.desc}</p>
            <div class="item-bottom">
              <span class="item-price">${item.price}</span>
              <a href="https://wa.me/${currentOutlet === 'modelTown' ? '919517727177' : '919517797177'}?text=Hi%20Walaiti%20Food,%20I%20would%20like%20to%20order%20${encodeURIComponent(item.name)}" target="_blank" class="order-wa-btn" title="Order on WhatsApp">
                <i class="fa-brands fa-whatsapp"></i> Order
              </a>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// Render official menu cards (illustrated pages)
function renderMenuCards() {
  const container = document.getElementById('menuPagesGrid');
  if (!container) return;

  const data = outletsData[currentOutlet];
  let html = '';

  for (let i = 1; i <= data.totalPages; i++) {
    const imgSrc = `${data.imgFolder}/page_${i}.jpg`;
    html += `
      <div class="menu-page-thumbnail" onclick="openLightbox('${imgSrc}', ${i}, ${data.totalPages})">
        <img src="${imgSrc}" alt="${data.name} - Page ${i}" loading="lazy" />
        <div class="page-overlay">
          <i class="fa-solid fa-magnifying-glass-plus"></i>
          <span>Page ${i}</span>
        </div>
      </div>
    `;
  }

  container.innerHTML = html;
}

// Image Lightbox for full screen viewing of menu pages
let currentLightboxIndex = 1;
let currentLightboxTotal = 1;

function setupImageLightbox() {
  const modal = document.getElementById('lightboxModal');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentLightboxIndex > 1) {
        currentLightboxIndex--;
        updateLightboxImage();
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentLightboxIndex < currentLightboxTotal) {
        currentLightboxIndex++;
        updateLightboxImage();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!modal || !modal.classList.contains('active')) return;
    if (e.key === 'Escape') modal.classList.remove('active');
    if (e.key === 'ArrowLeft' && currentLightboxIndex > 1) {
      currentLightboxIndex--;
      updateLightboxImage();
    }
    if (e.key === 'ArrowRight' && currentLightboxIndex < currentLightboxTotal) {
      currentLightboxIndex++;
      updateLightboxImage();
    }
  });
}

window.openLightbox = function(src, pageNum, total) {
  const modal = document.getElementById('lightboxModal');
  currentLightboxIndex = pageNum;
  currentLightboxTotal = total;
  updateLightboxImage();
  if (modal) modal.classList.add('active');
};

function updateLightboxImage() {
  const data = outletsData[currentOutlet];
  const img = document.getElementById('lightboxImg');
  const caption = document.getElementById('lightboxCaption');
  const src = `${data.imgFolder}/page_${currentLightboxIndex}.jpg`;

  if (img) img.src = src;
  if (caption) caption.textContent = `${data.name} — Page ${currentLightboxIndex} of ${currentLightboxTotal}`;
}

// Smooth scroll & active nav tracking
function setupNavLinks() {
  const links = document.querySelectorAll('.nav-pill');
  links.forEach(l => {
    l.addEventListener('click', (e) => {
      const targetId = l.getAttribute('href');
      if (targetId.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
          links.forEach(x => x.classList.remove('active'));
          l.classList.add('active');
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}
