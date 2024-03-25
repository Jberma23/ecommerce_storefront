import { client } from "../shopify-client";
import { allProducts } from "../gql/getProducts";
import { ProductDocument } from "../gql/graphql";
import { ProductList } from "@/components/ProductList/ProductList";

export async function getServerSideProps() {
  const response = await fetch(client.getStorefrontApiUrl(), {
    body: JSON.stringify({
      query: allProducts,
    }),
    // Generate the headers using the private token.
    headers: client.getPrivateTokenHeaders(),
    method: "POST",
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const json = await response.json();
  return { props: json };
}
function formatProducts(products: { node: any }[]) {
  return products.map((product: { node: any }) => {
    return product.node;
  });
}
const HomePage = (props: {
  data: { products: { edges: { node: any }[] } };
}) => {
  console.log(props);
  let products = formatProducts(props.data.products.edges);
  return <ProductList products={products} />;
};
export default HomePage;
