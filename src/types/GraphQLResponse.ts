import type {
  ShopifyCollection,
  ShopifyExtension,
  ShopifyProduct,
} from "./ShopifyProducts";

export type GraphQLProductResponse = {
  data: {
    products: {
      nodes: ShopifyProduct[];
    };
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
export function serializeProductData(response: GraphQLProductResponse) {
  return response.data.products.nodes;
}
