import { createStorefrontClient } from "@shopify/hydrogen-react";

export const client = createStorefrontClient({
  // load environment variables according to your framework and runtime
  storeDomain: `${process.env.PUBLIC_STORE_DOMAIN}`,
  privateStorefrontToken: process.env.PRIVATE_STOREFRONT_API_TOKEN,
  publicStorefrontToken: process.env.PUBLIC_STOREFRONT_API_TOKEN,
});
