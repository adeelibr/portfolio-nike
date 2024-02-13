import * as React from "react";
import Image from "next/image";

import { Info } from "lucide-react";

import { Button } from "@/components/ui/button";
import getNavHrefByLabel from "@/lib/getNavHrefByLabel";

import { IMAGES } from "@/constants";

function SuperQuality() {
  return (
    <section id={getNavHrefByLabel("About Us")} className="mx-auto max-w-7xl">
      <div className="flex justify-between items-center max-lg:flex-col gap-10 w-full">
        <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
            We Provide You
            <span className="text-coral-red"> Super </span>
            <span className="text-coral-red">Quality </span> Shoes
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">
            Ensuring premium comfort and style, our meticulously crafted
            footwear is designed to elevate your experience, providing you with
            unmatched quality, innovation, and a touch of elegance.
          </p>
          <p className="mt-6 lg:max-w-lg info-text">
            Our dedication to detail and excellence ensures your satisfaction
          </p>
          <div className="mt-11">
            <Button>
              View details
              <Info className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Image
            src={IMAGES.shoe8}
            alt="product detail"
            width={570}
            height={522}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default SuperQuality;
