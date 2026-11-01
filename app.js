/* ============================================================
   WALAITI FOOD – PIZZA & CAFÉ
   100% Exact Branch-Separated Digital Menu System
   ============================================================ */

const outletsData = {
  // ==========================================================
  // ADARSH NAGAR OUTLET (8 Pages Menu)
  // ==========================================================
  adarshNagar: {
    name: "Adarsh Nagar Outlet",
    tagline: "38-B Canal Road · Opp. Inderprasth Hotel",
    address: "38-B, Adarsh Nagar, Opp. Inderprasth Hotel, Canal Road, Jalandhar City",
    phones: ["+91 95177-97177", "+91 91155-95155"],
    pdf: "menus/menu-adarsh-nagar.pdf",
    totalPages: 8,
    imgFolder: "menu_adarsh_nagar",
    waPhone: "919517797177",

    // Dynamic Category Definitions for Adarsh Nagar
    categories: [
      { id: "an_pizzas", name: "Pizzas & Thin Pesto", icon: "fa-pizza-slice" },
      { id: "an_atta", name: "Atta Pizzas & Breads", icon: "fa-wheat-awn" },
      { id: "an_upgrades_dips", name: "Upgrades & Dips", icon: "fa-wand-magic-sparkles" },
      { id: "an_mania", name: "Pizza Mania", icon: "fa-tags" },
      { id: "an_breads", name: "Garlic Breads & Parcels", icon: "fa-bread-slice" },
      { id: "an_pastas", name: "Pastas", icon: "fa-bowl-rice" },
      { id: "an_burgers", name: "Burgers, Sandwiches & Wraps", icon: "fa-burger" },
      { id: "an_chinese", name: "Snacks, Chinese & Salads", icon: "fa-bowl-food" },
      { id: "an_shakes", name: "Milkshakes & Cold Coffee", icon: "fa-blender" },
      { id: "an_drinks", name: "Drinks, Mojitos & Ice Teas", icon: "fa-champagne-glasses" },
      { id: "an_hot", name: "Tea, Coffee & Hot Chocolate", icon: "fa-mug-hot" },
      { id: "an_combos_desserts", name: "Combos & Desserts", icon: "fa-gift" }
    ],

    // Data for Adarsh Nagar
    sections: {
      an_pizzas: {
        type: "pizza_table",
        title: "Pizzas (Adarsh Nagar)",
        description: "Served on traditional crust with fresh toppings & mozzarella cheese.",
        items: [
          { name: "Margherita", desc: "Classic cheese pizza with rich tomato sauce", r: 150, m: 280, l: 400, tag: "Classic" },
          { name: "Cheese & Mushroom", desc: "Mozzarella and fresh sliced button mushrooms", r: 150, m: 280, l: 400 },
          { name: "Onion & Tomato", desc: "Crunchy onion, ripe juicy tomatoes and fragrant herbs", r: 150, m: 280, l: 400 },
          { name: "Cheese & Corn", desc: "Golden sweet corn kernels smothered in mozzarella", r: 150, m: 280, l: 400, tag: "Popular" },
          { name: "Achari Pizza", desc: "Capsicum, Corn, Paneer with zesty achari spices", r: 180, m: 320, l: 470 },
          { name: "Farm Fresh Pizza", desc: "Onion, Capsicum, Tomato, Mushroom", r: 180, m: 320, l: 470, tag: "Best Seller" },
          { name: "Tandoori Paneer", desc: "Onion, Capsicum, marinated Tandoori Paneer", r: 180, m: 320, l: 470, tag: "Chef Special" },
          { name: "Spicy Paneer Pizza", desc: "Capsicum, Red Paprika, and tender spicy Paneer", r: 210, m: 380, l: 540 },
          { name: "Pasta Pizza", desc: "Onion, Capsicum, Mushroom, and creamy pasta", r: 210, m: 380, l: 540 },
          { name: "Veg Deluxe Pizza", desc: "Onion, Capsicum, Mushroom, Corn, Paneer", r: 210, m: 380, l: 540 },
          { name: "Black & White Pizza", desc: "Jalapeno, Black Olive, Sweet Corn, and Extra Cheese", r: 210, m: 380, l: 540 },
          { name: "Mix Veg Pizza", desc: "Onion, Capsicum, Tomato, Mushroom, Corn, Black Olives, Jalapeno & Extra Cheese", r: 240, m: 450, l: 620, tag: "Signature" },
          { name: "Veg Supreme Pizza", desc: "Capsicum, Mushroom, Corn, Paneer, Jalapeno, Red Pepper & Extra Cheese", r: 240, m: 450, l: 620, tag: "Top Pick" },
          { name: "Corn & Cheese Pizza Parantha", desc: "Stuffed with golden corns and melted cheese", customPrice: "₹189", tag: "Adarsh Nagar Special" },
          { name: "Paneer Pizza Parantha", desc: "Stuffed with delicious spiced paneer and lots of cheese", customPrice: "₹209", tag: "Adarsh Nagar Special" }
        ]
      },

      an_atta: {
        type: "pizza_table",
        title: "100% Whole Wheat (Atta) Pizzas & Breads",
        description: "Wholesome atta crust packed with health, fiber, and authentic Italian taste.",
        items: [
          { name: "Atta Margherita Pizza", desc: "100% whole wheat crust with fresh mozzarella & herbs", r: 159, m: 299, l: 449, tag: "Healthy" },
          { name: "Atta Cheese Corn", desc: "Whole wheat base topped with golden sweet corn & mozzarella", r: 169, m: 319, l: 459 },
          { name: "Atta Farm House Pizza", desc: "Onion, Capsicum, Corn, Tomato, Mushroom on whole wheat", r: 199, m: 389, l: 529, tag: "Popular" },
          { name: "Atta Kadhai Paneer Pizza", desc: "Onion, Capsicum, spiced Kadhai Paneer on atta base", r: 199, m: 389, l: 529 },
          { name: "Atta Peri Peri Paneer Pizza", desc: "Onion, Capsicum, Mushroom, Red Pepper, Peri Peri Paneer", r: 229, m: 429, l: 569 },
          { name: "Atta Makhani Pasta Pizza", desc: "Onion, Capsicum, Mushroom, Pasta on whole wheat crust", r: 229, m: 429, l: 569 },
          { name: "Atta Super Veg", desc: "Onion, Capsicum, Corn, Mushroom, Red Pepper, Black Olives, Jalapeno", r: 259, m: 499, l: 669, tag: "Signature" },
          { name: "Atta Stuffed Garlic Bread", desc: "Whole wheat garlic bread stuffed with Corn, Jalapeno, Cheese", price: "₹199" },
          { name: "Atta Premium Stuffed Garlic Bread", desc: "Whole wheat garlic bread with Onion, Paneer, Corn, Jalapeno, Cheese", price: "₹239", tag: "Special" }
        ]
      },

      an_upgrades_dips: {
        type: "upgrades_dips",
        upgrades: [
          { name: "Extra Toppings", r: "₹30", m: "₹40", l: "₹60" },
          { name: "Extra Cheese", r: "₹30", m: "₹60", l: "₹80" },
          { name: "Extra Paneer", r: "₹30", m: "₹60", l: "₹80" },
          { name: "Cheese Burst Crust", r: "₹50", m: "₹80", l: "₹120" }
        ],
        dips: [
          { name: "Cheesy Dip", price: "₹30", desc: "Rich and creamy cheese blend" },
          { name: "Tandoori Dip", price: "₹30", desc: "Smoky Indian tandoori spiced dip" },
          { name: "Chilly Garlic Dip", price: "₹30", desc: "Zesty garlic with red chilli kick" },
          { name: "Green Chilly Dip", price: "₹30", desc: "Spicy desi hari mirch dip" },
          { name: "Mayo Dip", price: "₹30", desc: "Smooth velvety eggless mayonnaise" },
          { name: "Salsa Dip", price: "₹30", desc: "Tangy Mexican tomato herb salsa" }
        ]
      },

      an_mania: {
        type: "cards",
        title: "Pizza Mania Range",
        items: [
          { name: "Onion Pizza", desc: "Single topping crunchy onion with mozzarella", price: "₹79" },
          { name: "Capsicum Pizza", desc: "Single topping fresh crisp green bell peppers", price: "₹89" },
          { name: "Corn Pizza", desc: "Single topping sweet golden corn with cheese", price: "₹89" },
          { name: "Onion & Corn Pizza", desc: "Double topping golden corn & crunchy onions", price: "₹99" },
          { name: "Onion & Jalapeno Pizza", desc: "Double topping spicy jalapenos & sliced onions", price: "₹99" },
          { name: "Onion & Capsicum Pizza", desc: "Double topping classic onion and capsicum combo", price: "₹99" },
          { name: "Jalapeno & Pineapple Pizza", desc: "Double topping sweet pineapple & hot jalapenos", price: "₹109", tag: "Sweet & Spicy" }
        ]
      },

      an_breads: {
        type: "cards",
        title: "Garlic Breads & More",
        items: [
          { name: "Garlic Bread", desc: "Bread baked with butter & garlic", price: "₹120" },
          { name: "Cheese Garlic Bread", desc: "Baked with Mozzarella Cheese, butter & garlic", price: "₹170" },
          { name: "Veg Garlic Bread", desc: "Baked with Onion, Capsicum, Mushroom, Mozzarella, Jalapeno & Butter Garlic", price: "₹190" },
          { name: "Stuffed Garlic Bread", desc: "Corn, Jalapeno & melted creamy Cheese", price: "₹180", tag: "Must Try" },
          { name: "Premium Stuffed Garlic Bread", desc: "Paneer, Onion, Corn, Jalapeno & Cheese", price: "₹210", tag: "Special" },
          { name: "Calzone", desc: "Pocket folded Italian pizza filled with stuffing & cheese", price: "₹140" },
          { name: "Taco", desc: "Crispy taco shell with spiced veg filling", price: "₹140" },
          { name: "Zingy Parcel", desc: "Golden pastry crust filled with tangy herb seasoned filling", price: "₹60" },
          { name: "Paneer Parcel", desc: "Golden pastry crust wrapped around spiced cottage cheese", price: "₹70" }
        ]
      },

      an_pastas: {
        type: "cards",
        title: "Pastas (Served with 2 pcs Garlic Bread)",
        items: [
          { name: "Arrabiata Pasta (Mix)", desc: "Boiled Pasta, Garlic, Corns, Capsicum, Mushroom, Chilly Flakes in in-house sauce + 2 Garlic Breads", price: "₹230" },
          { name: "White Sauce Pasta", desc: "Boiled Pasta, Corns, Capsicum, Mushroom, Chilly Flakes in creamy Alfredo sauce + 2 Garlic Breads", price: "₹230", tag: "Popular" },
          { name: "Makhani Pasta", desc: "Boiled Pasta, Garlic, Corns, Capsicum, Mushroom in creamy makhani sauce + 2 Garlic Breads", price: "₹250" },
          { name: "Tandoori Paneer Pasta", desc: "Boiled Pasta, Garlic, Corns, Capsicum, Mushroom, Paneer in smoky tandoori sauce + 2 Garlic Breads", price: "₹250" },
          { name: "Mix Bake Pasta", desc: "Boiled Pasta, Corns, Capsicum, Mushroom, Cheese baked in oven + 2 Garlic Breads", price: "₹280", tag: "Baked" },
          { name: "White Sauce Bake Pasta", desc: "Creamy pasta baked with thick golden mozzarella crust + 2 Garlic Breads", price: "₹280", tag: "Baked" }
        ]
      },

      an_burgers: {
        type: "cards",
        title: "Burgers, Sandwiches, Wraps & Subwraps",
        items: [
          { name: "Delight Burger", desc: "Crisp aloo patty, onion, fresh lettuce with house sauces", price: "₹60" },
          { name: "Crispy Burger", desc: "Crispy veg patty, onion, lettuce with house sauces", price: "₹70" },
          { name: "Achari Burger", desc: "Veg patty, pickle flavour, onion, lettuce with house sauces", price: "₹80" },
          { name: "Pasta Burger", desc: "Veg patty topped with pasta, onion, lettuce with sauces", price: "₹80" },
          { name: "Mint Burger", desc: "Veg patty infused with cool refreshing mint herb sauce", price: "₹80" },
          { name: "Tandoori Paneer Burger", desc: "Tandoori paneer slice, onion, lettuce with smoky sauce", price: "₹90" },
          { name: "Gym Lover Burger", desc: "Veg patty, Paneer slice, onion, cucumber, tomato, lettuce", price: "₹100" },
          { name: "Spicy Paneer Burger", desc: "Crispy spicy paneer patty, onion, lettuce with spicy dip", price: "₹110", tag: "Hot" },
          { name: "American Burger", desc: "Double patty, aloo patty, cucumber, tomato, lettuce & cheese", price: "₹130", tag: "Jumbo" },
          { name: "Cheese Corn Grill Sandwich", desc: "Golden sweet corn and melted mozzarella cheese", price: "₹150" },
          { name: "Farm Fresh Grill Sandwich", desc: "Crisp garden vegetables grilled to golden perfection", price: "₹160" },
          { name: "Pasta Grill Sandwich", desc: "Italian style creamy pasta stuffed inside grilled bread", price: "₹160" },
          { name: "Mint Grill Sandwich", desc: "Cool fresh mint chutney and grilled vegetable filling", price: "₹160" },
          { name: "Tandoori Paneer Grill Sandwich", desc: "Tandoori marinated paneer with capsicum & onion", price: "₹170", tag: "Popular" },
          { name: "Gym Lover Grill Sandwich", desc: "Protein-rich paneer slice, raw greens and low-calorie seasoning", price: "₹170" },
          { name: "Walaiti Special Grill Sandwich", desc: "Chef's signature jumbo triple-layer sandwich", price: "₹190", tag: "Signature" },
          { name: "Tikki Wrap", desc: "Tortilla wrapped with golden spiced veg tikki", price: "₹140" },
          { name: "Crispy Aaloo Wrap", desc: "Tortilla wrapped with extra crispy potato fingers and sauce", price: "₹150" },
          { name: "Makhani Pasta Wrap", desc: "Tortilla stuffed with pasta in creamy makhani gravy", price: "₹160" },
          { name: "Tandoori Paneer Wrap", desc: "Tortilla rolled with smoky tandoori paneer cubes", price: "₹170" },
          { name: "Spicy Paneer Wrap", desc: "Tortilla rolled with fiery spiced paneer and sauces", price: "₹190" },
          { name: "Simply Veg Subwrap", desc: "Fresh subwrap loaded with garden veggies and mozzarella", price: "₹140" },
          { name: "Veg Tikki Subwrap", desc: "Fresh subwrap with spiced veg patty and dressings", price: "₹150" },
          { name: "Paneer Tikka Subwrap", desc: "Fresh subwrap stuffed with tandoori paneer tikka (Add Cheese +₹20)", price: "₹160" }
        ]
      },

      an_chinese: {
        type: "cards",
        title: "Snacks, Chinese & Salads",
        items: [
          { name: "French Fries", desc: "Golden salted crispy fries", price: "₹80" },
          { name: "Peri Peri Fries", desc: "Tossed with fiery peri peri seasoning", price: "₹90" },
          { name: "Peri Peri Cheesy Fries", desc: "Peri peri fries drenched with hot cheese drizzle", price: "₹99", tag: "Hot" },
          { name: "Cheese Masala Fries", desc: "Crisp fries seasoned with chatpata masala & cheese", price: "₹99" },
          { name: "Peri Peri V Crisper (M / L)", desc: "V-cut crunchy potato crispers in peri peri seasoning", price: "M: ₹150 | L: ₹170" },
          { name: "Cheesy V Crisper (M / L)", desc: "V-cut potato crispers with warm cheese drizzle", price: "M: ₹170 | L: ₹190" },
          { name: "Manchurian (Dry / Gravy)", desc: "Crispy veg balls in tangy indo-chinese gravy", price: "₹220" },
          { name: "Cheese Chilli (Dry / Gravy)", desc: "Paneer cubes tossed with bell peppers & spicy sauce", price: "₹280", tag: "Best Seller" },
          { name: "Honey Chilli Potato", desc: "Crispy sesame coated potatoes glazed in spicy honey", price: "₹200" },
          { name: "Paneer Pops (20 Pcs)", desc: "Bite-sized crispy paneer nuggets with dip", price: "₹160" },
          { name: "Spring Rolls (2 Pcs)", desc: "Crispy golden fried vegetable rolls", price: "₹140" },
          { name: "Cheese Corn Roll (6 Pcs)", desc: "Golden fried crispy rolls packed with corn & cheese", price: "₹160" },
          { name: "Walaiti Special Noodles", desc: "Wok-tossed noodles with fresh shredded vegetables", price: "₹200", tag: "Popular" },
          { name: "Veg Manchow Soup", desc: "Dark spicy broth with vegetables and crispy fried noodles", price: "₹90" },
          { name: "Lemon Coriander Soup", desc: "Refreshing clear broth with fresh lemon juice & coriander", price: "₹110" },
          { name: "Veg Salad", desc: "Healthy salad loaded with garden fresh vegetables", price: "₹180" },
          { name: "Pasta Salad", desc: "Healthy salad infused with vegetables and chilled pasta", price: "₹190" },
          { name: "High Protein Salad", desc: "Loaded with fresh paneer & legumes (GYM Special)", price: "₹210", tag: "Fitness" }
        ]
      },

      an_shakes: {
        type: "cards",
        title: "Milkshakes & Cold Coffee (Adarsh Nagar)",
        items: [
          { name: "Bubble Gum Shake", desc: "Fun nostalgic sweet bubble gum flavoured shake", price: "₹139" },
          { name: "Mango Shake", desc: "Thick tropical alphanso mango shake", price: "₹139" },
          { name: "Vanilla Shake", desc: "Smooth classic French vanilla shake", price: "₹139" },
          { name: "Strawberry Shake", desc: "Sweet berry infused creamy shake", price: "₹139" },
          { name: "Butterscotch Shake", desc: "Crunchy butterscotch praline shake", price: "₹139" },
          { name: "Black Currant Shake", desc: "Tangy sweet black currant shake", price: "₹139" },
          { name: "Chocolate Shake", desc: "Rich Dutch cocoa chocolate shake", price: "₹139" },
          { name: "Cold Coffee", desc: "Frothy chilled coffee brewed fresh", price: "₹139", tag: "Bestseller" },
          { name: "Caramel Coffee", desc: "Blended iced coffee with golden caramel drizzle", price: "₹149" },
          { name: "Oreo Shake (Premium)", desc: "Loaded with crunchy crushed Oreo cookies & cream", price: "₹159", tag: "Premium" },
          { name: "KitKat Shake (Premium)", desc: "Blended with crispy chocolate KitKat wafers", price: "₹159", tag: "Premium" },
          { name: "Brownie Shake (Premium)", desc: "Fudgy chocolate brownie blended into thick shake", price: "₹159", tag: "Premium" },
          { name: "Red Velvet Shake (Premium)", desc: "Smooth red velvet cake blended milkshake", price: "₹159", tag: "Premium" },
          { name: "Blue Croco Cheesecake Shake (Premium)", desc: "Signature gourmet shake with authentic cheesecake base", price: "₹159", tag: "Signature" },
          { name: "Creamy Saffron Shake (Premium)", desc: "Exotic rich kesar flavour with velvety cream", price: "₹159", tag: "Royal" },
          { name: "Strawberry with Oreo (Premium)", desc: "Delicious blend of strawberry and Oreo cookies", price: "₹159", tag: "Premium" },
          { name: "Peanut Butter Shake (Premium)", desc: "Rich protein peanut butter blended thick", price: "₹159", tag: "Premium" },
          { name: "Caramel Shake (Premium)", desc: "Sweet golden caramel blended shake", price: "₹159", tag: "Premium" }
        ]
      },

      an_drinks: {
        type: "cards",
        title: "Drinks, Mojitos & Ice Teas (Adarsh Nagar)",
        items: [
          { name: "Virgin Mojito", desc: "Fresh mint, lime juice, sugar and sparkling soda", price: "₹119", tag: "Bestseller" },
          { name: "Blueberry Mojito", desc: "Crushed blueberries with mint and sparkling soda", price: "₹119" },
          { name: "Green Apple Mojito", desc: "Crisp green apple flavour with mint fizz", price: "₹119" },
          { name: "Watermelon Mojito", desc: "Refreshing sweet watermelon with mint and lime", price: "₹119" },
          { name: "Strawberry Mojito", desc: "Sweet strawberry syrup, mint and fizzy soda", price: "₹119" },
          { name: "Spicy Mango Mocktail", desc: "Sweet mango puree with spicy tangy chili notes", price: "₹139", tag: "Special" },
          { name: "Black Currant Mocktail", desc: "Exotic black currant fruit cooler", price: "₹139" },
          { name: "Green Apple Ice-Tea", desc: "Chilled brewed black tea with green apple flavour", price: "₹119" },
          { name: "Strawberry Ice-Tea", desc: "Chilled iced tea infused with sweet strawberry", price: "₹119" },
          { name: "Peach Ice-Tea", desc: "Classic peach flavoured iced tea", price: "₹119", tag: "Popular" },
          { name: "Lemon Ice-Tea", desc: "Citrus lemon brewed iced tea over ice", price: "₹119" },
          { name: "Lemonade", desc: "Classic sweet and salted fresh lemon cooler", price: "₹70" },
          { name: "Fruit Beer", desc: "Sparkling non-alcoholic fruit beer", price: "₹80" },
          { name: "Pepsi / Cold Drink", desc: "Chilled soft drink can/bottle", price: "MRP" }
        ]
      },

      an_hot: {
        type: "cards",
        title: "Tea, Coffee & Hot Chocolate Milk (Adarsh Nagar)",
        items: [
          { name: "Hot Tea (Milk Tea)", desc: "Freshly brewed Indian milk tea (Add Jaggery +₹20)", price: "₹70" },
          { name: "Express Coffee", desc: "Steaming hot freshly brewed espresso milk coffee", price: "₹80", tag: "Hot Pick" },
          { name: "Hot Chocolate Milk", desc: "Rich velvety warm cocoa milk with sweet chocolate notes", price: "₹129", tag: "Comfort" }
        ]
      },

      an_combos_desserts: {
        type: "cards",
        title: "Combos & Desserts (Adarsh Nagar)",
        items: [
          { name: "Combo 1: Crispy Burger + Fries + Fruit Beer", desc: "Complete solo meal deal", price: "₹200", tag: "Combo 1" },
          { name: "Combo 2: Farm Fresh Pizza (R) + Fries + Fruit Beer", desc: "Regular pizza meal with sides & drink", price: "₹300", tag: "Combo 2" },
          { name: "Combo 3: Veg Salad + Gym Lover Sandwich + Lemonade", desc: "Nutritious fitness friendly meal", price: "₹400", tag: "Combo 3" },
          { name: "Combo 4: Arrabiata Pasta + Stuffed Garlic Bread + Virgin Mojito", desc: "Italian feast with bread & mocktail", price: "₹490", tag: "Combo 4" },
          { name: "Combo 5: Farm Fresh Pizza (M) + Stuffed Garlic Bread + Virgin Mojito", desc: "Medium pizza meal with stuffed bread", price: "₹580", tag: "Combo 5" },
          { name: "Combo 6: Farm Fresh Pizza (L) + Stuffed Garlic Bread + 2 Virgin Mojitos", desc: "Large family feast combo for 3-4 people", price: "₹830", tag: "Family Pack" },
          { name: "Vanilla Ice Cream", desc: "Cool classic vanilla scoop", price: "₹50" },
          { name: "Choco Lava Cake", desc: "Warm baked cake with gooey molten chocolate center", price: "₹70" },
          { name: "Choco Lava Cake with Ice Cream", desc: "Hot molten lava cake paired with chilled vanilla", price: "₹90", tag: "Popular" },
          { name: "Brownie with Hot Chocolate", desc: "Warm fudge brownie drenched in steaming chocolate fudge", price: "₹110" },
          { name: "Brownie with Ice Cream", desc: "Warm brownie paired with rich vanilla ice cream", price: "₹130" }
        ]
      }
    }
  },

  // ==========================================================
  // MODEL TOWN OUTLET (12 Pages Menu)
  // ==========================================================
  modelTown: {
    name: "Model Town Outlet",
    tagline: "Mall Road · Near Parveen Bakery",
    address: "Plot No 615-L Mall Road, Model Town, Near Parveen Bakery, Jalandhar City",
    phones: ["+91 95177-27177", "+91 91155-94155"],
    pdf: "menus/menu-model-town.pdf",
    totalPages: 12,
    imgFolder: "menu_model_town",
    waPhone: "919517727177",

    // Dynamic Category Definitions for Model Town
    categories: [
      { id: "mt_pizzas", name: "Pizzas & Thin Crust Pesto", icon: "fa-pizza-slice" },
      { id: "mt_atta", name: "Atta Pizzas & Breads", icon: "fa-wheat-awn" },
      { id: "mt_upgrades_dips", name: "Upgrades & Dips", icon: "fa-wand-magic-sparkles" },
      { id: "mt_breads", name: "Garlic Breads & Calzones", icon: "fa-bread-slice" },
      { id: "mt_pastas", name: "Pastas (Pesto, Alfredo, Bakes)", icon: "fa-bowl-rice" },
      { id: "mt_burgers", name: "Burgers, Sandwiches, Wraps & Subs", icon: "fa-burger" },
      { id: "mt_chinese", name: "Snacks, Chinese & Salads", icon: "fa-bowl-food" },
      { id: "mt_shakes", name: "Milkshakes (Classic & Premium)", icon: "fa-blender" },
      { id: "mt_frappes", name: "Frappes", icon: "fa-glass-water" },
      { id: "mt_matchas", name: "Matcha Lattes", icon: "fa-leaf" },
      { id: "mt_coffees", name: "Iced & Hot Coffees", icon: "fa-mug-hot" },
      { id: "mt_teas", name: "Hot Flavoured Teas", icon: "fa-heart" },
      { id: "mt_drinks", name: "Drinks, Chilli Guava & Mojitos", icon: "fa-champagne-glasses" },
      { id: "mt_desserts", name: "Desserts & Sundaes", icon: "fa-ice-cream" }
    ],

    // Data for Model Town
    sections: {
      mt_pizzas: {
        type: "pizza_table",
        title: "Pizzas (Model Town)",
        description: "Freshly tossed crusts with premium toppings, including our new signature Thin Crust Pesto Pizza.",
        items: [
          { name: "Margherita", desc: "Classic tomato sauce and mozzarella cheese", r: 170, m: 300, l: 430, tag: "Classic" },
          { name: "Cheese & Mushroom", desc: "Mozzarella and fresh sliced button mushrooms", r: 170, m: 300, l: 430 },
          { name: "Onion & Tomato", desc: "Crunchy onion and ripe fresh tomatoes with herbs", r: 170, m: 300, l: 430 },
          { name: "Cheese & Corn", desc: "Golden sweet corn kernels smothered in mozzarella", r: 170, m: 300, l: 430, tag: "Popular" },
          { name: "Achari Pizza", desc: "Capsicum, Corn, Paneer with zesty achari spices", r: 200, m: 340, l: 500 },
          { name: "Farm Fresh Pizza", desc: "Onion, Capsicum, Tomato, Mushroom", r: 200, m: 340, l: 500, tag: "Best Seller" },
          { name: "Tandoori Paneer", desc: "Onion, Capsicum, marinated Tandoori Paneer", r: 200, m: 340, l: 500, tag: "Chef Special" },
          { name: "Spicy Paneer Pizza", desc: "Capsicum, Red Paprika, and tender spicy Paneer", r: 230, m: 400, l: 560 },
          { name: "Pasta Pizza", desc: "Onion, Capsicum, Mushroom, and creamy pasta", r: 230, m: 400, l: 560 },
          { name: "Veg Deluxe Pizza", desc: "Onion, Capsicum, Mushroom, Corn, Paneer", r: 230, m: 400, l: 560 },
          { name: "Black & White Pizza", desc: "Jalapeno, Black Olive, Sweet Corn, and Extra Cheese", r: 230, m: 400, l: 560 },
          { name: "Mix Veg Pizza", desc: "Onion, Capsicum, Tomato, Mushroom, Corn, Black Olives, Jalapeno & Extra Cheese", r: 260, m: 480, l: 650, tag: "Signature" },
          { name: "Veg Supreme Pizza", desc: "Capsicum, Mushroom, Corn, Paneer, Jalapeno, Red Pepper & Extra Cheese", r: 260, m: 480, l: 650, tag: "Top Pick" },
          { name: "Pesto Pizza (Thin Crust)", desc: "Pesto sauce, Onion, Capsicum, Mushroom, Paneer, Mozzarella Cheese (9\" / 12\")", customPrice: "9\" : ₹550 | 12\" : ₹700", tag: "New Add" }
        ]
      },

      mt_atta: {
        type: "pizza_table",
        title: "Atta (Whole Wheat) Pizzas & Atta Garlic Breads",
        description: "100% whole wheat crusts baked crisp with farm-fresh vegetables and cheese.",
        items: [
          { name: "Atta Margherita Pizza", desc: "100% whole wheat crust with fresh mozzarella & herbs", r: 180, m: 320, l: 460, tag: "Healthy" },
          { name: "Atta Cheese Corn", desc: "Whole wheat base topped with golden sweet corn & mozzarella", r: 190, m: 330, l: 480 },
          { name: "Atta Farm House Pizza", desc: "Onion, Capsicum, Corn, Tomato, Mushroom on whole wheat", r: 220, m: 400, l: 550, tag: "Popular" },
          { name: "Atta Kadhai Paneer Pizza", desc: "Onion, Capsicum, spiced Kadhai Paneer on atta base", r: 220, m: 400, l: 550 },
          { name: "Atta Peri Peri Paneer Pizza", desc: "Onion, Capsicum, Mushroom, Red Pepper, Peri Peri Paneer", r: 240, m: 440, l: 580 },
          { name: "Atta Makhani Pasta Pizza", desc: "Onion, Capsicum, Mushroom, Pasta on whole wheat crust", r: 240, m: 440, l: 580 },
          { name: "Atta Super Veg", desc: "Onion, Capsicum, Corn, Mushroom, Red Pepper, Black Olives, Jalapeno", r: 270, m: 520, l: 680, tag: "Signature" },
          { name: "Atta Stuffed Garlic Bread", desc: "Whole wheat garlic bread stuffed with Corn, Jalapeno, Cheese", price: "₹220" },
          { name: "Atta Premium Stuffed Garlic Bread", desc: "Whole wheat garlic bread with Onion, Paneer, Corn, Jalapeno, Cheese", price: "₹250", tag: "Special" }
        ]
      },

      mt_upgrades_dips: {
        type: "upgrades_dips",
        upgrades: [
          { name: "Extra Toppings", r: "₹30", m: "₹40", l: "₹60" },
          { name: "Extra Cheese", r: "₹30", m: "₹60", l: "₹80" },
          { name: "Extra Paneer", r: "₹30", m: "₹60", l: "₹80" },
          { name: "Cheese Burst Crust", r: "₹50", m: "₹80", l: "₹120" }
        ],
        dips: [
          { name: "Cheesy Dip", price: "₹30", desc: "Rich and creamy cheese blend" },
          { name: "Tandoori Dip", price: "₹30", desc: "Smoky Indian tandoori spiced dip" },
          { name: "Chilly Garlic Dip", price: "₹30", desc: "Zesty garlic with red chilli kick" },
          { name: "Green Chilly Dip", price: "₹30", desc: "Spicy desi hari mirch dip" },
          { name: "Mayo Dip", price: "₹30", desc: "Smooth velvety eggless mayonnaise" },
          { name: "Salsa Dip", price: "₹30", desc: "Tangy Mexican tomato herb salsa" }
        ]
      },

      mt_breads: {
        type: "cards",
        title: "Garlic Breads & More",
        items: [
          { name: "Garlic Bread", desc: "Artisan bread baked with butter & garlic", price: "₹130" },
          { name: "Cheese Garlic Bread", desc: "Baked with Mozzarella Cheese, butter & garlic", price: "₹190" },
          { name: "Veg Garlic Bread", desc: "Baked with Onion, Capsicum, Mushroom, Mozzarella, Jalapeno & Garlic Butter", price: "₹200" },
          { name: "Stuffed Garlic Bread", desc: "Stuffed with Corn, Jalapeno & melted Cheese", price: "₹200", tag: "Must Try" },
          { name: "Premium Stuffed Garlic Bread", desc: "Stuffed with Paneer, Onion, Corn, Jalapeno & Cheese", price: "₹230", tag: "Special" },
          { name: "Calzone", desc: "Pocket folded Italian pizza filled with stuffing & cheese", price: "₹160" },
          { name: "Taco", desc: "Crispy taco shell with seasoned veg filling", price: "₹160" }
        ]
      },

      mt_pastas: {
        type: "cards",
        title: "Pastas (Served with 2 pcs Garlic Bread)",
        items: [
          { name: "Pesto Pasta", desc: "Boiled pasta with corn, capsicum, mushrooms, cheese tossed in in-house basil sauce + 2 Garlic Breads", price: "₹300", tag: "Chef Special" },
          { name: "Arrabiata Pasta (Mix)", desc: "Boiled pasta, garlic, corns, capsicum, mushroom, chilly flakes, in-house red sauce + 2 Garlic Breads", price: "₹250" },
          { name: "White Sauce Pasta", desc: "Boiled pasta, corns, capsicum, mushroom, creamy Alfredo sauce + 2 Garlic Breads", price: "₹250", tag: "Popular" },
          { name: "Makhani Pasta", desc: "Boiled pasta, garlic, corns, capsicum, mushroom in rich butter makhani sauce + 2 Garlic Breads", price: "₹270" },
          { name: "Tandoori Paneer Pasta", desc: "Boiled pasta, garlic, corns, capsicum, mushroom, paneer, chilly flakes in tandoori sauce + 2 Garlic Breads", price: "₹280" },
          { name: "Mix Sauce Bake Pasta", desc: "Pasta with corn, capsicum, mushroom, extra cheese baked golden in oven + 2 Garlic Breads", price: "₹300", tag: "Baked" },
          { name: "White Sauce Baked Pasta", desc: "Creamy Alfredo pasta baked with melted mozzarella crust + 2 Garlic Breads", price: "₹300", tag: "Baked" }
        ]
      },

      mt_burgers: {
        type: "cards",
        title: "Burgers, Sandwiches, Wraps & Subs",
        items: [
          { name: "Delight Burger", desc: "Aloo patty, onion, fresh lettuce with house sauces", price: "₹70" },
          { name: "Crispy Burger", desc: "Crisp vegetable patty, onion, lettuce with house sauces", price: "₹80" },
          { name: "Achari Burger", desc: "Veg patty, gherkins pickle, onion, lettuce with tangy sauce", price: "₹90" },
          { name: "Pasta Burger", desc: "Veg patty topped with pasta, onion, lettuce with house sauces", price: "₹90" },
          { name: "Tandoori Burger", desc: "Roasted paneer cubes, onion, lettuce with smoky tandoori sauce", price: "₹100" },
          { name: "Gym Burger", desc: "Veg patty, Paneer slice, onion, cucumber, tomato, lettuce", price: "₹110" },
          { name: "Spicy Paneer Burger", desc: "Spicy crisp paneer patty, onion, lettuce with spicy dip", price: "₹120", tag: "Hot" },
          { name: "American Burger", desc: "Double paneer patty, aloo patty, cucumber, tomato, lettuce & cheese", price: "₹140", tag: "Jumbo" },
          { name: "Pesto Sandwich", desc: "Pesto sauce, onion, capsicum, mushrooms, paneer, and mozzarella", price: "₹250", tag: "New Add" },
          { name: "Walaiti Special Sandwich", desc: "Paneer cubes, mushroom, black olives, onion, capsicum, sweet corn, mozzarella", price: "₹220", tag: "Signature" },
          { name: "Mushroom Sandwich", desc: "Roasted mushroom, onion, capsicum, mozzarella cheese with house sauces", price: "₹220" },
          { name: "Gym Lover Sandwich", desc: "Fresh paneer slice, onion, cucumber, tomato with nutritious house sauces", price: "₹200" },
          { name: "Tandoori Sandwich", desc: "Roast paneer cubes, onion, capsicum, mozzarella with tandoori spices", price: "₹200" },
          { name: "Farm Fresh Sandwich", desc: "Onion, capsicum, sweet corn, mozzarella cheese with house sauces", price: "₹180" },
          { name: "Cheese Corn Sandwich", desc: "Sweet corn and loaded melted mozzarella cheese", price: "₹170" },
          { name: "Spicy Paneer Wrap", desc: "Tortilla, spicy paneer patty, onion, lettuce with house sauces", price: "₹190" },
          { name: "Tandoori Wrap", desc: "Roast paneer cube, onion, lettuce with tandoori dressing", price: "₹180" },
          { name: "Makhani Pasta Wrap", desc: "Tortilla, cooked creamy pasta, onion, lettuce with sauces", price: "₹170" },
          { name: "Tikki Wrap", desc: "Tortilla, crisp veg patty, onion, lettuce with house sauces", price: "₹150" },
          { name: "Simply Veg Sub", desc: "Onion, cucumber, tomato, corn, capsicum, lettuce, mozzarella cheese", price: "₹150" },
          { name: "Veg Tikki Sub", desc: "Veg patty, onion, cucumber, tomato, corn, capsicum, lettuce, mozzarella", price: "₹160" },
          { name: "Paneer Tikka Sub", desc: "Marinated paneer, onion, cucumber, tomato, corn, capsicum, lettuce, mozzarella", price: "₹170" }
        ]
      },

      mt_chinese: {
        type: "cards",
        title: "Snacks, Chinese & Salads",
        items: [
          { name: "French Fries", desc: "Crisp salted golden potato fries", price: "₹170" },
          { name: "Peri Peri Fries", desc: "Crispy fries tossed with fiery African peri peri seasoning", price: "₹180" },
          { name: "Peri Peri Cheesy Fries", desc: "Peri peri fries drenched in warm melted cheese sauce", price: "₹200", tag: "Hot" },
          { name: "Cheese Masala Fries", desc: "Crispy fries seasoned with chatpata masala & cheese", price: "₹200" },
          { name: "Peri Peri V Crisper (M / L)", desc: "V-cut crunchy potato crispers in peri peri seasoning", price: "M: ₹180 | L: ₹200" },
          { name: "Cheesy V Crisper (M / L)", desc: "V-cut potato crispers loaded with warm cheese sauce", price: "M: ₹180 | L: ₹200" },
          { name: "Walaiti Special Noodles", desc: "Chef's signature wok-tossed noodles with garden vegetables", price: "₹250", tag: "Popular" },
          { name: "Honey Chilli Potato", desc: "Crisp potato fingers glazed in spicy sweet honey sesame glaze", price: "₹200" },
          { name: "Cheese Chilli (Dry / Gravy)", desc: "Wok tossed paneer cubes with bell peppers & spicy oriental sauce", price: "₹300", tag: "Best Seller" },
          { name: "Veg Manchurian (Dry / Gravy)", desc: "Crisp vegetable dumplings tossed in tangy soya garlic gravy", price: "₹180" },
          { name: "Mushroom Chilli", desc: "Button mushrooms stir-fried with capsicum and spicy chilli sauce", price: "₹200" },
          { name: "Spring Rolls (2 Pcs)", desc: "Crispy golden fried rolls stuffed with shredded vegetables", price: "₹180" },
          { name: "Paneer Pops (20 Pcs)", desc: "Bite-sized crunchy paneer nuggets with dipping sauce", price: "₹230" },
          { name: "Cheese Corn Roll (6 Pcs)", desc: "Crisp rolls packed with gooey sweet corn and mozzarella", price: "₹250" },
          { name: "Fried Rice / Schezwan Fried Rice", desc: "Wok tossed aromatic basmati rice with veggies / spicy Schezwan", price: "₹100 / ₹110" },
          { name: "High Protein Salad", desc: "Fresh paneer, boiled legumes, crunchy greens (GYM Special)", price: "₹220", tag: "Fitness" },
          { name: "Pasta Salad", desc: "Chilled pasta tossed with seasonal vegetables & herb dressing", price: "₹190" },
          { name: "Veg Salad", desc: "Garden fresh crispy lettuce, cucumber, tomato & olives", price: "₹180" }
        ]
      },

      mt_shakes: {
        type: "cards",
        title: "Milkshakes (Classic & Premium)",
        items: [
          { name: "Bubble Gum Shake", desc: "Sweet nostalgic bubble gum milkshake", price: "₹149" },
          { name: "Mango Shake", desc: "Sweet mango puree blended thick", price: "₹149" },
          { name: "Vanilla Shake", desc: "Classic velvety French vanilla shake", price: "₹149" },
          { name: "Strawberry Shake", desc: "Sweet strawberry berry flavoured shake", price: "₹149" },
          { name: "Butterscotch Shake", desc: "Sweet butterscotch crunch shake", price: "₹149" },
          { name: "Black Currant Shake", desc: "Rich purple black currant shake", price: "₹149" },
          { name: "Chocolate Shake", desc: "Indulgent Dutch chocolate shake", price: "₹149" },
          { name: "Oreo Shake (Premium)", desc: "Thick vanilla shake loaded with crushed Oreo cookies", price: "₹179", tag: "Top Pick" },
          { name: "KitKat Shake (Premium)", desc: "Creamy shake blended with crispy KitKat bars", price: "₹179" },
          { name: "Brownie Shake (Premium)", desc: "Decadent fudge brownie blended with rich chocolate milk", price: "₹179" },
          { name: "Red Velvet Shake (Premium)", desc: "Velvety cake shake with creamy vanilla undertones", price: "₹179" },
          { name: "Blue Croco Cheesecake Shake (Premium)", desc: "Signature gourmet shake with authentic cheesecake flavour", price: "₹179", tag: "Signature" },
          { name: "Strawberry with Oreo Shake (Premium)", desc: "Sweet strawberry swirls combined with crunchy Oreo bits", price: "₹179" },
          { name: "Caramel Shake (Premium)", desc: "Smooth blended shake drizzled with sweet golden caramel", price: "₹179" }
        ]
      },

      mt_frappes: {
        type: "cards",
        title: "Frappes (Model Town Exclusive)",
        items: [
          { name: "Choco Frappe", desc: "A creamy blend of rich chocolate and coffee, topped with ice cream", price: "₹199" },
          { name: "Caramel Frappe", desc: "A delightful blend of ice cream and cold coffee, infused with rich caramel", price: "₹199" },
          { name: "Hazelnut Frappe", desc: "A deliciously blended ice cream coffee drink infused with rich hazelnut flavor", price: "₹199" },
          { name: "Irish Frappe", desc: "Bold espresso blended with Irish cream essence and ice cream", price: "₹199" },
          { name: "Brownie Frappe", desc: "Rich chocolate brownie chunks blended into thick iced coffee", price: "₹219" },
          { name: "Nutella Frappe", desc: "A creamy and indulgent blend of espresso and Nutella, topped with ice cream", price: "₹229", tag: "Chef Special" },
          { name: "Biscoff Frappe", desc: "A deliciously creamy blend infused with caramelized Lotus Biscoff spread", price: "₹229", tag: "Top Rated" }
        ]
      },

      mt_matchas: {
        type: "cards",
        title: "Matcha Lattes (Model Town Exclusive)",
        items: [
          { name: "Iced Matcha Latte", desc: "Authentic premium Japanese green tea matcha whisked with chilled milk", price: "₹200", tag: "Superfood" },
          { name: "Mango Matcha Latte", desc: "Layered drink with sweet mango compote, cold milk, and rich green matcha", price: "₹250", tag: "Special" },
          { name: "Strawberry Matcha Latte", desc: "Fresh sweet strawberry puree layered with velvety cold milk and ceremonial matcha", price: "₹250", tag: "Special" }
        ]
      },

      mt_coffees: {
        type: "cards",
        title: "Iced & Hot Coffees, Hot Chocolates",
        items: [
          { name: "Iced Americano", desc: "Chilled double espresso and cold water over ice for a bold pick-me-up", price: "₹149" },
          { name: "Iced Cappuccino", desc: "Chilled espresso, frothy cold milk, and a dusting of cocoa", price: "₹169" },
          { name: "Iced Latte", desc: "Chilled espresso and smooth cold milk over ice", price: "₹149" },
          { name: "Iced Mocha", desc: "Chilled espresso, creamy milk, and rich chocolate syrup over ice", price: "₹169" },
          { name: "Iced Caramel", desc: "Rich layers of espresso, milk, and sweet golden caramel over ice", price: "₹169" },
          { name: "Iced Hazelnut", desc: "Chilled coffee infused with rich nutty hazelnut flavor over ice", price: "₹169" },
          { name: "Espresso (Hot)", desc: "Brewed fresh from roasted whole coffee beans", price: "₹79" },
          { name: "Americano (Hot)", desc: "Robust and invigorating double shot hot coffee", price: "₹99" },
          { name: "Cappuccino (Hot)", desc: "Velvety blend of espresso, steamed milk, and creamy foam layer", price: "₹139", tag: "Classic" },
          { name: "Cafe Latte (Hot)", desc: "Comforting combination of espresso and steamed milk with thin foam", price: "₹149" },
          { name: "Caffe Mocha (Hot)", desc: "Rich blend of espresso, steamed milk, and velvety dark chocolate", price: "₹159" },
          { name: "Flat White (Hot)", desc: "Double shot espresso with silky micro-foam milk", price: "₹139" },
          { name: "French Vanilla Cappuccino (Hot)", desc: "Cappuccino infused with aromatic French vanilla", price: "₹149" },
          { name: "Biscoff Latte (Hot)", desc: "Creamy espresso blended with spiced Lotus Biscoff spread", price: "₹179", tag: "Special" },
          { name: "Special Jaggery Latte (Hot)", desc: "Desi gur jaggery infused healthy milk latte", price: "₹159" },
          { name: "Turmeric Latte (Hot)", desc: "Immunity boosting golden turmeric steamed milk", price: "₹139" },
          { name: "Hot Chocolate", desc: "Rich creamy hot chocolate made with premium cocoa and fresh milk", price: "₹139", tag: "Comfort" },
          { name: "Tiramisu Hot Chocolate", desc: "Rich cocoa dusted with mascarpone tiramisu essence", price: "₹159" },
          { name: "Hazelnut Hot Chocolate", desc: "Nutty and indulgent hot chocolate with roasted hazelnut", price: "₹159" }
        ]
      },

      mt_teas: {
        type: "cards",
        title: "Hot Flavoured Teas (Without Milk / With Milk)",
        items: [
          { name: "Paan Tea", desc: "Fragrant sweet paan betel leaf infused tea", price: "₹60" },
          { name: "Rose Tea", desc: "Fragrant rose petal flavoured tea", price: "₹60" },
          { name: "Elaichi Tea", desc: "Aromatic green cardamom infused chai", price: "₹70" },
          { name: "Kesar Tea", desc: "Royal Kashmiri saffron infused tea", price: "₹60" },
          { name: "Ginger Tea", desc: "Invigorating fresh adrak ginger tea", price: "₹60" },
          { name: "Masala Tea", desc: "Authentic Indian masala spiced chai", price: "₹60" },
          { name: "Special Masala Tea", desc: "Chef's signature blend of 7 whole spices in fresh chai", price: "₹80", tag: "Top Pick" },
          { name: "Chocolate Tea", desc: "Steaming hot tea infused with chocolate flavours", price: "₹60" },
          { name: "Green Tea", desc: "Pure organic soothing green tea", price: "₹90" },
          { name: "Lemon Honey Tea", desc: "Warm soothing tea with natural honey and fresh lemon", price: "₹90" },
          { name: "Note: Add Jaggery (Desi Gur)", desc: "Swap sugar for healthy desi jaggery in any hot tea", price: "+₹20" }
        ]
      },

      mt_drinks: {
        type: "cards",
        title: "Drinks, Mojitos & Chilli Guava",
        items: [
          { name: "Chilli Guava Drink", desc: "Spiced guava juice with a zesty chilli salt glass rim", price: "₹199", tag: "New Add" },
          { name: "Virgin Mojito", desc: "Sparkling soda with freshly crushed mint and lime", price: "₹139", tag: "Bestseller" },
          { name: "Blueberry Mojito", desc: "Fizzy blueberry cooler with mint and lemon", price: "₹139" },
          { name: "Green Apple Mojito", desc: "Tangy green apple syrup with sparkling soda and mint", price: "₹139" },
          { name: "Watermelon Mojito", desc: "Sweet watermelon cooler with crushed mint leaves", price: "₹139" },
          { name: "Strawberry Mojito", desc: "Sweet strawberry cooler with fizzy soda", price: "₹139" },
          { name: "Spicy Mango Mocktail", desc: "Tropical mango juice infused with chatpata spices", price: "₹149", tag: "Special" },
          { name: "Black Currant Mocktail", desc: "Exotic chilled black currant cooler", price: "₹149" },
          { name: "Green Apple Ice-Tea", desc: "Chilled iced tea infused with green apple", price: "₹139" },
          { name: "Strawberry Ice-Tea", desc: "Chilled brewed black tea with strawberry flavour", price: "₹139" },
          { name: "Peach Ice-Tea", desc: "Aromatic peach iced tea served over ice", price: "₹139" },
          { name: "Lemon Ice-Tea", desc: "Classic fresh citrus lemon brewed iced tea", price: "₹139" },
          { name: "Lemonade", desc: "Sweet and salted fresh nimbu pani", price: "₹129" },
          { name: "Fruit Beer", desc: "Crisp non-alcoholic fruit beer", price: "₹109" },
          { name: "Pepsi Can", desc: "Chilled 300ml cold drink can", price: "₹80" }
        ]
      },

      mt_desserts: {
        type: "cards",
        title: "Desserts & Sundaes (Model Town)",
        items: [
          { name: "Vanilla Ice Cream", desc: "Creamy double scoop vanilla", price: "₹60" },
          { name: "Choco Lava Cake", desc: "Warm baked cake with molten chocolate core", price: "₹80" },
          { name: "Choco Lava Cake with Ice Cream", desc: "Warm gooey lava cake paired with cool vanilla scoop", price: "₹110", tag: "Bestseller" },
          { name: "Brownie with Hot Chocolate", desc: "Fudge brownie drenched in steaming hot chocolate fudge", price: "₹120" },
          { name: "Brownie with Ice Cream", desc: "Warm brownie topped with rich vanilla ice cream", price: "₹150" },
          { name: "Strawberry Dream Cup", desc: "Layered strawberry dessert sundae with cream", price: "₹200", tag: "Special" },
          { name: "Brownie Blast Mug", desc: "Jumbo dessert mug loaded with brownie, chocolate & ice cream", price: "₹200", tag: "Chef Special" }
        ]
      }
    }
  }
};

