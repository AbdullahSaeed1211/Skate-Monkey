import {
  HeroPage,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReview,
  Subscribe,
  Footer,
  CollectionGrid
} from "@/app/components"


const page = () => {
  return (
    <main className="relative bg-black text-white">
      {/* <Nav /> */}
      <section className="xl:padding-l wide:padding-r padding-b">
        <HeroPage />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <CollectionGrid />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-blackpadding">
        <CustomerReview />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className=" bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
     
    </main>
  );
};

export default page;
