import React from "react";
import Hero from "../Components/Home/Hero";
import CaseStudies from "../Components/Home/CaseStudies";
import Blogs from "../Components/Home/Blogs";
import Hypothesis from "../Components/Home/Hypothesis";

const Home = () => {
  const quantities = [1, 2, 3, 4, 5, 6];
  const quantity = [1, 2, 3];

  return (
    <>
      <Hero />
      <CaseStudies />
      <Blogs quantities={quantities} />
      <Hypothesis quantity={quantity} />
    </>
  );
};

export default Home;
