import { client } from "@/shopify-client";
import { GraphQLCollectionResponse } from "../types/GraphQLResponse";
export const getFirstThreeCollections =
  async (): Promise<GraphQLCollectionResponse> => {
    let res = await fetch(client.getStorefrontApiUrl(), {
      headers: client.getPrivateTokenHeaders(),
      method: "POST",
      body: JSON.stringify({
        query: `#graphql
          query {
            collections(first: 3, reverse: true) {
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
        `,
      }),
    });
    return res.json();
  };
