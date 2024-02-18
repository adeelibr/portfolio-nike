export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
] as const;

export const IMAGES = {
  // logos list
  logo: "/images/header-logo.svg",
  footerLogo: "/images/footer-logo.svg",
  // big shoes list
  bigShoe1: "/images/big-shoe1.png",
  bigShoe2: "/images/big-shoe2.png",
  bigShoe3: "/images/big-shoe3.png",
  // thumbnails list
  thumbnailShoe1: "/images/thumbnail-shoe1.svg",
  thumbnailShoe2: "/images/thumbnail-shoe2.svg",
  thumbnailShoe3: "/images/thumbnail-shoe3.svg",
  // customers list
  customer1: "/images/customer1.jpeg",
  customer2: "/images/customer2.svg",
  // shoes lists
  shoe4: "/images/shoe4.svg",
  shoe5: "/images/shoe5.svg",
  shoe6: "/images/shoe6.svg",
  shoe7: "/images/shoe7.svg",
  shoe8: "/images/shoe8.svg",
  // backgrounds
  thumbnailBackground: "/images/thumbnail-background.svg",
  collectionBackground: "/images/collection-background.svg",
  // misc
  offer: "/images/offer.svg",
};

export const ICONS = {
  truck: "/icons/truck-fast.svg",
  support: "/icons/support.svg",
  shield: "/icons/shield-tick.svg",
};

export const STATISTICS = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const SHOES = [
  {
    thumbnail: IMAGES.thumbnailShoe1,
    bigShoe: IMAGES.bigShoe1,
  },
  {
    thumbnail: IMAGES.thumbnailShoe2,
    bigShoe: IMAGES.bigShoe2,
  },
  {
    thumbnail: IMAGES.thumbnailShoe3,
    bigShoe: IMAGES.bigShoe3,
  },
];

export const PRODUCTS = [
  {
    imgURL: IMAGES.shoe4,
    name: "Nike Air Jordan-01",
    price: "$200.20",
  },
  {
    imgURL: IMAGES.shoe5,
    name: "Nike Air Jordan-10",
    price: "$210.20",
  },
  {
    imgURL: IMAGES.shoe6,
    name: "Nike Air Jordan-100",
    price: "$220.20",
  },
  {
    imgURL: IMAGES.shoe7,
    name: "Nike Air Jordan-001",
    price: "$230.20",
  },
];

export const SERVICES = [
  {
    imgURL: ICONS.truck,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: ICONS.shield,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: ICONS.support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const REVIEWS = [
  {
    imgURL: IMAGES.customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: IMAGES.customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];
