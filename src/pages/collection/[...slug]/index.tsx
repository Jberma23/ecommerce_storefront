import { allProductsByCollectionV2 } from "@/helpers/queries";
import { serializeCollectionProductData } from "@/types/GraphQLResponse";
import { ShopifyProduct } from "@/types/ShopifyTypes";
import { useState } from "react";
import { ProductPage } from "../../../components/ProductPage/ProductPage";
import { ProductList } from "@/components/ProductList/ProductList";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];
const subCategories = [
  { name: "Totes", href: "#" },
  { name: "Backpacks", href: "#" },
  { name: "Travel Bags", href: "#" },
  { name: "Hip Bags", href: "#" },
  { name: "Laptop Sleeves", href: "#" },
];
const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: true },
      { value: "brown", label: "Brown", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "purple", label: "Purple", checked: false },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "New Arrivals", checked: false },
      { value: "sale", label: "Sale", checked: false },
      { value: "travel", label: "Travel", checked: true },
      { value: "organization", label: "Organization", checked: false },
      { value: "accessories", label: "Accessories", checked: false },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "2l", label: "2L", checked: false },
      { value: "6l", label: "6L", checked: false },
      { value: "12l", label: "12L", checked: false },
      { value: "18l", label: "18L", checked: false },
      { value: "20l", label: "20L", checked: false },
      { value: "40l", label: "40L", checked: true },
    ],
  },
];

export async function getServerSideProps(context: {
  params: { slug: string };
}) {
  let products = await allProductsByCollectionV2(context.params?.slug);
  let serializedProducts = serializeCollectionProductData(products);
  return {
    props: { products: serializedProducts, slug: context.params.slug[0] },
  };
}
export type CollectionPageProps = {
  products: ShopifyProduct[];
  slug: string;
};
const CollectionPage: React.FC<CollectionPageProps> = ({ products, slug }) => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return <ProductList products={products} />;
  // <ProductPage products={products} slug={slug} />;
};
export default CollectionPage;
