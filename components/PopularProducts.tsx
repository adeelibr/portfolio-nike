import * as React from "react";

import getNavHrefByLabel from "@/lib/getNavHrefByLabel";
import { PRODUCTS } from "@/constants";
import Image from "next/image";
import { Star } from "lucide-react";

function PopularProductCard({ imgURL, name, price }: any) {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <Image
        src={imgURL}
        alt={name}
        className="w-[282px] h-[282px]"
        width={282}
        height={282}
      />
      <div className="mt-8 flex justify-start items-center gap-2.5">
        <Star className="h-4 w-4" />
        <p className="text-xl leading-normal text-slate-gray">(4.5)</p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold text-orange-500 text-2xl leading-normal">
        {price}
      </p>
    </div>
  );
}

function PopularProducts() {
  return (
    <section id={getNavHrefByLabel("Products")} className="mx-auto max-w-7xl">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-bold">
          Our <span className="text-orange-500"> Popular </span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 text-slate-gray">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {PRODUCTS.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
}

export default PopularProducts;
