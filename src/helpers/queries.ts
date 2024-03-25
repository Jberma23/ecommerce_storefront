import { client } from "@/shopify-client";
import {
  GraphQLCollectionResponse,
  GraphQLProductResponse,
} from "../types/GraphQLResponse";
import runQuery from "./baseQuery";

export const getFirstThreeCollections =
  async (): Promise<GraphQLCollectionResponse> => {
    let res = await runQuery(`#graphql
    query {
      collections(first: 5, reverse: true) {
          edges {
              node {
              id
              title
              handle
              updatedAt
              image {
                  altText
                  url
              }
              }
          }
      }
    }
  `);
    return res;
  };

export const getProducts = async (): Promise<GraphQLProductResponse> => {
  let res = await runQuery(`#graphql
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
  `);
  return res;
};

export const allProductsByCollection = async (
  slug: string
): Promise<GraphQLProductResponse> => {
  let res = await runQuery(
    `#graphql
query allProductsByCollection($handle: String!) {
  collectionByHandle(handle: $handle) {
    products(first: 20) {
      nodes {
        title
        id
        handle
        description
        productType
        featuredImage {
          altText
          height
          width
          url
        }
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
          maxVariantPrice {
            amount
            currencyCode
          }
        }
      }
    }
  }
}`,
    { handle: `${slug}` }
  );
  return res;
};
export const allProductsByCollectionV2 = async (slug: string): Promise<any> => {
  let res = await runQuery(
    `#graphql
    query allProductsByCollection($handle: String!) {
        collectionByHandle(handle: $handle) {
            products(first: 20) {
            nodes {
                title
                id
                handle
                description
                productType
                featuredImage {
                altText
                height
                width
                url
                }
                priceRange {
                minVariantPrice {
                    amount
                    currencyCode
                }
                maxVariantPrice {
                    amount
                    currencyCode
                }
                }
            }
            }
        }
}`,
    { handle: `${slug}` }
  );
  return res;
};
export const getsomething = async (): Promise<GraphQLProductResponse> => {
  let res = await runQuery(`#graphql`);
  return res;
};
