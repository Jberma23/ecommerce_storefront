import { CategorySection } from "@/components/CategorySection/CategorySection";
import { CollectionSection } from "@/components/CollectionSection/CollectionSection";
import { FeaturedSection } from "@/components/FeaturedSection/FeaturedSection";
import { FeaturedSectionTwo } from "@/components/FeaturedSectionTwo/FeaturedSectionTwo";
import { getFirstFiveCategories, getFiveCategories } from "@/gql/getCategories";
import { getFirstThreeCollections } from "@/gql/getCollections";
import { client } from "@/shopify-client";
import { useState } from "react";

export async function getServerSideProps() {
  let data = { collections: null, categories: null };
  let response1 = await fetch(client.getStorefrontApiUrl(), {
    body: JSON.stringify({
      query: getFirstThreeCollections,
    }),
    // Generate the headers using the private token.
    headers: client.getPrivateTokenHeaders(),
    method: "POST",
  });

  if (!response1.ok) {
    throw new Error(response1.statusText);
  }

  let json1 = await response1.json();
  data.collections = json1;

  let response2 = await fetch(client.getStorefrontApiUrl(), {
    body: JSON.stringify({
      query: getFiveCategories,
    }),
    // Generate the headers using the private token.
    headers: client.getPrivateTokenHeaders(),
    method: "POST",
  });

  if (!response2.ok) {
    throw new Error(response2.statusText);
  }

  let json2 = await response2.json();
  data.categories = json2;

  return { props: data };
}

function formatCollectionData(data: any) {
  console.log(data);
  // console.log(data.collections.edges);
  return data?.collections?.edges?.map((edge: { node: any }) => {
    return edge.node;
  });
}
function formatCategoriesData(data: any) {
  // console.log(data.products.edg);
  return data?.products?.edges?.map((edge: { node: any }) => {
    return edge.node.metafield.value;
  });
}
export default function HomePage(props: any) {
  // console.log(props.categories.data.products.edges[0]);
  let collections = formatCollectionData(props.collections.data);
  let categories = formatCategoriesData(props.categories.data);
  console.log(categories);
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-gray-900">
        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <img
            src="https://tailwindui.com/img/ecommerce-images/home-page-01-hero-full-width.jpg"
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gray-900 opacity-50"
        />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center sm:py-64 lg:px-0">
          <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">
            New arrivals are here
          </h1>
          <p className="mt-4 text-xl text-white">
            The new arrivals have, well, newly arrived. Check out the latest
            options from our summer small-batch release while they're still in
            stock.
          </p>
          <a
            href="category/newArrivals"
            className="mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100"
          >
            Shop New Arrivals
          </a>
        </div>
      </div>

      <main>
        <CategorySection />
        <FeaturedSection />
        <CollectionSection collections={null} />
        <FeaturedSectionTwo />
      </main>
    </div>
  );
}
