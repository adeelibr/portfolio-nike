import * as React from "react";
import Image from "next/image";

import { SERVICES } from "@/constants";

type ServiceCardProps = {
  imgURL: string;
  label: string;
  subtext: string;
};

function ServiceCard({ imgURL, label, subtext }: ServiceCardProps) {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-2xl px-10 py-16">
      <div className="w-11 h-11 flex justify-center items-center bg-orange-500 rounded-full">
        <Image src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-5 text-3xl leading-normal font-bold">{label}</h3>
      <p className="mt-3 break-words text-lg leading-normal text-slate-600 dark:text-slate-300">
        {subtext}
      </p>
    </div>
  );
}

function Services() {
  return (
    <section className="mx-auto max-w-7xl flex justify-center flex-wrap gap-9">
      {SERVICES.map((service) => (
        <ServiceCard
          key={service.label}
          imgURL={service.imgURL}
          label={service.label}
          subtext={service.subtext}
        />
      ))}
    </section>
  );
}

export default Services;
