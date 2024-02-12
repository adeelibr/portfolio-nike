export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
] as const;

export const IMAGES = {
  logo: "/images/header-logo.svg",
  bigShoe1: "/images/big-shoe1.png",
  bigShoe2: "/images/big-shoe2.png",
  bigShoe3: "/images/big-shoe3.png",
  thumbnailShoe1: "/images/thumbnail-shoe1.svg",
  thumbnailShoe2: "/images/thumbnail-shoe2.svg",
  thumbnailShoe3: "/images/thumbnail-shoe3.svg",
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
