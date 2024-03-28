import { client } from "@/shopify-client";
import {
  GraphQLCollectionResponse,
  GraphQLProductsResponse,
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

export const getProducts = async (): Promise<GraphQLProductsResponse> => {
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
): Promise<GraphQLProductsResponse> => {
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
                tags
                productType
            }
            }
        }
}`,
    { handle: `${slug}` }
  );
  return res;
};
export const GetProductById = async (
  productID: string
): Promise<GraphQLProductResponse> => {
  let res = await runQuery(
    `#graphql
  query GetProductsById($id: ID!) {
  product(id: $id) {
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
}`,
    { id: `gid://shopify/Product/${productID}` }
  );
  return res;
};
