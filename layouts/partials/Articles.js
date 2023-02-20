import FeaturedArticles from "@layouts/components/FeaturedArticles";
import SlideFeaturedArticles from "@layouts/components/SlideFeaturedArticles";
import WidgetTicker from "@layouts/components/WidgetTicker";
import React from "react";

const Articles = () => {
  return (
    <>
      <WidgetTicker />
      <FeaturedArticles />
      <SlideFeaturedArticles/>
    </>
  );
};

export default Articles;
