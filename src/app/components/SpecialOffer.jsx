import Image from "next/image";
import { arrowRight } from "@/assets/icons";
import { offerImage } from "@/assets/images";
import { Button } from "@/app/components";

const SpecialOffer = () => {
  return (
    <section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <Image
          src={offerImage}
          alt="Shoe Promotion"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin font-bold">
          <span className="text-coral-red">Special </span>
          Offer
        </h2>
        <p className="mt-4 info-text">
          Experience skate shopping like never before with our special offer.
          Dive into unbeatable deals that revolutionize your gear game. From
          premium selections to incredible savings, SkateMonkey delivers
          unmatched value that sets us apart.
        </p>
        <p className="mt-6 info-text">
          Explore a universe of possibilities crafted to fulfill your unique
          skating desires, surpassing even the loftiest expectations. Your skate
          shopping journey with us is truly extraordinary.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-black"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
