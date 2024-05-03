import { ProductProfile } from "@/components/ProductProfile/ProductProfile";
import { serializeSingleProductData } from "@/types/GraphQLResponse";
import { ShopifyProduct } from "@/types/ShopifyTypes";
import { useRouter } from "next/router";
import { useState } from "react";
import { GetProductById } from "../../../helpers/queries";

const product = {
  name: "Zip Tote Basket",
  price: "$140",
  rating: 4,
  images: [
    {
      id: 1,
      name: "Angled view",
      src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    // More images...
  ],
  colors: [
    {
      name: "Washed Black",
      bgColor: "bg-gray-700",
      selectedColor: "ring-gray-700",
    },
    { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
    {
      name: "Washed Gray",
      bgColor: "bg-gray-500",
      selectedColor: "ring-gray-500",
    },
  ],
  description: `
    <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  `,
  details: [
    {
      name: "Features",
      items: [
        "Multiple strap configurations",
        "Spacious interior with top zip",
        "Leather handle and tabs",
        "Interior dividers",
        "Stainless strap loops",
        "Double stitched construction",
        "Water-resistant",
      ],
    },
    // More sections...
  ],
};

export async function getServerSideProps(context: {
  params: { productId: string };
}) {
  let product = await GetProductById(context.params?.productId);
  let serializedProduct = serializeSingleProductData(product);
  return {
    props: { product: serializedProduct },
  };
}

export default function Example(props: { product: ShopifyProduct }) {
  return <ProductProfile product={props.product} />;
}
