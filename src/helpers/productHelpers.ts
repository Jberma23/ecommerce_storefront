import { ShopifyProduct } from "@/types/ShopifyProducts";

export function formatPrice(product: ShopifyProduct) {
  if (
    product?.priceRange?.maxVariantPrice?.amount ===
    product?.priceRange?.minVariantPrice?.amount
  ) {
    return `${product?.priceRange?.maxVariantPrice?.amount} ${product?.priceRange?.maxVariantPrice?.currencyCode}`;
  } else {
    return `${product?.priceRange?.minVariantPrice?.amount} ${product?.priceRange?.minVariantPrice?.currencyCode} - ${product?.priceRange?.maxVariantPrice?.amount} ${product?.priceRange?.maxVariantPrice?.currencyCode}`;
  }
}
export function formatProductID(product: ShopifyProduct) {
  return product?.id.split("gid://shopify/Product/")[1];
}
