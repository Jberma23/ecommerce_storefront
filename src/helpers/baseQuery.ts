import { client } from "@/shopify-client";

const runQuery = async (query: string, vars?: {}): Promise<any> => {
  let response = await fetch(client.getStorefrontApiUrl(), {
    headers: client.getPrivateTokenHeaders(),
    method: "POST",
    body: JSON.stringify({
      query: query,
      variables: vars,
    }),
  });
  return response.json();
};
export default runQuery;
