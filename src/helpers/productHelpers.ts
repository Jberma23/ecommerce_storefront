import { ShopifyProduct } from "@/types/ShopifyTypes";

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

export function formatCollectionLink(collection: {
  id: string;
  handle: string;
}) {
  return `collection/${collection.handle}`;
}

export function makeTitle(slug: string) {
  var words = slug.split("-");

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    words[i] = word.charAt(0).toUpperCase() + word.slice(1);
  }

  return words.join(" ");
}
