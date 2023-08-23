import Image from "next/image";
import Link from "next/link";
import { heroSkate, heroSkate2, heroSkate3 } from "@/assets/images";

const CollectionGrid = () => {
  return (
    <section id="collections" className="flex flex-1 flex-col justify-center items-center ">
      <div className="max-w-screen-xl flex flex-col justify-start w-full">
        <header className="text-center">
          <div className="flex flex-1 flex-col justify-center items-center">
            <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
              Visit Our
              <span className="text-purple-800"> Latest</span> Collections
            </h2>
          </div>
        </header>

        <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3 w-full" >
          <li>
            <Link href="#" className="relative block group">
              <Image
                src={heroSkate3}
                alt=""
                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-70"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">Accessories</h3>

                <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  Shop Now
                </span>
              </div>
            </Link>
          </li>

          <li>
            <Link href="#" className="relative block group">
              <Image
                src={heroSkate2}
                alt=""
                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-70"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">
                  Casual Trainers
                </h3>

                <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  Shop Now
                </span>
              </div>
            </Link>
          </li>

          <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <Link href="#" className="relative block group">
              <Image
                src={heroSkate}
                alt=""
                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-70"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">Apparel</h3>

                <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  Shop Now
                </span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CollectionGrid;
