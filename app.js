/* ============================================================
   WALAITI FOOD – PIZZA & CAFÉ
   Complete 100% Comprehensive Digital Menu System
   ============================================================ */

const outletsData = {
  // ==========================================
  // MODEL TOWN OUTLET
  // ==========================================
  modelTown: {
    name: "Model Town Outlet",
    tagline: "Mall Road · Jalandhar City",
    address: "Plot No 615-L Mall Road, Model Town, Near Parveen Bakery, Jalandhar City",
    phones: ["+91 95177-27177", "+91 91155-94155"],
    pdf: "menus/menu-model-town.pdf",
    totalPages: 12,
    imgFolder: "menu_model_town",
    
    // 1. Classic Pizzas
    classicPizzas: [
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
      { name: "Pesto Pizza (Thin Crust)", desc: "Pesto sauce, Onion, Capsicum, Mushroom, Paneer, Mozzarella Cheese (9\" / 12\")", customPrice: "9\": ₹550 | 12\": ₹700", tag: "New Add" }
    ],

    // 2. Atta Pizzas & Atta Breads
    attaPizzas: [
      { name: "Atta Margherita", desc: "100% whole wheat crust with fresh mozzarella & herbs", r: 180, m: 320, l: 460, tag: "Healthy" },
      { name: "Atta Cheese Corn", desc: "Whole wheat base topped with sweet corn & cheese", r: 190, m: 330, l: 480 },
      { name: "Atta Farm House Pizza", desc: "Onion, Capsicum, Corn, Tomato, Mushroom on whole wheat", r: 220, m: 400, l: 550, tag: "Popular" },
      { name: "Atta Kadhai Paneer Pizza", desc: "Onion, Capsicum, spiced Paneer on atta base", r: 220, m: 400, l: 550 },
      { name: "Atta Peri Peri Paneer Pizza", desc: "Onion, Capsicum, Mushroom, Red Pepper, Peri Peri Paneer", r: 240, m: 440, l: 580 },
      { name: "Atta Makhani Pasta Pizza", desc: "Onion, Capsicum, Mushroom, Pasta on whole wheat crust", r: 240, m: 440, l: 580 },
      { name: "Atta Super Veg", desc: "Onion, Capsicum, Corn, Mushroom, Red Pepper, Black Olives, Jalapeno", r: 270, m: 520, l: 680, tag: "Signature" },
      { name: "Atta Stuffed Garlic Bread", desc: "Whole wheat garlic bread stuffed with Corn, Jalapeno & Cheese", price: "₹220" },
      { name: "Atta Premium Stuffed Garlic Bread", desc: "Whole wheat garlic bread with Onion, Paneer, Corn, Jalapeno & Cheese", price: "₹250", tag: "Must Try" }
    ],

    // 3. Upgrades & Dips
    upgradesAndDips: {
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

    // 4. Garlic Breads & More
    garlicBreads: [
      { name: "Garlic Bread", desc: "Artisan bread baked with butter & garlic", price: "₹130" },
      { name: "Cheese Garlic Bread", desc: "Baked with Mozzarella Cheese, butter & garlic", price: "₹190" },
      { name: "Veg Garlic Bread", desc: "Baked with Onion, Capsicum, Mushroom, Mozzarella, Jalapeno & Garlic Butter", price: "₹200" },
      { name: "Stuffed Garlic Bread", desc: "Stuffed with Corn, Jalapeno & melted Cheese", price: "₹200", tag: "Must Try" },
      { name: "Premium Stuffed Garlic Bread", desc: "Stuffed with Paneer, Onion, Corn, Jalapeno & Cheese", price: "₹230", tag: "Special" },
      { name: "Calzone", desc: "Pocket folded Italian pizza filled with stuffing & cheese", price: "₹160" },
      { name: "Taco", desc: "Crispy taco shell with seasoned veg filling", price: "₹160" }
    ],

    // 5. Pastas (Served with 2 pcs Garlic Bread)
    pastas: [
      { name: "Pesto Pasta", desc: "Boiled pasta with corn, capsicum, mushrooms, cheese tossed in in-house basil sauce + 2 Garlic Breads", price: "₹300", tag: "Chef Special" },
      { name: "Arrabiata Pasta (Mix)", desc: "Boiled pasta, garlic, corns, capsicum, mushroom, chilly flakes, in-house red sauce + 2 Garlic Breads", price: "₹250" },
      { name: "White Sauce Pasta", desc: "Boiled pasta, corns, capsicum, mushroom, creamy Alfredo sauce + 2 Garlic Breads", price: "₹250", tag: "Popular" },
      { name: "Makhani Pasta", desc: "Boiled pasta, garlic, corns, capsicum, mushroom in rich butter makhani sauce + 2 Garlic Breads", price: "₹270" },
      { name: "Tandoori Paneer Pasta", desc: "Boiled pasta, garlic, corns, capsicum, mushroom, paneer, chilly flakes in tandoori sauce + 2 Garlic Breads", price: "₹280" },
      { name: "Mix Sauce Bake Pasta", desc: "Pasta with corn, capsicum, mushroom, extra cheese baked golden in oven + 2 Garlic Breads", price: "₹300", tag: "Baked" },
      { name: "White Sauce Baked Pasta", desc: "Creamy Alfredo pasta baked with melted mozzarella crust + 2 Garlic Breads", price: "₹300", tag: "Baked" }
    ],

    // 6. Burgers, Sandwiches, Wraps & Subs
    burgersSandwiches: [
      { name: "Delight Burger", desc: "Aloo patty, onion, fresh lettuce with house sauces", price: "₹70" },
      { name: "Crispy Burger", desc: "Crisp vegetable patty, onion, lettuce with house sauces", price: "₹80" },
      { name: "Achari Burger", desc: "Veg patty, gherkins pickle, onion, lettuce with tangy sauce", price: "₹90" },
      { name: "Pasta Burger", desc: "Veg patty topped with pasta, onion, lettuce with house sauces", price: "₹90" },
      { name: "Tandoori Burger", desc: "Roasted paneer cubes, onion, lettuce with smoky tandoori sauce", price: "₹100" },
      { name: "Gym Burger", desc: "Veg patty, Paneer slice, onion, cucumber, tomato, lettuce", price: "₹110" },
      { name: "Spicy Paneer Burger", desc: "Spicy crisp paneer patty, onion, lettuce with spicy dip", price: "₹120", tag: "Hot" },
      { name: "American Burger", desc: "Double paneer patty, aloo patty, cucumber, tomato, lettuce & cheese", price: "₹140", tag: "Jumbo" },
      { name: "Pesto Sandwich", desc: "Pesto sauce, onion, capsicum, mushrooms, paneer, and mozzarella", price: "₹250", tag: "New" },
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
    ],

    // 7. Snacks, Chinese, Salads & Soups
    snacksChinese: [
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
      { name: "Veg Manchow Soup", desc: "Spicy dark broth with vegetables topped with crispy noodles", price: "₹110" },
      { name: "Lemon Coriander Soup", desc: "Light fragrant vegetable soup with fresh lemon & coriander", price: "₹110" },
      { name: "Sweet Corn Soup", desc: "Comforting creamy sweet corn and vegetable soup", price: "₹110" },
      { name: "High Protein Salad", desc: "Fresh paneer, boiled legumes, crunchy greens (GYM Special)", price: "₹220", tag: "Fitness" },
      { name: "Pasta Salad", desc: "Chilled pasta tossed with seasonal vegetables & herb dressing", price: "₹190" },
      { name: "Veg Salad", desc: "Garden fresh crispy lettuce, cucumber, tomato & olives", price: "₹180" }
    ],

    // 8. Milkshakes & Frappes
    shakesFrappes: [
      { name: "Classic Shakes", desc: "Bubble Gum, Mango, Vanilla, Strawberry, Butterscotch, Black Currant, Chocolate", price: "₹149 each" },
      { name: "Oreo Shake", desc: "Thick vanilla shake loaded with crushed Oreo cookies", price: "₹179", tag: "Top Pick" },
      { name: "KitKat Shake", desc: "Creamy shake blended with crispy KitKat bars", price: "₹179" },
      { name: "Brownie Shake", desc: "Decadent fudge brownie blended with rich chocolate milk", price: "₹179" },
      { name: "Red Velvet Shake", desc: "Velvety cake shake with creamy vanilla undertones", price: "₹179" },
      { name: "Blue Croco Cheesecake Shake", desc: "Signature gourmet shake with authentic cheesecake flavour", price: "₹179", tag: "Signature" },
      { name: "Strawberry with Oreo Shake", desc: "Sweet strawberry swirls combined with crunchy Oreo bits", price: "₹179" },
      { name: "Caramel Shake", desc: "Smooth blended shake drizzled with sweet golden caramel", price: "₹179" },
      { name: "Classic Cold Coffee", desc: "Rich espresso, creamy milk, and vanilla ice cream blended thick", price: "₹159" },
      { name: "Choco Frappe", desc: "Creamy blend of rich chocolate and espresso topped with ice cream", price: "₹199" },
      { name: "Caramel Frappe", desc: "Espresso and ice cream infused with rich caramel syrup", price: "₹199" },
      { name: "Hazelnut Frappe", desc: "Blended ice cream coffee drink infused with aromatic hazelnut", price: "₹199" },
      { name: "Irish Frappe", desc: "Bold espresso blended with Irish cream flavours and ice cream", price: "₹199" },
      { name: "Brownie Frappe", desc: "Fudgy brownie blended into thick iced coffee", price: "₹219" },
      { name: "Nutella Frappe", desc: "Creamy blend of espresso, rich Nutella hazelnut cocoa spread & ice cream", price: "₹229", tag: "Must Try" },
      { name: "Biscoff Frappe", desc: "Deliciously creamy blend infused with caramelized Lotus Biscoff spread", price: "₹229", tag: "Special" }
    ],

    // 9. Coffees, Matchas, Teas & Cold Drinks
    coffeesTeasDrinks: [
      { name: "Iced Matcha Latte", desc: "Authentic green tea matcha whisked with cold milk over ice", price: "₹200", tag: "Matcha" },
      { name: "Mango / Strawberry Matcha Latte", desc: "Fruity sweet mango or strawberry puree layered with iced matcha", price: "₹250", tag: "Special" },
      { name: "Iced Americano", desc: "Chilled double espresso and cold water served over ice", price: "₹149" },
      { name: "Iced Cappuccino", desc: "Chilled espresso, frothy cold milk foam, dusted with cocoa", price: "₹169" },
      { name: "Iced Latte", desc: "Chilled espresso poured over fresh cold velvety milk", price: "₹149" },
      { name: "Iced Mocha", desc: "Chilled espresso, creamy milk, and rich dark chocolate syrup", price: "₹169" },
      { name: "Iced Caramel / Iced Hazelnut", desc: "Rich espresso and cold milk infused with golden caramel or hazelnut", price: "₹169" },
      { name: "Hot Espresso / Americano", desc: "Brewed fresh from roasted beans / robust long black cup", price: "₹79 / ₹99" },
      { name: "Cappuccino / Cafe Latte / Flat White", desc: "Steamed velvety milk with aromatic espresso shot", price: "₹139 / ₹149 / ₹139" },
      { name: "Caffe Mocha / French Vanilla Cappuccino", desc: "Infused with rich chocolate or sweet French vanilla", price: "₹159 / ₹149" },
      { name: "Biscoff Latte", desc: "Creamy espresso blended with spiced caramelized Biscoff spread", price: "₹179", tag: "Chef Pick" },
      { name: "Special Jaggery Latte / Turmeric Latte", desc: "Healthy desi gur twist or immunity boosting golden turmeric", price: "₹159 / ₹139" },
      { name: "Hot Chocolate / Tiramisu / Hazelnut Hot Chocolate", desc: "Steaming rich cocoa with premium chocolate or tiramisu notes", price: "₹139 / ₹159 / ₹159" },
      { name: "Chilli Guava Drink", desc: "Tropical spicy guava cooler served with chilli salt rim", price: "₹199", tag: "New" },
      { name: "Virgin Mojito / Blueberry / Green Apple / Watermelon / Strawberry", desc: "Sparkling crushed mint coolers", price: "₹139 each" },
      { name: "Spicy Mango / Black Currant Mocktail", desc: "Refreshing exotic mocktail with tangy finish", price: "₹149 each" },
      { name: "Iced Teas (Peach / Lemon / Green Apple / Strawberry)", desc: "Chilled brewed black tea with fruit infusions", price: "₹139 each" },
      { name: "Lemonade / Fruit Beer / Pepsi Can", desc: "Chilled classic sodas and thirst quenchers", price: "₹129 / ₹109 / ₹80" },
      { name: "Flavoured Teas (Without Milk / With Milk)", desc: "Paan, Rose, Elaichi, Kesar, Ginger, Masala, Chocolate, Green Tea", price: "₹60 - ₹90 (Add Jaggery +₹20)" }
    ],

    // 10. Desserts
    desserts: [
      { name: "Vanilla Ice Cream", desc: "Creamy double scoop vanilla", price: "₹60" },
      { name: "Choco Lava Cake", desc: "Warm baked cake with molten chocolate core", price: "₹80" },
      { name: "Choco Lava Cake with Ice Cream", desc: "Warm gooey lava cake paired with cool vanilla scoop", price: "₹110", tag: "Bestseller" },
      { name: "Brownie with Hot Chocolate", desc: "Fudge brownie drenched in steaming hot chocolate fudge", price: "₹120" },
      { name: "Brownie with Ice Cream", desc: "Warm brownie topped with rich vanilla ice cream", price: "₹150" },
      { name: "Strawberry Dream Cup", desc: "Layered strawberry dessert sundae", price: "₹200", tag: "Special" },
      { name: "Brownie Blast Mug", desc: "Jumbo dessert mug loaded with brownie, chocolate & ice cream", price: "₹200", tag: "Chef Special" }
    ]
  },

  // ==========================================
  // ADARSH NAGAR OUTLET
  // ==========================================
  adarshNagar: {
    name: "Adarsh Nagar Outlet",
    tagline: "38-B Canal Road · Jalandhar City",
    address: "38-B, Adarsh Nagar, Opp. Inderprasth Hotel, Canal Road, Jalandhar City",
    phones: ["+91 95177-97177", "+91 91155-95155"],
    pdf: "menus/menu-adarsh-nagar.pdf",
    totalPages: 8,
    imgFolder: "menu_adarsh_nagar",

    // 1. Classic Pizzas
    classicPizzas: [
      { name: "Margherita", desc: "Classic tomato sauce and mozzarella cheese", r: 150, m: 280, l: 400, tag: "Classic" },
      { name: "Cheese & Mushroom", desc: "Mozzarella and fresh button mushrooms", r: 150, m: 280, l: 400 },
      { name: "Onion & Tomato", desc: "Crunchy onion and ripe fresh tomatoes with herbs", r: 150, m: 280, l: 400 },
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
      { name: "Corn & Cheese Pizza Parantha", desc: "Stuffed with sweet corn and loaded melted cheese", customPrice: "₹189", tag: "Specialty" },
      { name: "Paneer Pizza Parantha", desc: "Stuffed with delicious spiced paneer and lots of cheese", customPrice: "₹209", tag: "Specialty" }
    ],

    // 2. Atta Pizzas & Atta Breads
    attaPizzas: [
      { name: "Atta Margherita", desc: "100% whole wheat crust with fresh mozzarella & herbs", r: 159, m: 299, l: 449, tag: "Healthy" },
      { name: "Atta Cheese Corn", desc: "Whole wheat base topped with sweet corn & cheese", r: 169, m: 319, l: 459 },
      { name: "Atta Farm House Pizza", desc: "Onion, Capsicum, Corn, Tomato, Mushroom on whole wheat", r: 199, m: 389, l: 529, tag: "Popular" },
      { name: "Atta Kadhai Paneer Pizza", desc: "Onion, Capsicum, spiced Paneer on atta base", r: 199, m: 389, l: 529 },
      { name: "Atta Peri Peri Paneer Pizza", desc: "Onion, Capsicum, Mushroom, Red Pepper, Peri Peri Paneer", r: 229, m: 429, l: 569 },
      { name: "Atta Makhani Pasta Pizza", desc: "Onion, Capsicum, Mushroom, Pasta on whole wheat crust", r: 229, m: 429, l: 569 },
      { name: "Atta Super Veg", desc: "Onion, Capsicum, Corn, Mushroom, Red Pepper, Black Olives, Jalapeno", r: 259, m: 499, l: 669, tag: "Signature" },
      { name: "Atta Stuffed Garlic Bread", desc: "Whole wheat garlic bread stuffed with Corn, Jalapeno & Cheese", price: "₹199" },
      { name: "Atta Premium Stuffed Garlic Bread", desc: "Whole wheat garlic bread with Onion, Paneer, Corn, Jalapeno & Cheese", price: "₹239", tag: "Must Try" }
    ],

    // 3. Upgrades & Dips
    upgradesAndDips: {
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

    // 4. Pizza Mania Range (Single & Double Topping)
    pizzaMania: [
      { name: "Onion Pizza", desc: "Single topping crunchy onion with mozzarella", price: "₹79" },
      { name: "Capsicum Pizza", desc: "Single topping fresh crisp green bell peppers", price: "₹89" },
      { name: "Corn Pizza", desc: "Single topping sweet golden corn with cheese", price: "₹89" },
      { name: "Onion & Corn Pizza", desc: "Double topping golden corn & crunchy onions", price: "₹99" },
      { name: "Onion & Jalapeno Pizza", desc: "Double topping spicy jalapenos & sliced onions", price: "₹99" },
      { name: "Onion & Capsicum Pizza", desc: "Double topping classic onion and capsicum combo", price: "₹99" },
      { name: "Jalapeno & Pineapple Pizza", desc: "Double topping sweet pineapple & hot jalapenos", price: "₹109", tag: "Sweet & Spicy" }
    ],

    // 5. Garlic Breads, Calzones & Tacos
    garlicBreads: [
      { name: "Garlic Bread", desc: "Bread baked with butter & garlic", price: "₹120" },
      { name: "Cheese Garlic Bread", desc: "Baked with Mozzarella Cheese, butter & garlic", price: "₹170" },
      { name: "Veg Garlic Bread", desc: "Baked with Onion, Capsicum, Mushroom, Mozzarella, Jalapeno & Butter Garlic", price: "₹190" },
      { name: "Stuffed Garlic Bread", desc: "Corn, Jalapeno & melted creamy Cheese", price: "₹180", tag: "Must Try" },
      { name: "Premium Stuffed Garlic Bread", desc: "Paneer, Onion, Corn, Jalapeno & Cheese", price: "₹210", tag: "Special" },
      { name: "Calzone", desc: "Pocket folded Italian pizza filled with stuffing & cheese", price: "₹140" },
      { name: "Taco", desc: "Crispy taco shell with spiced veg filling", price: "₹140" },
      { name: "Zingy Parcel", desc: "Golden pastry crust filled with tangy herb seasoned filling", price: "₹60" },
      { name: "Paneer Parcel", desc: "Golden pastry crust wrapped around spiced cottage cheese", price: "₹70" }
    ],

    // 6. Pastas (Served with 2 pcs Garlic Bread)
    pastas: [
      { name: "Arrabiata Pasta (Mix)", desc: "Boiled Pasta, Garlic, Corns, Capsicum, Mushroom, Chilly Flakes in in-house sauce + 2 Garlic Breads", price: "₹230" },
      { name: "White Sauce Pasta", desc: "Boiled Pasta, Corns, Capsicum, Mushroom, Chilly Flakes in creamy Alfredo sauce + 2 Garlic Breads", price: "₹230", tag: "Popular" },
      { name: "Makhani Pasta", desc: "Boiled Pasta, Garlic, Corns, Capsicum, Mushroom in creamy makhani sauce + 2 Garlic Breads", price: "₹250" },
      { name: "Tandoori Paneer Pasta", desc: "Boiled Pasta, Garlic, Corns, Capsicum, Mushroom, Paneer in smoky tandoori sauce + 2 Garlic Breads", price: "₹250" },
      { name: "Mix Bake Pasta", desc: "Boiled Pasta, Corns, Capsicum, Mushroom, Cheese baked in oven + 2 Garlic Breads", price: "₹280", tag: "Baked" },
      { name: "White Sauce Bake Pasta", desc: "Creamy pasta baked with thick golden mozzarella crust + 2 Garlic Breads", price: "₹280", tag: "Baked" }
    ],

    // 7. Burgers, Sandwiches, Wraps & Subwraps
    burgersSandwiches: [
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
    ],

    // 8. Snacks, Chinese, Salads & Soups
    snacksChinese: [
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
    ],

    // 9. Combos & Desserts
    combosAndDesserts: [
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
    ],

    // 10. Shakes & Drinks
    shakesAndDrinks: [
      { name: "Regular Milkshakes", desc: "Bubble Gum, Mango, Vanilla, Strawberry, Butterscotch, Black Currant, Chocolate", price: "₹139 each" },
      { name: "Cold Coffee", desc: "Frothy chilled coffee brewed fresh", price: "₹139" },
      { name: "Caramel Coffee", desc: "Blended iced coffee with golden caramel drizzle", price: "₹149" },
      { name: "Premium Shakes (₹159 each)", desc: "Oreo, KitKat, Brownie, Red Velvet, Blue Croco Cheesecake, Creamy Saffron, Strawberry with Oreo, Peanut Butter, Caramel", price: "₹159 each", tag: "Premium" },
      { name: "Virgin Mojito / Blueberry / Green Apple / Watermelon / Strawberry", desc: "Refreshing crushed mint and sparkling soda", price: "₹119 each" },
      { name: "Spicy Mango / Black Currant Mocktail", desc: "Tangy exotic coolers", price: "₹139 each" },
      { name: "Ice Teas (Green Apple / Strawberry / Peach / Lemon)", desc: "Brewed iced teas with real fruit flavours", price: "₹119 each" },
      { name: "Lemonade / Fruit Beer / Pepsi", desc: "Fresh lime cooler, fruit beer or cold soft drink", price: "₹70 / ₹80 / MRP" },
      { name: "Express Coffee", desc: "Steaming hot freshly brewed espresso coffee", price: "₹80" },
      { name: "Hot Chocolate Milk", desc: "Rich velvety warm cocoa milk", price: "₹129" },
      { name: "Hot Tea", desc: "Fresh brewed milk tea (Add Jaggery +₹20)", price: "₹70" }
    ]
  }
};

// Global state
let currentOutlet = 'modelTown';
let currentCategory = 'classicPizzas';
let currentViewMode = 'grid';

document.addEventListener('DOMContentLoaded', () => {
  setupOutletSwitcher();
  setupViewModeSwitcher();
  setupCategoryTabs();
  renderCurrentView();
  setupImageLightbox();
  setupNavLinks();
});

// Switch outlet
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
    pdfBtn.innerHTML = `<i class="fa-solid fa-file-pdf"></i> Download ${data.name.split(' ')[0]} Menu PDF`;
  }
}

