import { client } from "@/shopify-client";
import { GraphQLProductResponse } from "../types/GraphQLResponse";
export const getProducts = async (): Promise<GraphQLProductResponse> => {
  let res = await fetch(client.getStorefrontApiUrl(), {
    headers: client.getPrivateTokenHeaders(),
    method: "POST",
    body: JSON.stringify({
      query: `#graphql
          query ProductsQuery {
            products(first: 10) {
              nodes {
                title
                id
                handle
                description
                productType
                featuredImage{
                    altText
                    height
                    width
                    url
                }
                priceRange {
                    minVariantPrice {
                    amount
                    currencyCode  #active local currency
                    }
                    maxVariantPrice {
                    amount
                    currencyCode
                    }
                }
              }
            }
          }
        `,
    }),
  });
  return res.json();
};
export const allProductsByCollection = async (
  slug: string
): Promise<GraphQLProductResponse> => {
  let res = await fetch(client.getStorefrontApiUrl(), {
    headers: client.getPrivateTokenHeaders(),
    method: "POST",
    body: JSON.stringify({
      query: `#graphql
          query allProductsByCollection($handle: String){
                products(query: $handle, first: 10) {
                        nodes {
                        title
                        id
                        handle
                        description
                        productType
                        featuredImage{
                            altText
                            height
                            width
                            url
                        }
                        priceRange {
                            minVariantPrice {
                            amount
                            currencyCode  #active local currency
                            }
                            maxVariantPrice {
                            amount
                            currencyCode
                            }
                        }
                        }
                }
            }
          `,
      variables: { handle: `inCollection:${slug}` },
    }),
  });
  return res.json();
};