// Global State
let currentOutlet = 'modelTown';
let currentCategory = '';
let currentViewMode = 'grid';
let currentSearchTerm = '';

// Image thumbnails for menu items
const getItemImage = (itemName = '') => {
    const name = itemName.toLowerCase();
    if (name.includes('pizza')) return 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=300&q=80';
    if (name.includes('burger') || name.includes('sandwich') || name.includes('wrap')) return 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&q=80';
    if (name.includes('fries') || name.includes('potato') || name.includes('snack')) return 'https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=300&q=80';
    if (name.includes('shake') || name.includes('coffee') || name.includes('mojito') || name.includes('ice tea')) return 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=300&q=80';
    if (name.includes('pasta') || name.includes('noodle')) return 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=300&q=80';
    if (name.includes('dessert') || name.includes('cake') || name.includes('brownie') || name.includes('ice cream')) return 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=300&q=80';
    return 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=300&q=80';
  };

function getCategoryImage(catId) {
  const imageMap = {
    an_pizzas: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80',
    an_atta: 'https://images.unsplash.com/photo-1548365328-9f547fb9587c?auto=format&fit=crop&w=400&q=80',
    an_upgrades_dips: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=400&q=80',
    an_mania: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
    an_breads: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80',
    an_pastas: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=400&q=80',
    an_burgers: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80',
    an_chinese: 'https://images.unsplash.com/photo-1557872943-16a0d1f7b4e0?auto=format&fit=crop&w=400&q=80',
    an_shakes: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=400&q=80',
    an_drinks: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=400&q=80',
    an_hot: 'https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=400&q=80',
    an_combos_desserts: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80',

    mt_pizzas: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80',
    mt_atta: 'https://images.unsplash.com/photo-1548365328-9f547fb9587c?auto=format&fit=crop&w=400&q=80',
    mt_upgrades_dips: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=400&q=80',
    mt_breads: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80',
    mt_pastas: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=400&q=80',
    mt_burgers: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80',
    mt_chinese: 'https://images.unsplash.com/photo-1557872943-16a0d1f7b4e0?auto=format&fit=crop&w=400&q=80',
    mt_shakes: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=400&q=80',
    mt_frappes: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=400&q=80',
    mt_matchas: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=400&q=80',
    mt_coffees: 'https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=400&q=80',
    mt_teas: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=400&q=80',
    mt_drinks: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=400&q=80',
    mt_desserts: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80'
  };

  return imageMap[catId] || 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80';
}