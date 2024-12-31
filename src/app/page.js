import React from "react";
import { Banner } from "./_component/Banner";
import Product from "./_component/Product";
import Aboutus from "./_component/Aboutus";
import Whychoose from "./_component/Whychoose";
import Cta from "./_component/Cta";
import Testimonials from "./_component/Testinomials";

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
      <div className="py-3"></div>
      <Aboutus activepage="home" />
      <Product activepage="homepage" />
      <Whychoose />
      <Cta />
      <div className="py-6"></div>
      <Testimonials />
      <div className="py-6"></div>
    </>
  );
}
