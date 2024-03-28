import type {
  ShopifyCollection,
  ShopifyExtension,
  ShopifyProduct,
} from "./ShopifyTypes";

export type GraphQLProductsResponse = {
  data: {
    products: {
      nodes: ShopifyProduct[];
    };
  };
  extensions: ShopifyExtension;
};
export type GraphQLProductResponse = {
  data: {
    product: ShopifyProduct;
  };
  extensions: ShopifyExtension;
};
export type GraphQLCollectionResponse = {
  data: {
    collections: {
      edges: {
        node: ShopifyCollection[];
      }[];
    };
  };
  extensions: ShopifyExtension;
};
export function serializeCollectionData(response: GraphQLCollectionResponse) {
  return response.data.collections.edges.map((edge: { node: any }) => {
    return edge.node;
  });
}
export function serializeProductData(response: GraphQLProductsResponse) {
  return response.data.products.nodes;
}
export function serializeSingleProductData(response: GraphQLProductResponse) {
  return response.data.product;
}
export function serializeCollectionProductData(response: any) {
  return response.data.collectionByHandle.products.nodes;
}
