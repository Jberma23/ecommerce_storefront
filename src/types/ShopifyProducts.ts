export type ShopifyProduct = {
  description: string;
  featuredImage: {
    altText: string;
    height: number;
    id: string;
    url: string;
    width: number;
  };
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
  image: {
    created_at: string;
    alt: string;
    width: string;
    height: string;
    src: string;
  };
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
