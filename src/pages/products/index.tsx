import { ProductProvider, useProduct } from "@shopify/hydrogen-react";
import type { Product } from "@shopify/hydrogen-react/storefront-api-types";

export default function Product({ product }: { product: Product }) {
  return (
    <ProductProvider data={product} initialVariantId="some-id">
      <UsingProduct />
    </ProductProvider>
  );
}
export function UsingProduct() {
  const { product, variants, setSelectedVariant } = useProduct();
  return (
    <>
      <h1>{product?.title}</h1>
      {/* {variants?.map((variant) => {
        <button
          onClick={() => setSelectedVariant(variant ?? null)}
          key={variant?.id}
        >
          {variant?.title}
        </button>;
      })} */}
      ;
    </>
  );
}
