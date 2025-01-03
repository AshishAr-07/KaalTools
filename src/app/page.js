import React from "react";
import { Banner } from "./_component/Banner";
import Product from "./_component/Product";
import Aboutus from "./_component/Aboutus";
import Whychoose from "./_component/Whychoose";
import Cta from "./_component/Cta";
import Testimonials from "./_component/Testinomials";
import NewProducts from "./_component/NewProducts";
import Counter from "./_component/COunter";

const items = [
  {
    image: "/ks1.webp",
    heading: "Power Up Your Projects with Tools You Can Count On.",
    shortdesc:
      "Discover durable, high-performance tools designed for every project. Built to last, made to deliver.",
  },
  {
    image: "/ks2.webp",
    heading: "Power Up Your Projects with Tools You Can Count On.",
    shortdesc:
      "Discover durable, high-performance tools designed for every project. Built to last, made to deliver.",
  },
];

export default function page() {
  return (
    <>
      <Banner items={items} />
      <NewProducts/>
      <Product activepage="homepage" />
      <Counter/>
      <Whychoose />
      <Cta />
      <div className="py-6"></div>
      <Testimonials />
      <div className="py-6"></div>
    </>
  );
}