// View mode switch
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

// Render items by category
function renderDigitalItems() {
  const container = document.getElementById('digitalItemsContainer');
  if (!container) return;

  const data = outletsData[currentOutlet];

  // 1. CLASSIC PIZZAS & ATTA PIZZAS
  if (currentCategory === 'classicPizzas' || currentCategory === 'attaPizzas') {
    const list = data[currentCategory] || [];
    const isAtta = currentCategory === 'attaPizzas';

    container.innerHTML = `
      ${isAtta ? `
        <div class="category-banner-note">
          <i class="fa-solid fa-heart-pulse"></i>
          <div>
            <strong>100% Whole Wheat (Atta) Base</strong>
            <p>Guilt-free healthy indulgence made fresh daily with whole wheat grains.</p>
          </div>
        </div>
      ` : ''}

      <div class="pizza-table-wrapper">
        <div class="pizza-table-header">
          <span>${isAtta ? 'Atta Pizza Description' : 'Pizza Name & Description'}</span>
          <div class="pizza-size-cols">
            <span>Regular</span>
            <span>Medium</span>
            <span>Large</span>
          </div>
        </div>
        <div class="pizza-list">
          ${list.map(p => `
            <div class="pizza-row">
              <div class="pizza-info">
                <div class="pizza-title-row">
                  <span class="pizza-name">${p.name}</span>
                  ${p.tag ? `<span class="badge-tag">${p.tag}</span>` : ''}
                </div>
                <p class="pizza-desc">${p.desc}</p>
                ${p.price ? `<span class="single-item-price">${p.price}</span>` : ''}
              </div>
              ${p.customPrice ? `
                <div class="pizza-custom-price">${p.customPrice}</div>
              ` : p.r ? `
                <div class="pizza-prices">
                  <span class="price-val">₹${p.r}</span>
                  <span class="price-val">₹${p.m}</span>
                  <span class="price-val">₹${p.l}</span>
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    `;
    return;
  }

  // 2. UPGRADES & DIPS
  if (currentCategory === 'upgradesAndDips') {
    const info = data.upgradesAndDips;
    container.innerHTML = `
      <div class="upgrades-dips-container">
        <!-- Upgrades Section -->
        <div class="upgrades-box">
          <h3 class="box-title"><i class="fa-solid fa-wand-magic-sparkles"></i> Upgrade Your Pizza</h3>
          <p class="box-desc">Customise your pizza crust and toppings just the way you love it.</p>
          <div class="upgrade-table">
            <div class="upgrade-head">
              <span>Upgrade Option</span>
              <div class="size-headers">
                <span>R</span>
                <span>M</span>
                <span>L</span>
              </div>
            </div>
            ${info.upgrades.map(u => `
              <div class="upgrade-row">
                <span class="upgrade-name">${u.name}</span>
                <div class="upgrade-vals">
                  <span>${u.r}</span>
                  <span>${u.m}</span>
                  <span>${u.l}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Dips Section -->
        <div class="dips-box">
          <h3 class="box-title"><i class="fa-solid fa-bowl-food"></i> Delicious Dips (@ ₹30 each)</h3>
          <p class="box-desc">Pair your pizzas, breads, and fries with our signature dips.</p>
          <div class="dips-grid">
            ${info.dips.map(d => `
              <div class="dip-card">
                <div class="dip-top">
                  <span class="dip-name">${d.name}</span>
                  <span class="dip-price">${d.price}</span>
                </div>
                <p class="dip-desc">${d.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
    return;
  }

  // 3. PIZZA MANIA (Adarsh Nagar exclusive)
  if (currentCategory === 'pizzaMania') {
    const list = data.pizzaMania || [];
    container.innerHTML = `
      <div class="category-banner-note">
        <i class="fa-solid fa-tag"></i>
        <div>
          <strong>Pizza Mania Range (Pocket-Friendly Specials)</strong>
          <p>Single and double topping pizzas packed with flavour starting at just ₹79!</p>
        </div>
      </div>
      <div class="items-cards-grid">
        ${list.map(item => `
          <div class="item-card">
            ${item.tag ? `<span class="badge-tag card-tag">${item.tag}</span>` : ''}
            <div class="item-card-body">
              <h4 class="item-title">${item.name}</h4>
              <p class="item-desc">${item.desc}</p>
              <div class="item-bottom">
                <span class="item-price">${item.price}</span>
                <a href="https://wa.me/${currentOutlet === 'modelTown' ? '919517727177' : '919517797177'}?text=Hi%20Walaiti%20Food,%20I%20would%20like%20to%20order%20${encodeURIComponent(item.name)}" target="_blank" class="order-wa-btn">
                  <i class="fa-brands fa-whatsapp"></i> Order
                </a>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
    return;
  }

  // 4. GENERAL CATEGORIES (Garlic Breads, Pastas, Burgers, Snacks, Shakes, Coffees, Combos)
  const items = data[currentCategory] || [];
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
              <a href="https://wa.me/${currentOutlet === 'modelTown' ? '919517727177' : '919517797177'}?text=Hi%20Walaiti%20Food,%20I%20would%20like%20to%20order%20${encodeURIComponent(item.name)}" target="_blank" class="order-wa-btn">
                <i class="fa-brands fa-whatsapp"></i> Order
              </a>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// Render menu cards
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

// Lightbox
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
