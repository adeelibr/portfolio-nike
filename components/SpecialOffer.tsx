import * as React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { IMAGES } from "@/constants";
import { ArrowRight } from "lucide-react";

function SpecialOffer() {
  return (
    <section className="mx-auto max-w-7xl flex justify-between items-center max-xl:flex-col-reverse gap-10">
      <div className="flex-1">
        <Image
          src={IMAGES.offer}
          alt="Shoe Promotion"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-bold">
          <span className="text-coral-red">Special </span>
          <span>Offer</span>
        </h2>
        <p className="mt-4 info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button>
            Shop now <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline">Learn more</Button>
        </div>
      </div>
    </section>
  );
}

export default SpecialOffer;
