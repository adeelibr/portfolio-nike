import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import PopularProducts from "@/components/PopularProducts";
import SuperQuality from "@/components/SuperQuality";
import Services from "@/components/Services";
import SpecialOffer from "@/components/SpecialOffer";
import CustomerReviews from "@/components/CustomerReviews";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen">
      <Nav />
      <section className="xl:padding-l 2xl:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-blue-300 padding">
        <CustomerReviews />
      </section>
      <section className="padding">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
}
