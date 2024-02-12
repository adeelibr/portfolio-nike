"use client";
import * as React from "react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

import getNavHrefByLabel from "@/lib/getNavHrefByLabel";
import { IMAGES, SHOES, STATISTICS } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";

type ShoeCardType = {
  imgURL: {
    thumbnail: string;
    bigShoe: string;
  };
  changeBigShoeImage: (image: string) => void;
  bigShoeImg: string;
};

function ShoeCard({ imgURL, changeBigShoeImage, bigShoeImg }: ShoeCardType) {
  return (
    <div
      className={cn("border-2 rounded-xl cursor-pointer max-sm:flex-1", {
        "border-orange-500": bigShoeImg === imgURL.bigShoe,
        "border-transparent": bigShoeImg !== imgURL.bigShoe,
      })}
      onClick={() => {
        if (bigShoeImg !== imgURL.bigShoe) {
          changeBigShoeImage(imgURL.bigShoe);
        }
      }}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <Image
          src={imgURL.thumbnail}
          alt="shoe collection"
          width={127}
          height={103.34}
          className="object-contain"
        />
      </div>
    </div>
  );
}

function Hero() {
  const [bigShoeImg, setBigShoeImg] = React.useState(IMAGES.bigShoe1);

  return (
    <section className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 mx-auto max-w-7xl">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
        <p className="text-xl text-coral-red" id={getNavHrefByLabel("Home")}>
          Our Summer collections
        </p>

        <h1 className="mt-10 text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:dark:bg-orange-400 xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-5">Nike</span> Shoes
        </h1>
        <p className="text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Button variant="default" size="lg">
          Shop Now
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {STATISTICS.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-bold">{stat.value}</p>
              <p className="leading-7 text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-orange-400">
        <Image
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={502}
          className="object-contain relative z-10"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {SHOES.map((image) => (
            <div key={image.thumbnail}>
              <ShoeCard
                imgURL={image}
                changeBigShoeImage={(shoe: string) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
