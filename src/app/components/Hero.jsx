"use client";
import { arrowRight } from "@/assets/icons";
import Button from "./Button";
import { shoes, statistics } from "../constants";
import Image from "next/image";
import { bigShoe1} from "@/assets/images";
import ShoeCard from "./ShoeCard";
import { useState } from "react";

const HeroPage = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-20'>
        <p className='text-xl font-montserrat  text-lavendar '>
          Our latest collections
        </p>

        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[80px] font-bold'>
          <span className='xl:bg-black xl:whitespace-nowrap relative z-10 pr-15 text-white'>
          Welcome to
          </span>
          <br />
          <span className='purple_gradient inline-block mt-3'>Skate Monkey</span>
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
        Where Style Meets Concrete. Explore the Ultimate Collection of Skateboarding Gear and Attire.
        </p>

        <Button label='Shop now' iconURL={arrowRight} />

        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-transparent bg-center border-slate-gray border-3'>
        <Image
          src={bigShoeImg}
          alt='shoe colletion'
          width={610}
          height={502}
          className='object-contain relative z-10'
        />

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
