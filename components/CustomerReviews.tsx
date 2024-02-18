import * as React from "react";
import { REVIEWS } from "@/constants";
import { Sparkles } from "lucide-react";
import Image from "next/image";

type ReviewCardProps = {
  imgURL: string;
  customerName: string;
  rating: number;
  feedback: string;
};

const ReviewCard = ({
  imgURL,
  customerName,
  rating,
  feedback,
}: ReviewCardProps) => {
  return (
    <div className="flex justify-center items-center flex-col transition-all hover:scale-110 hover:opacity-95">
      <Image
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
        height={120}
        width={120}
      />
      <p className="mt-6 max-w-sm text-center">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <Sparkles className="h-6 w-6" />
        <Sparkles className="h-6 w-6" />
        <Sparkles className="h-6 w-6" />
        <Sparkles className="h-6 w-6" />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
        {customerName}
      </h3>
    </div>
  );
};

function CustomerReviews() {
  return (
    <section className="mx-auto max-w-7xl">
      <h3 className="text-center text-4xl font-bold">
        What Our
        <span className="text-black"> Customers </span>
        Say?
      </h3>
      <p className="m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {REVIEWS.map((review, index) => (
          <ReviewCard
            key={index}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
}

export default CustomerReviews;
