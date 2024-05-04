import {
  GraphQLCollectionResponse,
  GraphQLProductsResponse,
  GraphQLProductResponse,
} from "../types/GraphQLResponse";
import runQuery from "./baseQuery";

export const getFirstSixCollections =
  async (): Promise<GraphQLCollectionResponse> => {
    let res = await runQuery(`#graphql
    query {
      collections(first: 6, reverse: true) {
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
export const GetProductById = async (productID: string): Promise<any> => {
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
    media(first: 5) {
      edges {
        node {
          alt
          mediaContentType
          previewImage {
              id
              altText
              url
          }
        }
      }
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
  if (res.errors) {
    throw new Error(res.errors[0].message);
  } else {
    return res;
  }
};
export const getProductCategories =
  async (): Promise<GraphQLCollectionResponse> => {
    let res = await runQuery(`#graphql
    query GetProductsById($handle: MetaobjectHandleInput!) {
      metaobjectByHandle(handle: $handle){
        handle
      }
    }
  `);
    return res;
  };
