export type ShopifyProduct = {
  description: string;
  featuredImage: ShopifyImage;
  handle: string;
  id: string;
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
    maxVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  media: {
    edges: {
      node: ShopifyMediaNode;
    }[];
  };
  tags: string[];
  title: string;
};
export type ShopifyCollection = {
  id: string;
  handle: string;
  title: string;
  updated_at: string;
  body_html: string;
  published_at: string;
  sort_order: string;
  template_suffix: string;
  products_count: string;
  collection_type: string;
  published_scope: string;
  admin_graphql_api_id: string;
  image: ShopifyImage;
};
export type ShopifyImage = {
  altText: string;
  height: number;
  id: string;
  url: string;
  width: number;
};
export type ShopifyExtension = {
  cost: {
    actualQueryCost: number;
    requestedQueryCost: number;
    throttleStatus: {
      currentlyAvailable: number;
      maximumAvailable: number;
      restoreRate: number;
    };
  };
};
export type ShopifyMedia = {
  edges: {
    node: ShopifyMediaNode;
  }[];
};
export type ShopifyMediaNode = {
  alt: string;
  mediaContentType: string;
  previewImage: {
    id: string;
    altText: string;
    url: string;
  };
};
export type ShopifyVariant = {
  availableForSale: boolean;
  id: string;
  priceV2: {
    amount: string;
    currencyCode: string;
  };
  title: string;
};
